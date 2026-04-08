export const personal = {
  name: "Aditya Kumar",
  tagline: "Full-Stack AI Engineer",
  bio: "I build AI-native systems end-to-end — from the infrastructure that doesn't flinch under load, to the LLM layer that makes products intelligent, to the interfaces users actually ship with. I don't just integrate AI as a feature; I architect around it. Currently finishing my final semester at ASU and open to roles starting May 2026.",
  location: "Tempe, Arizona",
  openToRelocation: true,
  email: "aditya1151999@gmail.com",
  phone: "+1 (602) 723-1783",
  github: "https://github.com/akuma496",
  linkedin: "https://www.linkedin.com/in/aditya-kumar15/",
};

export const awards = [
  { emoji: "🥇", title: "Hacks for Humanity 2025", subtitle: "1st Place" },
  { emoji: "🏆", title: "HackASU 2025", subtitle: "3rd Place — DeFi Track" },
  { emoji: "🥈", title: "Innovation Hacks 2.0 @ ASU", subtitle: "2nd Place — AntoxRX Track" },
];

export const stack = [
  {
    category: "AI & LLM Layer",
    tags: ["Claude API", "Gemini", "LangChain", "RAG Systems", "ChromaDB", "pgvector", "Vapi AI", "PubMedBERT", "Prompt Engineering"],
  },
  {
    category: "Frontend & Mobile",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js", "Kotlin", "Jetpack Compose"],
  },
  {
    category: "Backend & Data",
    tags: ["FastAPI", "Flask", "Node.js", "Python", "PostgreSQL", "SQLite", "MongoDB", "Pydantic"],
  },
  {
    category: "Web3",
    tags: ["Solidity", "Hardhat", "Wagmi", "Viem", "RainbowKit", "Ethers"],
  },
  {
    category: "Distributed Systems",
    tags: ["Kafka", "CockroachDB", "Raft Consensus", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "Languages",
    tags: ["Go", "C++", "Java", "Python", "TypeScript", "Kotlin", "SQL", "Solidity"],
  },
  {
    category: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "ngrok"],
  },
  {
    category: "Core Engineering",
    tags: ["System Design", "Concurrency", "RTOS", "Chaos Engineering", "Observability"],
  },
  {
    category: "Interests",
    tags: ["LLM Orchestration", "RAG Systems", "Consensus Algorithms", "DeFi", "AI Infrastructure", "Embedded Systems"],
  },
];

export const projects = [
  {
    id: "rxrefactor",
    num: "01",
    title: "RxRefactor — Drug Policy Intelligence Platform",
    description:
      "Full-stack AI-powered medical benefit drug policy tracker built in 36 hours at Innovation Hacks 2.0. Won 2nd place in the AntonRx track by collapsing hours of manual payer PDF research into instant, sourced, plain-English answers for clinicians querying drug coverage across major US payers.",
    highlights: [
      "Won 2nd Place — AntoxRX Track, Innovation Hacks 2.0 @ ASU",
      "Two-tier architecture: SQLite structured lookups (free/instant) + Claude RAG pipeline (~$0.01/query) for nuanced questions",
      "Scraped and chunked payer policy PDFs (BCBS, Cigna, UHC, Priority Health, UPMC) into ~6,100 semantic fragments embedded in ChromaDB",
      "FastAPI + Pydantic backend with PyMuPDF parsing, BeautifulSoup/httpx scraping, and 10-minute response caching",
      "Next.js 16 / React 19 / Tailwind 4 frontend with Zustand, React Query, Recharts, and Framer Motion for multi-payer comparison and version diffing",
      "Hardened Claude system prompt enforces strict grounding in retrieved context with mandatory citations — no fabricated coverage info",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "Pydantic", "Claude", "ChromaDB", "PyMuPDF", "SQLite"],
    date: "Apr 2026",
    github: "https://github.com/RushadW/FourBytes-RxRefactor",
    live: "https://anton-rx-frontend-770871054693.us-central1.run.app",
    badge: "🥈 2nd Place",
  },
  {
    id: "evo-defi",
    num: "02",
    title: "E.V.O — DeFi Options Platform",
    description:
      "Production-grade DeFi options platform built in 24 hours at HackASU. Won 3rd place out of 50+ teams with autonomous LLM agents and deterministic validation gates for safe trade execution.",
    highlights: [
      "Won 3rd Place (50+ teams) in 24-hour hackathon — DeFi Track",
      "Autonomous LLM agents with deterministic validation gates for safe real-time trade execution",
      "Integrated DeFi smart contracts for speculative investing within the Ether.fi system",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Wagmi", "Viem", "Ethers", "RainbowKit", "Solidity", "Hardhat"],
    date: "Nov 2025",
    github: "https://github.com/Dhyan118/EVO",
    live: null,
    badge: "🏆 3rd Place",
  },
  {
    id: "cs2-telemetry",
    num: "03",
    title: "CS2 Real-Time Match Telemetry Pipeline",
    description:
      "High-throughput Go/Kafka pipeline ingesting 20GB of raw telemetry in under 60 minutes, with full-stack observability and zero-data-loss resilience validated under simulated node failures.",
    highlights: [
      "Ingested 20GB raw telemetry in under 60 mins via batched CockroachDB commits",
      "Maintained 2,000+ events/sec via async Kafka commits decoupling Rust parsers from DB writes",
      "Validated Raft leader re-election resilience during peak ingestion",
      "Full observability via Prometheus + Grafana — consumer lag & player-state integrity",
    ],
    stack: ["Go", "Kafka", "CockroachDB", "Prometheus", "Grafana", "Rust"],
    date: "Sept – Dec 2025",
    github: "https://github.com/akuma496",
    live: null,
    badge: null,
  },
  {
    id: "cloud-telemetry",
    num: "04",
    title: "Cloud-Native Telemetry & Orchestration Platform",
    description:
      "Stateless ephemeral environment scaling to 4,000+ users with JIT Docker provisioning, sub-ms MongoDB lookups, and real-time WebSocket streaming to a reactive Vue.js dashboard.",
    highlights: [
      "Scaled to 4,000+ users via strict JIT provisioning + automated decommissioning",
      "Bypassed GitHub API limits via multithreaded local git-tree traversal for 100-day commit analysis",
      "Sub-ms lookups via composite-hash indexing (userid x commit) in MongoDB",
      "Real-time results streamed via WebSockets to reactive Vue.js dashboard",
    ],
    stack: ["Java", "Python", "MongoDB", "Docker", "Vue.js", "WebSockets"],
    date: "Jan – May 2025",
    github: "https://github.com/akuma496",
    live: null,
    badge: null,
  },
  {
    id: "dementia-app",
    num: "05",
    title: "Dementia Care Mobile Application",
    description:
      "Faculty capstone project — a native Android app for dementia care featuring voice-driven MMSE cognitive assessments via Vapi AI and a RAG-backed clinical assistant powered by Gemini 2.5 Flash Lite over a PubMedBERT vector store.",
    highlights: [
      "Native Android app (Kotlin + Jetpack Compose, Material 3) with voice-based MMSE assessments powered by Vapi AI (Deepgram STT + GPT-4o)",
      "Flask backend with JWT auth and a PostgreSQL + pgvector RAG pipeline using PubMedBERT embeddings and Gemini 2.5 Flash Lite via LangChain",
      "Dockerized deployment on AWS EC2 with GitHub Actions CI/CD and ngrok-tunneled Vapi webhooks",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Flask", "PostgreSQL", "pgvector", "LangChain", "Gemini", "Vapi AI", "Docker", "AWS"],
    date: "2025 – 2026",
    github: null,
    live: null,
    badge: null,
  },
];
