import {
  Code2, Database, Server, Layers, GitBranch,
  Cloud, Users, Brain, Search, Cpu, Terminal, Network,
  FileText, MessageSquare,
} from "lucide-react";

// ─── Typewriter phrases ───────────────────────────────────────
export const typewriterPhrases = [
  "LLM & RAG Systems.",
  "Agentic AI Workflows.",
  "Vector Search Pipelines.",
  "Production AI Products.",
];

// ─── Hero stats ───────────────────────────────────────────────
export const heroStats = [
  { value: "7+", label: "Years Experience" },
  { value: "40+", label: "Engineers Led" },
  { value: "12+", label: "Products Shipped" },
  { value: "3", label: "AI Projects" },
];

// ─── Skill matrix ─────────────────────────────────────────────
export const foundationSkills = [
  { icon: <Code2 size={16} />, name: "MERN Stack", level: 98, note: "MongoDB, Express, React, Node.js" },
  { icon: <Server size={16} />, name: "System Design", level: 92, note: "Microservices, Event-driven arch" },
  { icon: <Cloud size={16} />, name: "AWS / Cloud", level: 88, note: "EC2, S3, Lambda, RDS" },
  { icon: <Database size={16} />, name: "SQL & NoSQL", level: 90, note: "PostgreSQL, MongoDB, Redis" },
  { icon: <GitBranch size={16} />, name: "DevOps", level: 85, note: "Docker, K8s, CI/CD pipelines" },
  { icon: <Users size={16} />, name: "Engineering Leadership", level: 95, note: "Tech Lead, 40+ engineers" },
];

export const aiSkills = [
  { icon: <Brain size={16} />, name: "LangChain", level: 80, note: "Chains, agents, LCEL" },
  { icon: <Search size={16} />, name: "RAG Systems", level: 82, note: "Chunking, retrieval, reranking" },
  { icon: <Database size={16} />, name: "Vector Databases", level: 78, note: "Pinecone, Chroma, FAISS" },
  { icon: <Cpu size={16} />, name: "OpenAI / Anthropic API", level: 85, note: "GPT-4o, Claude, embeddings" },
  { icon: <Terminal size={16} />, name: "Python / FastAPI", level: 75, note: "Async APIs, pydantic" },
  { icon: <Network size={16} />, name: "AI Agents", level: 70, note: "Tool use, ReAct, multi-agent" },
];

// ─── RAG pipeline steps ───────────────────────────────────────
export const ragSteps = [
  {
    icon: <FileText size={20} />,
    label: "Documents",
    desc: "PDF, DOCX, URLs ingested and parsed",
    bg: "rgba(99,102,241,0.2)",
    border: "rgba(99,102,241,0.5)",
    iconColor: "#818cf8",
  },
  {
    icon: <Layers size={20} />,
    label: "Chunking",
    desc: "RecursiveCharacterTextSplitter with overlap",
    bg: "rgba(79,70,229,0.15)",
    border: "rgba(79,70,229,0.4)",
    iconColor: "#818cf8",
  },
  {
    icon: <Database size={20} />,
    label: "Vector Store",
    desc: "Pinecone — 1536-dim OpenAI embeddings",
    bg: "rgba(163,230,53,0.08)",
    border: "rgba(163,230,53,0.4)",
    iconColor: "#a3e635",
  },
  {
    icon: <Search size={20} />,
    label: "Retrieval",
    desc: "MMR search, semantic reranking",
    bg: "rgba(132,204,22,0.1)",
    border: "rgba(132,204,22,0.35)",
    iconColor: "#84cc16",
  },
  {
    icon: <Brain size={20} />,
    label: "LLM",
    desc: "GPT-4o with HyDE + chain-of-thought",
    bg: "rgba(99,102,241,0.2)",
    border: "rgba(99,102,241,0.5)",
    iconColor: "#818cf8",
  },
  {
    icon: <MessageSquare size={20} />,
    label: "Response",
    desc: "Cited, grounded, streamed answer",
    bg: "rgba(163,230,53,0.12)",
    border: "rgba(163,230,53,0.5)",
    iconColor: "#a3e635",
  },
];

// ─── Project cards ────────────────────────────────────────────
export const ragProjectMeta = {
  title: "DocuMind — Enterprise RAG Platform",
  subtitle: "Intelligent document Q&A with source attribution",
  desc:
    "A production-grade RAG system that processes enterprise documents (PDF, DOCX, URLs) into a vector database and answers questions with cited, grounded responses. Built with LangChain LCEL for composable pipelines and streamed responses.",
  metrics: [
    { value: "< 2s", label: "Response Time" },
    { value: "98.2%", label: "Retrieval Accuracy" },
    { value: "50K+", label: "Docs Indexed" },
    { value: "Streaming", label: "Real-time Output" },
  ],
  tags: ["LangChain", "OpenAI API", "Pinecone", "FastAPI", "React", "TypeScript", "Python", "Streaming"],
  codeHref: "#",
  demoHref: "#",
};

export const secondaryProjects = [
  {
    icon: <Network size={20} />,
    title: "AI Agent Orchestrator",
    desc:
      "Multi-agent system using LangGraph for complex reasoning tasks. Tools: web search, code exec, data analysis.",
    tags: ["LangGraph", "Python", "Tools"],
    accentColor: "#a3e635",
  },
  {
    icon: <Layers size={20} />,
    title: "Comviva Analytics Platform",
    desc:
      "Led a 12-engineer team building a real-time telecom analytics dashboard serving 200M+ subscribers.",
    tags: ["React", "Node.js", "AWS", "Kafka"],
    accentColor: "#6366f1",
  },
];

// ─── Leadership timeline ──────────────────────────────────────
export const timelineEvents = [
  {
    year: "2024–Present",
    title: "AI Engineering Transition",
    company: "Independent / Open Source",
    desc:
      "Deepening expertise in LangChain, RAG architectures, vector databases, and agentic AI systems. Building production AI projects.",
    tags: ["LangChain", "RAG", "Python", "OpenAI"],
    isAI: true,
  },
  {
    year: "2021–2024",
    title: "Tech Lead",
    company: "Comviva Technologies",
    desc:
      "Led a 40+ engineer org building telecom analytics and fintech products. Owned architecture for systems serving 200M+ subscribers across 30 countries.",
    tags: ["Tech Lead", "System Design", "40+ Engineers", "200M+ Users"],
    highlight: "Promoted in 18 months",
  },
  {
    year: "2019–2021",
    title: "Senior Software Engineer",
    company: "Comviva Technologies",
    desc:
      "Architected the real-time event processing pipeline reducing latency from 8s to 400ms. Led 6 engineers on the data ingestion team.",
    tags: ["Kafka", "Node.js", "React", "MongoDB"],
    highlight: "95% latency reduction",
  },
  {
    year: "2017–2019",
    title: "Software Engineer",
    company: "Comviva Technologies",
    desc:
      "Built core MERN stack features for the analytics dashboard. Became the go-to for performance optimization and system design reviews.",
    tags: ["MERN", "REST APIs", "Microservices"],
  },
];

// ─── Terminal lines ───────────────────────────────────────────
export const termLines = [
  { text: "# Installing AI stack...", color: "#475569", delay: 0 },
  { text: "pip install langchain openai", color: "#a3e635", delay: 600 },
  { text: "✓ langchain 0.2.14 installed", color: "#4ade80", delay: 1400 },
  { text: "pip install pypdf chromadb", color: "#a3e635", delay: 2200 },
  { text: "✓ pypdf 4.3.0 installed", color: "#4ade80", delay: 3000 },
  { text: "npm install langchain @langchain/openai", color: "#a3e635", delay: 3800 },
  { text: "✓ added 42 packages", color: "#4ade80", delay: 4600 },
  { text: "python -c 'import langchain; print(\"Ready!\")'", color: "#a3e635", delay: 5400 },
  { text: "→ Ready to build RAG systems.", color: "#818cf8", delay: 6200 },
  { text: "# Currently learning: LangGraph, Agentic AI", color: "#475569", delay: 7000 },
];
