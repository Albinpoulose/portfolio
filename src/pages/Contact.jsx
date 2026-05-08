import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { C, fadeUp } from "../tokens.js";
import RevealSection from "../components/RevealSection.jsx";

const CONTACT_LINKS = [
  { href: "mailto:paulosealbin@gmail.com", icon: <Mail size={18} />, label: "[EMAIL_ADDRESS]", solid: true },
  { href: "https://www.linkedin.com/in/albin-poulose-136219146", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "https://github.com/Albinpoulose", icon: <Github size={18} />, label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 2rem 120px", textAlign: "center" }}>
      <RevealSection>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <p className="section-label">// let's build</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Ready to <span className="gradient-text">Architect</span>
              <br />your AI Stack?
            </h2>
            <p style={{ color: C.muted, fontSize: 16, marginBottom: 40, lineHeight: 1.75 }}>
              Whether you need a full-stack AI product, a RAG system for your enterprise, or a tech lead who can bridge both worlds — let's talk.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            {CONTACT_LINKS.map(({ href, icon, label, solid }) => (
              <ContactLink key={label} href={href} icon={icon} label={label} solid={solid} />
            ))}
          </motion.div>

          {/* Availability note */}
          <motion.p variants={fadeUp} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: C.dim }}>
            Based in India · Open to remote worldwide · Available from Q3 2026
          </motion.p>
        </div>
      </RevealSection>
    </section>
  );
}

function ContactLink({ href, icon, label, solid }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: solid ? `linear-gradient(135deg, ${C.indigo}, #4f46e5)` : C.glass,
        color: "#fff",
        padding: "16px 32px",
        borderRadius: 12,
        border: solid ? "none" : `1px solid ${C.border}`,
        textDecoration: "none",
        fontWeight: solid ? 600 : 500,
        fontSize: 15,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {icon} {label}
    </a>
  );
}
