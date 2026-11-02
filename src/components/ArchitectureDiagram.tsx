"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Database,
  Cpu,
  RefreshCw,
  GitCommit,
  Network,
  Activity,
  CheckCircle,
  Eye,
  Sliders,
  Sparkles,
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  category: "Safety" | "Runtime" | "State" | "Transport" | "Retrieval";
  badge: string;
  details: string;
  keyFeatures: string[];
  codeSample?: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "guardrails",
    name: "12 Guardrail Modules & Shadow Eval",
    subtitle: "Defense-in-depth safety engine",
    icon: <ShieldAlert className="w-5 h-5 text-sky-100" />,
    category: "Safety",
    badge: "Pre-execution Gate",
    details:
      "Multi-tenant defense against prompt injections and jailbreaks. Uses regex-based input filtering, shadow evaluation for zero-regression rollouts, and Tesseract OCR to uncover adversarial prompts hidden inside uploaded images.",
    keyFeatures: [
      "Image-upload scanning with Tesseract OCR",
      "NVIDIA NeMo Framework policy alignment",
      "Gemini safety classification",
      "Shadow evaluation pipelines in production",
    ],
    codeSample: `# Pre-execution Safety Evaluation
async def evaluate_guardrails(state: AgentState, input_payload: Payload):
    ocr_text = await tesseract_ocr_extract(input_payload.media)
    combined_prompt = f"{input_payload.text} \\n {ocr_text}"
    
    for guard in active_12_guardrails:
        await guard.assert_compliant(combined_prompt)
    
    return {"safety_verified": True}`,
  },
  {
    id: "runtime",
    name: "PydanticAI on LangGraph Machine",
    subtitle: "Type-safe agentic execution runtime",
    icon: <Cpu className="w-5 h-5 text-sky-100" />,
    category: "Runtime",
    badge: "Core Orchestrator",
    details:
      "A typed state machine driving 25 distinct tools. Handles campaign composition, dynamic audience segmentation via natural language, and multi-turn edits with strict runtime type validation.",
    keyFeatures: [
      "25 typed PydanticAI tools with strict schema",
      "Natural language audience query parsing",
      "State transition contracts via LangGraph",
      "Dynamic prompt routing & context assembly",
    ],
    codeSample: `class CampaignState(BaseModel):
    tenant_id: UUID
    session_id: str
    target_criteria: NaturalLanguageFilter
    draft_version: int
    pending_actions: list[AgentAction]
    checkpoint_id: str`,
  },
  {
    id: "checkpoint",
    name: "Async PostgreSQL Checkpointer",
    subtitle: "Durable state persistence & session locks",
    icon: <Database className="w-5 h-5 text-sky-100" />,
    category: "State",
    badge: "Durability & Recovery",
    details:
      "Guarantees that no in-flight conversation or multi-step execution is lost on process restart. Combines tenant ownership-checked checkpoint reads with per-session PostgreSQL advisory locks to eliminate race conditions.",
    keyFeatures: [
      "Per-session PostgreSQL advisory locks",
      "Ownership-checked state reads (RLS)",
      "Instant state rollback & time-travel debugging",
      "Lossless recovery across container restarts",
    ],
    codeSample: `async with postgres_advisory_lock(session_id):
    state = await checkpointer.aget_tuple(config)
    # Guaranteed atomic state resumption
    return await workflow.arun(state)`,
  },
  {
    id: "idempotency",
    name: "Interrupt + once() Idempotency Guard",
    subtitle: "Human-in-the-loop irreversible dispatch",
    icon: <RefreshCw className="w-5 h-5 text-sky-100" />,
    category: "Transport",
    badge: "HITL Protection",
    details:
      "Sending an email campaign to hundreds of thousands of users is strictly irreversible. Uses LangGraph human-in-the-loop interrupts paired with a cryptographic once() token guard to mathematically prevent duplicate dispatches.",
    keyFeatures: [
      "LangGraph HITL interrupt before final dispatch",
      "Cryptographic idempotency tokens",
      "Guaranteed at-most-once execution semantics",
      "Audit trail for compliance & approval logs",
    ],
    codeSample: `@tool
async def dispatch_campaign(campaign_id: UUID, idempotency_token: str):
    async with once_guard(idempotency_token):
        # Irreversible blast execution
        return await mcp_crm.blast(campaign_id)`,
  },
  {
    id: "retrieval",
    name: "Hybrid RAG + Reciprocal Rank Fusion",
    subtitle: "Vector + Full-Text with brand voice memory",
    icon: <Network className="w-5 h-5 text-sky-100" />,
    category: "Retrieval",
    badge: "Context Intelligence",
    details:
      "Merges semantic vector search with PostgreSQL lexical full-text search using Reciprocal Rank Fusion (RRF). Maintains cross-session sender identity and brand voice continuity, backed by a FAISS send-confidence scorer.",
    keyFeatures: [
      "Reciprocal Rank Fusion (RRF) algorithm",
      "PostgreSQL tsvector lexical + dense vector",
      "Cross-session memory for brand voice",
      "FAISS send-confidence predictive scoring",
    ],
    codeSample: `def reciprocal_rank_fusion(dense_hits, sparse_hits, k=60):
    rrf_score = defaultdict(float)
    for rank, doc in enumerate(dense_hits):
        rrf_score[doc.id] += 1 / (k + rank)
    for rank, doc in enumerate(sparse_hits):
        rrf_score[doc.id] += 1 / (k + rank)
    return sorted(rrf_score.items(), key=lambda x: x[1], reverse=True)`,
  },
  {
    id: "observability",
    name: "Observability & Deterministic CI Seams",
    subtitle: "Langfuse, OpenTelemetry & 765 Test Suite",
    icon: <Activity className="w-5 h-5 text-sky-100" />,
    category: "Runtime",
    badge: "CI / Production Metrics",
    details:
      "Production-grade tracing for token usage, latency, and step-level agent decisions via Langfuse and OpenTelemetry. LLM non-determinism is tamed with offline TestModel and FunctionModel seams in CI across 87 test files.",
    keyFeatures: [
      "765 deterministic tests running in CI",
      "Offline TestModel/FunctionModel seams",
      "Full OpenTelemetry spans per tool invocation",
      "Live Langfuse dashboards for token cost & latency",
    ],
    codeSample: `def test_campaign_agent_flow(deterministic_test_model):
    test_model = FunctionModel(responses=MOCKED_AGENT_TRAJECTORY)
    agent = create_agent(model=test_model)
    res = agent.run("Target inactive users from last month")
    assert res.target_segment == "churn_risk_30d"`,
  },
];

export default function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<ArchNode>(ARCH_NODES[0]);

  return (
    <section id="architecture" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs text-sky-100 font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Production Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          The Production Agentic Blueprint
        </h2>
        <p className="mt-3 text-white/85 max-w-2xl text-sm sm:text-base">
          Click any component to inspect the underlying engineering architecture, safety
          mechanisms, and production design decisions from my work at SoftSages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Architecture Flow Nodes */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {ARCH_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                  isSelected
                    ? "bg-white/20 border-hot shadow-lg shadow-hot/30 scale-[1.02]"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg border ${
                    isSelected
                      ? "bg-hot/30 border-hot/60 text-white"
                      : "bg-white/15 border-white/20 text-white/85"
                  }`}
                >
                  {node.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-sm font-semibold truncate ${
                        isSelected ? "text-blush" : "text-white"
                      }`}
                    >
                      {node.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/15 text-white/85 border border-white/20">
                      {node.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white/85 mt-0.5 line-clamp-1">
                    {node.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep Dive Inspector */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/20 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/15 border border-white/20">
                    {selectedNode.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/15 text-sky-100 border border-white/30">
                        {selectedNode.category}
                      </span>
                      <span className="text-xs text-white/85 font-mono">
                        {selectedNode.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85 mb-2">
                  System Architecture & Rationale
                </h4>
                <p className="text-sm text-white leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>

              {/* Key Capabilities */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85 mb-3">
                  Production Engineering Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedNode.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-mist/60 backdrop-blur-sm border border-white/20 text-xs text-white"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blush mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code / Implementation Seam */}
              {selectedNode.codeSample && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-white/85 flex items-center gap-1.5">
                      <GitCommit className="w-3.5 h-3.5 text-sky-100" />
                      Implementation Pattern
                    </span>
                    <span className="text-[10px] font-mono text-white/70">
                      Python / LangGraph / PydanticAI
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-mist/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono text-sky-100 overflow-x-auto leading-relaxed">
                    <code>{selectedNode.codeSample}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
