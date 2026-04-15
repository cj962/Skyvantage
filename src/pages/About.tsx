import { motion } from "motion/react";
import { User, GraduationCap, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            ABOUT <span className="text-brand-muted">SKYVANTAGE</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl">
            Skyvantage is at the forefront of software-defined defence. 
            We specialise in creating asymmetric advantages through algorithmic innovation, 
            transforming standard hardware into precision-guided systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold">Academic Foundation</h2>
              </div>
              <p className="text-white/50 leading-relaxed text-lg">
                Our technology is rooted in rigorous academic research and mathematical validation. 
                We collaborate with leading institutions to ensure our algorithms are at the cutting edge of RF physics and cryptanalysis.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold">Strategic Vision</h2>
              </div>
              <p className="text-white/50 leading-relaxed text-lg">
                We believe in "Defence at Scale." By reducing the cost of interception to the absolute floor, 
                we enable symmetric responses to massed asymmetric threats.
              </p>
            </section>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">Leadership</h3>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-white/10 overflow-hidden flex-shrink-0 border border-white/10">
                  <img 
                    src="https://grid1.stalwart.vg/FabioDias.png" 
                    alt="Fabio Dias" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Fabio Dias</h4>
                  <p className="text-brand-muted text-sm uppercase tracking-widest mb-2">Principal Investigator / CEO</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Dr Dias will lead the digital signal processing and algorithmic development for the sensor suite, leveraging his extensive background in mathematical modelling to direct the edge computing and software implementations. As the Programme Director of the FinTech and Policy MSc at the University of Surrey and the CEO of Skyvantage, he holds a STEM PhD from University College London. He brings over two decades of experience bridging applied computer science, software innovation, and complex algorithmic design from senior roles at major financial institutions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-white/10 overflow-hidden flex-shrink-0 border border-white/10">
                  <img 
                    src="https://grid1.stalwart.vg/Alexander.png" 
                    alt="Alexander Shomalistos" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Alexander Shomalistos</h4>
                  <p className="text-brand-muted text-sm uppercase tracking-widest mb-2">C++ Software Engineer</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Alexander will serve as the lead C++ software engineer, responsible for porting the complex digital signal processing algorithms and phase interferometry mathematics into highly optimised, low-latency firmware for the edge compute module. Based in London, he is a software developer with a background in building robust, high-performance systems. His programming expertise will be crucial for translating theoretical mathematical models into executable C++ code that operates efficiently within the strict processing and memory constraints of the Raspberry Pi hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            To provide allied forces with the most cost-effective, adaptable, and lethal software-defined defence systems in the world. 
            We are redefining the unit economics of modern warfare through the Skyvantage platform.
          </p>
        </div>
      </div>
    </div>
  );
}
