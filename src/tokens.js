// ─── Design Tokens ───────────────────────────────────────────
export const C = {
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

// ─── Framer Motion Variants ───────────────────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 20, willChange: "opacity, transform" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
