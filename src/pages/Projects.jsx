import { motion } from "framer-motion";
import { Brain, Github, ExternalLink } from "lucide-react";
import { C, fadeUp } from "../tokens.js";
import { ragProjectMeta, secondaryProjects } from "../data/index.jsx";
import RevealSection from "../components/RevealSection.jsx";
import RagFlow from "../components/RagFlow.jsx";

export default function Projects() {
  return (  
    <section id="projects" style={{ padding: "100px 2rem", background: "rgba(15,23,42,0.3)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <RevealSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="section-label">// ai project spotlight</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
              RAG in <span className="gradient-text">Production</span>
            </h2>
          </motion.div>
        </RevealSection>

        {/* Featured RAG card */}
        <RevealSection>
          <div className="glass-card indigo-glow" style={{ padding: 40 }}>
            <FeaturedProjectHeader meta={ragProjectMeta} />

            <p style={{ color: C.muted, fontSize: 15, marginBottom: 32, maxWidth: 700, lineHeight: 1.75 }}>
              {ragProjectMeta.desc}
            </p>

            {/* Pipeline diagram */}
            <motion.div variants={fadeUp}>
              <p className="section-label" style={{ marginBottom: 16 }}>// pipeline architecture</p>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: "24px 16px", border: `1px solid rgba(255,255,255,0.04)` }}>
                <RagFlow />
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16, marginTop: 32 }}>
              {ragProjectMeta.metrics.map(({ value, label }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: 16, textAlign: "center", border: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.indigo }}>{value}</div>
                  <div style={{ fontSize: 11, color: C.dim, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tech tags */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
              {ragProjectMeta.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.indigoL, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 6, padding: "4px 10px" }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        {/* Secondary cards */}
        <RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 24 }}>
            {secondaryProjects.map((project) => (
              <SecondaryCard key={project.title} project={project} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function FeaturedProjectHeader({ meta }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${C.indigo}, ${C.lime})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Brain size={22} color="#fff" />
        </div>
        <div>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 800, color: C.text }}>{meta.title}</h3>
          <p style={{ fontSize: 13, color: C.dim }}>{meta.subtitle}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <IconLink href={meta.codeHref} icon={<Github size={14} />} label="Code" />
        <IconLink href={meta.demoHref} icon={<ExternalLink size={14} />} label="Live Demo" solid />
      </div>
    </div>
  );
}

function IconLink({ href, icon, label, solid }) {
  return (
    <a
      href={href}
      style={{
        display: "flex", alignItems: "center", gap: 6,
        background: solid ? C.indigo : "rgba(255,255,255,0.04)",
        border: solid ? "none" : `1px solid ${C.border}`,
        borderRadius: 8, padding: "8px 14px",
        color: solid ? "#fff" : C.muted,
        textDecoration: "none", fontSize: 13,
        transition: "opacity 0.2s",
      }}
    >
      {icon} {label}
    </a>
  );
}

function SecondaryCard({ project }) {
  const isLime = project.accentColor === C.lime;
  return (
    <motion.div variants={fadeUp} className="glass-card" style={{ padding: 28 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: isLime ? "rgba(163,230,53,0.1)" : "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
        <span style={{ color: project.accentColor }}>{project.icon}</span>
      </div>
      <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{project.title}</h4>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: project.accentColor, background: isLime ? "rgba(163,230,53,0.08)" : "rgba(99,102,241,0.1)", borderRadius: 4, padding: "3px 8px" }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
