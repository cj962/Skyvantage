import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              {t('contact.title')}
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-12">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest">{t('contact.email')}</p>
                  <p className="text-white font-bold">crm@stalwart.vg</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest">{t('contact.phone')}</p>
                  <p className="text-white font-bold">02035760737</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest">{t('contact.location')}</p>
                  <p className="text-white font-bold">University of Surrey, Guildford, UK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-muted font-bold">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-muted font-bold">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-muted font-bold">{t('contact.phone')}</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="+44 123 456 7890"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-muted font-bold">{t('contact.message')}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
