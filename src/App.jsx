import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic Entrance Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Site Container */}
      <AnimatePresence>
        {!isLoading && (
          <div className="relative min-h-screen bg-[#030303] text-gray-200 selection:bg-accent selection:text-black font-sans">
            {/* Ambient Background Particle System */}
            <ParticleBackground />

            {/* Float Navbar */}
            <Navbar />

            {/* Page Sections */}
            <main className="relative z-10 w-full">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <CodingProfiles />
              <Achievements />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
