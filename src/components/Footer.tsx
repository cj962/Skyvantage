import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
              Skyvantage
            </span>
            <p className="text-white/50 text-sm leading-relaxed">
              Asymmetric Counter-UAS and Guidance Logic. Redefining the limits of aerial defence through software-defined innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-brand-accent transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/sensor" className="hover:text-brand-accent transition-colors">Skyvantage Sensor</Link></li>
              <li><Link to="/solver" className="hover:text-brand-accent transition-colors">GF2 Solver</Link></li>
              <li><Link to="/guidance" className="hover:text-brand-accent transition-colors">Guidance Logic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © 2026 Stalwart Holdings. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
