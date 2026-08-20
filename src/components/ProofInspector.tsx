import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertOctagon, Terminal, FileCode, CheckCircle2, Play, RefreshCw, Cpu, Layers, ArrowRight, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PolicyDemo {
  id: string;
  name: string;
  category: string;
  colangSnippet: string;
  attackQuestion: string;
  pins: string;
  verdict: 'UNSAT' | 'SAT' | 'STALL_PATCHED';
  verdictTitle: string;
  steps: number;
  explanation: string;
  certificateJson?: string;
  patchColang?: string;
  sds?: number;
}

const demos: PolicyDemo[] = [
  {
    id: 'trade-gate',
    name: 'Middle-Office Trade Booking Gate',
    category: 'Tool & MCP Dispatch Gating',
    colangSnippet: `define user request_trade_booking
  "book this contract note"

define flow trade_booking_gate
  user request_trade_booking
  if $four_eyes_approved
    bot book_trade
  else
    bot refuse_unapproved_booking`,
    attackQuestion: 'Can action book_trade fire with four_eyes_approved = 0?',
    pins: 'None (Unconditional Obligation)',
    verdict: 'UNSAT',
    verdictTitle: 'MATHEMATICALLY SAFE (UNSAT)',
    steps: 5,
    explanation: 'The algebraic solver derives 0 = 1 in 5 steps. Over all possible 2^N runtime contexts, the action book_trade is provably unreachable unless four_eyes_approved is positively asserted.',
    certificateJson: `{
  "status": "verified_unsat",
  "self_contained": true,
  "steps_to_contradiction": 5,
  "operations": [
    { "id": 4,  "op": "INSERT",   "equation": "x2 = 0" },
    { "id": 19, "op": "MULTIPLY", "base_id": 4, "multiplier": "x1" },
    { "id": 5,  "op": "INSERT",   "equation": "x1*x2 + x3 = 0" },
    { "id": 20, "op": "ADD",      "parents": [19, 5] },
    { "id": 3,  "op": "INSERT",   "equation": "x3 = 1" }
  ],
  "final_step": { "op": "ADD", "inputs": [20, 3] }
}`
  },
  {
    id: 'or-bypass',
    name: 'Sub-Threshold Exemption OR-Accumulation',
    category: 'Structural Policy Defect (SAT Bypass)',
    colangSnippet: `define flow standard_booking
  user request_trade_booking
  if $four_eyes_approved
    bot book_trade

define flow sub_threshold_booking
  user request_trade_booking
  if $counterparty_resolved
    bot book_trade`,
    attackQuestion: 'Can book_trade fire when four_eyes_approved = 0?',
    pins: 'None',
    verdict: 'SAT',
    verdictTitle: 'BYPASS VULNERABILITY FOUND (SAT)',
    steps: 1,
    explanation: 'Repeat registrations of an action accumulate as an OR of their guards. The weaker sub_threshold route allows book_trade to fire without second-approver signoff whenever counterparty_resolved is true.',
    patchColang: `allow 'book_trade' only when: $four_eyes_approved or not $sub_threshold_eligible`,
    sds: 2
  },
  {
    id: 'fca-investments',
    name: 'FCA Consumer-Finance Guardrail (410-Variable Circuit)',
    category: 'Regulatory AI Guardrails (FCA COBS / Duty)',
    colangSnippet: `define flow investment_specific_product
  user ask_investment_advice
  if not $is_targeted_support
    if not $has_advising_permission
      bot refuse_unauthorised_advice
  if $personal_recommendation and $has_advising_permission
    bot respond_permitted_investment_answer`,
    attackQuestion: 'Can respond_permitted_investment_answer fire when has_advising_permission = 0?',
    pins: 'personal_recommendation = 1',
    verdict: 'STALL_PATCHED',
    verdictTitle: 'ESCAPABLE GUARD DETECTED & AUTOMATICALLY REPAIRED',
    steps: 5,
    explanation: 'A targeted-support carve-out bypassed advising permission check. The solver identified the exact escape route and generated a minimally disruptive Colang patch certified with a 5-step UNSAT proof.',
    patchColang: `allow 'respond_permitted_investment_answer' only when:
  not $personal_recommendation or $has_advising_permission`,
    sds: 2
  }
];

export default function ProofInspector() {
  const [selectedDemo, setSelectedDemo] = useState<PolicyDemo>(demos[0]);
  const [activeTab, setActiveTab] = useState<'policy' | 'certificate' | 'patch'>('policy');
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 my-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-white/50 block mb-2">
            INTERACTIVE FORMAL VERIFICATION CONSOLE
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Algebraic Guardrail Verification in Action
          </h3>
        </div>

        {/* Policy Selector */}
        <div className="flex flex-wrap gap-2">
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDemo(d);
                setActiveTab('policy');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedDemo.id === d.id
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {d.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Code & Verification Command */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('policy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeTab === 'policy' ? 'bg-white/15 text-white border border-white/20' : 'text-white/40 hover:text-white'
                }`}
              >
                Colang Policy Source
              </button>
              {selectedDemo.certificateJson && (
                <button
                  onClick={() => setActiveTab('certificate')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeTab === 'certificate' ? 'bg-white/15 text-white border border-white/20' : 'text-white/40 hover:text-white'
                  }`}
                >
                  UNSAT Certificate
                </button>
              )}
              {selectedDemo.patchColang && (
                <button
                  onClick={() => setActiveTab('patch')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeTab === 'patch' ? 'bg-white/15 text-white border border-white/20' : 'text-white/40 hover:text-white'
                  }`}
                >
                  Certified Colang Patch
                </button>
              )}
            </div>
            <span className="text-[11px] font-mono text-white/40">{selectedDemo.category}</span>
          </div>

          <div className="bg-black/80 rounded-2xl border border-white/10 p-5 font-mono text-xs overflow-x-auto min-h-[260px]">
            {activeTab === 'policy' && (
              <pre className="text-white/80 leading-relaxed whitespace-pre font-mono">
                {selectedDemo.colangSnippet}
              </pre>
            )}

            {activeTab === 'certificate' && selectedDemo.certificateJson && (
              <pre className="text-[#2C6E49] leading-relaxed whitespace-pre font-mono">
                {selectedDemo.certificateJson}
              </pre>
            )}

            {activeTab === 'patch' && selectedDemo.patchColang && (
              <div className="space-y-4">
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                  <p className="text-emerald-400 font-bold mb-1">Generated Minimal-Disruption Patch (SDS {selectedDemo.sds}):</p>
                  <pre className="text-white font-mono">{selectedDemo.patchColang}</pre>
                </div>
                <p className="text-white/50 text-[11px]">
                  The solver generated this Colang patch by finding the minimally disruptive constraint across the cascade basis. Re-solving the original system with this condition appended yields an immediate verified UNSAT certificate.
                </p>
              </div>
            )}
          </div>

          {/* Verification Command Line Banner */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs font-mono text-white/70">
            <Terminal className="w-4 h-4 text-brand-muted shrink-0" />
            <span className="text-white font-bold">$</span>
            <span className="truncate">QuasiLinearSolverApp --verify-guardrail policy.co {selectedDemo.pins !== 'None' ? `--pin ${selectedDemo.pins}` : ''}</span>
          </div>
        </div>

        {/* Right Column: Algebraic Verification Results */}
        <div className="lg:col-span-5 space-y-4">
          <div className={`p-6 rounded-2xl border ${
            selectedDemo.verdict === 'UNSAT' 
              ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' 
              : selectedDemo.verdict === 'SAT'
              ? 'bg-red-950/20 border-red-500/30 text-red-300'
              : 'bg-amber-950/20 border-amber-500/30 text-amber-300'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {selectedDemo.verdict === 'UNSAT' ? (
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              ) : selectedDemo.verdict === 'SAT' ? (
                <AlertOctagon className="w-6 h-6 text-red-400" />
              ) : (
                <RefreshCw className="w-6 h-6 text-amber-400" />
              )}
              <span className="font-mono font-bold text-xs uppercase tracking-widest">
                VERDICT
              </span>
            </div>

            <h4 className="text-lg font-bold font-sans text-white mb-2">
              {selectedDemo.verdictTitle}
            </h4>

            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {selectedDemo.explanation}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/40 block">Steps / Derivations</span>
                <span className="text-white font-bold">{selectedDemo.steps} Steps (Replayable)</span>
              </div>
              <div>
                <span className="text-white/40 block">Proof System</span>
                <span className="text-white font-bold">GF(2) Algebra (C++17)</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
            <div className="flex justify-between text-white/60">
              <span>Attack Hypothesis:</span>
              <span className="text-white font-mono">Action = 1 ∧ Precondition = 0</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Context Space:</span>
              <span className="text-white font-mono">Quantified over all 2^N combinations</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Independent Verification:</span>
              <span className="text-emerald-400 font-bold">Self-contained DAG receipt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
