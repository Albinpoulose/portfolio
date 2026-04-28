import { useState, useEffect } from "react";

export default function TypewriterText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);
  const [isPaused, setIsPaused]       = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => {
        setIsDeleting(true);
        setIsPaused(false);
      }, 2000);
      return () => clearTimeout(t);
    }

    const current = phrases[phraseIndex];

    if (!isDeleting) {
      if (charIndex < current.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 60);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => setCharIndex((c) => c - 1), 35);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases]);

  return (
    <span style={{ color: "#a3e635", fontWeight: 600 }}>
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="terminal-cursor" />
    </span>
  );
}
