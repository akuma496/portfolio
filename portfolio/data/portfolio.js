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
    tags: ["Claude API", "ChromaDB", "RAG Systems", "LLM Orchestration", "Vector Search", "Prompt Engineering"],
  },
  {
    category: "Frontend & Mobile",
    tags: ["React", "Next.js", "React Native", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend & Data",
    tags: ["FastAPI", "Node.js", "Python", "SQLite", "Firebase", "MongoDB"],
  },
  {
    category: "Distributed Systems",
    tags: ["Kafka", "CockroachDB", "Raft Consensus", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "Languages",
    tags: ["Go", "C++", "Java", "Python", "TypeScript", "SQL", "Solidity"],
  },
  {
    category: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
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
      "Full-stack RAG system built in 48 hours at Innovation Hacks 2.0. Won 2nd place in the AntoxRX track by replacing hours of manual payer PDF research with instant, sourced, plain-English answers for pharmaceutical market access analysts.",
    highlights: [
      "Won 2nd Place — AntoxRX Track, Innovation Hacks 2.0 @ ASU",
      "Indexed 2,296 vector chunks across 55 policies and 15 specialty drugs in ChromaDB",
      "FastAPI backend scrapes real payer portals (BCBS, Cigna, UHC) and parses PDFs via PyMuPDF",
      "Next.js frontend with side-by-side comparison tables, policy change tracking, and neural TTS readback",
      "Claude powers the RAG layer for plain-English Q&A with sourced answers",
    ],
    stack: ["FastAPI", "ChromaDB", "Next.js", "Claude", "PyMuPDF", "SQLite", "Python"],
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
    stack: ["React", "Node.js", "Claude 3.5", "Python", "Solidity"],
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
      "Faculty capstone project — a mobile application designed to support dementia patients with memory, daily routines, and caregiver communication. Built with a focus on accessibility and compassionate UX.",
    highlights: [
      "Faculty-sponsored capstone project addressing real-world healthcare accessibility",
      "Designed for dementia patients — prioritizing simplicity, large UI elements, and low cognitive load",
      "Caregiver dashboard for monitoring patient activity and sending reminders",
    ],
    stack: ["React Native", "Node.js", "Firebase"],
    date: "2025 – 2026",
    github: null,
    live: null,
    badge: null,
  },
];
