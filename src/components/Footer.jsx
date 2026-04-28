import { C } from "../tokens";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "24px 2rem", textAlign: "center" }}>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.dim }}>
        <span style={{ color: C.indigo }}>rsr.dev</span> · Built with React + Framer Motion · No templates harmed.
      </p>
    </footer>
  );
}
