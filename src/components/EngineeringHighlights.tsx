import React from 'react';
import { 
  WifiOff, 
  RefreshCw, 
  Cloud, 
  Zap, 
  Activity, 
  Users
} from 'lucide-react';
import { ENGINEERING_PILLARS } from '../data/portfolioData';

export const EngineeringHighlights: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    WifiOff,
    RefreshCw,
    Cloud,
    Zap,
    Activity,
    Users
  };

  return (
    <section id="architecture" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            Engineering Approach
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
            How I solve mobile engineering challenges.
          </h2>
          <p className="text-sm text-[#a39d92] max-w-2xl leading-relaxed">
            Reliable mobile apps require disciplined architectural patterns. Here is my pragmatic methodology for designing, scaling, and maintaining mobile software.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Activity;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-xl bg-[#1c1a17] border border-[#2e2b26] hover:border-[#f08a5d]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#131210] border border-[#2e2b26] text-[#f08a5d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#131210] text-[#a39d92] border border-[#2e2b26]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#f0ece4] tracking-tight group-hover:text-[#f08a5d] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#a39d92] leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Core principles */}
                  <div className="space-y-2 pt-3 border-t border-[#2e2b26]">
                    <div className="text-[10px] uppercase tracking-widest text-[#a39d92] font-medium">
                      Implementation Principles
                    </div>
                    <ul className="space-y-1.5 pl-3">
                      {pillar.approach.map((point, idx) => (
                        <li key={idx} className="text-xs text-[#a39d92] leading-relaxed relative pl-3.5">
                          <span className="absolute left-0 top-2 w-1.5 h-[1px] bg-[#f08a5d]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
