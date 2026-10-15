import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
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
    <div className="sticky top-3 sm:top-4 z-50 px-4 sm:px-6 w-full max-w-4xl mx-auto">
      <header className="glass-nav-bar rounded-full px-3 sm:px-4 py-2 flex items-center justify-between gap-4 transition-all duration-300">
        
        {/* Brand / Logo */}
        <a 
          href="#top" 
          onClick={(e) => handleLinkClick(e, '#top')}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6146] rounded-full p-1"
        >
          <div className="relative w-8 h-8 rounded-full p-[1.5px] bg-[#1f6146] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <img 
              src="/images/amee-avatar.jpg" 
              alt="Amee Nimavat" 
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#1f6146] ring-2 ring-[#fffdf9]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm sm:text-[15px] tracking-tight text-[#1b1a17] group-hover:text-[#1f6146] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px]" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#e7eee8] text-[#173d2c] font-semibold' 
                    : 'text-[#4a4740] hover:bg-[#1f6146]/10 hover:text-[#1f6146]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-[#f7f5f0] bg-[#1b1a17] hover:bg-[#2f2c26] transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#1b1a17] hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 rounded-2xl bg-[#fffdf9]/95 backdrop-blur-xl border border-[#e6e1d6] shadow-xl flex flex-col gap-1 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-[#e7eee8] text-[#173d2c] font-semibold' 
                    : 'text-[#3f3c36] hover:bg-black/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#e6e1d6] mt-1">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#f7f5f0] bg-[#1b1a17]"
            >
              <span>Contact me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
