import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MobileDeviceMockup } from './MobileDeviceMockup';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-[#131210]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow in Jaydeep reference style */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#a39d92] font-medium">
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <span className="text-[#f08a5d] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f08a5d] animate-pulse" />
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Headline using Instrument Serif */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f0ece4] font-normal leading-[1.08] tracking-tight">
              Building reliable mobile experiences that people love.
            </h1>
            
            {/* Lede Text */}
            <p className="text-base sm:text-lg text-[#a39d92] leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Specialties Badges in Jaydeep style */}
            <div className="pt-1 flex flex-wrap gap-2">
              {PERSONAL_INFO.specialties.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 rounded-full bg-[#1c1a17] border border-[#2e2b26] text-[#a39d92] text-xs font-medium hover:border-[#f08a5d] hover:text-[#f0ece4] transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#131210] bg-[#f08a5d] hover:bg-[#fa9d73] shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#f0ece4] bg-[#1c1a17] border border-[#2e2b26] hover:border-[#f0ece4] transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#f08a5d]" />
                <span>Let’s Connect</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-[#a39d92] hover:text-[#f08a5d] transition-colors"
                aria-label="View LinkedIn profile"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Mobile Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <MobileDeviceMockup initialScreen="expense" interactive={true} variant="hero" />
          </div>

        </div>

        {/* Stats Grid matching Jaydeep reference portfolio */}
        <div className="mt-16 pt-8 border-t border-[#2e2b26] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-[#f0ece4] font-normal">3.5+</div>
            <div className="text-xs text-[#a39d92]">years of React Native mobile engineering</div>
          </div>
          <div className="space-y-1 md:border-l md:border-[#2e2b26] md:pl-6">
            <div className="font-serif text-3xl sm:text-4xl text-[#f08a5d] font-normal">iOS & Android</div>
            <div className="text-xs text-[#a39d92]">cross-platform applications shipped</div>
          </div>
          <div className="space-y-1 md:border-l md:border-[#2e2b26] md:pl-6">
            <div className="font-serif text-3xl sm:text-4xl text-[#f0ece4] font-normal">Offline-First</div>
            <div className="text-xs text-[#a39d92]">SQLite architecture & background sync</div>
          </div>
          <div className="space-y-1 md:border-l md:border-[#2e2b26] md:pl-6">
            <div className="font-serif text-3xl sm:text-4xl text-[#f08a5d] font-normal">End-to-End</div>
            <div className="text-xs text-[#a39d92]">feature ownership from spec to store</div>
          </div>
        </div>

      </div>
    </section>
  );
};
