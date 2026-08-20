import React from 'react';
import { motion } from 'motion/react';
import { Binary, ShieldCheck, GraduationCap, Building2, Cpu, Code2, CheckCircle2, Award, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 md:mb-24 px-4 sm:px-0">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-brand-muted block mb-3">
            STALWART TECHNOLOGIES · RESEARCH &amp; DEVELOPMENT
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 md:mb-8 tracking-tighter text-white">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
            {t('about.subtitle')}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">{t('about.who_we_are')}</h2>
            <p className="text-white/50 leading-relaxed text-base">
              {t('about.who_we_are_desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">{t('about.strategy')}</h2>
            <p className="text-white/50 leading-relaxed text-base">
              {t('about.strategy_desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">{t('about.how_we_operate')}</h2>
            <p className="text-white/50 leading-relaxed text-base">
              {t('about.how_we_operate_desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Binary className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">{t('about.innovation_focus')}</h2>
            <p className="text-white/50 leading-relaxed text-base">
              {t('about.innovation_focus_desc')}
            </p>
          </motion.div>
        </div>

        {/* Academic Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span className="text-brand-muted font-mono font-bold tracking-widest uppercase text-xs mb-4 block">
              RESEARCH ORIGINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-white">{t('about.academic')}</h2>
            <p className="text-white/50 leading-relaxed text-base mb-6">
              {t('about.academic_desc')}
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-white/70 space-y-2">
              <p className="text-brand-muted"># Foundational Working Paper</p>
              <p className="text-white font-bold">Polynomial-Time Solution of Structurally Dense 3-SAT Instances via Evolutionary Rank Augmentation</p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 font-mono text-xs space-y-4">
            <h4 className="text-white font-bold font-sans text-base flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-muted" />
              Engine Properties &amp; Verification Guarantees
            </h4>
            <div className="space-y-2 text-white/70">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-bold">Self-Contained Refutations:</span> Post-order DAG with final step withheld so any auditor verifies without solver internals.
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-bold">Soundness over Exhaustion:</span> Quantifies over full 2^N context spaces, resolving reachability rather than sampling.
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-bold">Minimal-Disruption Patching:</span> Bounded SDS scoring ensures suggested Colang guards are human-readable and avoid over-blocking.
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white text-black text-center relative overflow-hidden group">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-black/50 block mb-3">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">{t('about.mission')}</h2>
            <p className="text-black/70 text-lg sm:text-xl leading-relaxed font-medium">
              {t('about.mission_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
