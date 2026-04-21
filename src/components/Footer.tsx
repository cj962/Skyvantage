import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
              Skyvantage
            </span>
            <p className="text-white/50 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.products')}</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/sensor" className="hover:text-brand-accent transition-colors">{t('nav.sensor')}</Link></li>
              <li><Link to="/solver" className="hover:text-brand-accent transition-colors">{t('nav.solver')}</Link></li>
              <li><Link to="/guidance" className="hover:text-brand-accent transition-colors">{t('nav.guidance')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">{t('nav.contact')}</Link></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
