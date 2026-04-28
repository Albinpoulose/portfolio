import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "../tokens.js";
import { ragSteps } from "../data/index.jsx";

export default function RagFlow() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", alignItems: "center" }}>
      {ragSteps.map((step, i) => (
        <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            style={{
              background: step.bg,
              border: `1px solid ${step.border}`,
              borderRadius: 12,
              padding: "14px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              minWidth: 110,
              textAlign: "center",
              cursor: "default",
            }}
          >
            <span style={{ color: step.iconColor }}>{step.icon}</span>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 12, color: "#f8fafc" }}>
              {step.label}
            </span>
            <span style={{ fontSize: 10, color: "#475569", lineHeight: 1.4 }}>
              {step.desc}
            </span>
          </motion.div>

          {i < ragSteps.length - 1 && (
            <div style={{ color: "#6366f1", display: "flex", alignItems: "center" }}>
              <ChevronRight size={14} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
