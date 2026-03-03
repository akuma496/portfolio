"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add("visible"), i * 120);
      });
    }, { threshold: 0.08 });
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{
      padding: "8rem 4rem",
      borderTop: "1px solid var(--muted)",
    }}>
      <div className="reveal" style={{ marginBottom: "5rem" }}>
        <div className="section-label">02 — Projects</div>
        <h2 className="font-display" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 0.92 }}>
          SELECTED<br />WORK
        </h2>
      </div>

      {projects.map((p) => (
        <div key={p.id} className="reveal" style={{
          display: "grid", gridTemplateColumns: "80px 1fr auto",
          gap: "0 3rem", alignItems: "start",
          padding: "3rem 0",
          borderTop: "1px solid var(--muted)",
          position: "relative",
        }}>
          <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em", paddingTop: "0.3rem" }}>
            {p.num}
          </span>

          <div>
            <h3 className="font-display" style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1,
              marginBottom: "1rem",
            }}>
              {p.title}
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-dim)", maxWidth: 580, marginBottom: "1.5rem" }}>
              {p.description}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {p.highlights.map((h, i) => (
                <li key={i} className="font-mono" style={{
                  fontSize: "0.65rem", color: "var(--text-dim)",
                  letterSpacing: "0.05em", display: "flex", gap: "0.75rem",
                }}>
                  <span style={{ color: "var(--accent)", fontSize: "0.55rem", marginTop: "0.1rem", flexShrink: 0 }}>▶</span>
                  {h}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.stack.map((t) => (
                <span key={t} className="font-mono" style={{
                  fontSize: "0.6rem", letterSpacing: "0.08em",
                  padding: "0.25rem 0.6rem",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-dim)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem", paddingTop: "0.3rem" }}>
            <span className="font-mono" style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em" }}>{p.date}</span>
            {p.badge && (
              <span className="font-mono" style={{
                fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.3rem 0.8rem", border: "1px solid var(--accent)", color: "var(--accent)",
              }}>
                {p.badge}
              </span>
            )}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={linkStyle}>GitHub ↗</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={linkStyle}>Live ↗</a>}
            </div>
          </div>
        </div>
      ))}

      <div style={{ borderTop: "1px solid var(--muted)" }} />
    </section>
  );
}

const linkStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
  letterSpacing: "0.12em", color: "var(--text-dim)",
  textDecoration: "none", textTransform: "uppercase",
  padding: "0.4rem 0.8rem", border: "1px solid var(--muted)",
  transition: "all 0.2s",
};