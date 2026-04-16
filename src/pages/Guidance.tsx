import { motion } from "motion/react";
import { Wind, Globe, RefreshCw, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Guidance() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <span className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-4 block">Software</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              {t('guidance.title')}
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              {t('guidance.subtitle')}
            </p>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 inline-block">
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-2">Delivery Model</p>
              <p className="text-xl font-bold">Software as a Service (SaaS)</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-20"></div>
            <div className="relative z-10 glass-panel rounded-3xl border border-white/10 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-mono font-bold text-brand-muted">85</div>
                  <p className="text-sm text-white/60">Operating scenarios validated in high-fidelity simulation.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-mono font-bold text-brand-muted">1.7M</div>
                  <p className="text-sm text-white/60">Mathematical assertions verified during TRL4 testing.</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Latency</span>
                    <span className="text-xs font-mono text-brand-muted">&lt; 2ms</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Fleet-Wide Retrofitting</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              The engineering approach explicitly removes the need to procure expensive new interceptor fleets and enables military operators to retrofit their existing inventory of low cost allied drones.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Low-latency C++ implementation for edge compute</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Compatible with MAVLink protocol standards</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Dynamic physical baseline configurability</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>GNSS-independent terminal guidance</span>
              </li>
            </ul>
          </div>
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
            <RefreshCw className="w-12 h-12 text-white mb-8" />
            <h3 className="text-2xl font-bold mb-6">Continuous Threat Resolution</h3>
            <p className="text-white/50 leading-relaxed">
              The system relies on a SaaS delivery model to ensure the terminal guidance capabilities remain continuously effective against rapidly evolving adversarial threats. Over-the-air firmware updates guarantee adaptation to new frequency hopping protocols.
            </p>
          </div>
        </div>

        <div className="bg-white text-black p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 italic">"We aren't building a better drone. We are building a cheaper brain."</h2>
          <p className="text-black/60 font-medium">Skyvantage Guidance Logic - Defence at Scale</p>
        </div>
      </div>
    </div>
  );
}
