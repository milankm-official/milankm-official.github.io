(function (root) {
    const resume = {
        experience: "Milan brings 8+ years of experience in enterprise software delivery across BFSI, eCommerce, and CRM. He is currently an IT Analyst and Lead Engineer at TCS, supporting the J&J Vision program. Before that, he was a Senior Software Engineer at HCL for Deutsche Bank and a Staff Engineer at LeadIcon for the Orbyo AI CRM platform.",
        role: "Milan is currently an IT Analyst and Lead Engineer at TCS, supporting the J&J Vision program. His previous roles include Senior Software Engineer at HCL and Staff Engineer at LeadIcon.",
        timeline: "His portfolio lists TCS from September 2022 to present, HCL Technologies from July 2021 to September 2022, and LeadIcon Technologies from November 2018 to June 2021.",
        teamSizes: "The portfolio says Milan leads a 12-person team on J&J Vision and worked in a 15-person team on the Deutsche Bank project.",
        domains: "Milan's experience spans BFSI (including Deutsche Bank), healthcare and vision care (J&J Vision), eCommerce, and CRM (including Orbyo AI CRM).",
        visionProject: "At TCS, Milan is the Lead Engineer for J&J Vision, leading a 12-person team on scalable server-side applications for ACUVUE and ophthalmology. He translates requirements from clinical experts and data scientists into technical specifications, manages delivery with Docker, Kubernetes, and CI/CD, and works with Oracle, React, and TypeScript. His portfolio dates this role from September 2022 to present.",
        bankProject: "At HCL, Milan worked as a Senior Software Engineer on Deutsche Bank corporate, private, and investment banking web applications in a 15-person team. The portfolio lists Java 17+, Spring Data JPA, Oracle PL/SQL, JUnit 5, Mockito, TDD/BDD, and L3 production support with root-cause analysis. Dates listed: July 2021 to September 2022.",
        crmProject: "At LeadIcon, Milan worked as a Staff Engineer on Orbyo, customer data platform for automotive sales. His work included backend features, REST APIs for third-party data ingestion, Spring Batch imports, lead scoring, geo-targeting, and real-time sales insight widgets. Dates listed: November 2018 to June 2021.",
        projects: "His notable projects include J&J Vision, where he leads architecture and delivery for ACUVUE and ophthalmology platforms using Docker, Kubernetes, React, Spring Boot, and Oracle; Deutsche Bank, where he supported mission-critical BFSI applications with Java 17, Spring Data JPA, Oracle PL/SQL, and L3 production support; and Orbyo AI CRM, an automotive customer data and sales intelligence platform with lead scoring and geo-targeting.",
        skills: "His core stack includes Java, Spring Boot, Spring Cloud, REST APIs, microservices, Kafka, RabbitMQ, Docker, AWS, PostgreSQL, MongoDB, Oracle, React, and TypeScript. His AI tooling includes Spring AI, OpenAI APIs, Vertex AI, Ollama, MCP patterns, and vector databases such as PGVector, Pinecone, Chroma, and MongoDB Atlas.",
        java: "Milan's portfolio describes 8+ years of Java work, including Core Java, Collections, and Streams. His Deutsche Bank project used Java 17+ with Spring Data JPA and Oracle PL/SQL.",
        react: "The portfolio describes Milan's React experience as basic React for component-based interfaces. It also lists React and TypeScript in the J&J Vision front end, alongside responsive UI work.",
        testing: "Milan's profile lists unit and integration testing with JUnit 5 and Mockito. On the Deutsche Bank project he used TDD and BDD and supported production quality through L3 issue investigation and root-cause analysis.",
        cloud: "Milan's portfolio lists AWS (EC2 and S3), Docker, Kubernetes, CI/CD, Git, Maven, Jenkins, and GitLab CI/CD. For J&J Vision, it specifically describes managing delivery with Docker, Kubernetes, and CI/CD.",
        architecture: "His listed architecture experience includes Spring Boot and Spring Cloud, API Gateway, Eureka service discovery, REST and inter-service communication, microservices patterns, multi-tenancy, and Resilience4j fault-tolerance patterns.",
        security: "His listed security experience includes OAuth 2.0, OIDC, JWT, Spring Security, role-based access control, BCrypt, Keycloak, and Okta.",
        databases: "His database and data-access experience includes MySQL, Oracle, PostgreSQL, MongoDB, Oracle PL/SQL, Spring Data JPA, Hibernate, and JDBC. The Deutsche Bank project specifically used Oracle PL/SQL and Spring Data JPA.",
        messaging: "His listed messaging technologies include Apache Kafka, RabbitMQ, and Spring Cloud Stream. The portfolio associates Kafka with event streaming and RabbitMQ with message-queue patterns.",
        observability: "His portfolio lists Zipkin and Jaeger for distributed tracing, plus Spring Boot Actuator, Log4J, application health checks, and metrics monitoring.",
        ai: "Milan's AI work spans LLM integration, RAG pipeline design, MCP-based tool orchestration, and semantic retrieval with vector databases. He has experience with Spring AI, OpenAI APIs, Google Vertex AI, and Ollama, applying AI integration patterns to backend systems and business workflows.",
        leadership: "Milan's profile highlights technical leadership, sprint planning, mentoring, root-cause analysis, and cross-functional communication. He has led teams, contributed to architecture decisions, and handled production-critical support.",
        awards: "Milan's TCS recognitions include Xcelerate Victor (2026), tcsAI Spark (2025), Feedback Enabler (2025), Service & Commitment (2025), and Xcelerate Warrior (2024).",
        contact: "You can contact Milan at milankm.official@gmail.com, call (+91) 907-899-3767, or connect on LinkedIn at www.LinkedIn.com/in/milankm. He is based in Bengaluru, Karnataka, India.",
        fit: "Milan may be a strong fit for senior engineering roles that need delivery ownership, architecture contributions, Java/Spring expertise, and AI integration experience. Hiring decisions should also consider the specific role requirements and interview process.",
        summary: "Milan is a senior-level full-stack and platform engineer with 8+ years of enterprise delivery experience, deep Java/Spring expertise, and experience integrating AI/LLM capabilities."
    };

    const intents = [
        {
            specific: true,
            response: resume.visionProject,
            phrases: ["jj vision project", "j j vision", "j j vision project", "tell me about j j vision", "describe j j vision", "johnson and johnson vision", "acuvue project", "what did he do at j j vision", "what does he do at j and j", "his work at j and j", "work at j j", "team size at j and j"],
            keywords: ["acuvue", "ophthalmology", "clinical"],
            entities: ["vision", "acuvue"]
        },
        {
            specific: true,
            response: resume.bankProject,
            phrases: ["deutsche bank project", "deutsche bank work", "tell me about the deutsche bank work", "describe the deutsche bank work", "deutsche bank experience", "his work at deutsche bank", "what did he do at deutsche bank", "banking project", "bank project", "team size at deutsche bank"],
            keywords: ["banking", "junit", "mockito", "tdd", "bdd"],
            entities: ["deutsche"]
        },
        {
            specific: true,
            response: resume.crmProject,
            phrases: ["orbyo project", "orbyo ai crm", "his work at leadicon", "what did he build at leadicon", "automotive crm", "lead scoring", "geo targeting"],
            keywords: ["batch", "ingestion", "scoring", "targeting"],
            entities: ["orbyo", "leadicon"]
        },
        {
            specific: true,
            response: resume.timeline,
            phrases: ["employment timeline", "career timeline", "when did he work at", "what years did he work", "dates of his jobs", "how long at hcl", "how long at leadicon", "when did he join tcs", "job dates"],
            keywords: ["timeline", "tenure", "dates", "joined", "left"],
            entities: ["tcs", "hcl", "leadicon"]
        },
        {
            specific: true,
            response: resume.teamSizes,
            phrases: ["team sizes", "how many people has he led", "how many people did he work with", "how large were his teams", "size of his team", "team size at tcs", "team size at deutsche bank"],
            keywords: ["team", "teams", "people", "engineers", "size"],
            entities: ["vision", "deutsche"]
        },
        {
            specific: true,
            response: resume.java,
            phrases: ["java experience", "years of java experience", "how many years of java", "does he know java", "does milan know java", "does he use java", "core java", "java collections", "java streams", "java 17", "java 17 plus", "java 17 experience"],
            keywords: ["collections", "streams"],
            entities: ["java"]
        },
        {
            specific: true,
            response: resume.react,
            phrases: ["react experience", "how experienced is he with react", "react proficiency", "his react skills", "react and typescript"],
            keywords: ["react", "typescript"],
            entities: ["react"]
        },
        {
            specific: true,
            response: resume.testing,
            phrases: ["testing tools", "testing experience", "test driven development", "behavior driven development", "unit testing", "integration testing", "how does he test", "quality assurance", "test automation"],
            keywords: ["testing", "test", "tests", "junit", "mockito", "tdd", "bdd", "quality"],
            entities: ["junit", "mockito"]
        },
        {
            specific: true,
            response: resume.databases,
            phrases: ["database experience", "database technologies", "what databases", "which databases", "sql experience", "what is his data access experience", "orm experience", "database stack"],
            keywords: ["database", "databases", "mysql", "postgresql", "mongodb", "oracle", "plsql", "hibernate", "jdbc", "jpa", "orm"],
            entities: ["mysql", "postgresql", "mongodb", "oracle", "hibernate", "jdbc"]
        },
        {
            specific: true,
            response: resume.messaging,
            phrases: ["messaging experience", "message queue experience", "event streaming", "what messaging tools", "kafka and rabbitmq", "message broker"],
            keywords: ["messaging", "kafka", "rabbitmq", "stream", "streaming", "broker", "brokers"],
            entities: ["kafka", "rabbitmq"]
        },
        {
            specific: true,
            response: resume.cloud,
            phrases: ["cloud experience", "cloud technologies", "devops experience", "deployment experience", "ci cd", "continuous integration", "continuous delivery", "containerization", "what is his aws experience", "aws experience"],
            keywords: ["cloud", "devops", "deployment", "deployments", "ci", "cd", "containers", "infrastructure"],
            entities: ["aws", "docker", "kubernetes", "jenkins"]
        },
        {
            specific: true,
            response: resume.architecture,
            phrases: ["software architecture", "system architecture", "microservices architecture", "architecture experience", "design patterns", "service discovery", "api gateway", "fault tolerance", "resilience4j", "spring cloud experience"],
            keywords: ["architecture", "architectural", "gateway", "eureka", "resilience", "microservices"],
            entities: ["eureka", "resilience4j"]
        },
        {
            specific: true,
            response: resume.security,
            phrases: ["security experience", "application security", "authentication experience", "authorization experience", "identity and access management", "how does he secure apis"],
            keywords: ["security", "authentication", "authorization", "oauth", "oidc", "jwt", "rbac", "keycloak"],
            entities: ["oauth", "oidc", "jwt", "keycloak", "okta"]
        },
        {
            specific: true,
            response: resume.observability,
            phrases: ["observability experience", "distributed tracing", "application monitoring", "monitoring tools", "how does he monitor applications", "logging tools", "health checks", "zipkin and jaeger"],
            keywords: ["observability", "tracing", "monitoring", "logging", "metrics", "actuator", "health"],
            entities: ["zipkin", "jaeger", "actuator", "log4j"]
        },
        {
            response: resume.experience,
            phrases: ["work experience", "work history", "career history", "years of experience", "how many years of experience", "how long has he worked", "what is his experience", "tell me about his experience", "tell me about his career", "what is his background", "tell me about his background", "what experience does he have", "where has he worked", "which companies", "previous employers", "past employers", "what did he do before", "what does his career look like", "what does milan do at tcs", "what does he do at tcs", "what did he do at tcs", "what did he do at hcl", "what did he do at leadicon", "work at tcs", "work at hcl"],
            keywords: ["experience", "career", "background", "employment", "company", "companies", "employer", "worked", "role", "job"]
        },
        {
            response: resume.role,
            phrases: ["current role", "current position", "current title", "current job", "job title", "what is his role", "what is he currently doing", "where does he work", "who does he work for", "current employer", "what does he do now"],
            keywords: ["current", "position", "title", "employer"],
            entities: ["tcs", "hcl", "leadicon"]
        },
        {
            response: resume.domains,
            phrases: ["which industries", "what industries", "industries has he worked", "business domains", "industry experience", "what domain", "which domain"],
            keywords: ["industry", "industries", "domain", "domains", "b f s i", "ecommerce", "healthcare"],
            entities: ["bfsi", "ecommerce", "healthcare", "vision", "crm"]
        },
        {
            response: resume.projects,
            phrases: ["main projects", "key projects", "his projects", "tell me about projects", "tell me about his projects", "what are his projects", "what has he built", "what did he build", "projects worked on", "project experience", "project details", "jj vision", "j j vision", "j and j vision", "acuvue", "deutsche bank", "orbyo ai", "orbyo crm", "what did he deliver", "what did he work on"],
            keywords: ["project", "projects", "built", "deployment", "deployments", "implementation", "case", "study"],
            entities: ["deutsche", "acuvue", "orbyo", "vision"]
        },
        {
            response: resume.skills,
            phrases: ["tech stack", "technology stack", "technical skills", "what skills", "his skills", "what is he skilled in", "what languages does he know", "which languages does he know", "programming languages", "backend technologies", "frontend technologies", "cloud technologies", "what technologies", "what tools", "which tools", "which frameworks", "what frameworks does he use", "which programming languages", "what databases", "which databases", "database technologies", "data stores", "message queues", "messaging systems", "does he use aws", "has he used aws", "is aws in his tech stack", "does he know java", "does milan know java", "has he used java", "does he use docker", "spring boot", "spring cloud", "typescript", "postgresql", "mongodb", "oracle database", "rabbitmq", "kafka", "kubernetes", "react", "microservices", "rest api", "rest apis", "pgvector", "pinecone", "chroma"],
            keywords: ["skill", "skills", "stack", "technology", "technologies", "java", "spring", "microservices", "kafka", "docker", "aws", "react", "typescript", "database", "databases", "backend", "frontend", "cloud", "framework", "frameworks", "language", "languages", "devops", "messaging", "queue", "queues", "postgresql", "mongodb", "oracle", "rabbitmq", "kubernetes"],
            entities: ["java", "spring", "microservices", "kafka", "docker", "aws", "react", "typescript", "postgresql", "mongodb", "oracle", "rabbitmq", "kubernetes", "pinecone", "chroma", "pgvector"]
        },
        {
            response: resume.ai,
            phrases: ["artificial intelligence", "machine learning", "generative ai", "genai", "large language models", "vector database", "vector databases", "rag pipeline", "rag in his work", "ai experience", "his ai work", "ai projects", "ai leadership", "ai integration", "llm integration", "how does he use ai", "what ai tools", "semantic search", "retrieval augmented generation", "does he know llms", "has he worked with llms"],
            keywords: ["ai", "llm", "rag", "vector", "generative", "genai", "vertex", "ollama", "mcp", "machine", "learning", "openai", "embedding", "embeddings", "semantic", "retrieval"],
            entities: ["llm", "rag", "vector", "genai", "vertex", "ollama", "mcp", "openai"]
        },
        {
            response: resume.leadership,
            phrases: ["leadership experience", "leadership style", "team leadership", "how does he mentor", "how does he lead teams", "people management", "cross functional", "how does he work with teams", "does he mentor", "team management", "communication skills", "problem solving", "decision making", "technical ownership", "how does he manage a team", "how does he handle challenges", "what is his working style", "how does he collaborate"],
            keywords: ["leader", "leadership", "mentor", "mentoring", "team", "teams", "management", "manager", "managing", "manage", "planning", "communication", "collaboration", "ownership", "problem", "solving", "decision"]
        },
        {
            response: resume.awards,
            phrases: ["awards and recognition", "awards and certificates", "professional achievements", "what awards has he won", "which awards", "his recognitions", "tell me about his awards", "what recognitions has he received", "what certificates has he received", "which certifications are listed", "what certificate does he have", "tcs certificates", "tcs awards"],
            keywords: ["award", "awards", "certificate", "certificates", "recognition", "recognitions", "achievement", "achievements", "honor", "honors"]
        },
        {
            response: resume.contact,
            phrases: ["contact details", "contact information", "how can i contact", "how can i contact him", "how to reach", "email address", "what is his email", "what s his email", "whats his email", "phone number", "what is his phone", "linkedin profile", "where is he based", "where is he located", "what city does he live in"],
            keywords: ["contact", "email", "phone", "call", "reach", "linkedin", "location", "located", "address", "city"]
        },
        {
            response: resume.fit,
            phrases: ["good fit", "right fit", "senior engineering role", "should we hire", "would you hire him", "is he qualified", "suitable candidate", "why should we hire him", "would he be a good hire", "what roles suit him", "which role suits him", "best role for him", "is he right for this role"],
            keywords: ["hire", "hired", "hiring", "recruit", "fit", "suitable", "qualified", "candidate", "interview", "role", "roles"]
        },
        {
            response: "Milan's profile highlights enterprise delivery experience, Java/Spring engineering, AI integration, and technical leadership. Those strengths are relevant to teams building and operating complex software systems.",
            phrases: ["key strengths", "biggest strengths", "tell me about his strengths", "what are his strengths", "what is he good at", "what makes him", "value does he bring", "why hire him"],
            keywords: ["strength", "strengths", "value", "advantage", "advantages"]
        },
        {
            response: resume.summary,
            phrases: ["tell me about milan", "who is milan", "introduce milan", "who is he", "profile summary", "professional summary", "summarize his resume", "summarize his profile", "what do you know about milan", "give me an overview", "quick overview", "short bio", "professional bio"],
            keywords: ["summary", "summarize", "introduction", "introduce", "overview", "bio"]
        }
    ];

    const outOfScope = "I’m here to answer questions about Milan’s resume and professional profile. I can’t help with questions outside that scope, but I’d be glad to help with his experience, skills, projects, or contact details.";
    const unavailableDetail = "That detail isn’t included in the profile I have, so I don’t want to guess. I can help with Milan’s listed experience, projects, skills, awards, or contact details.";
    const help = "I can answer questions about Milan’s experience, projects, skills, AI work, leadership, awards, hiring fit, and contact information.";
    const stopWords = new Set(["a", "about", "an", "and", "are", "can", "could", "do", "does", "for", "he", "his", "how", "i", "in", "is", "it", "me", "of", "on", "please", "tell", "the", "what", "where", "which", "who", "with", "would"]);
    const nonNames = new Set(["assistant", "doing", "fine", "good", "great", "here", "interested", "just", "looking", "okay", "ok", "ready", "trying", "well"]);
    const acknowledgementPhrases = ["thank you so much", "thank you very much", "thanks a lot", "thanks so much", "many thanks", "much appreciated", "i appreciate it", "appreciate it", "thank you", "thanks", "thx", "tysm", "ok", "okay", "sure thing", "sure", "absolutely", "certainly", "of course", "yes", "yep", "yup", "yeah", "sounds good to me", "sounds great", "sounds good", "that works for me", "fine by me", "got it", "gotcha", "i understand", "i see", "understood", "makes sense", "that makes sense", "all clear", "alright", "all right", "great", "perfect", "excellent", "fantastic", "awesome", "cool", "nice", "no problem", "no worries", "no thanks", "you re welcome"];
    const acknowledgementAlternation = acknowledgementPhrases.join("|");
    const acknowledgementOnlyPattern = new RegExp(`^(?:(?:${acknowledgementAlternation})(?:\\s+|$))+$`);
    const shortFollowupPattern = /^(?:more|more details|tell me more|go on|continue|elaborate|explain more|explain further|what else|examples|give me an example|repeat|say that again)$/;
    const minimumScore = 2;
    let visitorName = "";
    let awaitingVisitorName = true;
    let lastProfileReply = "";
    let conversationVersion = 0;
    let remoteAvailable = null;
    let responseQueue = Promise.resolve();
    const conversationHistory = [];

    function normalize(text) {
        return text.toLowerCase().replace(/[^a-z0-9+#.\s]/g, " ").replace(/\s+/g, " ").trim();
    }

    function classify(question) {
        const words = new Set(question.split(" ").filter(word => word && !stopWords.has(word)));
        const scoredIntents = [];

        for (const intent of intents) {
            let score = 0;
            for (const phrase of intent.phrases) {
                if (question.includes(phrase)) score += 3;
            }
            for (const keyword of intent.keywords) {
                if (words.has(keyword)) score += 1;
            }
            if (intent.entities?.some(entity => words.has(entity))) score += 3;
            if (score && intent.specific) score += 2;

            if (score) scoredIntents.push({ intent, score });
        }

        scoredIntents.sort((left, right) => right.score - left.score || Number(Boolean(right.intent.specific)) - Number(Boolean(left.intent.specific)));
        if (!scoredIntents.length || scoredIntents[0].score < minimumScore) return [];

        const asksMultipleTopics = /\b(?:and|also|plus|as well as)\b/.test(question);
        if (asksMultipleTopics) return scoredIntents.slice(0, 2).map(item => item.intent);

        if (scoredIntents[1] && scoredIntents[0].score === scoredIntents[1].score && !scoredIntents[0].intent.specific) return [];
        return [scoredIntents[0].intent];
    }

    function extractName(input) {
        const withoutGreeting = input.trim().replace(/^(?:(?:hi|hello|hey)(?: there)?|good (?:morning|afternoon|evening))[\s,.!]+/i, "");
        const match = withoutGreeting.match(/^(?:my name is|you can call me|call me|i am|i[’']m)\s+(.+)$/i);
        if (!match) return null;

        const remainderIndex = match[1].search(/[,.!?;]|\s+(?:and|then)\s+/i);
        const candidate = (remainderIndex < 0 ? match[1] : match[1].slice(0, remainderIndex)).trim();
        const parts = candidate.split(/\s+/);
        if (parts.length > 3 || candidate.length > 40 || !/^[a-z][a-z'-]*(?:\s+[a-z][a-z'-]*){0,2}$/i.test(candidate)) return null;
        if (parts.some(part => nonNames.has(part.toLowerCase()))) return null;

        const name = parts.map(part => part[0].toUpperCase() + part.slice(1).toLowerCase()).join(" ");
        const remainder = remainderIndex < 0 ? "" : match[1].slice(remainderIndex).replace(/^[,.!?;\s]+/, "").replace(/^(?:and|then)\s+/i, "").trim();
        return { name, remainder };
    }

    function extractBareName(input) {
        const candidate = input.trim().replace(/^[,.!?\s]+|[,.!?\s]+$/g, "").replace(/\s+/g, " ");
        if (!candidate || candidate.length > 40 || !/^[a-z][a-z'-]*(?:\s+[a-z][a-z'-]*){0,2}$/i.test(candidate)) return "";

        const reservedWords = new Set(["ai", "aws", "backend", "cloud", "docker", "experience", "java", "leadership", "milan", "mongodb", "okta", "oracle", "project", "projects", "python", "react", "resume", "skills", "spring", "sure", "thanks", "typescript", "welcome"]);
        const parts = candidate.split(/\s+/);
        if (parts.some(part => nonNames.has(part.toLowerCase()) || reservedWords.has(part.toLowerCase()))) return "";
        if (acknowledgementOnlyPattern.test(normalize(candidate))) return "";
        if (shortFollowupPattern.test(normalize(candidate))) return "";

        return parts.map(part => part[0].toUpperCase() + part.slice(1).toLowerCase()).join(" ");
    }

    function stripGreeting(question) {
        return question.replace(/^(?:(?:hi|hello|hey)(?: there)?|good (?:morning|afternoon|evening))(?:[\s,.!]+|$)/i, "").trim();
    }

    function getProfileResponse(question) {
        const matches = classify(question);
        if (!matches.length) return "";
        lastProfileReply = matches[0].response;
        return matches.map(intent => intent.response).join(" ");
    }

    function getShortFollowupResponse(question) {
        if (!shortFollowupPattern.test(question)) return "";
        if (!lastProfileReply) return "What would you like more details about: Milan’s experience, projects, skills, AI work, or leadership?";

        const topic = Object.entries(resume).find(([, reply]) => reply === lastProfileReply)?.[0];
        const extraDetails = {
            experience: resume.timeline,
            role: resume.timeline,
            projects: `${resume.visionProject} ${resume.bankProject} ${resume.crmProject}`,
            skills: `${resume.java} ${resume.react} ${resume.databases}`,
            java: resume.bankProject,
            react: resume.visionProject,
            testing: resume.bankProject,
            cloud: resume.visionProject,
            leadership: resume.teamSizes,
            awards: resume.awards,
            ai: resume.crmProject,
            databases: resume.bankProject,
            messaging: resume.skills,
            observability: resume.cloud,
            security: resume.architecture
        };
        return `More detail: ${extraDetails[topic] || lastProfileReply}`;
    }

    function getAcknowledgementResponse(question) {
        if (acknowledgementOnlyPattern.test(question)) {
            if (/\b(?:thank you|thanks|thx|tysm|many thanks|much appreciated|appreciate it)\b/.test(question)) {
                return `You’re welcome${visitorName ? `, ${visitorName}` : ""}. ${help}`;
            }
            if (/\b(?:got it|gotcha|understood|i understand|i see|makes sense|that makes sense|all clear)\b/.test(question)) {
                return `Glad that’s clear${visitorName ? `, ${visitorName}` : ""}. What else would you like to know about Milan?`;
            }
            if (/\b(?:no problem|no worries|no thanks)\b/.test(question)) {
                return `No problem${visitorName ? `, ${visitorName}` : ""}. I’m here if you have another question about Milan.`;
            }
            if (question === "you re welcome") return `Happy to help${visitorName ? `, ${visitorName}` : ""}. ${help}`;
            return `Sure${visitorName ? `, ${visitorName}` : ""}. What would you like to know about Milan’s profile?`;
        }

        const match = question.match(new RegExp(`^(${acknowledgementAlternation})(?:\\s+(.+))?$`));
        if (!match) return "";

        const phrase = match[1];
        const followup = (match[2] || "").trim();
        const isThanks = /^(thank you|thanks|thx|tysm|many thanks|much appreciated|i appreciate it|appreciate it)/.test(phrase);

        if (followup) {
            const profileReply = getProfileResponse(followup);
            if (profileReply) return `${isThanks ? "You’re welcome" : "Sure"}${visitorName ? `, ${visitorName}` : ""}. ${profileReply}`;
            if (/^(?:for (?:your )?(?:help|that|answer|time|explanation)|again|a lot|so much|very much)$/.test(followup)) {
                return `You’re welcome${visitorName ? `, ${visitorName}` : ""}. ${help}`;
            }
            if (/^(?:(?:thank you so much|thank you very much|thanks a lot|thanks so much|many thanks|much appreciated|i appreciate it|appreciate it|thank you|thanks|thx|tysm|ok|okay|sure thing|sure|absolutely|certainly|of course|yes|yep|yup|yeah|sounds good to me|sounds great|sounds good|that works for me|fine by me|got it|gotcha|i understand|i see|understood|makes sense|that makes sense|all clear|alright|all right|great|perfect|excellent|fantastic|awesome|cool|nice|no problem|no worries|no thanks|you re welcome|then|please)(?:\s+|$))+$/.test(followup)) {
                const followupIsThanks = /^(?:thank you|thanks|thx|tysm|many thanks|much appreciated|i appreciate it|appreciate it)\b/.test(followup);
                return `${isThanks || followupIsThanks ? "You’re welcome" : "Sounds good"}${visitorName ? `, ${visitorName}` : ""}. What would you like to know about Milan?`;
            }
            return outOfScope;
        }

        if (isThanks) return `You’re welcome${visitorName ? `, ${visitorName}` : ""}. ${help}`;
        if (/^(got it|gotcha|understood|i understand|i see|makes sense|that makes sense|all clear)$/.test(phrase)) {
            return `Glad that’s clear${visitorName ? `, ${visitorName}` : ""}. What else would you like to know about Milan?`;
        }
        if (/^(no problem|no worries|no thanks)$/.test(phrase)) return `No problem${visitorName ? `, ${visitorName}` : ""}. I’m here if you have another question about Milan.`;
        if (phrase === "you re welcome") return `Happy to help${visitorName ? `, ${visitorName}` : ""}. ${help}`;
        return `Sure${visitorName ? `, ${visitorName}` : ""}. What would you like to know about Milan’s profile?`;
    }

    function resetConversation() {
        visitorName = "";
        awaitingVisitorName = true;
        lastProfileReply = "";
        conversationVersion += 1;
        conversationHistory.length = 0;
    }

    function getKnowledgeContext() {
        return Object.entries(resume)
            .map(([topic, details]) => `${topic}: ${details}`)
            .join("\n");
    }

    function rememberTurn(version, question, answer) {
        if (version !== conversationVersion) return;
        conversationHistory.push({ role: "user", content: question }, { role: "assistant", content: answer });
        if (conversationHistory.length > 10) conversationHistory.splice(0, conversationHistory.length - 10);
    }

    async function requestSmartResponse(input, localAnswer, version, name) {
        const endpoint = root.MILAN_AI_ENDPOINT || "/api/chat";

        if (version !== conversationVersion) return localAnswer;
        if (remoteAvailable === false || typeof root.fetch !== "function" || !input.trim()) {
            rememberTurn(version, input, localAnswer);
            return localAnswer;
        }

        try {
            const response = await root.fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...conversationHistory, { role: "user", content: input }].slice(-11),
                    visitorName: name
                })
            });

            if (!response.ok) {
                if ([404, 405, 503].includes(response.status)) remoteAvailable = false;
                rememberTurn(version, input, localAnswer);
                return localAnswer;
            }

            const payload = await response.json();
            const answer = typeof payload.reply === "string" && payload.reply.trim() ? payload.reply.trim() : localAnswer;
            remoteAvailable = true;
            rememberTurn(version, input, answer);
            return answer;
        } catch {
            remoteAvailable = false;
            rememberTurn(version, input, localAnswer);
            return localAnswer;
        }
    }

    function getSmartResponse(input) {
        const localAnswer = getResponse(input);
        const version = conversationVersion;
        const name = visitorName;
        const request = responseQueue.then(() => requestSmartResponse(input, localAnswer, version, name));
        responseQueue = request.then(() => undefined, () => undefined);
        return request;
    }

    function getResponse(input) {
        const rawInput = typeof input === "string" ? input.trim() : "";
        const normalizedQuestion = normalize(rawInput);
        if (!normalizedQuestion) return "Please ask a question about Milan's resume or professional profile.";
        const question = stripGreeting(normalizedQuestion);

        const providedName = extractName(rawInput);
        if (providedName) {
            visitorName = providedName.name;
            awaitingVisitorName = false;
            const followup = stripGreeting(normalize(providedName.remainder));
            const followupResponse = followup && getProfileResponse(followup);
            return followupResponse
                ? `Nice to meet you, ${visitorName}. ${followupResponse}`
                : `Nice to meet you, ${visitorName}. I’ll remember your name for this chat. What would you like to know about Milan?`;
        }

        if (awaitingVisitorName) {
            const bareName = extractBareName(rawInput);
            if (bareName) {
                visitorName = bareName;
                awaitingVisitorName = false;
                return `Nice to meet you, ${visitorName}. I’ll remember your name for this chat. What would you like to know about Milan?`;
            }
        }

        if (/^(what is my name|do you know my name|do you remember my name|what should you call me)$/.test(question)) {
            return visitorName ? `Your name is ${visitorName}.` : "I don’t know your name yet. What should I call you?";
        }

        const acknowledgementResponse = getAcknowledgementResponse(question);
        if (acknowledgementResponse) return acknowledgementResponse;

        if (!question) {
            return visitorName
                ? `Hello, ${visitorName}! I’m Milan’s profile assistant. ${help}`
                : `Hello! I’m Milan’s profile assistant. What should I call you? ${help}`;
        }
        if (/^(how are you|how are you doing)$/.test(question)) {
            return visitorName
                ? `I’m doing well, thanks for asking, ${visitorName}. What would you like to know about Milan?`
                : "I’m doing well, thanks for asking. What should I call you? I can help with Milan’s professional profile.";
        }
        if (/^(how is it going|how is your day|how is everything)$/.test(question)) {
            return visitorName ? `Going well, ${visitorName}, thanks for asking. How can I help with Milan’s profile?` : "Going well, thanks for asking. What should I call you? I can help with Milan’s profile.";
        }
        if (/^(?:i m|im|i am) (?:doing )?(?:well|good|fine|great)(?: thanks)?$/.test(question)) {
            return visitorName
                ? `Glad to hear it, ${visitorName}. What would you like to know about Milan?`
                : "Glad to hear it. What would you like to know about Milan’s professional profile?";
        }
        if (/^(nice to meet you|pleased to meet you)$/.test(question)) {
            return visitorName ? `Nice to meet you too, ${visitorName}. What would you like to know about Milan?` : "Nice to meet you too. What should I call you?";
        }
        if (/^(you are helpful|you are great|you are awesome|that was helpful|great answer)$/.test(question)) {
            return visitorName ? `Thank you, ${visitorName}. I’m glad that helped.` : "Thank you. I’m glad that helped.";
        }
        if (/^(goodbye|bye|see you|got to go)$/.test(question)) return visitorName ? `Goodbye, ${visitorName}! Feel free to come back with another question about Milan’s profile.` : "Goodbye! Feel free to come back with another question about Milan’s profile.";
        if (/^(what is your name|what s your name|whats your name|who are you)$/.test(question)) {
            return visitorName ? `I’m Milan’s profile assistant, ${visitorName}. ${help}` : `I’m Milan’s profile assistant. What should I call you? ${help}`;
        }
        if (/^(help|what can you do|what can you answer|what do you do)$/.test(question)) return visitorName ? `${visitorName}, ${help}` : help;

        const shortFollowup = getShortFollowupResponse(question);
        if (shortFollowup) return visitorName ? `${visitorName}, ${shortFollowup}` : shortFollowup;

        if (/\b(?:education|degree|school|college|university|salary|compensation|pay|ctc|notice period|availability|available to start|start date|date of birth|birthday|age|nationality|citizenship|visa|work authorization)\b/.test(question)) {
            awaitingVisitorName = false;
            return visitorName ? `${visitorName}, ${unavailableDetail}` : unavailableDetail;
        }

        awaitingVisitorName = false;
        const response = getProfileResponse(question) || outOfScope;
        return visitorName ? `${visitorName}, ${response}` : response;
    }

    const api = Object.freeze({ getResponse, getSmartResponse, getKnowledgeContext, resetConversation });
    root.MilanProfileModel = api;
    if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
