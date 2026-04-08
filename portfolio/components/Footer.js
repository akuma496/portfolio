import { personal } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer style={{
      padding: "4rem 4rem 3rem",
      borderTop: "1px solid var(--muted)",
      display: "flex", justifyContent: "space-between", alignItems: "flex-end",
      flexWrap: "wrap", gap: "2rem",
    }}>
      <div>
        <div className="font-display" style={{ fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem" }}>
          ADITYA<br />KUMAR
        </div>
        <div className="font-mono" style={{ fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.15em" }}>
          Full-Stack AI Engineer · MS @ ASU
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <a href={`mailto:${personal.email}`} className="font-mono" style={{
          fontSize: "0.8rem", color: "var(--white)", textDecoration: "none", letterSpacing: "0.05em",
        }}>
          {personal.email}
        </a>
        <a href={`tel:${personal.phone}`} className="font-mono" style={{
          fontSize: "0.7rem", color: "var(--text-dim)", textDecoration: "none",
        }}>
          {personal.phone}
        </a>
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: personal.github },
          { label: "LinkedIn", href: personal.linkedin },
          { label: "Email", href: `mailto:${personal.email}` },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="font-mono" style={{
            fontSize: "0.65rem", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--text-dim)", textDecoration: "none",
          }}>
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
