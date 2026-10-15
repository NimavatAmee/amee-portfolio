import React from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            Academic Background
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
            Education
          </h2>
          <p className="text-sm text-[#a39d92] max-w-xl">
            Formal computer science and advanced information technology foundations.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-[#1c1a17] border border-[#2e2b26] space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-[#131210] border border-[#2e2b26] text-[#f08a5d]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#131210] text-[#a39d92] border border-[#2e2b26]">
                  {edu.status}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#f08a5d] font-medium mt-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#a39d92] font-mono bg-[#131210] px-3 py-1 rounded-full border border-[#2e2b26]">
                <Calendar className="w-3.5 h-3.5 text-[#f08a5d]" />
                <span>{edu.period}</span>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-2 border-t border-[#2e2b26]">
                  {edu.highlights.map((h, hIdx) => (
                    <p key={hIdx} className="text-xs text-[#a39d92] leading-relaxed">
                      {h}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
