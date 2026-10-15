import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#131210]/90 backdrop-blur-md border-b border-[#2e2b26] py-3.5 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Name Logo with Avatar */}
        <a 
          href="#top" 
          onClick={(e) => handleLinkClick(e, '#top')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a5d] rounded-xl p-1"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-[#f08a5d] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <img 
              src="/images/amee-avatar.jpg" 
              alt="Amee Nimavat" 
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#f08a5d] ring-2 ring-[#131210]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-tight text-[#f0ece4] group-hover:text-[#f08a5d] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-[#a39d92] font-medium hidden sm:inline-block">
              Senior React Native Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1c1a17]/90 p-1.5 rounded-full border border-[#2e2b26] backdrop-blur-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a5d] ${
                  isActive 
                    ? 'bg-[#2e2b26] text-[#f08a5d] border border-[#f08a5d]/40' 
                    : 'text-[#a39d92] hover:text-[#f0ece4] hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#131210] bg-[#f08a5d] hover:bg-[#fa9d73] transition-all duration-200 active:scale-95 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f08a5d]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#1c1a17] border border-[#2e2b26] text-[#f0ece4] hover:text-[#f08a5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a5d]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#131210]/98 backdrop-blur-xl border-b border-[#2e2b26] px-5 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#a39d92] hover:text-[#f0ece4] hover:bg-[#1c1a17] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#a39d92]">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#2e2b26]">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium text-[#131210] bg-[#f08a5d]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
