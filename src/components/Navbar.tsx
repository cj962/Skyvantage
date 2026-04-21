import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Languages } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const products = [
    { name: t('nav.sensor'), href: "/sensor" },
    { name: t('nav.solver'), href: "/solver" },
    { name: t('nav.guidance'), href: "/guidance" },
  ];

  const navLinks = [
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <div className="h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-2">
                  <img 
                    src="https://grid1.stalwart.vg/images/STALWART2020LTD.png" 
                    alt="Stalwart Logo" 
                    className="h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-2xl font-display font-bold tracking-tighter text-white">
                  Skyvantage
                </span>
              </motion.div>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {/* Products Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button className="flex items-center gap-1 text-white/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-56 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-2 shadow-2xl"
                      >
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="block px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Language Switcher */}
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-white/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border border-white/10 bg-white/5"
                >
                  <Languages className="w-4 h-4" />
                  {language === 'en' ? 'PT' : 'EN'}
                </motion.button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1.5 rounded-md text-white/70 hover:text-white border border-white/10 bg-white/5 text-[10px] font-bold flex items-center gap-1.5"
            >
              <Languages className="h-4 w-4" />
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold px-3">Products</p>
                <div className="grid grid-cols-1 gap-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="text-white/70 block px-4 py-3 rounded-xl text-lg font-medium hover:text-white hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/5 mx-3" />

              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/70 block px-4 py-3 rounded-xl text-lg font-medium hover:text-white hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Language Button */}
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold"
                >
                  <Languages className="w-5 h-5" />
                  {language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
