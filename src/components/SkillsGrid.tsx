"use client";

import React from "react";
import { Cpu, Server, Search, ShieldCheck, Activity, Cloud } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "GenAI & Agentic Systems",
    icon: <Cpu className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "LangGraph State Machines",
      "PydanticAI",
      "Model Context Protocol (MCP)",
      "Tool Calling & Schema Validation",
      "Prompt Engineering",
      "Multi-Agent Swarm / Hierarchical Orchestration",
      "LLM Benchmarking (LLaMA, DeepSeek, Qwen)",
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "Python (AsyncIO)",
      "FastAPI",
      "PostgreSQL & PL/pgSQL",
      "Session Advisory Locks",
      "PostgreSQL Checkpointing",
      "Supabase",
      "REST & Event Streaming",
    ],
  },
  {
    title: "Retrieval & Vector Search",
    icon: <Search className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "Reciprocal Rank Fusion (RRF)",
      "FAISS Vector Indexing",
      "MiniLM & Dense Embeddings",
      "PostgreSQL Full-Text (tsvector)",
      "Cross-Session Brand Memory (Mem0)",
      "KMeans Predictive Segmentation",
    ],
  },
  {
    title: "Reliability & AI Safety",
    icon: <ShieldCheck className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "Tesseract OCR Injection Detection",
      "NVIDIA NeMo Guardrails",
      "Gemini Safety Classification",
      "Interrupt + once() Idempotency Guards",
      "Multi-Tenant Row-Level Security (RLS)",
      "Shadow Evaluation Rollouts",
    ],
  },
  {
    title: "Observability & CI Testing",
    icon: <Activity className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "Langfuse Tracing",
      "OpenTelemetry Spans",
      "765 Deterministic CI Tests",
      "TestModel & FunctionModel Seams",
      "Token Cost & Latency Optimization",
      "Automated Regression Detection",
    ],
  },
  {
    title: "Cloud & Languages",
    icon: <Cloud className="w-4 h-4 text-sky-100" />,
    color: "border-white/30 bg-white/15",
    skills: [
      "AWS (ML Foundations, NLP, Security)",
      "Azure",
      "Python",
      "SQL",
      "JavaScript / TypeScript",
      "Git / CI/CD Actions",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Technical Capabilities Matrix
        </h2>
        <p className="mt-3 text-white/85 max-w-2xl text-sm sm:text-base">
          A full-stack AI engineering toolkit spanning low-level state persistence, high-level
          agent orchestration, and production guardrails.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 transition-all backdrop-blur"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`p-2 rounded-lg border ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="text-base font-semibold text-white">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/20 hover:text-white hover:border-white/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
