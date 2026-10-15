import React from 'react';
import { 
  MapPin, 
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative border-t border-[#e6e1d6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
            About Me
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
            Thoughtful mobile engineering for real product impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-[22px] overflow-hidden bg-[#fffdf9] border border-[#e6e1d6] shadow-sm group">
              
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7f5f0]">
                <img
                  src="/images/amee-portrait.jpg"
                  alt="Amee Nimavat - Senior React Native Developer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                
                {/* Floating pill over photo top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffdf9]/95 backdrop-blur-md border border-[#e6e1d6] text-[11px] font-semibold text-[#1f6146] shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1f6146] animate-pulse" />
                    <span>🌍 Worldwide Remote</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#fffdf9]/95 backdrop-blur-md border border-[#e6e1d6] text-[11px] text-[#4a4740] shadow-sm font-medium">
                    <MapPin className="w-3 h-3 text-[#1f6146]" />
                    <span>Surat, India</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#1b1a17] via-[#1b1a17]/80 to-transparent space-y-1 text-[#f7f5f0]">
                  <div className="font-display font-semibold text-2xl tracking-tight text-[#f7f5f0]">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-[#e7eee8] font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#e7eee8]" />
                    <span>{PERSONAL_INFO.role}</span>
                  </div>
                </div>
              </div>

              {/* Quick specs bar under photo */}
              <div className="p-4 bg-[#fffdf9] border-t border-[#e6e1d6] grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[#6d6a62] text-[11px] font-medium">Primary Focus</span>
                  <span className="text-[#1b1a17] font-semibold">React Native & Expo</span>
                </div>
                <div>
                  <span className="block text-[#6d6a62] text-[11px] font-medium">Specialization</span>
                  <span className="text-[#1b1a17] font-semibold">Cross-Platform Mobile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Domains Shipped */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Introduction Statement Card */}
            <div className="p-6 sm:p-8 rounded-[22px] bg-[#fffdf9] border border-[#e6e1d6] shadow-sm space-y-6">
              <p className="text-base sm:text-[18px] text-[#1b1a17] leading-relaxed font-normal">
                "{PERSONAL_INFO.aboutIntro}"
              </p>

              <div className="pt-6 border-t border-[#e6e1d6] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="block text-[#1b1a17] font-semibold">Location</span>
                  <span className="text-[#6d6a62]">{PERSONAL_INFO.location}</span>
                </div>
                <div>
                  <span className="block text-[#1b1a17] font-semibold">Preference</span>
                  <span className="text-[#1f6146] font-semibold">{PERSONAL_INFO.workPreference}</span>
                </div>
                <div>
                  <span className="block text-[#1b1a17] font-semibold">Experience</span>
                  <span className="text-[#6d6a62]">3.5+ Years</span>
                </div>
                <div>
                  <span className="block text-[#1b1a17] font-semibold">Status</span>
                  <span className="text-[#1f6146] font-semibold">Open Worldwide</span>
                </div>
              </div>
            </div>

            {/* Domains Shipped Card - Managed Horizontally below Bio */}
            <div className="p-6 sm:p-7 rounded-[22px] bg-[#fffdf9] border border-[#e6e1d6] shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#6d6a62] font-semibold">
                  Domains Shipped
                </h3>
                <span className="font-mono text-[11px] text-[#6d6a62]">5 key product sectors</span>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-0.5">
                {[
                  'Fintech & Expense Tracking',
                  'Enterprise & Workforce Logistics',
                  'Social Platforms & Tournaments',
                  'Real-Time Dating Apps',
                  'Bus Transport & Ticketing Systems'
                ].map((domain) => (
                  <span
                    key={domain}
                    className="inline-flex items-center px-3.5 py-2 rounded-full bg-[rgba(27,26,23,0.04)] border border-[#e6e1d6] text-xs text-[#3f3c36] font-medium hover:bg-[#e7eee8] hover:text-[#173d2c] hover:border-[#d5e0d8] transition-colors"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
