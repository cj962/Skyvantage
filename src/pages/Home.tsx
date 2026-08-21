import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SlideDeck from "../components/SlideDeck";
import ProofInspector from "../components/ProofInspector";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Binary, FileCode, Terminal, AlertTriangle } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="bg-black text-white">
      <Hero />
      
      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* 4-Slide Executive Briefing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-3">
              {t('briefing.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {t('briefing.title')}
            </h2>
          </div>
          <SlideDeck />
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Interactive Proof Inspector Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProofInspector />
        </div>
      </section>

      {/* Solutions Grid */}
      <Features />

      {/* Formal Assurance Comparison Matrix */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
              {t('matrix.eyebrow')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
              {t('matrix.title')}
            </h2>
            <p className="text-white/50 text-base">
              {t('matrix.subtitle')}
            </p>
          </div>

          <div className="glass-panel rounded-3xl border border-white/10 overflow-x-auto">
            <table className="w-full text-left font-sans text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-brand-muted">
                  <th className="p-6">{t('matrix.col_metric')}</th>
                  <th className="p-6">{t('matrix.col_sampling')}</th>
                  <th className="p-6">{t('matrix.col_smt')}</th>
                  <th className="p-6 text-white bg-white/5 font-bold">{t('matrix.col_quasilinear')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/70">
                <tr>
                  <td className="p-6 font-bold text-white">{t('matrix.row_space')}</td>
                  <td className="p-6 text-red-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 shrink-0" />
                    {t('matrix.row_space_sampling')}
                  </td>
                  <td className="p-6 text-white/80">{t('matrix.row_space_smt')}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-white/5">
                    {t('matrix.row_space_quasi')}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">{t('matrix.row_impossibility')}</td>
                  <td className="p-6 text-red-400">{t('matrix.row_impossibility_sampling')}</td>
                  <td className="p-6 text-white/80">{t('matrix.row_impossibility_smt')}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-white/5">
                    {t('matrix.row_impossibility_quasi')}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">{t('matrix.row_replay')}</td>
                  <td className="p-6 text-red-400">{t('matrix.row_replay_sampling')}</td>
                  <td className="p-6 text-white/80">{t('matrix.row_replay_smt')}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-white/5">
                    {t('matrix.row_replay_quasi')}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">{t('matrix.row_repair')}</td>
                  <td className="p-6 text-red-400">{t('matrix.row_repair_sampling')}</td>
                  <td className="p-6 text-red-400">{t('matrix.row_repair_smt')}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-white/5">
                    {t('matrix.row_repair_quasi')}
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">{t('matrix.row_counting')}</td>
                  <td className="p-6 text-red-400">{t('matrix.row_counting_sampling')}</td>
                  <td className="p-6 text-white/80">{t('matrix.row_counting_smt')}</td>
                  <td className="p-6 text-emerald-400 font-bold bg-white/5">
                    {t('matrix.row_counting_quasi')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies / Benchmarks */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-2">
                VERIFIED SUITES
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{t('home.tactical')}</h2>
              <p className="text-white/40 mt-2 max-w-lg">{t('home.tactical_desc')}</p>
            </div>
            <Link to="/guardrails">
              <button className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-mono font-bold flex items-center gap-2 transition-colors">
                View Full Guardrails Spec
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-brand-muted uppercase block mb-3">Case 01 · Regulatory AI</span>
                <h3 className="text-xl font-bold text-white mb-2">{t('home.case01')}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  410-variable synthesized GF(2) circuit under FCA COBS/Duty obligations. Proved that advising permissions cannot be bypassed via targeted-support advice flows.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Verified UNSAT (5-Step Receipt)
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-brand-muted uppercase block mb-3">Case 02 · MCP Tool Gating</span>
                <h3 className="text-xl font-bold text-white mb-2">{t('home.case02')}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Discovered an OR-accumulation hole in a sub-threshold booking exemption. Generated a minimally disruptive Colang patch certified to block the vulnerability.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-amber-400 font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                SAT Bypass Found &amp; Patched
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-brand-muted uppercase block mb-3">Case 03 · Stateful Guardrails</span>
                <h3 className="text-xl font-bold text-white mb-2">{t('home.case03')}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Stateful lookback verification enforcing dynamic transaction frequency caps across conversational turn state variables.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Verified UNSAT (8-Step Receipt)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-black/50 block mb-4">
            MATHEMATICAL SAFETY ASSURANCE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            {t('home.secure')}
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-medium">
            {t('home.secure_desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-black text-white px-12 py-5 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-2xl">
                {t('hero.contact')}
              </button>
            </Link>
            <Link to="/guardrails">
              <button className="w-full sm:w-auto border-2 border-black/20 hover:border-black text-black px-10 py-4.5 rounded-full font-bold text-base transition-colors">
                Read the Verification Spec
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
