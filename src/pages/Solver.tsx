import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Binary, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Lock, 
  Layers, 
  Zap, 
  Terminal, 
  RefreshCw, 
  ChevronRight, 
  Hash, 
  Database, 
  GitMerge, 
  Sparkles,
  ArrowRight,
  Boxes,
  Code2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProductDocs from '../components/ProductDocs';
import GF2SolverAnimation from '../components/GF2SolverAnimation';

export default function Solver() {
  const { t, language } = useLanguage();
  const [activePhase, setActivePhase] = useState<number>(2);

  const phases = [
    {
      phase: "Phase 0",
      name: "Fast Bounded CDCL",
      defaultState: "Off (Configurable)",
      description: language === 'pt' 
        ? "Transfere o sistema para o CryptoMiniSat sob um orçamento de conflitos delimitado. Extrai verdades de Nível-0 e relações XOR aprendidas, realimentando diretamente o netlist algébrico para enriquecer a base polinomial."
        : "Hands the system to CryptoMiniSat under a bounded conflict budget. Extracts Level-0 truths and learned XOR relations, feeding them directly back into the algebraic netlist to enrich the polynomial basis."
    },
    {
      phase: "Phase 1",
      name: "Expansion of Linear Constraints",
      defaultState: "Always On",
      description: language === 'pt'
        ? "Fase mandatória que semeia a cascata evolucionária. Impõe a propriedade de expansão entre todas as variáveis e compacta o espaço de índices em um intervalo contíguo 0..n-1."
        : "Cannot be disabled—seeds the evolutionary cascade. Enforces the expandability property across all variables and compacts the index space into a contiguous 0..n-1 range."
    },
    {
      phase: "Phase 1.5",
      name: "Sexed Reproduction",
      defaultState: "Off (Configurable)",
      description: language === 'pt'
        ? "Multiplica cruzadamente linhas de pivô de equações lineares iniciais para acelerar o crescimento inicial de rank em monômios quadráticos."
        : "Cross-multiplies pivot rows from initial linear equations to accelerate early rank growth across quadratic monomials."
    },
    {
      phase: "Phase 2",
      name: "Evolutionary Loop (The Cascade)",
      defaultState: "On (Core)",
      description: language === 'pt'
        ? "Eliminação gaussiana indexada por baldes mantida em forma escalonada reduzida por linhas (RREF) com inserção lock-free: coluna de pivô reivindicada via CAS atômico, linhas write-once e redução por max-heap de funil inteligente. Mantém-se esparsa recusando trabalho."
        : "Bucket-indexed Gaussian elimination held in reduced row echelon form (RREF) with lock-free insertion: pivot column claimed via atomic CAS, write-once rows, and smart-funnel max-heap row reduction. Stays sparse by refusing work."
    },
    {
      phase: "Phase 3",
      name: "Border Basis Prolongation & Phantom Sweep",
      defaultState: "Configurable",
      description: language === 'pt'
        ? "Prolongamento de grau 3 com loop de fechamento para sistemas que a cascata de grau 2 não finaliza. Extrai fantasmas (membros do ideal de grau 2 deriváveis apenas via cancelamento de grau 3) antes do fechamento da base quociente."
        : "Degree-3 prolongation plus a closure loop for systems the degree-2 cascade cannot finish. Extracts phantoms (degree-2 ideal members derivable only via degree-3 cancellation) before quotient basis closure."
    },
    {
      phase: "Phase 4",
      name: "Condensation & Fast Exhaustive Search (FES)",
      defaultState: "Configurable",
      description: language === 'pt'
        ? "Condensa o sistema residual sobre variáveis livres não resolvidas e executa busca exaustiva paralela bit-sliced sobre o espaço residual tratável."
        : "Condenses the residual system onto unresolved free variables and performs highly parallel bit-sliced exhaustive search over the tractable residual space."
    }
  ];

  const applications = [
    {
      title: t('app.eda_title'),
      subtitle: t('app.eda_sub'),
      desc: t('app.eda_desc'),
      icon: Cpu
    },
    {
      title: t('app.diffuse_title'),
      subtitle: t('app.diffuse_sub'),
      desc: t('app.diffuse_desc'),
      icon: GitMerge
    },
    {
      title: t('app.guardrails_title'),
      subtitle: t('app.guardrails_sub'),
      desc: t('app.guardrails_desc'),
      icon: ShieldCheck
    },
    {
      title: t('app.enumeration_title'),
      subtitle: t('app.enumeration_sub'),
      desc: t('app.enumeration_desc'),
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
              {t('solver.badge')}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter text-white">
              {t('solver.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              {t('solver.subtitle')}
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

          <div className="relative w-full">
            <GF2SolverAnimation />
          </div>
        </motion.div>

        {/* Industrial Applications Grid (Explicitly including EDA Circuit Testing & Diffuse SAT Solving) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              {t('solver.apps_badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {t('solver.apps_title')}
            </h2>
            <p className="text-white/50 text-base">
              {language === 'pt' 
                ? 'Aplicações industriais e criptográficas verificadas deterministicamente através da álgebra em corpos finitos.'
                : 'Industrial and cryptographic domains decided deterministically through finite field polynomial resolution.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, idx) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold block mb-1">
                    {app.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                    {app.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{language === 'pt' ? 'Suportado no binário C++ do Quasilinear' : 'Native C++ Engine Capability'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dedicated Section: Hybrid CDCL Algebraic Engine */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-muted font-bold block">
                {t('hybrid.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                {t('hybrid.title')}
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                {t('hybrid.desc')}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                  <span>{t('hybrid.p1')}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{t('hybrid.p2')}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs text-white/70">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">CryptoMiniSat CDCL</span>
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">Lock-Free RREF</span>
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">Atomic CAS Pivoting</span>
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">XOR Equation Learning</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/80 rounded-2xl border border-white/10 p-6 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-white/40 pb-2 border-b border-white/10">
                <span>hybrid_engine_rref.cpp</span>
                <span className="text-brand-muted">C++</span>
              </div>
              <pre className="text-white/80 leading-relaxed overflow-x-auto whitespace-pre font-mono">
{`// Hybrid CDCL + RREF Gaussian Step
void HybridEngine::run_bounded_cdcl(
    Netlist& netlist, 
    int conflict_budget) 
{
  cmsat_solver.set_max_conflicts(conflict_budget);
  auto status = cmsat_solver.solve();
  
  // Extract Level-0 unit assignments
  for (const auto& unit : cmsat_solver.get_zero_units()) {
    netlist.insert_linear_equality(unit.var, unit.val);
  }
  
  // Extract learned XOR relations
  for (const auto& xor_rel : cmsat_solver.get_learned_xors()) {
    netlist.add_xor_constraint(xor_rel);
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Multi-Stage Pipeline Interactive Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              ALGEBRAIC ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {t('solver.pipeline_title')}
            </h2>
            <p className="text-white/50 text-base">
              {t('solver.pipeline_desc')}
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

        {/* Embedded Full Product Documentation Component */}
        <ProductDocs />
      </div>
    </div>
  );
}
