import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Inverted Dark Contact Card matching Yash Kava's .contact */}
        <div className="bg-[#1b1a17] text-[#f7f5f0] rounded-[26px] p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden space-y-7">
          
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272521] border border-[#3a3833] text-xs font-mono text-[#d7d2c7]">
            <span className="w-2 h-2 rounded-full bg-[#1f6146] animate-pulse" />
            <span>🌍 Open to Worldwide Remote & Global Roles</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.1] tracking-[-0.03em] text-[#f7f5f0] max-w-2xl">
            Let’s build something remarkable together.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-[17px] text-[#b8b3a8] leading-relaxed max-w-2xl">
            Open to full-time and contract mobile roles globally (<strong className="text-[#f7f5f0] font-medium">Worldwide Remote across US, Europe, APAC & India timezones</strong>). Happy to talk about React Native architecture, offline-first SQLite synchronization, or the product you have in mind.
          </p>

          {/* Action Buttons: White Mail Button + Bordered Copy */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#1b1a17] bg-[#f7f5f0] hover:bg-white hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#1b1a17]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.email)}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-medium text-[#d7d2c7] border border-[#3a3833] hover:border-[#5f8f77] hover:text-white hover:bg-[#1f6146]/25 transition-all duration-200"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#5f8f77]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied to clipboard' : 'Copy email'}</span>
            </button>
          </div>

          {/* Bottom Meta Row matching Yash Kava */}
          <div className="mt-12 pt-6 border-t border-[#34322d] flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#b8b3a8]">
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-[#fff] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#a39d92]" />
              <span>{PERSONAL_INFO.phoneFormatted}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#a39d92]" />
              <span>{PERSONAL_INFO.location}</span>
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#fff] transition-colors ml-auto"
            >
              <LinkedInIcon className="w-4 h-4 text-[#a39d92]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
