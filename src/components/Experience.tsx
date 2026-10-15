import React from 'react';
import { 
  Calendar
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
            3.5+ years of React Native engineering
          </h2>
          <p className="text-sm text-[#a39d92] max-w-xl">
            A track record of shipping cross-platform features, leading technical workflows, and architecting resilient offline-first systems.
          </p>
        </div>

        {/* Timeline Container matching Jaydeep reference portfolio */}
        <div className="border-t border-[#2e2b26] divide-y divide-[#2e2b26]">
          
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              
              {/* Left Column: Period & Badge */}
              <div className="md:col-span-3 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#a39d92] font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#f08a5d]" />
                  <span>{exp.period}</span>
                </div>
                {exp.badge && (
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1c1a17] text-[#f08a5d] border border-[#f08a5d]/40">
                      {exp.badge}
                    </span>
                  </div>
                )}
                <div className="text-xs text-[#a39d92]">
                  Remote · Gujarat, India
                </div>
              </div>

              {/* Right Column: Role, Company & Bullets */}
              <div className="md:col-span-9 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight">
                    {exp.role} <span className="text-[#a39d92] font-sans text-base">· {exp.company}</span>
                  </h3>
                </div>

                {/* Subprojects or Bullets */}
                {exp.subProjects ? (
                  <div className="space-y-6 pt-2">
                    {exp.subProjects.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <h4 className="text-sm font-semibold text-[#f0ece4] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f08a5d]" />
                          <span>{sub.name}</span>
                        </h4>
                        <ul className="space-y-2 pl-4">
                          {sub.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-sm text-[#a39d92] leading-relaxed relative pl-4">
                              <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-[#f08a5d]" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 pl-4 pt-1">
                    {exp.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-[#a39d92] leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-[#f08a5d]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {exp.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#1c1a17] border border-[#2e2b26] text-[11px] font-mono text-[#a39d92]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};
