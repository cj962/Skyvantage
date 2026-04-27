import { motion } from "motion/react";
import { Cpu, Zap, Shield, Target } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Sensor() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <span className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-4 block">Product</span>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-8 tracking-tighter">
              {t('sensor.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 md:mb-10">
              {t('sensor.subtitle')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">{t('sensor.cost')}</p>
                <p className="text-2xl font-bold">£1,850</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">{t('sensor.speed')}</p>
                <p className="text-2xl font-bold" h-id="3">Mach 1.2</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop" 
              alt="Skyvantage Sensor Module" 
              className="relative z-10 w-full h-auto rounded-3xl grayscale border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Cpu className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('sensor.edge_compute')}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('sensor.edge_compute_desc')}
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Zap className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('sensor.direct_mount')}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('sensor.direct_mount_desc')}
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Target className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">{t('sensor.mavlink')}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('sensor.mavlink_desc')}
            </p>
          </div>
        </div>

        {/* Video Showcase Section */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl relative group aspect-video"
          >
            <video 
              key={language}
              autoPlay 
              loop 
              playsInline
              controls
              className="w-full h-full object-cover relative z-0"
            >
              <source 
                src={language === 'en' ? "https://grid1.stalwart.vg/EFVC.mp4" : "https://grid1.stalwart.vg/PFVC.mp4"} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </section>

        <div className="prose prose-invert max-w-none mb-24">
          <h2 className="text-3xl font-bold mb-8">{t('sensor.tech_overview')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white/60 leading-relaxed space-y-6 text-lg">
              <p>
                {t('sensor.tech_p1')}
              </p>
              <p>
                {t('sensor.tech_p2')}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">{t('sensor.specs')}</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                   <span>{t('sensor.compute')}</span>
                  <span className="text-white">Raspberry Pi 5</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>{t('sensor.radio')}</span>
                  <span className="text-white">LimeSDR Phase Coherent</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>{t('sensor.antennas')}</span>
                  <span className="text-white">Direct Mount Wideband</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>{t('sensor.interface')}</span>
                  <span className="text-white">USB / MAVLink</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('sensor.supply_chain')}</span>
                  <span className="text-white">Five Eyes / NATO Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('sensor.trl4')}</h2>
            <p className="text-white/40">{t('sensor.trl4_desc')}</p>
          </div>
          <img 
            src="https://grid1.stalwart.vg/newdrone.png" 
            alt="Sensor Sample Data" 
            className="w-full h-auto rounded-2xl grayscale opacity-80 mb-4"
            referrerPolicy="no-referrer"
          />
          <p className="text-white/40 text-xs text-center font-bold italic tracking-wide">
            {t('sensor.disclaimer')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
