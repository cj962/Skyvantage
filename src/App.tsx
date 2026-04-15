import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sensor from "./pages/Sensor";
import Solver from "./pages/Solver";
import Guidance from "./pages/Guidance";
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
          <Route path="/sensor" element={<Sensor />} />
          <Route path="/solver" element={<Solver />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
