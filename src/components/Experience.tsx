import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative border-t border-[#e6e1d6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
            Experience
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
            3.5+ years of React Native engineering
          </h2>
          <p className="text-sm text-[#4a4740] max-w-xl">
            A track record of shipping cross-platform features, leading technical workflows, and architecting resilient offline-first systems.
          </p>
        </div>

        {/* Editorial Rows matching Yash Kava Experience style */}
        <div className="border-t border-[#e6e1d6] divide-y divide-[#e6e1d6]">
          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = idx === 0;
            return (
              <article 
                key={exp.id} 
                className="py-8 grid grid-cols-1 md:grid-cols-[170px_1fr] gap-4 md:gap-8 items-start"
              >
                {/* Left Column: When & Badge */}
                <div className="space-y-1.5">
                  <p className={`font-mono text-xs ${isCurrent ? 'text-[#1f6146] font-semibold' : 'text-[#6d6a62]'}`}>
                    {exp.period}
                  </p>
                  {exp.badge && (
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e7eee8] text-[#173d2c] border border-[#d5e0d8] inline-block">
                        {exp.badge}
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-[#6d6a62]">
                    Surat, Gujarat, India
                  </p>
                </div>

                {/* Right Column: Role, Company & Bullet Points */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-xl text-[#1b1a17]">
                      <b className="font-semibold">{exp.role}</b>
                      <span className="text-[#6d6a62] font-sans text-base"> · {exp.company}</span>
                    </h3>
                  </div>

                  {/* Subprojects or Bullets */}
                  {exp.subProjects ? (
                    <div className="space-y-5 pt-1">
                      {exp.subProjects.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="text-sm font-semibold text-[#1b1a17] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1f6146]" />
                            <span>{sub.name}</span>
                          </h4>
                          <ul className="space-y-1.5 pl-4">
                            {sub.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-sm text-[#4a4740] leading-relaxed relative pl-3.5">
                                <span className="absolute left-0 top-2 w-1.5 h-[1.5px] bg-[#1f6146]/70" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-1.5 pl-4 pt-1">
                      {exp.bullets?.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-sm text-[#4a4740] leading-relaxed relative pl-3.5">
                          <span className="absolute left-0 top-2 w-1.5 h-[1.5px] bg-[#1f6146]/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-[rgba(27,26,23,0.05)] border border-transparent text-[11px] font-mono text-[#4a4740] hover:bg-[#e7eee8] hover:text-[#173d2c] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
