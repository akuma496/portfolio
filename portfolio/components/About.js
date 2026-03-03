"use client";
import { useEffect, useRef } from "react";
import { personal, stack } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add("visible"), i * 100);
      });
    }, { threshold: 0.1 });
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      padding: "8rem 4rem",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem",
      borderTop: "1px solid var(--muted)",
    }}>
      <div>
        <div className="section-label">01 — About</div>
        <h2 className="font-display reveal" style={{
          fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 0.92,
          marginBottom: "2rem",
        }}>
          BUILDER<br />AT CORE
        </h2>
        <p className="reveal" style={{
          fontSize: "1.05rem", lineHeight: 1.8,
          color: "var(--text-dim)", marginBottom: "1.5rem",
        }}>
          {personal.bio}
        </p>
        <p className="reveal font-mono" style={{ fontSize: "0.7rem", color: "var(--accent2)", letterSpacing: "0.1em" }}>
          📍 {personal.location}{personal.openToRelocation ? " — Open to Relocation" : ""}
        </p>
      </div>

      <div className="reveal" style={{ paddingTop: "3.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div className="section-label">Stack</div>
        {stack.map((s) => (
          <div key={s.category} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.5rem" }}>
            <h4 className="font-mono" style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.75rem",
            }}>
              {s.category}
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {s.tags.map((tag) => (
                <span key={tag} className="font-mono" style={{
                  fontSize: "0.65rem", letterSpacing: "0.08em",
                  padding: "0.35rem 0.75rem",
                  border: "1px solid var(--muted)", color: "var(--text-dim)",
                  transition: "all 0.2s",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}