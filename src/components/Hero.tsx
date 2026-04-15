import { motion } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=2070&auto=format&fit=crop" 
          alt="Technical drone frame with antennas" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase">
            Software-Defined Defence
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-none mb-8 tracking-tighter">
            Skyvantage
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Asymmetric Counter-UAS and Guidance Logic. 
            Redefining aerial defence through high-fidelity software brains.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass-panel px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group"
              >
                <Shield className="w-5 h-5" />
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Specs (Visual Decoration) */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-end opacity-40">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Intercept Speed</p>
            <p className="text-2xl font-display font-bold">MACH 1+</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Target Class</p>
            <p className="text-2xl font-display font-bold">GROUP 1-3</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Unit Cost</p>
            <p className="text-2xl font-display font-bold">&lt; £2,000</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Seeker</p>
            <p className="text-2xl font-display font-bold">RF/ACOUSTIC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
