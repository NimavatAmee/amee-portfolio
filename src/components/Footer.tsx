import React from 'react';
import { ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-[#e6e1d6] bg-[#f7f5f0] py-10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full p-[1.5px] bg-[#1f6146] shadow-sm">
              <img 
                src="/images/amee-avatar.jpg" 
                alt="Amee Nimavat" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <div>
              <span className="font-display font-semibold text-sm text-[#1b1a17]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#6d6a62] text-xs ml-2">
                · {PERSONAL_INFO.role}
              </span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5 text-xs text-[#6d6a62]">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1f6146] transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#1f6146] transition-colors"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#fffdf9] border border-[#e6e1d6] hover:border-[#1f6146] text-[#1b1a17] transition-all hover:-translate-y-0.5 shadow-sm"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-[#e6e1d6] text-center text-xs text-[#6d6a62]">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
