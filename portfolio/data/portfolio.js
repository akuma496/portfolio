export const personal = {
  name: "Aditya Kumar",
  tagline: "Distributed Systems Engineer",
  bio: "Inspired builder. I design and deploy infrastructure that doesn't flinch — high-throughput pipelines, resilient orchestration, and systems built to scale. Currently finishing my final semester at ASU and open to roles starting May 2026.",
  location: "Tempe, Arizona",
  openToRelocation: true,
  email: "aditya1151999@gmail.com",
  phone: "+1 (602) 723-1783",
  github: "https://github.com/akuma496",
};

export const awards = [
  { emoji: "🥇", title: "Hacks for Humanity 2025", subtitle: "1st Place" },
  { emoji: "🏆", title: "HackASU 2025", subtitle: "3rd Place — DeFi Track" },
];

export const stack = [
  {
    category: "Distributed Systems",
    tags: ["Kafka", "CockroachDB", "Raft Consensus", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "Languages",
    tags: ["Go", "C++", "Java", "Python", "TypeScript", "SQL"],
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
    tags: ["Consensus Algorithms", "DeFi", "AI/ML", "Low-Level Programming", "Embedded Systems"],
  },
];

export const projects = [
  {
    id: "cs2-telemetry",
    num: "01",
    title: "CS2 Real-Time Match Telemetry Pipeline",
    description:
      "High-throughput Go/Kafka pipeline ingesting 20GB of raw telemetry in under 60 minutes, with full-stack observability and zero-data-loss resilience validated under simulated node failures.",
    highlights: [
      "Ingested 20GB raw telemetry in <60 mins via batched CockroachDB commits",
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
    num: "02",
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
    id: "evo-defi",
    num: "03",
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
    github: "https://github.com/akuma496",
    live: null,
    badge: "🏆 3rd Place",
  },
  //
  //{
  //  id: "dementia-app",
  //  num: "04",
  //  title: "Dementia Care Mobile Application",
  //  description:
  //    "Faculty capstone project — a mobile application designed to support dementia patients with memory, daily routines, and caregiver communication. Built with a focus on accessibility and compassionate UX.",
  //  highlights: [
  //    "Faculty-sponsored capstone project addressing real-world healthcare accessibility",
  //    "Designed for dementia patients — prioritizing simplicity, large UI elements, and low cognitive load",
  //    "Caregiver dashboard for monitoring patient activity and sending reminders",
  //  ],
  //  stack: ["React Native", "Node.js", "Firebase"],
  //  date: "2025 – 2026",
  //  github: null, // ← add when public
  // live: null,
  //  badge: "In Progress",
  //},
];