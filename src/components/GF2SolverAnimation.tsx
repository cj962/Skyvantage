import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Binary, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Activity, 
  RefreshCw, 
  Play, 
  Pause, 
  Terminal,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GF2SolverAnimation() {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  const [activeTab, setActiveTab] = useState<'netlist' | 'poly' | 'matrix' | 'proof'>('matrix');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [pulseKey, setPulseKey] = useState<number>(0);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto-cycle tabs if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'netlist') return 'poly';
        if (prev === 'poly') return 'matrix';
        if (prev === 'matrix') return 'proof';
        return 'netlist';
      });
      setPulseKey((k) => k + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Particle background canvas for high-tech aesthetic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing sparse field GF(2) bits
    const particles = Array.from({ length: 36 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      val: Math.random() > 0.5 ? '1' : '0',
      opacity: Math.random() * 0.5 + 0.1,
      size: Math.random() * 2 + 1
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective lines for nearby GF(2) nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 75)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles & binary digits
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.6})`;
        ctx.font = '9px monospace';
        ctx.fillText(p.val, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Matrix cells simulation for GF(2) RREF elimination
  const matrixRows = [
    { id: "R1", pivot: 0, bits: [1, 0, 1, 0, 0, 1, 0, 0], label: "x₁ ⊕ x₃ ⊕ x₆ = 0" },
    { id: "R2", pivot: 1, bits: [0, 1, 1, 1, 0, 0, 1, 0], label: "x₂ ⊕ x₃ ⊕ x₄ ⊕ x₇ = 0" },
    { id: "R3", pivot: 2, bits: [0, 0, 1, 0, 1, 0, 0, 0], label: "x₃ · x₅ ⊕ x₈ = 0 (Quad)" },
    { id: "R4", pivot: 3, bits: [0, 0, 0, 1, 0, 1, 1, 0], label: "x₄ ⊕ x₆ ⊕ x₇ = 0" },
    { id: "R5", pivot: 4, bits: [0, 0, 0, 0, 1, 0, 1, 0], label: "x₅ ⊕ x₇ = 0" },
    { id: "R6", pivot: 7, bits: [0, 0, 0, 0, 0, 0, 0, 1], label: "0 = 1 [CONTRADICTION]", isContradiction: true },
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-white/15 bg-gradient-to-b from-white/[0.07] to-black/90 p-5 sm:p-7 shadow-2xl">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
      />

      {/* Top Header & HUD Stats */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 text-white shadow-inner">
            <Binary className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                GF(2) NETLIST TRANSLATION ENGINE
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-muted">
              {isPt ? 'Compilação de Portas Booleanas → RREF Lock-Free' : 'Boolean Gate Netlist → Sparse RREF Cascade'}
            </span>
          </div>
        </div>

        {/* Play / Pause / Reset Controls */}
        <div className="flex items-center gap-1.5 bg-black/60 rounded-xl p-1 border border-white/10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title={isPlaying ? "Pause auto-cycle" : "Play auto-cycle"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              setActiveTab('netlist');
              setPulseKey((k) => k + 1);
            }}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Restart animation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mode / Phase Navigator */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5 sm:gap-2 my-4">
        {[
          { id: 'netlist', label: isPt ? '1. Netlist' : '1. Netlist', icon: Cpu },
          { id: 'poly', label: isPt ? '2. Álgebra GF(2)' : '2. GF(2) Poly', icon: Zap },
          { id: 'matrix', label: isPt ? '3. RREF Cascata' : '3. RREF Cascade', icon: Layers },
          { id: 'proof', label: isPt ? '4. Prova UNSAT' : '4. UNSAT Proof', icon: CheckCircle2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setIsPlaying(false);
              }}
              className={`py-2 px-1.5 sm:px-3 rounded-xl font-mono text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                isSelected 
                  ? 'bg-white text-black border-white shadow-lg scale-[1.02]' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 min-h-[260px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* TAB 1: NETLIST GRAPH WITH FLOWING SIGNALS */}
          {activeTab === 'netlist' && (
            <motion.div
              key="stage-netlist"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-white/50 px-1">
                <span>{isPt ? 'Topologia de Portas Bristol (AND, XOR, INV)' : 'Bristol Netlist Topological Graph'}</span>
                <span className="text-emerald-400 font-bold">256 Gates / 410 Wires</span>
              </div>

              {/* Dynamic SVG Gate Graph */}
              <div className="p-3 sm:p-4 rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden">
                <svg viewBox="0 0 400 160" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2C6E49" />
                      <stop offset="50%" stopColor="#48CAE4" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Connecting Wires */}
                  <path d="M 60 40 L 140 40 L 140 60 L 170 60" stroke="#48CAE4" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 3" />
                  <path d="M 60 80 L 110 80 L 110 70 L 170 70" stroke="#48CAE4" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 3" />
                  <path d="M 60 120 L 140 120 L 140 100 L 170 100" stroke="#A03E2F" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 3" />
                  <path d="M 230 65 L 290 65 L 290 75 L 310 75" stroke="#FFFFFF" strokeWidth="1.5" fill="none" filter="url(#glow)" />
                  <path d="M 230 105 L 290 105 L 290 85 L 310 85" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />

                  {/* Input Nodes */}
                  <g transform="translate(10, 25)">
                    <rect width="50" height="26" rx="6" fill="#14181F" stroke="#2C6E49" strokeWidth="1" />
                    <text x="25" y="16" fill="#2C6E49" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">x₁ [REQ]</text>
                  </g>
                  <g transform="translate(10, 68)">
                    <rect width="50" height="26" rx="6" fill="#14181F" stroke="#2C6E49" strokeWidth="1" />
                    <text x="25" y="16" fill="#2C6E49" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">x₂ [AUTH]</text>
                  </g>
                  <g transform="translate(10, 110)">
                    <rect width="50" height="26" rx="6" fill="#14181F" stroke="#A03E2F" strokeWidth="1" />
                    <text x="25" y="16" fill="#A03E2F" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">x₃ [ATTACK]</text>
                  </g>

                  {/* Gate 1: AND GATE */}
                  <g transform="translate(170, 48)">
                    <rect width="60" height="32" rx="8" fill="#1E2633" stroke="#48CAE4" strokeWidth="1.2" />
                    <text x="30" y="16" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AND (·)</text>
                    <text x="30" y="26" fill="#48CAE4" fontSize="7" fontFamily="monospace" textAnchor="middle">x₁ · x₂ = w₁</text>
                  </g>

                  {/* Gate 2: XOR GATE */}
                  <g transform="translate(170, 92)">
                    <rect width="60" height="32" rx="8" fill="#1E2633" stroke="#A03E2F" strokeWidth="1.2" />
                    <text x="30" y="16" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">XOR (⊕)</text>
                    <text x="30" y="26" fill="#A03E2F" fontSize="7" fontFamily="monospace" textAnchor="middle">x₃ ⊕ w₁ = w₂</text>
                  </g>

                  {/* Gate 3: OUTPUT DISPATCH GATE */}
                  <g transform="translate(310, 60)">
                    <rect width="80" height="40" rx="8" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="40" y="20" fill="#000000" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DISPATCH</text>
                    <text x="40" y="32" fill="#000000" fontSize="8" fontFamily="monospace" textAnchor="middle">book_trade = 1</text>
                  </g>

                  {/* Flowing animated packet */}
                  <circle cx="100" cy="40" r="3" fill="#48CAE4">
                    <animate attributeName="cx" values="60;140" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="80" r="3" fill="#FFFFFF">
                    <animate attributeName="cx" values="230;310" dur="1s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-white/70 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-muted" />
                  {isPt ? 'Portas booleanas convertidas em monômios quadráticos' : 'Logic gates mapped to quadratic polynomial monomials'}
                </span>
                <span className="text-white font-bold">Bristol → Poly (O(N))</span>
              </div>
            </motion.div>
          )}

          {/* TAB 2: POLYNOMIAL EQUATIONS SYSTEM OVER GF(2) */}
          {activeTab === 'poly' && (
            <motion.div
              key="stage-poly"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-white/50 px-1">
                <span>{isPt ? 'Sistema de Polinômios Quadráticos Esparsos sobre 𝔽₂' : 'Sparse Quadratic Polynomial System over GF(2)'}</span>
                <span className="text-brand-muted font-bold">F₂ = &#123;0, 1&#125;</span>
              </div>

              <div className="p-4 rounded-2xl bg-black/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-emerald-400 font-bold">f₁(x):</span>
                  <span className="text-white">x₁ · x₂ ⊕ x₄ = 0</span>
                  <span className="text-[10px] text-white/40">{isPt ? '[Porta AND]' : '[AND Gate]'}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-cyan-400 font-bold">f₂(x):</span>
                  <span className="text-white">x₂ ⊕ x₃ ⊕ x₅ = 0</span>
                  <span className="text-[10px] text-white/40">{isPt ? '[Porta XOR]' : '[XOR Gate]'}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-brand-muted font-bold">f₃(x):</span>
                  <span className="text-white">x₄ · x₅ ⊕ x₆ = 0</span>
                  <span className="text-[10px] text-white/40">{isPt ? '[Cross-Product]' : '[Cross-Product]'}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-red-950/40 border border-red-500/20">
                  <span className="text-red-400 font-bold">f₄(x):</span>
                  <span className="text-white font-bold">x₆ = 1 ∧ x₂ = 0</span>
                  <span className="text-[10px] text-red-400">{isPt ? '[Hipótese de Bypass]' : '[Attack Goal]'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-white/60 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span>Field Properties: <b>1 ⊕ 1 = 0</b>, <b>x² = x</b></span>
                <span className="text-emerald-400 font-bold">Zero Overhead Multiplication</span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: DYNAMIC MATRIX & LOCK-FREE CAS RREF CASCADE */}
          {activeTab === 'matrix' && (
            <motion.div
              key="stage-matrix"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-white/50 px-1">
                <span>{isPt ? 'Eliminação Gaussiana Lock-Free em RREF (CAS Atômico)' : 'Lock-Free Bucketed RREF Cascade (Atomic CAS)'}</span>
                <span className="text-emerald-400 font-bold">Threads: 16 SIMD</span>
              </div>

              {/* Bit Matrix Grid */}
              <div className="p-3 sm:p-4 rounded-2xl bg-black/80 border border-white/10 overflow-x-auto">
                <div className="space-y-1.5 min-w-[340px]">
                  {matrixRows.map((row, idx) => (
                    <div 
                      key={row.id}
                      className={`flex items-center justify-between p-1.5 rounded-lg border transition-all ${
                        row.isContradiction 
                          ? 'bg-red-950/40 border-red-500/40 text-red-300' 
                          : idx === 2
                            ? 'bg-white/10 border-cyan-400/40 text-white'
                            : 'bg-white/[0.03] border-white/5 text-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-brand-muted font-bold w-5">{row.id}</span>
                        <div className="flex gap-1 font-bold tracking-widest text-xs">
                          {row.bits.map((bit, bIdx) => (
                            <span 
                              key={bIdx}
                              className={`w-5 h-5 flex items-center justify-center rounded text-[11px] ${
                                bIdx === row.pivot && bit === 1 
                                  ? 'bg-emerald-500 text-black font-extrabold shadow-sm' 
                                  : bit === 1 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white/20'
                              }`}
                            >
                              {bit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-[10px] text-right pl-2 truncate font-mono">
                        {row.isContradiction ? (
                          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold border border-red-500/30">
                            0 = 1 CONTRADICTION
                          </span>
                        ) : (
                          <span className="text-white/50">{row.label}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-white/40 block text-[10px]">Matrix Rank</span>
                  <span className="text-white font-bold">64 / 64 Complete</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-white/40 block text-[10px]">Sparsity Refusal</span>
                  <span className="text-emerald-400 font-bold">98.4% Pruned</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-white/40 block text-[10px]">Scaling</span>
                  <span className="text-cyan-400 font-bold">O(N^1.93) Memory</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: SOUND UNSAT PROOF RECEIPT */}
          {activeTab === 'proof' && (
            <motion.div
              key="stage-proof"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="space-y-3 font-mono text-xs"
            >
              <div className="flex items-center justify-between text-white/50 px-1">
                <span>{isPt ? 'Certificado de Derivação DAG Autocontido' : 'Self-Contained UNSAT Derivation DAG'}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED UNSAT
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/90 border border-emerald-500/30 font-mono text-xs space-y-2 text-white/90">
                <div className="text-[11px] text-emerald-400 pb-1 border-b border-white/10 flex justify-between">
                  <span>proof_certificate_dag.json</span>
                  <span>5 Steps to 0 = 1</span>
                </div>
                <pre className="text-white/80 leading-relaxed text-[11px] overflow-x-auto whitespace-pre">
{`{
  "verdict": "UNSAT",
  "receipt": "self_contained_dag",
  "refutation_step": {
    "op": "ADD_XOR",
    "inputs": [Row_20, Row_3],
    "yields": "0 = 1"
  },
  "soundness": "Replayable via zero-dependency script"
}`}
                </pre>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center justify-between">
                <span>{isPt ? 'Garantia Total: Impossível disparar em todos os 2^N estados.' : 'Sound Guarantee: Impossible to bypass across all 2^N contexts.'}</span>
                <span className="font-bold text-white">100% Certified</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Live Status Bar */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>{isPt ? 'Motor C++ Quasilinear Ativo' : 'Quasilinear C++ Engine Active'}</span>
        </span>
        <span className="text-white/40">
          {isPt ? 'Modo de Resolução Algébrica' : 'Algebraic Resolution Mode'}
        </span>
      </div>
    </div>
  );
}
