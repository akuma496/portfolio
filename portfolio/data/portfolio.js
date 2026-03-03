export const personal = {
  name: "Aditya Kumar",
  tagline: "Distributed Systems Engineer",
  bio: "Inspired builder. I design and deploy infrastructure that doesn't flinch — high-throughput pipelines, resilient orchestration, and systems built to scale. Currently going deep on low-level programming.",
  location: "Tempe, Arizona",
  openToRelocation: true,
  email: "aditya1151999@gmail.com",
  phone: "+1 (602) 723-1783",
  github: "https://github.com/akuma496",
  linkedin: "https://linkedin.com/in/your-username", // ← update this
};

export const awards = [
  { emoji: "🏆", title: "HackASU 2025", subtitle: "3rd Place — DeFi Track" },
  { emoji: "🥇", title: "Hacks for Humanity 2025", subtitle: "1st Place" },
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
    live: null, // ← add a live URL if you have one
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
      "Sub-ms lookups via composite-hash indexing (userid × commit) in MongoDB",
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
];