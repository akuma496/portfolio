"use client";
import { useEffect, useRef } from "react";
import { personal } from "@/data/portfolio";

export default function Hero() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} style={{
        width: 12, height: 12, background: "var(--accent)", borderRadius: "50%",
        position: "fixed", pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%,-50%)", mixBlendMode: "difference",
        transition: "width 0.2s, height 0.2s",
      }} />
      <div ref={ringRef} style={{
        width: 36, height: 36, border: "1px solid var(--accent)", borderRadius: "50%",
        position: "fixed", pointerEvents: "none", zIndex: 9998,
        transform: "translate(-50%,-50%)", opacity: 0.5,
        transition: "left 0.12s ease, top 0.12s ease",
      }} />

      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 4rem 5rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,77,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 60% 40%, black 30%, transparent 100%)",
        }} />

        <div className="font-mono" style={{
          fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.2em",
          marginBottom: "1.5rem",
          animation: "fadeUp 0.6s 0.2s both",
        }}>
          // {personal.tagline}
        </div>

        <h1 className="font-display" style={{
          fontSize: "clamp(6rem, 14vw, 14rem)", lineHeight: 0.88,
          color: "var(--white)",
          animation: "fadeUp 0.7s 0.35s both",
        }}>
          {personal.name.split(" ")[0]}<br />
          <span style={{ color: "var(--accent)" }}>{personal.name.split(" ")[1]}</span>
        </h1>

        <div style={{
          marginTop: "2rem", display: "flex",
          justifyContent: "space-between", alignItems: "flex-end",
          animation: "fadeUp 0.6s 0.55s both",
          flexWrap: "wrap", gap: "2rem",
        }}>
          <p style={{
            fontWeight: 300, fontSize: "clamp(1rem, 1.6vw, 1.3rem)",
            color: "var(--text-dim)", maxWidth: 480, lineHeight: 1.6,
          }}>
            {personal.bio}
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={`mailto:${personal.email}`} style={btnStyle("primary")}>Get in touch</a>
            <a href="#projects" style={btnStyle("ghost")}>View work</a>
          </div>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </>
  );
}

function btnStyle(type) {
  const base = {
    fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
    letterSpacing: "0.15em", textTransform: "uppercase",
    textDecoration: "none", padding: "0.8rem 1.8rem",
    border: "1px solid", display: "inline-block", transition: "all 0.2s",
  };
  if (type === "primary") return { ...base, background: "var(--accent)", borderColor: "var(--accent)", color: "var(--black)" };
  return { ...base, background: "transparent", borderColor: "var(--muted)", color: "var(--text-dim)" };
}