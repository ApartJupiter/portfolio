"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import ReededBand from "@/components/ReededBand";

/**
 * Site-wide backdrop. A navy/pink orb floats behind a partial band of reeded
 * glass. After the reader scrolls past the hero the orb "pops" (burst + shards),
 * a dark navy theme expands from where the orb was, and the whole site flips to
 * the dark colour variables (`.theme-dark` on <html>). Scrolling back up
 * reverses it.
 */
const POP_AT = 3; // viewport heights scrolled before popping
const UNPOP_AT = 2.5;
const CENTER = "80% 45%"; // roughly where the orb sits

const SHARDS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 + (i % 2) * 0.2;
  const dist = 170 + (i % 4) * 55;
  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    size: 8 + (i % 3) * 5,
    color: i % 3 === 0 ? "#FC6B80" : i % 3 === 1 ? "#1a5fb0" : "#DBF2FC",
  };
});

export default function FlutedGlass() {
  const { scrollY, scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.6 });
  const orbY = useTransform(smooth, [0, 1], ["0vh", "40vh"]);
  const orbX = useTransform(smooth, [0, 0.5, 1], ["0vw", "-14vw", "-4vw"]);

  const [popped, setPopped] = useState(false);
  const poppedRef = useRef(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const vh = window.innerHeight;
    if (!poppedRef.current && y > vh * POP_AT) {
      poppedRef.current = true;
      setPopped(true);
    } else if (poppedRef.current && y < vh * UNPOP_AT) {
      poppedRef.current = false;
      setPopped(false);
    }
  });

  // Flip the site-wide colour variables, with a short cross-fade window.
  const first = useRef(true);
  useEffect(() => {
    const root = document.documentElement;
    if (first.current) {
      first.current = false;
      return;
    }
    root.classList.add("theme-switching");
    const flip = window.setTimeout(() => root.classList.toggle("theme-dark", popped), 150);
    const done = window.setTimeout(() => root.classList.remove("theme-switching"), 1300);
    return () => {
      window.clearTimeout(flip);
      window.clearTimeout(done);
    };
  }, [popped]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dark theme, revealed as a circle growing from the orb */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#06214a] via-[#041733] to-[#030f24]"
        initial={false}
        animate={{ clipPath: `circle(${popped ? 150 : 0}% at ${CENTER})` }}
        transition={{
          duration: popped ? 1.1 : 0.7,
          delay: popped ? 0.25 : 0,
          ease: [0.7, 0, 0.2, 1],
        }}
      >
        <div className="orb orb-ambient-blue" style={{ top: "-10%", left: "-8%" }} />
        <div className="orb orb-ambient-pink" style={{ top: "30%", right: "4%" }} />
      </motion.div>

      {/* The orb, which pops */}
      <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-0">
        <div className="orb orb-glow" style={{ top: "6%", right: "6%" }} />
        <div
          className="absolute"
          style={{ top: "9%", right: "-6%", width: "min(44vw, 620px)", aspectRatio: "1" }}
        >
          <motion.div
            className="orb orb-core !w-full !animate-none"
            style={{ aspectRatio: "1" }}
            initial={false}
            animate={
              popped ? { scale: [1, 1.1, 1.45], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }
            }
            transition={
              popped ? { duration: 0.5, times: [0, 0.4, 1] } : { duration: 0.8, delay: 0.3 }
            }
          />

          <AnimatePresence>
            {popped && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute rounded-full border-2 border-[#FC6B80]"
                  style={{ width: "60%", aspectRatio: "1" }}
                  initial={{ scale: 0.6, opacity: 0.9 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
                {SHARDS.map((s, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{ width: s.size, height: s.size, background: s.color }}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{ x: s.x, y: s.y, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <ReededBand />
    </div>
  );
}
