import { motion } from "motion/react";
import { User, GraduationCap, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 md:mb-24 px-4 sm:px-0">
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-8 tracking-tighter">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{t('about.who_we_are')}</h2>
            <p className="text-white/50 leading-relaxed text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">{t('about.strategy')}</h2>
            <p className="text-white/50 leading-relaxed text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">{t('about.how_we_operate')}</h2>
            <p className="text-white/50 leading-relaxed text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">{t('about.innovation_focus')}</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              {t('about.innovation_focus_desc')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-4 block">Foundations</span>
            <h2 className="text-4xl font-display font-bold mb-6 text-white">{t('about.academic')}</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              {t('about.academic_desc')}
            </p>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden grayscale border border-white/10 bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" 
              alt="Research and Development"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="p-12 rounded-3xl bg-white text-black text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-6">{t('about.mission')}</h2>
            <p className="text-black/70 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {t('about.mission_desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
