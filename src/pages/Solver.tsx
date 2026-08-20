import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Binary, Shield, Cpu, Activity, CheckCircle2, Lock, Layers, Zap, Terminal, RefreshCw, ChevronRight, Hash, Database, GitMerge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Solver() {
  const { t } = useLanguage();
  const [activePhase, setActivePhase] = useState<number>(2);

  const phases = [
    {
      phase: "Phase 0",
      name: "Fast Bounded CDCL",
      defaultState: "Off (Configurable)",
      description: "Hands the system to CryptoMiniSat under a conflict budget. Extracts Level-0 truths and learned XOR relations, feeding them directly back into the algebraic netlist to enrich the basis."
    },
    {
      phase: "Phase 1",
      name: "Expansion of Linear Constraints",
      defaultState: "Always On",
      description: "Cannot be disabled—seeds the evolutionary cascade. Enforces the expandability property across all variables and compacts the index space into a contiguous 0..n-1 range."
    },
    {
      phase: "Phase 1.5",
      name: "Sexed Reproduction",
      defaultState: "Off (Configurable)",
      description: "Cross-multiplies pivot rows from initial linear equations to accelerate early rank growth across quadratic monomials."
    },
    {
      phase: "Phase 2",
      name: "Evolutionary Loop (The Cascade)",
      defaultState: "On (Core)",
      description: "Bucket-indexed Gaussian elimination held in reduced row echelon form (RREF) with lock-free insertion: pivot column claimed via atomic CAS, write-once rows, and smart-funnel max-heap row reduction. Stays sparse by refusing work."
    },
    {
      phase: "Phase 3",
      name: "Border Basis Prolongation & Phantom Sweep",
      defaultState: "Configurable",
      description: "Degree-3 prolongation plus a closure loop for systems the degree-2 cascade cannot finish. Extracts phantoms (degree-2 ideal members derivable only via degree-3 cancellation) before quotient basis closure."
    },
    {
      phase: "Phase 4",
      name: "Condensation & Fast Exhaustive Search (FES)",
      defaultState: "Configurable",
      description: "Condenses the residual system onto unresolved free variables and performs highly parallel bit-sliced exhaustive search over the tractable residual space."
    }
  ];

  const applications = [
    {
      title: "AI Guardrail Formal Verification",
      subtitle: "NeMo Guardrails & Colang Compilation",
      desc: "Compiling Colang policies into quasilinear GF(2) equations and proving algebraically that protected bot actions or tool calls cannot fire without safety context variables.",
      icon: Shield
    },
    {
      title: "EDA Circuit Formal Verification",
      subtitle: "Gate-Level Bristol Netlists",
      desc: "Deciding industrial Boolean netlists (AND, XOR, INV) at scale, with an active research target of 100,000–200,000 variables and sub-cubic cascade scaling.",
      icon: Cpu
    },
    {
      title: "Algebraic Cryptanalysis & Primitives",
      subtitle: "Finite Field Quadratic Inversion",
      desc: "Inverting cryptographic functions (e.g. SHA-256, Speck-32, multiplier factorisation ladders) through structured quadratic equation solving over GF(2).",
      icon: Lock
    },
    {
      title: "Complete Context Enumeration",
      subtitle: "Quotient Ring Möller–Stetter Decomposition",
      desc: "Splitting finite-dimensional quotient algebras into exact eigenspaces to enumerate every valid bypass context and prove that no other context exists.",
      icon: Database
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <span className="text-brand-muted font-mono font-bold tracking-widest uppercase text-xs mb-4 block">
              C++17 ALGEBRAIC RESOLUTION FRAMEWORK
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              GF2 Solver
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              A high-performance C++17 framework for formal verification over the binary field GF(2). Translating Boolean netlists into quasilinear quadratic systems and deciding them with mathematical refutation certificates.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 text-sm">
                <Binary className="w-4 h-4" />
                Polynomial-Time Dense Resolution
              </div>
              <div className="px-6 py-3 rounded-full border border-white/20 text-white font-bold flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-muted" />
                Deterministic Certificate DAG
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative z-10 p-8 glass-panel rounded-3xl border border-white/10 aspect-square flex flex-col items-center justify-center overflow-hidden">
              {/* Matrix Grid Visualization */}
              <div className="absolute inset-0 opacity-10 grid grid-cols-8 gap-1 p-4">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-white/20 rounded-sm" />
                ))}
              </div>
              <Activity className="w-32 h-32 text-white opacity-20 absolute animate-pulse" />
              <div className="text-center relative z-20">
                <p className="text-6xl sm:text-7xl font-mono font-bold mb-2 tracking-tighter text-white">𝔽₂</p>
                <p className="text-brand-muted text-xs uppercase tracking-widest font-mono font-bold">
                  Binary Finite Field Algebra
                </p>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                <div className="h-1 w-12 bg-white rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Multi-Stage Pipeline Interactive Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              ALGEBRAIC ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              The 5-Stage Hybrid Pipeline
            </h2>
            <p className="text-white/50 text-base">
              The solver executes a deterministic sequence of phases, individually configurable via <code className="text-xs font-mono text-white bg-white/10 px-1.5 py-0.5 rounded">--config</code> JSON parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Phase Selector */}
            <div className="lg:col-span-5 space-y-3">
              {phases.map((p, idx) => (
                <button
                  key={p.phase}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    activePhase === idx 
                      ? 'bg-white text-black border-white shadow-xl' 
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                      activePhase === idx ? 'text-black/60' : 'text-brand-muted'
                    }`}>
                      {p.phase}
                    </span>
                    <span className="text-sm font-bold block">{p.name}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${activePhase === idx ? 'text-black' : 'text-white/30'}`} />
                </button>
              ))}
            </div>

            {/* Active Phase Details Card */}
            <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 min-h-[340px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 border border-white/15 text-white">
                    {phases[activePhase].phase}
                  </span>
                  <span className="text-xs font-mono text-brand-muted">
                    Default: {phases[activePhase].defaultState}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {phases[activePhase].name}
                </h3>
                <p className="text-white/70 leading-relaxed text-base mb-6 font-sans">
                  {phases[activePhase].description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-white/60 space-y-2">
                <div className="flex justify-between">
                  <span>Underlying Primitive:</span>
                  <span className="text-white font-bold">
                    {activePhase === 0 && "CryptoMiniSat CDCL Engine"}
                    {activePhase === 1 && "Topological Netlist Parsing & Variable Compaction"}
                    {activePhase === 1.5 && "Degree-2 Monomial Cross-Product Augmentation"}
                    {activePhase === 2 && "Lock-Free CAS Bucket Elimination in RREF"}
                    {activePhase === 3 && "Degree-3 Phantom Cancellation Sweep"}
                    {activePhase === 4 && "Bit-sliced Fast Exhaustive Search"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Complexity Bounds:</span>
                  <span className="text-white font-bold">
                    {activePhase === 2 && "Memory O(n^1.93), Time O(n^2.57)"}
                    {activePhase === 3 && "Memory Θ(n·d₂), Time Θ(n³)"}
                    {activePhase !== 2 && activePhase !== 3 && "Bounded by conflict / quotient limits"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Applications Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              DUAL-USE INDUSTRIAL APPLICATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Where the Algebra Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, idx) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/25 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold block mb-1">
                  {app.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mathematical Foundations Section */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Binary className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold block mb-2">
              THEORETICAL GROUNDWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Polynomial-Time Solution via Evolutionary Rank Augmentation
            </h2>
            <p className="text-white/70 leading-relaxed text-base mb-8">
              The reduction compiles 3-SAT and Boolean netlists into quasilinear systems where every equation is either purely linear or linear plus exactly one quadratic term over GF(2). Unlike conventional CDCL checkers that return binary SAT/UNSAT flags, Quasilinearsolver constructs replayable derivation receipts and certified minimal-disruption fixes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-white/40 block mb-1">Field Arithmetic</span>
                <span className="text-white font-bold text-base">GF(2) Algebra</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-white/40 block mb-1">Cascade Memory</span>
                <span className="text-white font-bold text-base">O(n<sup>1.93</sup>)</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-white/40 block mb-1">Target Netlist Scale</span>
                <span className="text-white font-bold text-base">200k Variables</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
