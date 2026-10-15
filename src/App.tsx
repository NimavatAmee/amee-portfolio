import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const sections = ['top', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      // Calculate scroll progress percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }

      // Active section spy
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1b1a17] flex flex-col font-sans selection:bg-[#1f6146] selection:text-[#f7f5f0] relative">
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-[#1f6146] z-[60] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Subtle Grain Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
