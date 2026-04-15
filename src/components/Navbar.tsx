import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "Skyvantage Sensor", href: "/sensor" },
    { name: "GF2 Solver", href: "/solver" },
    { name: "Guidance Logic", href: "/guidance" },
  ];

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

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
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
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
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/90 border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Products Section */}
            <div className="px-3 py-2">
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-2">Products</p>
              <div className="space-y-1 ml-2 border-l border-white/10">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="text-white/60 block px-4 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-brand-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
