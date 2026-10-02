const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const profileModel = require("./model.js");

const port = Number(process.env.PORT || 3000);
const apiKey = process.env.OPENAI_API_KEY;
const modelName = process.env.OPENAI_MODEL || "gpt-4o-mini";
const apiBase = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/+$/, "");
const maxBodyBytes = 64 * 1024;
const maxMessageChars = 4000;
const staticFiles = new Map([
    ["/", ["index.html", "text/html; charset=utf-8"]],
    ["/index.html", ["index.html", "text/html; charset=utf-8"]],
    ["/model.js", ["model.js", "text/javascript; charset=utf-8"]],
    ["/profile.jpg", ["profile.jpg", "image/jpeg"]],
    ["/Milan_Kumar_Maharana.pdf", ["Milan_Kumar_Maharana.pdf", "application/pdf"]]
]);

function sendJson(response, status, value) {
    response.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
    });
    response.end(JSON.stringify(value));
}

async function readJson(request) {
    let body = "";
    let size = 0;

    for await (const chunk of request) {
        size += chunk.length;
        if (size > maxBodyBytes) throw new Error("Request body too large");
        body += chunk.toString("utf8");
    }

    return JSON.parse(body);
}

function validateMessages(messages) {
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 12) return null;

    const validMessages = [];
    for (const message of messages) {
        if (!message || !["user", "assistant"].includes(message.role) || typeof message.content !== "string") return null;
        const content = message.content.trim();
        if (!content || content.length > maxMessageChars) return null;
        validMessages.push({ role: message.role, content });
    }

    return validMessages;
}

async function handleChat(request, response) {
    if (!apiKey) {
        sendJson(response, 503, { error: "AI service is not configured. Using the local profile assistant instead." });
        return;
    }

    let body;
    try {
        body = await readJson(request);
    } catch {
        sendJson(response, 400, { error: "Invalid or oversized request." });
        return;
    }

    const messages = validateMessages(body.messages);
    if (!messages) {
        sendJson(response, 400, { error: "Provide up to 12 valid chat messages." });
        return;
    }

    const name = typeof body.visitorName === "string" && /^[a-z][a-z' -]{0,39}$/i.test(body.visitorName.trim())
        ? body.visitorName.trim()
        : "";
    const systemPrompt = [
        "You are Milan's conversational portfolio assistant. Answer naturally, directly, and with useful detail, like a helpful professional assistant.",
        "Use only the profile facts below for claims about Milan. Never invent dates, employers, education, salary, project metrics, certifications, or personal details. If a requested profile fact is missing, say it is not listed.",
        "Politely decline requests unrelated to Milan's professional profile. For questions with multiple parts, answer every profile-related part. Ask a short clarification only when the question is genuinely ambiguous.",
        name ? `The visitor's name is ${name}; use it naturally and sparingly.` : "",
        "PROFILE FACTS:\n" + profileModel.getKnowledgeContext()
    ].filter(Boolean).join("\n\n");

    try {
        const upstream = await fetch(`${apiBase}/chat/completions`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: modelName,
                messages: [{ role: "system", content: systemPrompt }, ...messages],
                temperature: 0.35,
                max_tokens: 500
            }),
            signal: AbortSignal.timeout(30000)
        });

        if (!upstream.ok) {
            sendJson(response, 502, { error: "The configured AI service could not complete the request." });
            return;
        }

        const result = await upstream.json();
        const reply = result.choices?.[0]?.message?.content;
        if (typeof reply !== "string" || !reply.trim()) {
            sendJson(response, 502, { error: "The AI service returned an empty reply." });
            return;
        }

        sendJson(response, 200, { reply: reply.trim() });
    } catch {
        sendJson(response, 502, { error: "The AI service is unavailable." });
    }
}

function serveStatic(request, response) {
    if (request.method !== "GET" && request.method !== "HEAD") {
        sendJson(response, 405, { error: "Method not allowed." });
        return;
    }

    let pathname;
    try {
        pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    } catch {
        sendJson(response, 400, { error: "Invalid URL." });
        return;
    }

    const asset = staticFiles.get(pathname);
    if (!asset) {
        sendJson(response, 404, { error: "Not found." });
        return;
    }

    const [filename, contentType] = asset;
    fs.readFile(path.join(__dirname, filename), (error, content) => {
        if (error) {
            sendJson(response, 404, { error: "Asset not found." });
            return;
        }

        response.writeHead(200, {
            "Content-Type": contentType,
            "X-Content-Type-Options": "nosniff",
            "Cache-Control": "no-cache"
        });
        response.end(request.method === "HEAD" ? undefined : content);
    });
}

const server = http.createServer((request, response) => {
    if (request.url === "/api/chat" && request.method === "POST") {
        handleChat(request, response);
        return;
    }

    if (request.url === "/api/chat") {
        sendJson(response, 405, { error: "Method not allowed." });
        return;
    }

    serveStatic(request, response);
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Milan Portfolio is running at http://127.0.0.1:${port}`);
    console.log(apiKey ? `AI responses enabled with ${modelName}.` : "AI API key not configured; local profile replies are enabled.");
});
