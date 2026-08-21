import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Binary, 
  Cpu, 
  ShieldCheck, 
  FileCode, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  GitMerge, 
  Lock, 
  Search, 
  Wrench,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface DocModule {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  icon: any;
  bullets: string[];
  codeSample?: string;
  specTable?: { label: string; value: string }[];
}

export default function ProductDocs() {
  const { t, language } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<string>("circuit-algebra");

  const docModules: DocModule[] = [
    {
      id: "circuit-algebra",
      titleKey: "docs.mod1_title",
      subtitleKey: "docs.mod1_sub",
      descKey: "docs.mod1_desc",
      icon: FileCode,
      bullets: [
        language === 'pt' 
          ? "Mapeamento topológico de regras Colang e esquemas MCP em portas booleanas (AND, XOR, INV)"
          : "Topological mapping of Colang rules and MCP schemas into Boolean gate netlists (AND, XOR, INV)",
        language === 'pt'
          ? "Redução polinomial para sistemas quadráticos esparsos sobre o corpo binário GF(2) / F2"
          : "Polynomial reduction to sparse quadratic equation systems over the binary finite field GF(2) / F2",
        language === 'pt'
          ? "Formulação formal da hipótese de ataque: Ação Protegida = 1 ∧ Pré-condição de Segurança = 0"
          : "Formal attack hypothesis formulation: Protected Action = 1 ∧ Safety Precondition = 0",
        language === 'pt'
          ? "Compactação contígua de espaço de índices e eliminação de variáveis redundantes"
          : "Contiguous index-space variable compaction and redundant monomial pruning"
      ],
      codeSample: `# Colang Rulebook → GF(2) Polynomial Encoding
define flow trade_gate
  user request_trade
  if $four_eyes_approved
    bot book_trade

# Translated GF(2) System:
# x1: request_trade, x2: four_eyes_approved, x3: book_trade
# (x1 * x2) + x3 = 0
# Attack Hypothesis: x3 = 1, x2 = 0`,
      specTable: [
        { label: language === 'pt' ? "Formato de Entrada" : "Input Formats", value: "Colang (.co), Bristol Netlists, MCP Schemas" },
        { label: language === 'pt' ? "Representação Interna" : "Internal Representation", value: "Sparse GF(2) Polynomial System" },
        { label: language === 'pt' ? "Grau Máximo" : "Max Monomial Degree", value: "Degree-2 (Quadratic) / Degree-3 Extension" }
      ]
    },
    {
      id: "multi-stage-pipeline",
      titleKey: "docs.mod2_title",
      subtitleKey: "docs.mod2_sub",
      descKey: "docs.mod2_desc",
      icon: Layers,
      bullets: [
        language === 'pt'
          ? "Fase 0 (CDCL Bounded): O motor CDCL extrai verdades de Nível-0 e relações XOR aprendidas sob orçamento de conflito"
          : "Phase 0 (Bounded CDCL): The CDCL engine extracts Level-0 truths and learned XOR relations under conflict budget",
        language === 'pt'
          ? "Fase 1 (Expansão Linear): Garante propriedade de expansão e compacta espaço contíguo de variáveis"
          : "Phase 1 (Linear Expansion): Enforces variable expandability property across all indices",
        language === 'pt'
          ? "Fase 2 (Loop Evolucionário): Eliminação gaussiana lock-free em RREF com CAS atômico para reivindicação de pivô"
          : "Phase 2 (Evolutionary Cascade): Lock-free bucketed Gaussian elimination in RREF with atomic CAS pivot claiming",
        language === 'pt'
          ? "Fase 3 & 4: Prolongamento de base de borda grau-3 com varredura fantasma e busca exaustiva rápida (FES)"
          : "Phases 3 & 4: Degree-3 border basis prolongation with phantom sweep & bit-sliced fast exhaustive search (FES)"
      ],
      codeSample: `// Core Engine Invocation (C++)
Quasilinear solver;
solver.configure({
  .enable_bounded_cdcl = true,
  .conflict_budget = 50000,
  .lockfree_rref_buckets = 64,
  .degree3_prolongation = true
});
auto result = solver.solve(gf2_circuit_netlist);`,
      specTable: [
        { label: language === 'pt' ? "Linguagem e Runtime" : "Language & Runtime", value: "C++ (Optimized SIMD / Multithreaded)" },
        { label: language === 'pt' ? "Escalabilidade de Memória" : "Memory Scaling", value: "O(n^1.93) Cascade Footprint" },
        { label: language === 'pt' ? "Sincronização" : "Synchronization", value: "Lock-Free CAS Row Insertion" }
      ]
    },
    {
      id: "verdicts-certificates",
      titleKey: "docs.mod3_title",
      subtitleKey: "docs.mod3_sub",
      descKey: "docs.mod3_desc",
      icon: CheckCircle2,
      bullets: [
        language === 'pt'
          ? "Veredito UNSAT: Prova irrefutável de impossibilidade abrangendo todas as 2^N combinações contextuais"
          : "UNSAT Verdict: Mathematical proof of impossibility covering all 2^N context combinations",
        language === 'pt'
          ? "Certificado DAG Autocontido: Sequência post-order de operações INSERT, ADD, MULTIPLY"
          : "Self-Contained DAG Certificate: Post-order sequence of INSERT, ADD, and MULTIPLY operations",
        language === 'pt'
          ? "Verificação Independente: Último passo retido para que o auditor re-derive 0 = 1 em script de 1 página"
          : "Independent Audit Replay: Final step withheld so third-party auditor re-derives 0 = 1 in a 1-page script",
        language === 'pt'
          ? "Veredito SAT / Trace: Emissão de contra-exemplo exato revelando a sequência de contexto que dispara a brecha"
          : "SAT / Trace Verdict: Emits exact counterexample context vector proving reachable policy bypass"
      ],
      codeSample: `// Self-Contained UNSAT Derivation DAG
{
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
  "final_step": { "op": "ADD", "inputs": [20, 3] } // Derives 0 = 1
}`,
      specTable: [
        { label: language === 'pt' ? "Garantia de Prova" : "Proof Soundness", value: "Deterministic Algebraic Refutation" },
        { label: language === 'pt' ? "Revisor de Auditoria" : "Audit Verifier", value: "Zero-dependency Python/C++ Replayer (<100 lines)" },
        { label: language === 'pt' ? "Formato de Exportação" : "Export Formats", value: "JSON Proof DAG, LRAT / DRAT Compatible" }
      ]
    },
    {
      id: "ai-guardrail-verification",
      titleKey: "docs.mod4_title",
      subtitleKey: "docs.mod4_sub",
      descKey: "docs.mod4_desc",
      icon: ShieldCheck,
      bullets: [
        language === 'pt'
          ? "Verificação de Guardrails NVIDIA NeMo (Colang) e Gates de Despacho MCP"
          : "Verification of NVIDIA NeMo Guardrails (Colang) and MCP Tool Dispatch Gates",
        language === 'pt'
          ? "Eliminação de Vulnerabilidades de Bypass por Acumulação OR em regras sobrepostas"
          : "Eliminates OR-accumulation bypass vulnerabilities across overlapping sub-threshold exemptions",
        language === 'pt'
          ? "Síntese Automatizada de Patches com Pontuação de Disrupção Semântica (SDS) para reparo mínimo"
          : "Automated Semantic Disruption Score (SDS) patch synthesis for minimal-disruption guardrail repairs",
        language === 'pt'
          ? "Certificação de conformidade regulatória (FCA Consumer Duty, COBS, Basileia III, EU AI Act)"
          : "Regulatory compliance certification (FCA Consumer Duty, COBS, Basel III, EU AI Act standards)"
      ],
      codeSample: `# Automated Colang Patch Output (Minimal Disruption)
# Target: Prevent ungated book_trade execution
# Synthesized constraint (SDS Score = 2):

allow 'book_trade' only when:
  $four_eyes_approved or not $sub_threshold_eligible

# Resulting Verification: Verified UNSAT (5-step derivation receipt)`,
      specTable: [
        { label: language === 'pt' ? "Frameworks Suportados" : "Supported Frameworks", value: "NeMo Guardrails, MCP (Model Context Protocol), LangChain" },
        { label: language === 'pt' ? "Reparo Automático" : "Automated Repair", value: "SDS-Ranked Minimal Colang Patch Generator" },
        { label: language === 'pt' ? "Cobertura de Espaço" : "Space Coverage", value: "Exhaustive across all 2^N Context Combinations" }
      ]
    }
  ];

  const current = docModules.find(m => m.id === activeDoc) || docModules[0];

  return (
    <section id="product-documentation" className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
            {t('docs.badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            {t('docs.title')}
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            {t('docs.subtitle')}
          </p>
        </div>

        {/* 4 Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {docModules.map((m) => {
            const Icon = m.icon;
            const isSelected = activeDoc === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveDoc(m.id)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-white text-black border-white shadow-xl scale-[1.02]' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-black text-white' : 'bg-white/10 text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isSelected ? 'text-black/60' : 'text-brand-muted'
                  }`}>
                    {m.id.replace('-', ' ')}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base leading-snug">{t(m.titleKey)}</h3>
                  <p className={`text-xs mt-1 truncate ${isSelected ? 'text-black/70' : 'text-white/40'}`}>
                    {t(m.subtitleKey)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Module Detailed View */}
        <motion.div 
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Summary, Key Principles & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <current.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-muted uppercase font-bold tracking-wider">
                    {t(current.subtitleKey)}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {t(current.titleKey)}
                  </h3>
                </div>
              </div>

              <p className="text-white/70 text-base leading-relaxed">
                {t(current.descKey)}
              </p>

              {/* Functional Principles */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-white/50">
                  {language === 'pt' ? 'Capacidades e Princípios Estruturais' : 'Core Architectural Capabilities'}
                </h4>
                <ul className="space-y-2.5">
                  {current.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spec Table */}
              {current.specTable && (
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-white/50 mb-3">
                    {language === 'pt' ? 'Especificações do Módulo' : 'Technical Specifications'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    {current.specTable.map((s, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-white/40 block text-[11px] mb-1">{s.label}</span>
                        <span className="text-white font-bold text-xs">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Technical Code Example & Schema */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50 px-1">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-muted" />
                  {language === 'pt' ? 'Demonstração de Sintaxe / Saída' : 'Syntax & Output Trace'}
                </span>
                <span className="text-[11px] text-brand-muted">C++ / GF(2) Engine</span>
              </div>

              <div className="bg-black/90 rounded-2xl border border-white/10 p-5 font-mono text-xs overflow-x-auto text-white/80">
                <pre className="leading-relaxed whitespace-pre font-mono text-white/90">
                  {current.codeSample}
                </pre>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-white/60 space-y-1.5">
                <div className="flex justify-between">
                  <span>Pipeline Stage:</span>
                  <span className="text-white font-bold">{current.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Engine Binary:</span>
                  <span className="text-emerald-400 font-bold">Quasilinear (C++)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
