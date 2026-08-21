import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [activePhase, setActivePhase] = useState<number>(3); // Phase 2 by default

  const isPt = language === 'pt';

  const phases = [
    {
      phase: "PHASE 0",
      name: isPt ? "CDCL Bounded Rápido" : "Fast Bounded CDCL",
      defaultState: isPt ? "Opcional (Desativado por Padrão)" : "Off by Default (Configurable)",
      primitive: isPt ? "Motor de Busca CDCL Bounded com Limite Estrito de Conflitos" : "Bounded CDCL Engine with Strict Effort Limit",
      bounds: isPt ? "Limitado pelo orçamento de conflitos" : "Bounded by conflict budget (milliseconds)",
      description: isPt 
        ? 'Entrega o problema a um mecanismo de busca convencional sob um limite estrito de esforço. A busca se destaca em uma coisa: encontrar um exemplo concreto rapidamente; assim, quando a pergunta é "isto pode ser contornado e como?", a situação exata retorna em milissegundos. Seu "sim" é verificado de forma independente posteriormente; seu "não" é aceito pela palavra do mecanismo de busca. Se o limite expirar sem decisão, tudo o que foi aprendido é passado para as fases posteriores, garantindo que nenhum tempo seja desperdiçado.'
        : 'Hands the problem to a conventional search engine under a strict effort limit. Search excels at one thing: finding a concrete example fast, so when the question is "can this be got round, and how", the exact situation comes back in milliseconds. Its "yes" is checked independently afterwards; its "no" is taken on the search engine\'s word. If the limit expires undecided, everything learned passes to the later phases, so no time is wasted.'
    },
    {
      phase: "PHASE 1",
      name: isPt ? "Expansão de Restrições Lineares" : "Expansion of Linear Constraints",
      defaultState: isPt ? "Sempre Ativado (Mandatório)" : "Always On (Mandatory)",
      primitive: isPt ? "Parsing Topológico de Netlist e Compactação de Variáveis Lineares" : "Topological Netlist Parsing & Variable Compaction",
      bounds: isPt ? "Complexidade linear O(n)" : "Linear complexity O(n)",
      description: isPt
        ? "Pega as relações mais simples do sistema, aquelas que envolvem variáveis únicas, e deduz tudo o que decorre diretamente delas. Esta é a informação mais barata disponível e constrói a posição inicial a partir da qual todas as fases posteriores trabalham. Sempre é executada e não pode ser desativada: sem ela, as fases posteriores não têm nada para expandir."
        : "Takes the simplest relations in the system, the ones involving single variables, and works out everything that follows directly from them. This is the cheapest information available, and it builds the starting position every later phase works from. It always runs and cannot be switched off: without it, the phases downstream have nothing to expand."
    },
    {
      phase: "PHASE 1.5",
      name: isPt ? "Heurísticas de Expansão de Rank" : "Rank Expansion Heuristics",
      defaultState: isPt ? "Opcional (Desativado por Padrão)" : "Off by Default (Optional)",
      primitive: isPt ? "Augmentação de Produto Cruzado de Monômios Quadráticos" : "Quadratic Monomial Cross-Product Augmentation",
      bounds: isPt ? "Heurística de aceleração inicial" : "Heuristic early rank acceleration",
      description: isPt
        ? "Um acelerador opcional, desativado por padrão. Ele emparelha relações que o solver já possui, combina cada par e multiplica por uma variável compartilhada, produzindo novos fatos independentes mais cedo do que o método sistemático os alcançaria. Em sistemas onde o progresso inicial é lento, isso encurta consideravelmente a escalada. É uma heurística e não uma garantia, razão pela qual é opcional: em alguns sistemas adiciona aritmética sem acrescentar informação."
        : "An optional accelerator, off by default. It pairs up relations the solver already holds, combines each pair and multiplies through by a shared variable, producing new independent facts sooner than the systematic method reaches them. On systems where progress is slow to start, this shortens the climb considerably. It is a heuristic rather than a guarantee, which is why it is optional: on some systems it adds arithmetic without adding information."
    },
    {
      phase: "PHASE 2",
      name: isPt ? "Expansão de Grau 2" : "Degree 2 Expansion",
      defaultState: isPt ? "Ativado por Padrão (Núcleo)" : "On by Default (Core)",
      primitive: isPt ? "Eliminação Gaussiana Lock-Free em Baldes RREF com Pivô CAS Atômico" : "Lock-Free CAS Bucket Gaussian Elimination in RREF",
      bounds: isPt ? "Memória O(n^1.93), Tempo O(n^2.57) [Mediana 96.9%]" : "Memory O(n^1.93), Time O(n^2.57) [96.9% Median Reachability]",
      description: isPt
        ? "O principal cavalo de batalha e a única fase opcional ativada por padrão. Ele multiplica repetidamente as relações que possui por variáveis únicas e incorpora os resultados de volta, parando quando nada de novo surge. Nos sistemas medidos, atinge de 90% a 100% do espaço alcançável, com mediana de 96,9%. A maioria das questões é resolvida aqui. Cada etapa é registrada, de modo que a resposta chega como uma derivação que qualquer um pode reproduzir, em vez de um veredito baseado em confiança cega."
        : "The main workhorse, and the only optional phase that is on by default. It repeatedly multiplies the relations it holds by single variables and folds the results back in, stopping when nothing new appears. On the systems measured it reaches 90-100% of the reachable space, median 96.9%. Most questions are settled here. Every step is recorded, so the answer arrives as a derivation somebody else can replay rather than a verdict to be taken on trust."
    },
    {
      phase: "PHASE 3",
      name: isPt ? "Prolongamento de Base de Borda e Fechamento Algébrico Completo" : "Border Basis Prolongation & Full Algebraic Closure",
      defaultState: isPt ? "Opcional (Configurável)" : "Configurable",
      primitive: isPt ? "Prolongamento de Grau 3 com Varredura e Cancelamento de Fantasmas" : "Degree-3 Prolongation & Phantom Ideal Cancellation",
      bounds: isPt ? "Memória Θ(n·d₂), Tempo Θ(n³)" : "Memory Θ(n·d₂), Time Θ(n³)",
      description: isPt
        ? "Leva a expansão além dos pares até o fechamento completo. Onde as fases anteriores só podem relatar que ficaram sem espaço, esta resolve a questão — e faz mais do que encontrar uma única resposta: determina o conjunto completo de respostas e prova que não existem outras. Essa é a diferença entre encontrar um caminho através de uma política e encerrar a questão em definitivo. É a fase mais cara, e o custo sobe acentuadamente com o tamanho."
        : "Pushes the expansion beyond pairs to its full closure. Where the earlier phases can only report that they ran out of room, this one settles the question - and does more than find a single answer: it determines the complete set of answers and proves there are no others. That is the difference between finding a way through a policy and closing the question. It is the most expensive phase, and cost climbs steeply with size."
    },
    {
      phase: "PHASE 4",
      name: isPt ? "Condensação e Busca Exaustiva Rápida" : "Condensation and Fast Exhaustive Search",
      defaultState: isPt ? "Opcional (Configurável)" : "Configurable",
      primitive: isPt ? "Busca Exaustiva Paralela Bit-sliced em ≤ 24 Variáveis Residuais" : "Bit-sliced Parallel Fast Exhaustive Search (FES ≤ 24 vars)",
      bounds: isPt ? "Resolução exaustiva do espaço residual" : "Exhaustive brute-force resolution on small residuals",
      description: isPt
        ? "Executada por último, sobre o que o fechamento deixou indecidido. Primeiro encolhe o problema remanescente eliminando tudo o que já foi determinado e, se o que restar for pequeno o suficiente (atualmente 24 variáveis ou menos), testa diretamente todas as possibilidades restantes. A força bruta é a ferramenta certa quando o problema é pequeno, e é isso que fecha a última lacuna. Cada execução publica o tamanho medido e se a busca foi realizada, mantendo a tentativa registrada."
        : "Runs last, on whatever the closure left undecided. It first shrinks the remaining problem by eliminating everything already determined, then, if what survives is small enough (currently twenty-four variables or fewer), tries every remaining possibility directly. Brute force is the right tool once the problem is small, and this is what closes the last gap. Every run publishes the size it measured and whether the search ran, so a declined attempt is on the record."
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
                <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10">Hybrid CDCL</span>
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
  cdcl_solver.set_max_conflicts(conflict_budget);
  auto status = cdcl_solver.solve();
  
  // Extract Level-0 unit assignments
  for (const auto& unit : cdcl_solver.get_zero_units()) {
    netlist.insert_linear_equality(unit.var, unit.val);
  }
  
  // Extract learned XOR relations
  for (const auto& xor_rel : cdcl_solver.get_learned_xors()) {
    netlist.add_xor_constraint(xor_rel);
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Multi-Stage Pipeline Interactive Breakdown (Matching diagram.png) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Phase Selector (Vertical List of Dark/White Cards) */}
            <div className="lg:col-span-5 space-y-3.5">
              {phases.map((p, idx) => {
                const isActive = activePhase === idx;
                return (
                  <div key={p.phase} className="space-y-3">
                    <button
                      onClick={() => setActivePhase(idx)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-200 flex items-center justify-between group border ${
                        isActive 
                          ? 'bg-white text-black border-white shadow-2xl scale-[1.01]' 
                          : 'bg-[#121214] border-white/10 text-white/80 hover:bg-[#1a1a1e] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-widest block ${
                          isActive ? 'text-black/60' : 'text-zinc-400'
                        }`}>
                          {p.phase}
                        </span>
                        <span className="text-sm sm:text-base font-bold block leading-snug">
                          {p.name}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isActive ? 'bg-black/10 text-black' : 'bg-white/5 text-white/40 group-hover:text-white group-hover:translate-x-0.5'
                      }`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Mobile-only in-place active phase detail (< lg screens) */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="block lg:hidden glass-panel p-6 rounded-2xl border border-white/15 bg-zinc-950/90 my-2 text-white"
                      >
                        <div className="flex items-center justify-between mb-3 text-xs font-mono">
                          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white font-bold">
                            {p.phase}
                          </span>
                          <span className="text-zinc-400">
                            {p.defaultState}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{p.name}</h4>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {p.description}
                        </p>
                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-zinc-300 space-y-1.5">
                          <div className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Engine Primitive</div>
                          <div className="text-white font-semibold">{p.primitive}</div>
                          <div className="text-emerald-400 text-[10px]">{p.bounds}</div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Active Phase Details Card (>= lg screens) */}
            <div className="hidden lg:flex lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 bg-gradient-to-b from-[#16161a] to-black min-h-[380px] flex-col justify-between shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phases[activePhase].phase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white text-black shadow-md">
                      {phases[activePhase].phase}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {phases[activePhase].defaultState}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                      {phases[activePhase].name}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-base sm:text-lg font-sans">
                      {phases[activePhase].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest block">
                    {isPt ? 'PRIMITIVA PRINCIPAL' : 'UNDERLYING PRIMITIVE'}
                  </span>
                  <span className="text-white font-bold block leading-snug">
                    {phases[activePhase].primitive}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest block">
                    {isPt ? 'LIMITES DE COMPLEXIDADE' : 'COMPLEXITY BOUNDS'}
                  </span>
                  <span className="text-emerald-400 font-bold block leading-snug">
                    {phases[activePhase].bounds}
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
