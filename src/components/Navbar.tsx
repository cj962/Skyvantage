import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Languages, Binary, ShieldCheck, Presentation, FileCode, Terminal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const products = [
    { name: t('nav.guardrails'), href: "/guardrails", icon: ShieldCheck, desc: "Colang to GF(2) Algebraic Guardrail Verification" },
    { name: t('nav.solver'), href: "/solver", icon: Binary, desc: "C++17 Binary Field Solver & Multi-Phase Pipeline" },
    { name: t('nav.deck'), href: "/deck", icon: Presentation, desc: "Executive Technical Briefing & Slide Presentation" },
  ];

  const navLinks = [
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center font-mono font-bold text-black text-lg shadow-sm">
                  𝔽₂
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-white">
                    Quasilinearsolver
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-brand-muted uppercase">
                    Formal Verification Engine
                  </span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {/* Solutions Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button className="flex items-center gap-1.5 text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    {t('nav.products')}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-80 rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/15 p-2 shadow-2xl z-50"
                      >
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="flex items-start gap-3 p-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all group"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                              <product.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-white text-sm">{product.name}</p>
                              <p className="text-white/40 text-xs mt-0.5">{product.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/guardrails"
                  className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('nav.guardrails')}
                </Link>

                <Link
                  to="/solver"
                  className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('nav.solver')}
                </Link>

                <Link
                  to="/deck"
                  className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5"
                >
                  <Presentation className="w-3.5 h-3.5 text-brand-muted" />
                  Deck
                </Link>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-white/70 hover:text-white px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-colors border border-white/15 bg-white/5"
                >
                  <Languages className="w-3.5 h-3.5" />
                  {language === 'en' ? 'PT' : 'EN'}
                </button>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg text-white/80 hover:text-white border border-white/15 bg-white/5 text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <Languages className="h-3.5 w-3.5" />
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-brand-accent focus:outline-none bg-white/5 border border-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-6">
              {/* Mobile Products Section */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold px-3">Solutions</p>
                <div className="grid grid-cols-1 gap-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="text-white/80 flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium hover:text-white hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <product.icon className="w-5 h-5 text-brand-muted" />
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/10 mx-3" />

              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/80 block px-4 py-3 rounded-xl text-base font-medium hover:text-white hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Language Button */}
              <div className="pt-2 px-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm"
                >
                  <Languages className="w-4 h-4" />
                  {language === 'en' ? 'Switch to Portuguese (PT)' : 'Mudar para Inglês (EN)'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
