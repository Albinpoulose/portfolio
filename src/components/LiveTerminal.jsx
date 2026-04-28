import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, C } from "../tokens.js";
import { termLines } from "../data/index.jsx";
import RevealSection from "./RevealSection";

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    termLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay);
    });
  }, [inView]);

  const isCommand = (text) =>
    text.startsWith("pip") || text.startsWith("npm") || text.startsWith("python");

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

          <motion.div
            variants={fadeUp}
            className="glass-card"
            style={{ padding: 0, overflow: "hidden", fontFamily: "JetBrains Mono, monospace" }}
          >
            {/* Window chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: `1px solid ${C.border}`, background: "rgba(0,0,0,0.3)" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((bg) => (
                <div key={bg} style={{ width: 12, height: 12, borderRadius: "50%", background: bg }} />
              ))}
              <span style={{ fontSize: 11, color: C.dim, marginLeft: 8 }}>rsr@ai-workstation ~ zsh</span>
            </div>

            {/* Output area */}
            <div style={{ padding: "20px 24px", height: 300, overflowY: "auto", background: "rgba(0,0,0,0.4)" }}>
              <div style={{ marginBottom: 4, fontSize: 12 }}>
                <span style={{ color: C.lime }}>rsr@ai</span>
                <span style={{ color: C.indigo }}>:~$ </span>
              </div>

              {termLines.map((line, i) =>
                visibleLines.includes(i) ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: 13, color: line.color, lineHeight: 1.8 }}
                  >
                    {isCommand(line.text) ? (
                      <>
                        <span style={{ color: C.indigo }}>$ </span>
                        {line.text}
                      </>
                    ) : (
                      line.text
                    )}
                  </motion.div>
                ) : null
              )}

              {visibleLines.length > 0 && visibleLines.length < termLines.length && (
                <div style={{ fontSize: 13, color: C.indigo }}>
                  $ <span className="terminal-cursor" />
                </div>
              )}
            </div>
          </motion.div>
        </RevealSection>
      </div>
    </section>
  );
}
