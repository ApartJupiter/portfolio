"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  highlights: string[];
  tech: string[];
}

const EXPERIENCES: Role[] = [
  {
    title: "Associate AI Engineer",
    company: "SoftSages",
    location: "Vadodara, Gujarat",
    period: "Dec 2025 – Present",
    badge: "Current Role",
    highlights: [
      "Building Mizo, an AI-native email platform replacing a multi-step dashboard with a conversational natural-language interface.",
      "Reduced campaign creation time from 10–15 minutes to under 5 minutes (~60% reduction), collapsing audience targeting into single-sentence instructions.",
      "Architected the agent runtime using PydanticAI on LangGraph state machines with async PostgreSQL checkpointing and 25 typed tools.",
      "Engineered an interrupt + once() idempotency guard to protect irreversible email dispatches across distributed workers.",
      "Implemented multi-tenant defense-in-depth: 12 guardrail modules, per-session advisory locks, and Tesseract OCR for embedded prompt injection detection.",
      "Built hybrid retrieval (vector + PostgreSQL full-text via Reciprocal Rank Fusion) and cross-session brand voice memory, migrating CRM transport to MCP.",
      "Authored a 765-test suite across 87 files using offline TestModel/FunctionModel seams, ensuring deterministic CI verification.",
    ],
    tech: [
      "LangGraph",
      "PydanticAI",
      "FastAPI",
      "PostgreSQL",
      "MCP",
      "FAISS",
      "Tesseract OCR",
      "NVIDIA NeMo",
      "Langfuse",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Reliance Jio",
    location: "Navi Mumbai, Maharashtra",
    period: "Jan 2025 – May 2025",
    badge: "Internship",
    highlights: [
      "Implemented and benchmarked six LangGraph orchestration patterns: Sequential, Parallel, Human-In-The-Loop (HITL), Hierarchical, Event-Driven, and Swarm/Supervisor.",
      "Built production-ready RAG pipelines with FAISS and MiniLM embeddings for telecom support queries.",
      "Benchmarked open-source LLMs (LLaMA 3, DeepSeek, Qwen) for cost, latency, and reasoning capability on local deployments.",
      "Prototyped MCP, Mem0, and reinforcement learning (RL)-based agent workflows.",
    ],
    tech: [
      "LangGraph",
      "FAISS",
      "MiniLM",
      "LLaMA",
      "DeepSeek",
      "Qwen",
      "Mem0",
      "Python",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs text-sky-100 font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          Industry Experience
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Engineering Track Record
        </h2>
        <p className="mt-3 text-white/85 max-w-2xl text-sm sm:text-base">
          Proven history of taking stateful LLM systems, agent workflows, and multi-tenant
          architectures from design into production SaaS.
        </p>
      </div>

      <div className="space-y-8 relative">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 transition-all relative overflow-hidden backdrop-blur group"
          >
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 text-sky-100 border border-white/30 font-mono">
                    {exp.badge}
                  </span>
                </div>
                <div className="text-base text-blush font-medium mt-0.5">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-white/85 font-mono gap-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-100" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-6">
              {exp.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm text-white leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-blush shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
