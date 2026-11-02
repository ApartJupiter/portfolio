"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Mail,
  MapPin,
  FileDown,
  ExternalLink,
} from "lucide-react";

const CERTIFICATES = [
  "AWS ML Foundations",
  "AWS ML for NLP",
  "AWS Cloud Security",
  "AWS Cloud Foundations",
  "LangGraph Introduction",
  "Skill India Cybersecurity",
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-mist/60 backdrop-blur-sm pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Profile & Summary */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-mono font-bold text-xs text-mist">
                GS
              </div>
              <span className="font-bold text-lg text-white">
                Gurjyot Singh Gill
              </span>
            </div>
            <p className="text-sm text-white/85 leading-relaxed max-w-sm">
              AI Engineer building production agent runtimes, stateful workflows, and
              tamper-proof AI safety layers. Ready for challenging GenAI & systems roles.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Gurjyot_Resume_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-hot hover:bg-[#e84aa6] text-[#072D59] border border-hot text-xs font-semibold transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <a
              href="mailto:gurjyotsingh28025@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/20 text-white border border-white/20 text-xs font-medium transition-all"
            >
              <Mail className="w-4 h-4 text-sky-100" />
              Email Me
            </a>
          </div>
        </div>

        {/* Education & Certs */}
        <div className="md:col-span-4 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/85 mb-2">
              <GraduationCap className="w-4 h-4 text-sky-100" />
              Education
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
              <div className="text-sm font-semibold text-white">
                Navrachna University
              </div>
              <div className="text-xs text-white/85 mt-0.5">
                B.Tech in Computer Science — <span className="text-blush font-mono font-bold">81.9%</span>
              </div>
              <div className="text-[11px] font-mono text-white/70 mt-1">
                June 2022 – June 2025
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/85 mb-2">
              <Award className="w-4 h-4 text-sky-100" />
              Certifications
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CERTIFICATES.map((cert, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact info & channels */}
        <div className="md:col-span-3 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/85">
            Connect & Channels
          </div>

          <div className="space-y-2.5 text-xs text-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white/70" />
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/70" />
              <a
                href="mailto:gurjyotsingh28025@gmail.com"
                className="hover:text-white transition-colors"
              >
                gurjyotsingh28025@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/ApartJupiter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/85 hover:text-white flex items-center gap-1 transition-colors"
            >
              GitHub <ExternalLink className="w-3 h-3 text-white/70" />
            </a>
            <span className="text-white/40">•</span>
            <a
              href="https://www.linkedin.com/in/gurjyot-gill-71807b215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/85 hover:text-white flex items-center gap-1 transition-colors"
            >
              LinkedIn <ExternalLink className="w-3 h-3 text-white/70" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
        <div>© {new Date().getFullYear()} Gurjyot Singh Gill. All rights reserved.</div>
        <div className="font-mono text-[11px] text-white/60">
          Built with Next.js • Tailwind CSS • Framer Motion
        </div>
      </div>
    </footer>
  );
}
