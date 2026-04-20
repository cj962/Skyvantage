import { motion } from "motion/react";
import { User, GraduationCap, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            {t('about.title')}
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold">{t('about.academic')}</h2>
              </div>
              <p className="text-white/50 leading-relaxed text-lg">
                {t('about.academic_desc')}
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold">{t('about.vision')}</h2>
              </div>
              <p className="text-white/50 leading-relaxed text-lg">
                {t('about.vision_desc')}
              </p>
            </section>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">{t('about.leadership')}</h3>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-white/10 overflow-hidden flex-shrink-0 border border-white/10">
                  <img 
                    src="https://grid1.stalwart.vg/FabioDias.png" 
                    alt="Fabio Dias" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Fabio Dias</h4>
                  <p className="text-brand-muted text-sm uppercase tracking-widest mb-2">{t('about.fabio_title')}</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {t('about.fabio_bio')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-white/10 overflow-hidden flex-shrink-0 border border-white/10">
                  <img 
                    src="https://grid1.stalwart.vg/Alexander.png" 
                    alt="Alexander Shomalistos" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Alexander Shomalistos</h4>
                  <p className="text-brand-muted text-sm uppercase tracking-widest mb-2">{t('about.alex_title')}</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {t('about.alex_bio')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.mission')}</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('about.mission_desc')}
          </p>
        </div>
      </div>
    </div>
  );
}
