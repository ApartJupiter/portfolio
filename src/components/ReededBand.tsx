"use client";

import { useEffect, useRef } from "react";

const STRIPS = 14;
const RADIUS = 220; // px of cursor influence
const R = Array.from({ length: STRIPS }, (_, i) => i);
// Fade the outer strips so the band has soft edges
const edgeOpacity = (i: number) => Math.min(1, 0.25 + Math.sin(((i + 0.5) / STRIPS) * Math.PI) * 0.9);

/**
 * Partial reeded-glass band. Each strip is its own element; when the cursor
 * comes near, nearby strips pivot around the cursor and slide apart like cracked
 * glass slats, and their blur drops so the orb behind shows through sharply.
 * They spring back when the cursor leaves.
 */
export default function ReededBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const stripRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cur = new Array(STRIPS).fill(0);
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;

    const frame = () => {
      const band = bandRef.current;
      if (!band) return;
      const rect = band.getBoundingClientRect();
      const w = rect.width / STRIPS;
      let moving = false;

      for (let i = 0; i < STRIPS; i++) {
        const el = stripRefs.current[i];
        if (!el) continue;
        const cx = rect.left + (i + 0.5) * w;
        const dist = Math.abs(mouse.x - cx);
        const target = mouse.active ? Math.pow(Math.max(0, 1 - dist / RADIUS), 2) : 0;
        cur[i] += (target - cur[i]) * 0.16;
        if (Math.abs(target - cur[i]) > 0.003) moving = true;
        else cur[i] = target;

        const t = cur[i];
        const dir = i % 2 === 0 ? 1 : -1;
        el.style.transformOrigin = `50% ${mouse.y}px`;
        el.style.transform =
          t > 0.001
            ? `translateX(${dir * t * 14}px) rotate(${dir * t * 7}deg)`
            : "";
        el.style.setProperty("--blur", `${(18 - 15 * t).toFixed(1)}px`);
      }
      raf = moving ? requestAnimationFrame(frame) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      kick();
    };
    const onLeave = () => {
      mouse.active = false;
      kick();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={bandRef} className="reeded-band">
      {R.map((i) => (
        <div
          key={i}
          ref={(el) => {
            stripRefs.current[i] = el;
          }}
          className="reed"
          style={{ opacity: edgeOpacity(i) }}
        />
      ))}
    </div>
  );
}
