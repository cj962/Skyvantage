import Hero from "../components/Hero";
import Features from "../components/Features";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main>
      <Hero />
      
      {/* Section Divider with Glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Features />
      
      {/* Video Showcase Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
            <video 
              key={language}
              autoPlay 
              loop 
              playsInline
              controls
              className="w-full h-auto relative z-0"
            >
              <source 
                src={language === 'en' ? "https://grid1.stalwart.vg/Dronevid.mp4" : "https://grid1.stalwart.vg/PFVC.mp4"} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
      
      {/* Analysis Section */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t('home.tactical')}</h2>
              <p className="text-white/40 max-w-md">{t('home.tactical_desc')}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-video rounded-2xl overflow-hidden relative group border border-white/5">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" alt="Terrain masking" className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-2">Scenario 04</span>
                <span className="text-sm font-display font-bold">{t('home.scenario04')}</span>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden relative group border border-white/5">
              <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop" alt="Mach joust" className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-2">Scenario 12</span>
                <span className="text-sm font-display font-bold">{t('home.scenario12')}</span>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden relative group border border-white/5">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" alt="Cyber takeover" className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-2">Scenario 07</span>
                <span className="text-sm font-display font-bold">{t('home.scenario07')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-black/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">{t('home.secure')}</h2>
          <p className="text-black/60 max-w-xl mx-auto mb-10 font-medium">
            {t('home.secure_desc')}
          </p>
          <Link to="/contact">
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              {t('hero.contact')}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
