import React from 'react';
import { 
  Smartphone,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
                Mobile applications I shipped.
              </h2>
              <p className="text-sm text-[#a39d92] max-w-2xl mt-2 leading-relaxed">
                Production mobile projects spanning offline-first architectures, real-time voice protocols, and dynamic state machines.
              </p>
            </div>
            <div className="text-xs text-[#a39d92] font-mono bg-[#1c1a17] px-3 py-1.5 rounded-full border border-[#2e2b26] self-start md:self-auto">
              5 Production Case Studies
            </div>
          </div>
        </div>

        {/* Project Cards Grid matching Jaydeep reference portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-[#1c1a17] border border-[#2e2b26] hover:border-[#f08a5d]/60 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Top Head */}
              <div className="p-6 pb-4 border-b border-[#2e2b26]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-[#f08a5d] font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-[#a39d92] font-mono px-2 py-0.5 rounded-full bg-[#131210] border border-[#2e2b26]">
                    React Native
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight group-hover:text-[#f08a5d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a39d92] mt-1 line-clamp-1">
                  {project.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-[#2e2b26] flex items-center justify-between text-xs text-[#a39d92]">
                  <span className="flex items-center gap-1.5 font-medium text-[#f0ece4]">
                    <Smartphone className="w-3.5 h-3.5 text-[#f08a5d]" />
                    <span>Role: {project.myRole.split('(')[0].trim()}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Overview */}
                <p className="text-xs sm:text-sm text-[#a39d92] leading-relaxed">
                  {project.overview}
                </p>

                {/* Key Technical Contributions */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] uppercase tracking-widest text-[#a39d92] font-medium">
                    Key Technical Impact
                  </div>
                  <ul className="space-y-2 pl-3">
                    {project.contributions.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#f0ece4] leading-relaxed relative pl-3.5">
                        <span className="absolute left-0 top-2 w-1.5 h-[1px] bg-[#f08a5d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-[#2e2b26]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#131210] border border-[#2e2b26] text-[11px] font-mono text-[#a39d92]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Footnote on projects */}
        <div className="mt-12 p-4 rounded-xl bg-[#1c1a17] border border-[#2e2b26] flex items-center gap-3 text-xs text-[#a39d92]">
          <Info className="w-4 h-4 text-[#f08a5d] shrink-0" />
          <span>
            Every case study distinguishes my specific engineering contributions from the broader product team, reflecting hands-on production code delivered.
          </span>
        </div>

      </div>
    </section>
  );
};
