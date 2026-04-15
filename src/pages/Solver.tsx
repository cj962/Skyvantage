import { motion } from "motion/react";
import { Shield, Lock, Cpu, Activity, Binary, CheckCircle2, Search, Brain } from "lucide-react";

export default function Solver() {
  const industrialApps = [
    {
      title: "Civilian UAS key recovery",
      description: "Rapidly recovering lost encryption keys for civilian drone fleets to ensure operational continuity without hardware replacement.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop",
      icon: Lock
    },
    {
      title: "Trusted hardware verification",
      description: "Formal verification of logic circuits to detect hardware Trojans and ensure the integrity of secure processor designs.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2048&auto=format&fit=crop",
      icon: Cpu
    },
    {
      title: "Automated cryptoanalysis",
      description: "Accelerating the analysis of cryptographic primitives through evolutionary rank augmentation in the GF(2) field.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop",
      icon: Search
    },
    {
      title: "AI model verification",
      description: "Ensuring the robustness and safety of neural networks by verifying complex boolean constraints within the model architecture.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      icon: Brain
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <span className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-4 block">Product</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              GF2 <span className="text-brand-muted">SOLVER</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Proprietary quasilinear solver for heavy NP-Complete applications. 
              Optimised for structurally dense unique promise satisfiability problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2">
                <Binary className="w-4 h-4" />
                Polynomial Time
              </div>
              <div className="px-6 py-3 rounded-full border border-white/20 text-white font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-muted" />
                Unique Solution Recovery
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative z-10 p-8 glass-panel rounded-3xl border border-white/10 aspect-square flex flex-col items-center justify-center overflow-hidden">
              {/* Technical Illustration: Matrix Grid */}
              <div className="absolute inset-0 opacity-10 grid grid-cols-8 gap-1 p-4">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-white/20 rounded-sm" />
                ))}
              </div>
              <Activity className="w-32 h-32 text-white opacity-20 absolute animate-pulse" />
              <div className="text-center relative z-20">
                <p className="text-6xl font-mono font-bold mb-2 tracking-tighter">GF(2)</p>
                <p className="text-brand-muted text-xs uppercase tracking-widest font-bold">Field Optimisation</p>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                <div className="h-1 w-12 bg-brand-muted rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
                <div className="h-1 w-4 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Industrial Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialApps.map((app, idx) => (
              <motion.div 
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <app.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{app.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-24">
          <h2 className="text-3xl font-bold mb-8">Dual Use Capability</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Trusted Hardware Verification</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Providing formal proof of circuit integrity for high-assurance semiconductor manufacturing and secure enclave validation.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Trusted AI Integrity</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Verifying the safety constraints of autonomous systems and neural networks to prevent adversarial exploitation in civilian infrastructure.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Civilian Fleet Management</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Enabling secure recovery and management of large-scale commercial UAS fleets through advanced cryptographic key restoration.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Automated Security Auditing</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Streamlining the audit of complex software systems by resolving underlying satisfiability problems in record time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-24">
          <h2 className="text-3xl font-bold mb-8">Mathematical Validation</h2>
          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Binary className="w-64 h-64" />
            </div>
            <p className="text-xl text-white/70 leading-relaxed mb-8 relative z-10">
              Our proprietary Evolutionary Rank Augmentation algorithm provides a polynomial-time solution for structurally dense unique promise satisfiability problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center relative z-10">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-3xl font-bold mb-2">GF(2)</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">Finite Field Algebra</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-lg font-bold mb-2 leading-tight">Solves average NP-Complete problems in polynomial time when there is a unique solution</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-2">Complexity Resolution</p>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/5 relative z-10">
              <h4 className="text-white font-bold mb-4">Validation Summary</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                The solver has been rigorously validated through formal complexity analysis, demonstrating expected polynomial time behaviour on random Circuit-USAT instances. This framework transforms Boolean constraints into sparse systems of equations, treating the search as a stochastic rank augmentation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
