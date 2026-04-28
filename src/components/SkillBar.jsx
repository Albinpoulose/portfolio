import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "../tokens";
import { C } from "../tokens";

export default function SkillBar({ skill, color, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  const gradientEnd = color === C.indigo ? C.indigoL : C.limeD;

  return (
    <motion.div ref={ref} variants={fadeUp} style={{ marginBottom: 20 }}>
      {/* Label row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.text, fontSize: 14, fontWeight: 500 }}>
          <span style={{ color }}>{skill.icon}</span>
          {skill.name}
        </div>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim }}>
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 4, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            borderRadius: 4,
            background: `linear-gradient(90deg, ${color}, ${gradientEnd})`,
          }}
        />
      </div>

      {/* Note */}
      <p style={{ fontSize: 12, color: C.dim, marginTop: 4 }}>{skill.note}</p>
    </motion.div>
  );
}
