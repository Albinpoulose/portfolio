import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { C } from "../tokens.js";

const NAV_LINKS = ["About", "Skills", "Projects", "Timeline", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${C.indigo}, ${C.lime})`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: "-0.03em" }}>AP</span>
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: C.text }}>
            Albin<span style={{ color: C.indigo }}> Poulose</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hide-mobile">
          {NAV_LINKS.map((link) => (
            <NavLink key={link} href={`#${link.toLowerCase()}`} label={link} />
          ))}
          <a
            href="mailto:hello@rsr.dev"
            style={{ background: `linear-gradient(135deg, ${C.indigo}, #4f46e5)`, color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: 14, textDecoration: "none", fontWeight: 500 }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      style={{ color: C.muted, fontSize: 14, textDecoration: "none", fontWeight: 400, letterSpacing: "0.01em", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.target.style.color = C.text)}
      onMouseLeave={(e) => (e.target.style.color = C.muted)}
    >
      {label}
    </a>
  );
}
