import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 relative border-t border-[#e6e1d6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
            Academic Background
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
            Education
          </h2>
        </div>

        {/* Editorial Rows matching Yash Kava Education style */}
        <div className="border-t border-[#e6e1d6] divide-y divide-[#e6e1d6]">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-[170px_1fr] gap-3 md:gap-8 items-start"
            >
              <p className="font-mono text-xs text-[#6d6a62]">
                {edu.period}
              </p>

              <div className="space-y-1">
                <h3 className="font-display text-lg text-[#1b1a17]">
                  <b className="font-semibold">{edu.degree}</b>
                  <span className="text-[#6d6a62] font-sans text-sm"> · {edu.institution}</span>
                </h3>
                {edu.highlights && edu.highlights.length > 0 && (
                  <p className="text-xs text-[#6d6a62]">
                    {edu.highlights.join(' · ')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
