"use client";
import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    color: "var(--text-dim)",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "color 0.2s",
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.5rem 4rem",
        zIndex: 50,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: "blur(12px)",
        background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
        transition: "all 0.3s ease",
      }}
    >
      <span className="font-mono" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--accent)" }}>
        AK / Portfolio
      </span>

      <div style={{ display: "flex", gap: "2.5rem" }}>
        {["about", "projects"].map((s) => (
          <a // <--- Added the missing opening tag
            key={s}
            href={"#" + s}
            className="font-mono nav-link"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            {s}
          </a>
        ))}

        <a // <--- Added the missing opening tag
          href={"mailto:" + personal.email}
          className="font-mono"
          style={{
            ...linkStyle,
            color: "var(--accent)",
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}