import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { C } from "../tokens.js";
import { heroStats, typewriterPhrases } from "../data/index.jsx";
import TypewriterText from "../components/TypewriterText.jsx";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 2rem 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated mesh blobs */}
      <div className="mesh-bg">
        <div className="mesh-blob" style={{ width: 600, height: 600, background: "rgba(99,102,241,0.12)", top: "10%", left: "20%" }} />
        <div className="mesh-blob" style={{ width: 400, height: 400, background: "rgba(163,230,53,0.06)", bottom: "20%", right: "15%", animationDelay: "4s" }} />
        <div className="mesh-blob" style={{ width: 300, height: 300, background: "rgba(99,102,241,0.08)", bottom: "10%", left: "10%", animationDelay: "8s" }} />
      </div>

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", maxWidth: 900 }}>
        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 40, padding: "6px 16px", marginBottom: 32 }}>
            <div className="lime-dot" />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: C.indigoL }}>
              Available for AI/Full-Stack roles
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.05 }}
        >
          Building the <span className="gradient-text">Intelligent</span>
          <br />Stack.
        </motion.h1>

        {/* Subheadline with typewriter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: C.muted, maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.8, minHeight: "4em" }} 
        >
          7 Years of Full-Stack Leadership at{" "}
          <span style={{ color: C.text, fontWeight: 500 }}>Comviva</span>{" → "}
          Architecting <TypewriterText phrases={typewriterPhrases} />
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.indigo, color: "#fff", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 15 }}
          >
            View AI Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.text, padding: "14px 28px", borderRadius: 10, border: `1px solid ${C.border}`, textDecoration: "none", fontWeight: 500, fontSize: 15 }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 72, flexWrap: "wrap" }}
        >
          {heroStats.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: C.text }}>{value}</div>
              <div style={{ fontSize: 13, color: C.dim, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
