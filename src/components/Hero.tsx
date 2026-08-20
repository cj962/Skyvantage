import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Binary, Terminal, FileCode, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Matrix Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-6 md:mb-8 tracking-tighter text-white">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 font-normal">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/guardrails" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group shadow-lg text-sm sm:text-base"
              >
                {t('hero.explore')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/solver" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass-panel hover:bg-white/10 px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group border border-white/15 text-sm sm:text-base transition-colors"
              >
                <Binary className="w-5 h-5 text-brand-muted" />
                {t('nav.solver')}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Verification Architecture Badges (Replacing Old UAS Metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto border-t border-white/10 pt-10 text-left font-mono text-xs">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">{t('hero.stat_field')}</p>
            <p className="text-lg font-display font-bold text-white">{t('hero.stat_field_val')}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">{t('hero.stat_coverage')}</p>
            <p className="text-lg font-display font-bold text-white">{t('hero.stat_coverage_val')}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">{t('hero.stat_receipt')}</p>
            <p className="text-lg font-display font-bold text-emerald-400">{t('hero.stat_receipt_val')}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">{t('hero.stat_engine')}</p>
            <p className="text-lg font-display font-bold text-white">{t('hero.stat_engine_val')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
