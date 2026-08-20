import React from 'react';
import SlideDeck from '../components/SlideDeck';
import { motion } from 'motion/react';
import { Terminal, Shield, ArrowRight, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Deck() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-3">
            TECHNICAL SLIDE PRESENTATION
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white mb-4 tracking-tighter">
            Proving What an AI Agent Cannot Do
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            The formal verification slide deck: intent vs. context, Colang rulebook compilation, algebraic contradiction certificates, and sub-threshold OR-bypass resolution.
          </p>
        </motion.div>

        {/* The Slide Deck Component */}
        <SlideDeck />

        {/* Context & Technical Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-4 font-sans text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-muted" />
              How to Run the Live Presentation CLI
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The project includes a 16-beat interactive console walkthrough with three fixed screen regions (top question band, scrollable telemetry pane, and persistent bottom verdict band).
            </p>
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-white/80 space-y-2">
              <p className="text-brand-muted"># Execute the presenter walkthrough</p>
              <p className="text-white">demo\demo.cmd</p>
              <p className="text-brand-muted"># Preflight checks (5 seconds)</p>
              <p className="text-white">demo\demo.cmd -Check</p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                Key Deliverables for Enterprise AI
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                We accept Colang guardrail files and tool schema definitions. We return a mathematically verified rulebook proving the protected action cannot fire without its required preconditions across all 2<sup>N</sup> context states.
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <Link to="/guardrails" className="w-full">
                <button className="w-full py-3 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                  AI Guardrails Deep Dive
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact" className="w-full">
                <button className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                  Request Briefing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
