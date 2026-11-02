"use client";

import React from "react";
import { FolderGit2, Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  category: string;
  description: string;
  deliverables: string[];
  tech: string[];
  highlightMetric?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Mizo — AI-Native Email Marketing Engine",
    tagline: "Replacing complex SaaS dashboards with natural-language agent workflows",
    category: "Agentic AI / Production B2B SaaS",
    description:
      "Enterprise email marketing orchestration platform. Users state high-level campaign intent in natural language; an autonomous PydanticAI agent running on a LangGraph state machine handles audience segmentation, multi-version copy generation, brand voice enforcement, and safe dispatch.",
    deliverables: [
      "25 typed PydanticAI tools with PostgreSQL checkpoint persistence",
      "LangGraph Human-in-the-Loop interrupt + once() idempotency token",
      "Reciprocal Rank Fusion (vector + PostgreSQL tsvector) for brand voice",
      "KMeans predictive lifecycle segmentation with 6 behavioral cohorts",
    ],
    tech: ["LangGraph", "PydanticAI", "FastAPI", "PostgreSQL", "MCP", "Langfuse", "FAISS"],
    highlightMetric: "60% workflow time reduction",
  },
  {
    title: "Pluto Road Carriers — Fleet & Logistics Suite",
    tagline: "Multi-tenant Flutter and Supabase fleet management with real-time sync",
    category: "Full Stack & Multi-Tenant Systems",
    description:
      "Comprehensive logistics and transport management system with strict data isolation. Manages truck fleets, driver assignments, expense balancing, and broker payments with high-concurrency consistency.",
    deliverables: [
      "Custom DbSyncer engine to auto-resolve trip/driver/truck state mismatches",
      "PostgreSQL Row-Level Security (RLS) and PL/pgSQL RBAC procedures",
      "Trip lifecycle, expense tracking, and broker-balance accounting",
      "Overpayment validation algorithms protecting against duplicate financial disbursements",
    ],
    tech: ["Flutter", "Supabase", "PostgreSQL", "RLS", "PL/pgSQL", "State Sync"],
    highlightMetric: "Zero-mismatch state reconciliation",
  },
  {
    title: "Head 2 Heal — AI Mental Health Platform",
    tagline: "Stateful empathetic conversational agent with multi-LLM routing",
    category: "Conversational AI & HealthTech",
    description:
      "Context-aware mental health support platform using stateful memory flows. Implements dynamic multi-LLM orchestration, selecting between Gemini, LLaMA 3.2, and DeepSeek based on emotional nuance, response depth, and latency constraints.",
    deliverables: [
      "Stateful LangGraph memory flows for empathetic, personalized conversations",
      "Multi-LLM arbitration routing between Gemini, LLaMA 3.2, and DeepSeek",
      "Asynchronous FastAPI backend streaming real-time responses to client UI",
      "Safety thresholds detecting crisis signals with emergency routing triggers",
    ],
    tech: ["LangGraph", "FastAPI", "Gemini", "LLaMA 3.2", "DeepSeek", "Python"],
    highlightMetric: "Multi-LLM arbitration runtime",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs text-sky-100 font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Systems
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Production Architecture & Projects
        </h2>
        <p className="mt-3 text-white/85 max-w-2xl text-sm sm:text-base">
          A showcase of agentic platforms, enterprise multi-tenant systems, and resilient
          full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/10 border border-white/20 p-6 flex flex-col justify-between hover:border-white/50 hover:bg-white/20 transition-all group backdrop-blur"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/15 text-sky-100 border border-white/20">
                  {proj.category}
                </span>
                {proj.highlightMetric && (
                  <span className="text-[10px] font-mono text-blush bg-white/15 px-2 py-0.5 rounded border border-white/30">
                    {proj.highlightMetric}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-sky-100 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-blush mt-1 font-medium">
                {proj.tagline}
              </p>

              <p className="text-xs text-white mt-4 leading-relaxed">
                {proj.description}
              </p>

              {/* Deliverables */}
              <div className="mt-5 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/70">
                  Key Engineering Milestones
                </div>
                {proj.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-hot mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack pills */}
            <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap gap-1.5">
              {proj.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white border border-white/20"
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
