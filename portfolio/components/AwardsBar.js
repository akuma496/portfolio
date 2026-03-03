import { awards } from "@/data/portfolio";

export default function AwardsBar() {
  return (
    <div style={{
      background: "var(--accent)",
      padding: "1.2rem 4rem",
      display: "flex",
      gap: "3rem",
      alignItems: "center",
      overflowX: "auto",
    }}>
      {awards.map((a, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "3rem", flexShrink: 0 }}>
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "var(--black)",
              textTransform: "uppercase",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {a.emoji} {a.title} — {a.subtitle}
          </span>
          {i < awards.length - 1 && (
            <span style={{ width: 6, height: 6, background: "var(--black)", borderRadius: "50%", opacity: 0.4 }} />
          )}
        </div>
      ))}
    </div>
  );
}