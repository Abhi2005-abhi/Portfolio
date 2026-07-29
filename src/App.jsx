import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

import { PORTFOLIO_DATA } from './constants';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import Background from './components/layout/Background';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';
import Chatbot from './components/ui/Chatbot';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[999] bg-[#0B0B0B] flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-accent-purple"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-24 h-24 absolute rounded-full border-b-2 border-l-2 border-accent-blue"
        />
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Background />
      <div className="relative min-h-screen text-gray-200 font-sans selection:bg-accent-purple/30 selection:text-white">
        <Helmet>
          <title>{PORTFOLIO_DATA.name} | {PORTFOLIO_DATA.role}</title>
          <meta name="description" content={PORTFOLIO_DATA.tagline} />
        </Helmet>

        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>

        {!loading && (
          <>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Timeline />
              <Contact />
            </main>
            <Footer />
            <Chatbot />
          </>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
