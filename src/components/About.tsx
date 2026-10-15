import React from 'react';
import { 
  CheckCircle2, 
  Smartphone, 
  Database, 
  Cloud, 
  Layers, 
  GitPullRequest,
  MapPin,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "3.5+ Years Mobile Development",
      description: "Dedicated focus on production cross-platform mobile development using React Native, TypeScript, and modern ecosystem tools.",
      icon: Smartphone,
    },
    {
      title: "iOS & Android Development",
      description: "Building responsive native experiences across screen sizes, handling device permissions, platform nuances, and native modules.",
      icon: Layers,
    },
    {
      title: "Offline-First & Background Sync",
      description: "Deep expertise architecting local SQLite databases, Zustand state caches, and background sync queues for spotty connectivity.",
      icon: Database,
    },
    {
      title: "API & Firebase Integrations",
      description: "Seamless integration of RESTful services, Firebase Authentication, Cloud Messaging (FCM), Crashlytics, and Remote Config.",
      icon: Cloud,
    },
    {
      title: "End-to-End Feature Ownership",
      description: "Taking products from design wireframes and technical breakdown to testing, app store builds (EAS/Fastlane), and production release.",
      icon: GitPullRequest,
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            About Me
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
            Thoughtful mobile engineering for real product impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#1c1a17] border border-[#2e2b26] group">
              
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#131210]">
                <img
                  src="/images/amee-portrait.jpg"
                  alt="Amee Nimavat - Senior React Native Developer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                
                {/* Floating pill over photo top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131210]/90 backdrop-blur-md border border-[#2e2b26] text-[11px] font-medium text-[#f08a5d]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f08a5d] animate-pulse" />
                    <span>Open to Remote</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#131210]/90 backdrop-blur-md border border-[#2e2b26] text-[11px] text-[#a39d92]">
                    <MapPin className="w-3 h-3 text-[#f08a5d]" />
                    <span>Surat, India</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#131210] via-[#131210]/80 to-transparent space-y-1">
                  <div className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-[#f08a5d] font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{PERSONAL_INFO.role}</span>
                  </div>
                </div>
              </div>

              {/* Quick specs bar under photo */}
              <div className="p-4 bg-[#1c1a17] border-t border-[#2e2b26] grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[#a39d92] text-[11px]">Primary Focus</span>
                  <span className="text-[#f0ece4] font-medium">React Native & Expo</span>
                </div>
                <div>
                  <span className="block text-[#a39d92] text-[11px]">Architecture</span>
                  <span className="text-[#f0ece4] font-medium">Offline-First & SQLite</span>
                </div>
              </div>
            </div>

            {/* Product Domains Box */}
            <div className="p-5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
              <h3 className="text-xs uppercase tracking-widest text-[#a39d92] font-medium mb-3">
                Domains Shipped
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Fintech & Expense Tracking',
                  'Enterprise & Workforce Logistics',
                  'Social Platforms & Tournaments',
                  'Real-Time Dating Apps',
                  'Transport & Ticketing'
                ].map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 rounded-full bg-[#131210] border border-[#2e2b26] text-xs text-[#a39d92] font-medium"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Capability Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Introduction Statement Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
              <p className="text-base sm:text-lg text-[#f0ece4] leading-relaxed font-normal mb-6">
                "{PERSONAL_INFO.aboutIntro}"
              </p>

              <div className="pt-6 border-t border-[#2e2b26] flex flex-wrap gap-6 text-xs text-[#a39d92]">
                <div>
                  <span className="block text-[#f0ece4] font-medium">Location</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div>
                  <span className="block text-[#f0ece4] font-medium">Preference</span>
                  <span>{PERSONAL_INFO.workPreference}</span>
                </div>
                <div>
                  <span className="block text-[#f0ece4] font-medium">Experience</span>
                  <span>3.5+ Years</span>
                </div>
                <div>
                  <span className="block text-[#f0ece4] font-medium">Status</span>
                  <span className="text-[#f08a5d]">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-[#a39d92] font-medium mb-2">
                Core Capabilities & Highlights
              </h3>

              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#1c1a17] border border-[#2e2b26] hover:border-[#f08a5d]/60 transition-colors flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-[#131210] border border-[#2e2b26] text-[#f08a5d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium text-[#f0ece4] flex items-center justify-between">
                        <span>{item.title}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f08a5d]" />
                      </h4>
                      <p className="text-xs text-[#a39d92] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
