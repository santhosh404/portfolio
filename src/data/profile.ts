// All site content lives here. Edit this file to update the portfolio.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Santhosh Annamalai",
  role: "AI Engineer",
  location: "Chennai, India",
  email: "santhoshmathi2002@gmail.com",
  resumeUrl: `${base}/Santhosh_Annamalai_Resume.pdf`,
  tagline:
    "I build production generative AI systems: multi-agent applications, hybrid RAG pipelines, and the LLMOps tooling that keeps them reliable and cost-efficient.",
  about: [
    "I'm an AI Engineer with 3.5+ years in software and 1.5+ years building generative AI systems that run in production. I design multi-agent systems, retrieval pipelines and observability tooling, and I care as much about cost, safety and evaluation as I do about the model.",
    "Before AI, I spent years as a full-stack engineer working with React, Next.js and Node.js on AWS. That background lets me take an AI product all the way from idea to a shipped, tested and monitored system.",
  ],
  stats: [
    { value: "3.5+", label: "Years in software" },
    { value: "1.5+", label: "Years in generative AI" },
    { value: "70", label: "Agent tools in production" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/santhosh404" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santhosh-annamalai-a32ba31a3" },
  ],
};

export const experience = [
  {
    company: "Belsterns Technologies",
    title: "Project Engineer, AI Engineering",
    period: "Oct 2024 — Present",
    location: "Chennai",
    points: [
      "Built a production multi-agent system on Claude (AWS Bedrock) for an enterprise learning platform: an orchestrator, specialised sub-agents and a ReAct tool-use loop across 5 agents and 70 tools, streamed over Server-Sent Events.",
      "Designed a skill-based prompt architecture of 34 on-demand skills that route between Claude Sonnet and Haiku, with extended thinking and JSON-schema structured outputs.",
      "Built a hybrid RAG pipeline on pgvector combining HNSW vector search and PostgreSQL full-text search, re-ranked with Reciprocal Rank Fusion.",
      "Built the LLMOps layer: a LiteLLM gateway with per-user budgets and rate limits, plus Langfuse and OpenTelemetry tracing on every LLM call.",
      "Shipped async AI job infrastructure on AWS SQS and Lambda (CDK), deployed through GitHub Actions to dev, UAT and prod, backed by 196 Vitest test files.",
      "Led a team of 2 engineers on a SaaS product; built RBAC auth, RabbitMQ pipelines and Razorpay recurring billing that lifted paid conversions by 25%.",
    ],
    stack: ["Claude", "AWS Bedrock", "TypeScript", "Python", "pgvector", "LiteLLM", "AWS Lambda"],
  },
  {
    company: "Pillir",
    title: "Customer Success Engineer, Full-Stack",
    period: "Sep 2022 — Apr 2024",
    location: "Chennai",
    points: [
      "Developed production React applications for customer dashboards and internal tools, and a reusable component library shared across products.",
      "Built a bulk test automation tool (React, Express) that triggers runs across hundreds of TestRail cases in one step, cutting manual setup by 60%.",
      "Integrated Cypress end-to-end and regression suites with TestRail, reporting real-time results with screenshots.",
      "Worked directly with enterprise customers to triage production issues and ship targeted fixes quickly.",
    ],
    stack: ["React", "Node.js", "Express", "Cypress"],
  },
];

// Selected systems from professional work. Add `href` to link a project.
export const projects: {
  name: string;
  year: string;
  description: string;
  stack: string[];
  href?: string;
}[] = [
  {
    name: "Multi-Agent Learning Assistant",
    year: "2025",
    description:
      "An orchestrator agent with specialised sub-agents for an enterprise learning platform. Includes context compaction at 75% of the window, 1-hour prompt caching, and human-in-the-loop approval for sensitive actions.",
    stack: ["Claude Agent SDK", "AWS Bedrock", "SSE"],
  },
  {
    name: "Hybrid RAG & Evaluation",
    year: "2025",
    description:
      "Document ingestion from SharePoint, S3 and the web into a hybrid vector and full-text index, with multi-query expansion and an evaluation framework measuring Recall@k, MRR and LLM-judged faithfulness.",
    stack: ["pgvector", "Amazon Titan", "RAGAS"],
  },
  {
    name: "Multimodal Assessment",
    year: "2025",
    description:
      "Gemini reviews learner capstone videos and Claude scores them as an LLM judge, alongside speech-to-text, MediaPipe exam proctoring and Remotion video generation on AWS Lambda.",
    stack: ["Gemini", "MediaPipe", "Remotion"],
  },
  {
    name: "One-Click Deployment Platform",
    year: "2024",
    description:
      "Provisions Docker-based apps with automated SSL and DNS, cutting provisioning time by 70%. Packaged as a reusable Claude Skill that took deployment from a full day to under an hour.",
    stack: ["Docker", "Claude Skills", "AWS"],
  },
  {
    name: "AI Code Review Agent",
    year: "2024",
    description:
      "An agent that reviews pull requests on Gitea automatically and flags issues for the team before merge.",
    stack: ["LLM Agents", "Gitea"],
  },
];

export const skills = [
  { group: "Generative AI", items: ["LLMs", "Prompt & Context Engineering", "Tool Calling", "Structured Outputs", "Prompt Caching", "Guardrails", "Fine-tuning (LoRA, QLoRA)"] },
  { group: "Agents", items: ["Multi-Agent Systems", "ReAct", "Human-in-the-Loop", "Claude Agent SDK", "LangGraph", "LangChain", "MCP"] },
  { group: "RAG", items: ["Hybrid Search", "pgvector", "HNSW", "Reciprocal Rank Fusion", "Query Expansion", "RAGAS", "LLM-as-a-Judge"] },
  { group: "Platforms", items: ["Anthropic", "AWS Bedrock", "Gemini", "OpenAI", "Azure OpenAI", "Hugging Face", "vLLM", "Ollama"] },
  { group: "LLMOps", items: ["LiteLLM", "Langfuse", "OpenTelemetry", "Rate Limiting", "Cost Optimisation"] },
  { group: "Engineering", items: ["Python", "TypeScript", "SQL", "FastAPI", "Node.js", "Next.js", "React", "PostgreSQL", "Redis", "RabbitMQ"] },
  { group: "Cloud", items: ["AWS (Lambda, SQS, ECS, S3, Aurora)", "Docker", "GitHub Actions", "Vitest", "Playwright"] },
];

export const certifications = [
  { name: "Claude Certified Architect — Foundations", issuer: "Anthropic" },
  { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc." },
];

export const education = [
  {
    school: "Jeppiaar Institute of Technology, Chennai",
    degree: "B.E. Computer Science and Engineering",
    period: "2019 — 2023",
    note: "CGPA 9.2 / 10",
  },
];
