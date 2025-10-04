import { useEffect, useRef, useState } from "react";

export function useTypedText(
  phrases = [],
  { typeSpeed = 32, eraseSpeed = 18, delayBetween = 1200, loop = false } = {}
) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [i, setI] = useState(0);
  const [text, setText] = useState(prefersReduced ? phrases[0] ?? "" : "");
  const [mode, setMode] = useState("typing"); // typing | pausing | erasing
  const t = useRef();

  useEffect(() => {
    if (prefersReduced || !phrases.length) return;

    const current = phrases[i % phrases.length];

    if (mode === "typing") {
      if (text.length < current.length) {
        t.current = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed
        );
      } else {
        t.current = setTimeout(() => setMode("pausing"), delayBetween);
      }
    } else if (mode === "pausing") {
      if (loop || i < phrases.length - 1) {
        t.current = setTimeout(() => setMode("erasing"), 200);
      }
    } else if (mode === "erasing") {
      if (text.length > 0) {
        t.current = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          eraseSpeed
        );
      } else {
        setI((n) => (n + 1) % phrases.length);
        setMode("typing");
      }
    }

    return () => clearTimeout(t.current);
  }, [text, mode, i, phrases, typeSpeed, eraseSpeed, delayBetween, loop, prefersReduced]);

  return text;
}