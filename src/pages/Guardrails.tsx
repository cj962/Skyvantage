import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ShieldAlert, Cpu, Terminal, Layers, FileCode, CheckCircle2, Lock, ArrowRight, Activity, Binary, Brain, AlertOctagon, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProofInspector from '../components/ProofInspector';
import SlideDeck from '../components/SlideDeck';

export default function Guardrails() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
        >
          <div className="lg:col-span-7">
            <span className="text-brand-muted font-mono font-bold tracking-widest uppercase text-xs mb-4 block">
              FORMAL AI SAFETY VERIFICATION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              AI Guardrail Verification
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              Compiling NeMo Guardrails Colang policies into structured systems of polynomial equations over GF(2). Proving algebraically that a protected AI action cannot fire without its safety precondition across all 2<sup>N</sup> context combinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2.5 rounded-full bg-white text-black font-bold flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Algebraic UNSAT Proofs
              </div>
              <div className="px-5 py-2.5 rounded-full border border-white/20 text-white font-bold flex items-center gap-2 text-sm">
                <FileCode className="w-4 h-4 text-brand-muted" />
                Colang Rulebook Compilation
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-bold flex items-center gap-2 text-sm">
                <Wrench className="w-4 h-4 text-brand-muted" />
                Automated Certified Patching
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <ShieldCheck className="w-40 h-40" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-muted" />
                The Core Proposition
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-serif italic">
                "Intent can be talked into anything. Context cannot. Actions need a policeman."
              </p>
              <div className="space-y-3 font-mono text-xs text-white/80 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-white/40">Synthesizer:</span>
                  <span className="text-white font-bold">Colang → GF(2) Netlist</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Attack Hypothesis:</span>
                  <span className="text-red-400 font-bold">Action = 1 ∧ Guard = 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Verdict Guarantee:</span>
                  <span className="text-emerald-400 font-bold">Soundness over all 2^N states</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Artifact:</span>
                  <span className="text-white font-bold">Replayable DAG of row XORs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Embedded 4-Slide Deck Presentation */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              EXECUTIVE TECHNICAL BRIEFING
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Proving What an AI Agent Cannot Do
            </h2>
          </div>
          <SlideDeck />
        </div>

        {/* Interactive Proof Inspector Console */}
        <ProofInspector />

        {/* Deep Dive Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <FileCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Colang → GF(2) Compilation</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                <code className="text-xs font-mono text-white bg-white/10 px-1.5 py-0.5 rounded">ColangCircuitSynthesizer</code> parses NeMo Guardrails definitions, translating user intents, branching conditions, and bot actions into topologically ordered XOR, AND, and INV gate netlists over GF(2).
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs font-mono text-white/40">
              Preserves flow-level gating semantics &amp; AST hierarchy
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Replayable UNSAT Certificates</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                When a bypass is impossible, the solver emits a self-contained post-order DAG of <code className="text-xs font-mono text-white bg-white/10 px-1 py-0.5 rounded">INSERT</code>, <code className="text-xs font-mono text-white bg-white/10 px-1 py-0.5 rounded">ADD</code>, and <code className="text-xs font-mono text-white bg-white/10 px-1 py-0.5 rounded">MULTIPLY</code> operations. The final step is withheld so an auditor re-derives <code className="text-xs font-mono text-emerald-400">0 = 1</code> without running the solver.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs font-mono text-emerald-400">
              Independent sparse-vector verification in 1 page of code
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Automated Patch Generation</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                On SAT or STALL, <code className="text-xs font-mono text-white bg-white/10 px-1.5 py-0.5 rounded">ContradictionEngine</code> ranks candidates by Semantic Disruption Score (SDS) to find the minimally disruptive constraint, wrapping the protected action in readable Colang across every site that registers it.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs font-mono text-amber-400">
              Certified against over-blocking + ships with UNSAT proof
            </div>
          </motion.div>
        </div>

        {/* MCP & Tool Call Gating Architecture */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 my-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              MCP &amp; ENTERPRISE TOOL GATING
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Gating What the Model Does: Tool Calls and MCP Dispatch
            </h2>
            <p className="text-white/60 leading-relaxed text-base">
              Under Model Context Protocol (MCP) or function calling, the model does not produce text for inspection—it requests side effects on external systems. Quasilinearsolver puts the rail directly on the dispatch gate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-brand-muted font-bold block mb-2 text-sm">1. Freeze Proposal</span>
              <p className="text-white/50 leading-relaxed">
                Proposal (name, arguments) frozen unmodified. Treated as unverified evidence, never as authoritative fact.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-brand-muted font-bold block mb-2 text-sm">2. Resolve Context</span>
              <p className="text-white/50 leading-relaxed">
                Context variables resolved strictly from host systems of record. Never populated from model output.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-brand-muted font-bold block mb-2 text-sm">3. Re-read Versions</span>
              <p className="text-white/50 leading-relaxed">
                Staleness checked by version equality, not arbitrary TTL clocks. Any unverified source treated as stale.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-brand-muted font-bold block mb-2 text-sm">4. Evaluate Policy</span>
              <p className="text-white/50 leading-relaxed">
                Tool dispatched only from inside the verified allow branch. Blocked means strictly zero external invocations.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-brand-muted font-bold block mb-2 text-sm">5. Immutable Audit</span>
              <p className="text-white/50 leading-relaxed">
                Every allow and refusal logged with resolved context hashes and the algebraic verification receipt.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base font-sans">Why Language Models Cannot Certify Their Own Guardrails</h4>
              <p className="text-white/50 text-sm">
                LLMs produce likely completions, not mathematical entailment. A sampling test suite of 33 cases against 2<sup>48</sup> states is a rounding error. Quasilinearsolver provides the independent algebraic ground truth.
              </p>
            </div>
            <Link to="/solver" className="shrink-0">
              <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                Explore the GF(2) Solver Engine
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
