import { MapPin, Mail, Phone, Binary, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="https://grid1.stalwart.vg/Stalwartnewlogo2026.png" 
                alt="Stalwart Technologies Logo" 
                className="h-9 w-9 object-contain rounded-lg shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tighter text-white">
                  Stalwart Technologies
                </span>
                <span className="text-[11px] font-mono text-brand-muted">
                  Quasilinear
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                C++ Algebraic Engine Live
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-muted">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/guardrails" className="hover:text-white transition-colors">{t('nav.guardrails')}</Link></li>
              <li><Link to="/solver" className="hover:text-white transition-colors">{t('nav.solver')}</Link></li>
              <li><Link to="/deck" className="hover:text-white transition-colors">{t('nav.deck')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-muted">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-muted">
              {t('nav.contact')}
            </h4>
            <div className="flex items-start gap-3 text-sm text-white/50">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-1" />
              <span>Jubilee House, The Drive, Brentwood, United Kingdom, CM13 3FR</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span>crm@stalwart.vg</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>02035760737</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>{t('footer.rights')}</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">{t('footer.privacy')}</span>
            <span className="hover:text-white cursor-pointer transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
