import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Brain, Code2, Database, Server, Layers, GitBranch,
  Terminal, Cpu, ChevronRight, ExternalLink, Github,
  Linkedin, Mail, ArrowRight, Zap, Shield, Box,
  FileText, Search, MessageSquare, Network, Cloud,
  Users, TrendingUp, Award, Star, Globe
} from "lucide-react";

/* ─────────────────────────────────── DESIGN TOKENS ─────── */
const C = {
  bg:      "#030712",
  surface: "rgba(15,23,42,0.7)",
  glass:   "rgba(255,255,255,0.04)",
  border:  "rgba(255,255,255,0.08)",
  indigo:  "#6366f1",
  indigoL: "#818cf8",
  lime:    "#a3e635",
  limeD:   "#84cc16",
  text:    "#f8fafc",
  muted:   "#94a3b8",
  dim:     "#475569",
};

/* ─────────────────────────────────── GLOBAL STYLES ────────── */
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: ${C.bg};
      color: ${C.text};
      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      line-height: 1.7;
      overflow-x: hidden;
    }

    h1,h2,h3,h4,h5 { font-family: 'Syne', sans-serif; line-height: 1.15; }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: ${C.bg}; }
    ::-webkit-scrollbar-thumb { background: ${C.indigo}; border-radius: 10px; }

    .glass {
      background: ${C.glass};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid ${C.border};
    }

    .glass-card {
      background: ${C.glass};
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid ${C.border};
      border-radius: 16px;
      transition: border-color 0.3s ease, transform 0.3s ease;
    }
    .glass-card:hover {
      border-color: rgba(99,102,241,0.4);
      transform: translateY(-2px);
    }

    .gradient-text {
      background: linear-gradient(135deg, ${C.indigoL} 0%, ${C.lime} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .indigo-glow {
      box-shadow: 0 0 40px rgba(99,102,241,0.15), 0 0 80px rgba(99,102,241,0.05);
    }

    .lime-dot {
      width: 8px; height: 8px;
      background: ${C.lime};
      border-radius: 50%;
      box-shadow: 0 0 8px ${C.lime};
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${C.indigo};
    }

    .mesh-bg {
      position: absolute; inset: 0; pointer-events: none; overflow: hidden;
    }
    .mesh-blob {
      position: absolute; border-radius: 50%; filter: blur(100px);
      animation: drift 12s ease-in-out infinite alternate;
    }
    @keyframes drift {
      from { transform: translate(0,0) scale(1); }
      to   { transform: translate(30px,-20px) scale(1.05); }
    }

    .terminal-cursor {
      display: inline-block;
      width: 2px; height: 1em;
      background: ${C.lime};
      animation: blink 1s step-end infinite;
      vertical-align: text-bottom;
      margin-left: 2px;
    }
    @keyframes blink { 50% { opacity: 0; } }

    .rag-arrow {
      position: absolute; top: 50%; right: -32px; transform: translateY(-50%);
      display: flex; align-items: center; gap: 4px;
      color: ${C.indigo};
    }

    @keyframes pulse-indigo {
      0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
      50%      { box-shadow: 0 0 0 8px rgba(99,102,241,0); }
    }
    .pulse-indigo { animation: pulse-indigo 2s infinite; }

    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
    }
  `}</style>
);

/* ─────────────────────────────────── ANIMATION VARIANTS ──── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function RevealSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────── NAV ──────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["About", "Skills", "Projects", "Timeline", "Contact"];
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2rem",
        background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: `linear-gradient(135deg, ${C.indigo}, ${C.lime})`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Brain size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: C.text }}>
            rsr<span style={{ color: C.indigo }}>.</span>dev
          </span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hide-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: C.muted, fontSize: 14, textDecoration: "none", fontWeight: 400, letterSpacing: "0.01em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{l}</a>
          ))}
          <a href="mailto:hello@rsr.dev" style={{ background: `linear-gradient(135deg, ${C.indigo}, #4f46e5)`, color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: 14, textDecoration: "none", fontWeight: 500 }}>
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ─────────────────────────────────── HERO ─────────────────── */
function TypewriterText({ phrases }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDel(true); setPaused(false); }, 2000);
      return () => clearTimeout(t);
    }
    const current = phrases[idx];
    if (!del) {
      if (sub < current.length) {
        const t = setTimeout(() => setSub(s => s + 1), 60);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (sub > 0) {
        const t = setTimeout(() => setSub(s => s - 1), 35);
        return () => clearTimeout(t);
      } else {
        setDel(false);
        setIdx(i => (i + 1) % phrases.length);
      }
    }
  }, [sub, del, idx, paused, phrases]);

  return (
    <span style={{ color: C.lime, fontWeight: 600 }}>
      {phrases[idx].substring(0, sub)}
      <span className="terminal-cursor" />
    </span>
  );
}

function Hero() {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 2rem 80px", position: "relative", overflow: "hidden" }}>
      {/* Mesh background */}
      <div className="mesh-bg">
        <div className="mesh-blob" style={{ width: 600, height: 600, background: "rgba(99,102,241,0.12)", top: "10%", left: "20%" }} />
        <div className="mesh-blob" style={{ width: 400, height: 400, background: "rgba(163,230,53,0.06)", bottom: "20%", right: "15%", animationDelay: "4s" }} />
        <div className="mesh-blob" style={{ width: 300, height: 300, background: "rgba(99,102,241,0.08)", bottom: "10%", left: "10%", animationDelay: "8s" }} />
      </div>

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.1)", border: `1px solid rgba(99,102,241,0.3)`, borderRadius: 40, padding: "6px 16px", marginBottom: 32 }}>
            <div className="lime-dot" />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: C.indigoL }}>Available for AI/Full-Stack roles</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.05 }}
        >
          Building the{" "}
          <span className="gradient-text">Intelligent</span>
          <br />Stack.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: C.muted, maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.8 }}
        >
          7 Years of Full-Stack Leadership at{" "}
          <span style={{ color: C.text, fontWeight: 500 }}>Comviva</span>{" "}
          →{" "}
          Architecting{" "}
          <TypewriterText phrases={["LLM & RAG Systems.", "Agentic AI Workflows.", "Vector Search Pipelines.", "Production AI Products."]} />
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.indigo, color: "#fff", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 15, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View AI Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.text, padding: "14px 28px", borderRadius: 10, border: `1px solid ${C.border}`, textDecoration: "none", fontWeight: 500, fontSize: 15, transition: "border-color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.indigo}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 72, flexWrap: "wrap" }}
        >
          {[["7+", "Years Experience"], ["40+", "Engineers Led"], ["12+", "Products Shipped"], ["3", "AI Projects"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: C.text }}>{n}</div>
              <div style={{ fontSize: 13, color: C.dim, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── SKILL MATRIX ─────────── */
const foundationSkills = [
  { icon: <Code2 size={16} />, name: "MERN Stack", level: 98, note: "MongoDB, Express, React, Node.js" },
  { icon: <Server size={16} />, name: "System Design", level: 92, note: "Microservices, Event-driven arch" },
  { icon: <Cloud size={16} />, name: "AWS / Cloud", level: 88, note: "EC2, S3, Lambda, RDS" },
  { icon: <Database size={16} />, name: "SQL & NoSQL", level: 90, note: "PostgreSQL, MongoDB, Redis" },
  { icon: <GitBranch size={16} />, name: "DevOps", level: 85, note: "Docker, K8s, CI/CD pipelines" },
  { icon: <Users size={16} />, name: "Engineering Leadership", level: 95, note: "Tech Lead, 40+ engineers" },
];
const aiSkills = [
  { icon: <Brain size={16} />, name: "LangChain", level: 80, note: "Chains, agents, LCEL" },
  { icon: <Search size={16} />, name: "RAG Systems", level: 82, note: "Chunking, retrieval, reranking" },
  { icon: <Database size={16} />, name: "Vector Databases", level: 78, note: "Pinecone, Chroma, FAISS" },
  { icon: <Cpu size={16} />, name: "OpenAI / Anthropic API", level: 85, note: "GPT-4, Claude, embeddings" },
  { icon: <Terminal size={16} />, name: "Python / FastAPI", level: 75, note: "Async APIs, pydantic" },
  { icon: <Network size={16} />, name: "AI Agents", level: 70, note: "Tool use, ReAct, multi-agent" },
];

function SkillBar({ skill, color, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} variants={fadeUp} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.text, fontSize: 14, fontWeight: 500 }}>
          <span style={{ color }}>{skill.icon}</span>
          {skill.name}
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim }}>{skill.level}%</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 4, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color === C.indigo ? C.indigoL : C.lime})` }}
        />
      </div>
      <p style={{ fontSize: 12, color: C.dim, marginTop: 4 }}>{skill.note}</p>
    </motion.div>
  );
}

function SkillMatrix() {
  return (
    <section id="skills" style={{ padding: "100px 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="section-label">// skill matrix</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
              The <span className="gradient-text">Transition</span>
            </h2>
            <p style={{ color: C.muted, maxWidth: 540, margin: "16px auto 0", fontSize: 15 }}>
              Seven years of battle-tested engineering — now being weaponized for the AI era.
            </p>
          </motion.div>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {/* Foundation */}
          <RevealSection>
            <div className="glass-card" style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Layers size={20} color={C.indigo} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Foundation</h3>
                  <p style={{ fontSize: 12, color: C.dim, marginTop: 2 }}>Battle-tested full-stack expertise</p>
                </div>
                <div style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.indigo, background: "rgba(99,102,241,0.1)", padding: "4px 10px", borderRadius: 6 }}>7 YRS</div>
              </div>
              {foundationSkills.map((s, i) => <SkillBar key={s.name} skill={s} color={C.indigo} delay={i * 0.1} />)}
            </div>
          </RevealSection>

          {/* AI Evolution */}
          <RevealSection>
            <div className="glass-card" style={{ padding: 32, border: `1px solid rgba(163,230,53,0.15)` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(163,230,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Brain size={20} color={C.lime} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>AI Evolution</h3>
                  <p style={{ fontSize: 12, color: C.dim, marginTop: 2 }}>LLMs, RAG & Agentic systems</p>
                </div>
                <div style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.lime, background: "rgba(163,230,53,0.08)", padding: "4px 10px", borderRadius: 6 }}>ACTIVE</div>
              </div>
              {aiSkills.map((s, i) => <SkillBar key={s.name} skill={s} color={C.lime} delay={i * 0.1} />)}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── RAG SPOTLIGHT ─────────── */
const ragSteps = [
  {
    icon: <FileText size={20} />,
    label: "Documents",
    desc: "PDF, DOCX, URLs ingested and parsed",
    color: "rgba(99,102,241,0.2)",
    border: "rgba(99,102,241,0.5)",
    iconColor: C.indigoL,
  },
  {
    icon: <Layers size={20} />,
    label: "Chunking",
    desc: "RecursiveCharacterTextSplitter with overlap",
    color: "rgba(79,70,229,0.15)",
    border: "rgba(79,70,229,0.4)",
    iconColor: "#818cf8",
  },
  {
    icon: <Database size={20} />,
    label: "Vector Store",
    desc: "Pinecone — 1536-dim OpenAI embeddings",
    color: "rgba(163,230,53,0.08)",
    border: "rgba(163,230,53,0.4)",
    iconColor: C.lime,
  },
  {
    icon: <Search size={20} />,
    label: "Retrieval",
    desc: "MMR search, semantic reranking",
    color: "rgba(132,204,22,0.1)",
    border: "rgba(132,204,22,0.35)",
    iconColor: C.limeD,
  },
  {
    icon: <Brain size={20} />,
    label: "LLM",
    desc: "GPT-4o with HyDE + chain-of-thought",
    color: "rgba(99,102,241,0.2)",
    border: "rgba(99,102,241,0.5)",
    iconColor: C.indigoL,
  },
  {
    icon: <MessageSquare size={20} />,
    label: "Response",
    desc: "Cited, grounded, streamed answer",
    color: "rgba(163,230,53,0.12)",
    border: "rgba(163,230,53,0.5)",
    iconColor: C.lime,
  },
];

function RagFlow() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", alignItems: "center", margin: "32px 0" }}>
      {ragSteps.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            style={{
              background: s.color, border: `1px solid ${s.border}`, borderRadius: 12,
              padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center",
              gap: 6, minWidth: 110, textAlign: "center", cursor: "default"
            }}
          >
            <span style={{ color: s.iconColor }}>{s.icon}</span>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 12, color: C.text }}>{s.label}</span>
            <span style={{ fontSize: 10, color: C.dim, lineHeight: 1.4 }}>{s.desc}</span>
          </motion.div>
          {i < ragSteps.length - 1 && (
            <div style={{ display: "flex", alignItems: "center", color: C.indigo }}>
              <ChevronRight size={14} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Projects() {
  const techTags = ["LangChain", "OpenAI API", "Pinecone", "FastAPI", "React", "TypeScript", "Python", "Streaming"];
  return (
    <section id="projects" style={{ padding: "100px 2rem", background: "rgba(15,23,42,0.3)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="section-label">// ai project spotlight</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
              RAG in <span className="gradient-text">Production</span>
            </h2>
          </motion.div>
        </RevealSection>

        <RevealSection>
          <div className="glass-card indigo-glow" style={{ padding: "40px" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${C.indigo}, ${C.lime})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Brain size={22} color="#fff" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 800, color: C.text }}>DocuMind — Enterprise RAG Platform</h3>
                    <p style={{ fontSize: 13, color: C.dim }}>Intelligent document Q&A with source attribution</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 14px", color: C.muted, textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.text}
                  onMouseLeave={e => e.currentTarget.style.color = C.muted}
                >
                  <Github size={14} /> Code
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, background: C.indigo, borderRadius: 8, padding: "8px 14px", color: "#fff", textDecoration: "none", fontSize: 13 }}>
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>

            {/* Description */}
            <p style={{ color: C.muted, fontSize: 15, marginBottom: 32, maxWidth: 700, lineHeight: 1.75 }}>
              A production-grade RAG system that processes enterprise documents (PDF, DOCX, URLs) into a vector database and answers questions with cited, grounded responses. Built with LangChain LCEL for composable pipelines and streamed responses.
            </p>

            {/* RAG Flow Diagram */}
            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>// Pipeline Architecture</p>
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: "24px 16px", border: `1px solid rgba(255,255,255,0.04)` }}>
                <RagFlow />
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16, marginTop: 32 }}>
              {[
                ["< 2s", "Response Time"],
                ["98.2%", "Retrieval Accuracy"],
                ["50K+", "Docs Indexed"],
                ["Streaming", "Real-time Output"],
              ].map(([val, lbl]) => (
                <div key={lbl} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: "16px", textAlign: "center", border: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.indigo }}>{val}</div>
                  <div style={{ fontSize: 11, color: C.dim, marginTop: 4 }}>{lbl}</div>
                </div>
              ))}
            </motion.div>

            {/* Tech tags */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
              {techTags.map(t => (
                <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.indigoL, background: "rgba(99,102,241,0.1)", border: `1px solid rgba(99,102,241,0.2)`, borderRadius: 6, padding: "4px 10px" }}>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        {/* Secondary project cards */}
        <RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 24 }}>
            {[
              {
                icon: <Network size={20} />, title: "AI Agent Orchestrator",
                desc: "Multi-agent system using LangGraph for complex reasoning tasks. Tools: web search, code exec, data analysis.",
                tags: ["LangGraph", "Python", "Tools"], color: C.lime
              },
              {
                icon: <Globe size={20} />, title: "Comviva Analytics Platform",
                desc: "Led a 12-engineer team building a real-time telecom analytics dashboard serving 200M+ subscribers.",
                tags: ["React", "Node.js", "AWS", "Kafka"], color: C.indigo
              },
            ].map(p => (
              <motion.div key={p.title} variants={fadeUp} className="glass-card" style={{ padding: 28 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color === C.lime ? "rgba(163,230,53,0.1)" : "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ color: p.color }}>{p.icon}</span>
                </div>
                <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: p.color, background: p.color === C.lime ? "rgba(163,230,53,0.08)" : "rgba(99,102,241,0.1)", borderRadius: 4, padding: "3px 8px" }}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── TIMELINE ─────────────── */
const timelineEvents = [
  {
    year: "2024–Present",
    title: "AI Engineering Transition",
    company: "Independent / Open Source",
    desc: "Deepening expertise in LangChain, RAG architectures, vector databases, and agentic AI systems. Building production AI projects.",
    tags: ["LangChain", "RAG", "Python", "OpenAI"],
    isAI: true,
  },
  {
    year: "2021–2024",
    title: "Tech Lead",
    company: "Comviva Technologies",
    desc: "Led a 40+ engineer org building telecom analytics and fintech products. Owned architecture for systems serving 200M+ subscribers across 30 countries.",
    tags: ["Tech Lead", "System Design", "40+ Engineers", "200M+ Users"],
    highlight: "Promoted in 18 months",
  },
  {
    year: "2019–2021",
    title: "Senior Software Engineer",
    company: "Comviva Technologies",
    desc: "Architected the real-time event processing pipeline reducing latency from 8s to 400ms. Led 6 engineers on the data ingestion team.",
    tags: ["Kafka", "Node.js", "React", "MongoDB"],
    highlight: "95% latency reduction",
  },
  {
    year: "2017–2019",
    title: "Software Engineer",
    company: "Comviva Technologies",
    desc: "Built core MERN stack features for the analytics dashboard. Became a go-to for performance optimization and system design reviews.",
    tags: ["MERN", "REST APIs", "Microservices"],
  },
];

function Timeline() {
  return (
    <section id="timeline" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <RevealSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="section-label">// leadership timeline</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
              The <span className="gradient-text">Journey</span>
            </h2>
            <p style={{ color: C.muted, maxWidth: 460, margin: "16px auto 0", fontSize: 15 }}>
              From individual contributor to engineering leader — now evolving into AI.
            </p>
          </motion.div>
        </RevealSection>

        <RevealSection>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 20, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${C.indigo}, ${C.lime}, ${C.indigo})` }} />

            {timelineEvents.map((ev, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: "flex", gap: 24, marginBottom: 36, position: "relative" }}>
                {/* Dot */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: ev.isAI ? `linear-gradient(135deg, ${C.indigo}, ${C.lime})` : "rgba(99,102,241,0.15)",
                    border: `2px solid ${ev.isAI ? C.lime : C.indigo}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }} className={ev.isAI ? "pulse-indigo" : ""}>
                    {ev.isAI ? <Brain size={16} color={C.text} /> : <Award size={16} color={C.indigo} />}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card" style={{ flex: 1, padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 17, fontWeight: 700, color: ev.isAI ? C.lime : C.text }}>{ev.title}</h3>
                      <p style={{ fontSize: 13, color: C.indigo, marginTop: 2 }}>{ev.company}</p>
                    </div>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim, flexShrink: 0, paddingTop: 2 }}>{ev.year}</span>
                  </div>
                  {ev.highlight && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(163,230,53,0.08)", border: `1px solid rgba(163,230,53,0.25)`, borderRadius: 6, padding: "3px 10px", marginBottom: 10 }}>
                      <Star size={10} color={C.lime} fill={C.lime} />
                      <span style={{ fontSize: 11, color: C.lime }}>{ev.highlight}</span>
                    </div>
                  )}
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 14 }}>{ev.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {ev.tags.map(t => (
                      <span key={t} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.dim, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 4, padding: "2px 8px" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── TERMINAL ─────────────── */
const termLines = [
  { text: "# Installing AI stack...", color: C.dim, delay: 0 },
  { text: "pip install langchain openai", color: C.lime, delay: 600 },
  { text: "✓ langchain 0.2.14 installed", color: "#4ade80", delay: 1400 },
  { text: "pip install pypdf chromadb", color: C.lime, delay: 2200 },
  { text: "✓ pypdf 4.3.0 installed", color: "#4ade80", delay: 3000 },
  { text: "npm install langchain @langchain/openai", color: C.lime, delay: 3800 },
  { text: "✓ added 42 packages", color: "#4ade80", delay: 4600 },
  { text: "python -c 'import langchain; print(\"Ready!\")'", color: C.lime, delay: 5400 },
  { text: "→ Ready to build RAG systems.", color: C.indigoL, delay: 6200 },
  { text: "# Currently learning: LangGraph, Agentic AI", color: C.dim, delay: 7000 },
];

function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    termLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, i]), line.delay);
    });
  }, [inView]);

  return (
    <section style={{ padding: "60px 2rem 100px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }} ref={ref}>
        <RevealSection>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 32 }}>
            <p className="section-label">// live terminal</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginTop: 12, letterSpacing: "-0.02em" }}>
              Current <span className="gradient-text">Learning Path</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="glass-card" style={{ padding: 0, overflow: "hidden", fontFamily: "JetBrains Mono, monospace" }}>
            {/* Titlebar */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: `1px solid ${C.border}`, background: "rgba(0,0,0,0.3)" }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />)}
              <span style={{ fontSize: 11, color: C.dim, marginLeft: 8 }}>rsr@ai-workstation ~ zsh</span>
            </div>
            {/* Content */}
            <div style={{ padding: "20px 24px", minHeight: 260, background: "rgba(0,0,0,0.4)" }}>
              <div style={{ marginBottom: 4, color: C.dim, fontSize: 12 }}>
                <span style={{ color: C.lime }}>rsr@ai</span>
                <span style={{ color: C.indigo }}>:~$ </span>
              </div>
              {termLines.map((line, i) => (
                visibleLines.includes(i) && (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                    style={{ fontSize: 13, color: line.color, lineHeight: 1.8 }}
                  >
                    {line.text.startsWith("pip") || line.text.startsWith("npm") || line.text.startsWith("python") ? (
                      <>
                        <span style={{ color: C.indigo }}>$ </span>{line.text}
                      </>
                    ) : line.text}
                  </motion.div>
                )
              ))}
              {visibleLines.length > 0 && visibleLines.length < termLines.length && (
                <div style={{ fontSize: 13, color: C.indigo }}>$ <span className="terminal-cursor" /></div>
              )}
            </div>
          </motion.div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── CONTACT ──────────────── */
function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 2rem 120px", textAlign: "center" }}>
      <RevealSection>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
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

          <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="mailto:hello@rsr.dev" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: `linear-gradient(135deg, ${C.indigo}, #4f46e5)`, color: "#fff", padding: "16px 32px", borderRadius: 12, textDecoration: "none", fontWeight: 600, fontSize: 15 }}>
              <Mail size={18} /> hello@rsr.dev
            </a>
            <a href="https://linkedin.com" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.glass, color: C.text, padding: "16px 32px", borderRadius: 12, border: `1px solid ${C.border}`, textDecoration: "none", fontWeight: 500, fontSize: 15 }}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: C.glass, color: C.text, padding: "16px 32px", borderRadius: 12, border: `1px solid ${C.border}`, textDecoration: "none", fontWeight: 500, fontSize: 15 }}>
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          <motion.p variants={fadeUp} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: C.dim }}>
            Based in India · Open to remote worldwide · Available from Q3 2025
          </motion.p>
        </div>
      </RevealSection>
    </section>
  );
}

/* ─────────────────────────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "24px 2rem", textAlign: "center" }}>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim }}>
        <span style={{ color: C.indigo }}>rsr.dev</span> · Built with React + Framer Motion · No templates harmed.
      </p>
    </footer>
  );
}

/* ─────────────────────────────────── APP ──────────────────── */
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        <Hero />
        <SkillMatrix />
        <Projects />
        <Timeline />
        <LiveTerminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
