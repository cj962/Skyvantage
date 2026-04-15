import { motion } from "motion/react";
import { Cpu, Zap, Shield, Target } from "lucide-react";

export default function Sensor() {
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              SKYVANTAGE <span className="text-brand-muted">SENSOR</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Universal Software Defined Terminal Guidance Sensor Suite for High Speed Counter UAS. 
              A completely self-contained edge compute module for seamless integration.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Unit Cost</p>
                <p className="text-2xl font-bold">£1,850</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Tracking Speed</p>
                <p className="text-2xl font-bold">Mach 1.2</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] opacity-20"></div>
            <img 
              src="https://grid1.stalwart.vg/images/drone1.png" 
              alt="Stalwart Sensor Module" 
              className="relative z-10 w-full h-auto rounded-3xl grayscale border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Cpu className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Edge Compute</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Powered by a UK-manufactured Raspberry Pi 5 module and dual-channel phase coherent SDR.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Zap className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Direct Mount</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Antennas attached directly to the radio chassis to eliminate phase delay and signal loss.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <Target className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">MAVLink Integration</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Universal serial bus connection for power and high-speed data conduit for autopilot commands.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-24">
          <h2 className="text-3xl font-bold mb-8">Technical Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white/60 leading-relaxed space-y-6 text-lg">
              <p>
                The Skyvantage Sensor functions as a completely self-contained edge compute module enabling seamless integration onto any existing host interceptor with a maximum take-off weight under 25 kilogrammes.
              </p>
              <p>
                The architecture connects to standard flight controllers via universal serial bus to issue MAVLink commands, commanding the host vehicle to manoeuvre to within 3 metres of an agile target at combined closing speeds of up to Mach 1.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Key Specifications</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Compute</span>
                  <span className="text-white">Raspberry Pi 5</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Radio</span>
                  <span className="text-white">LimeSDR Phase Coherent</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Antennas</span>
                  <span className="text-white">Direct Mount Wideband</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Interface</span>
                  <span className="text-white">USB / MAVLink</span>
                </li>
                <li className="flex justify-between">
                  <span>Supply Chain</span>
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
            <h2 className="text-3xl font-bold mb-4">TRL4 Validation Data</h2>
            <p className="text-white/40">High-fidelity sensor telemetry captured during Mach 1.2 simulated engagement.</p>
          </div>
          <img 
            src="https://grid1.stalwart.vg/sensorsample.png" 
            alt="Sensor Sample Data" 
            className="w-full h-auto rounded-2xl grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
