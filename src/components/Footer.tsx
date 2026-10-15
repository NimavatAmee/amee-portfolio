import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2e2b26] bg-[#1c1a17] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2e2b26]">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full p-[1.5px] bg-[#f08a5d] shadow-sm">
              <img 
                src="/images/amee-avatar.jpg" 
                alt="Amee Nimavat" 
                className="w-full h-full object-cover rounded-full filter grayscale contrast-[1.02]" 
              />
            </div>
            <div>
              <span className="font-serif text-lg text-[#f0ece4] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#a39d92] text-xs ml-2">
                · {PERSONAL_INFO.role}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs text-[#a39d92]">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f08a5d] transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#f08a5d] transition-colors flex items-center gap-1.5"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="hover:text-[#f08a5d] transition-colors flex items-center gap-1.5"
              aria-label="Call or WhatsApp"
            >
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#131210] border border-[#2e2b26] text-xs text-[#a39d92] hover:text-[#f0ece4] hover:border-[#f08a5d] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#f08a5d]" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a39d92] gap-2">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="fine text-[11px] text-[#a39d92]">Surat, Gujarat, India · Open to remote opportunities</p>
        </div>

      </div>
    </footer>
  );
};
