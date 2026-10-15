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
    <section id="architecture" className="py-16 md:py-24 relative border-t border-[#e6e1d6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
            Engineering Approach
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
            How I solve mobile engineering challenges.
          </h2>
          <p className="text-sm text-[#4a4740] max-w-2xl leading-relaxed">
            Reliable mobile apps require disciplined architectural patterns. Here is my pragmatic methodology for designing, scaling, and maintaining mobile software.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINEERING_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Activity;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-[22px] bg-[#fffdf9] border border-[#e6e1d6] hover:border-[#1f6146]/60 transition-all duration-300 flex flex-col justify-between shadow-sm group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#e7eee8] border border-[#d5e0d8] text-[#1f6146]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[rgba(27,26,23,0.05)] text-[#6d6a62] font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base text-[#1b1a17] group-hover:text-[#1f6146] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4a4740] leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Core principles */}
                  <div className="space-y-2 pt-3 border-t border-[#e6e1d6]">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#6d6a62] font-semibold">
                      Implementation Principles
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.approach.map((principle, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#3f3c36] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1f6146] mt-1.5 shrink-0" />
                          <span>{principle}</span>
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

export default EngineeringHighlights;
