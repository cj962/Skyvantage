import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Guardrails from "./pages/Guardrails";
import Solver from "./pages/Solver";
import Deck from "./pages/Deck";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { motion, useScroll, useSpring } from "motion/react";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-white selection:text-black bg-black text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guardrails" element={<Guardrails />} />
          <Route path="/solver" element={<Solver />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Legacy route redirects */}
          <Route path="/sensor" element={<Navigate to="/guardrails" replace />} />
          <Route path="/guidance" element={<Navigate to="/deck" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
