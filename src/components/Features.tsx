import { motion } from "motion/react";
import { ShieldCheck, Binary, Presentation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      title: t('nav.guardrails'),
      description: t('features.guardrails_desc'),
      link: "/guardrails"
    },
    {
      icon: Binary,
      title: t('nav.solver'),
      description: t('features.solver_desc'),
      link: "/solver"
    },
    {
      icon: Presentation,
      title: t('nav.deck'),
      description: t('features.deck_desc'),
      link: "/deck"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Link to={feature.link} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl group transition-all hover:border-white/20 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm mb-6 font-sans">
                    {feature.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-brand-muted transition-colors pt-4 border-t border-white/5">
                  {t('features.learn_more')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
