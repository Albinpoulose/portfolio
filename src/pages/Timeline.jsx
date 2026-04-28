import { motion } from "framer-motion";
import { Brain, Award, Star } from "lucide-react";
import { C, fadeUp } from "../tokens.js";
import { timelineEvents } from "../data/index.jsx";
import RevealSection from "../components/RevealSection.jsx";

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Heading */}
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

        {/* Events */}
        <RevealSection>
          <div style={{ position: "relative" }}>
            {/* Gradient vertical line */}
            <div style={{ position: "absolute", left: 20, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${C.indigo}, ${C.lime}, ${C.indigo})` }} />

            {timelineEvents.map((event, i) => (
              <TimelineEvent key={i} event={event} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function TimelineEvent({ event }) {
  return (
    <motion.div variants={fadeUp} style={{ display: "flex", gap: 24, marginBottom: 36, position: "relative" }}>
      {/* Dot */}
      <div style={{ flexShrink: 0 }}>
        <div
          className={event.isAI ? "pulse-indigo" : ""}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: event.isAI ? `linear-gradient(135deg, ${C.indigo}, ${C.lime})` : "rgba(99,102,241,0.15)",
            border: `2px solid ${event.isAI ? C.lime : C.indigo}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {event.isAI
            ? <Brain size={16} color={C.text} />
            : <Award size={16} color={C.indigo} />
          }
        </div>
      </div>

      {/* Card */}
      <div className="glass-card" style={{ flex: 1, padding: "24px 28px" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          <div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 17, fontWeight: 700, color: event.isAI ? C.lime : C.text }}>
              {event.title}
            </h3>
            <p style={{ fontSize: 13, color: C.indigo, marginTop: 2 }}>{event.company}</p>
          </div>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim, flexShrink: 0, paddingTop: 2 }}>
            {event.year}
          </span>
        </div>

        {/* Highlight badge */}
        {event.highlight && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(163,230,53,0.08)", border: "1px solid rgba(163,230,53,0.25)", borderRadius: 6, padding: "3px 10px", marginBottom: 10 }}>
            <Star size={10} color={C.lime} fill={C.lime} />
            <span style={{ fontSize: 11, color: C.lime }}>{event.highlight}</span>
          </div>
        )}

        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, marginBottom: 14 }}>{event.desc}</p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {event.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.dim, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, borderRadius: 4, padding: "2px 8px" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
