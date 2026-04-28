import { motion } from "framer-motion";
import { Layers, Brain } from "lucide-react";
import { C, fadeUp } from "../tokens.js";
import { foundationSkills, aiSkills } from "../data/index.jsx";
import RevealSection from "../components/RevealSection.jsx";
import SkillBar from "../components/SkillBar.jsx";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
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

        {/* Two-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          <SkillColumn
            icon={<Layers size={20} color={C.indigo} />}
            iconBg="rgba(99,102,241,0.15)"
            title="Foundation"
            subtitle="Battle-tested full-stack expertise"
            badge="7 YRS"
            badgeColor={C.indigo}
            badgeBg="rgba(99,102,241,0.1)"
            skills={foundationSkills}
            barColor={C.indigo}
          />
          <SkillColumn
            icon={<Brain size={20} color={C.lime} />}
            iconBg="rgba(163,230,53,0.1)"
            title="AI Evolution"
            subtitle="LLMs, RAG & Agentic systems"
            badge="ACTIVE"
            badgeColor={C.lime}
            badgeBg="rgba(163,230,53,0.08)"
            cardBorderColor="rgba(163,230,53,0.15)"
            skills={aiSkills}
            barColor={C.lime}
          />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ icon, iconBg, title, subtitle, badge, badgeColor, badgeBg, cardBorderColor, skills, barColor }) {
  return (
    <RevealSection>
      <div
        className="glass-card"
        style={{ padding: 32, ...(cardBorderColor ? { border: `1px solid ${cardBorderColor}` } : {}) }}
      >
        {/* Column header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f8fafc" }}>{title}</h3>
            <p style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{subtitle}</p>
          </div>
          <div style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: badgeColor, background: badgeBg, padding: "4px 10px", borderRadius: 6 }}>
            {badge}
          </div>
        </div>

        {/* Skill bars */}
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} color={barColor} delay={i * 0.1} />
        ))}
      </div>
    </RevealSection>
  );
}
