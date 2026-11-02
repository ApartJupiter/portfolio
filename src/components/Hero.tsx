"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "~60%", label: "faster campaign creation", note: "15 min to under 5" },
  { value: "25", label: "typed tools in production", note: "PydanticAI, idempotent" },
  { value: "765", label: "CI tests", note: "across 87 files" },
  { value: "12", label: "guardrail modules", note: "OCR, NeMo, shadow eval" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 sm:px-10 pt-36 pb-16 flex flex-col justify-between">
      <div className="max-w-6xl w-full mx-auto">
        <motion.p
          {...rise(0)}
          className="font-mono text-xs uppercase tracking-[0.18em] text-white/70"
        >
          Gurjyot Singh Gill &mdash; AI engineer
        </motion.p>

        <motion.h1
          {...rise(0.1)}
          className="mt-8 font-serif text-[2.75rem] sm:text-7xl lg:text-[6.5rem] leading-[0.98] tracking-tight text-white max-w-5xl"
        >
          I build AI agents that{" "}
          <em className="text-hot">hold up</em> in production.
        </motion.h1>

        <motion.p
          {...rise(0.25)}
          className="mt-10 max-w-xl text-lg leading-relaxed text-white/85"
        >
          At SoftSages I work on Mizo, an email marketing product where you
          describe a campaign in plain language and an agent builds and sends
          it. A person approves anything that can&apos;t be undone.
        </motion.p>

        <motion.div {...rise(0.35)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-hot px-6 py-3 text-sm font-semibold text-[#072D59] transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://github.com/ApartJupiter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/gurjyot-singh-gill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      <motion.dl
        {...rise(0.5)}
        className="max-w-6xl w-full mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-white/25 pt-8"
      >
        {STATS.map((s) => (
          <div key={s.label} className="pr-6">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-serif text-5xl text-white">{s.value}</span>
              <span className="mt-2 block text-sm text-white/85">{s.label}</span>
              <span className="mt-0.5 block font-mono text-[11px] text-white/60">{s.note}</span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
