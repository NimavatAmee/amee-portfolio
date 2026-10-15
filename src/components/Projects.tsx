import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  // Styles aligned with Yash Kava's proj-green, proj-sand, proj-clay, and card surfaces
  const getCardStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          container: 'bg-[#e7eee8] border border-[#d5e0d8] text-[#173d2c]',
          title: 'text-[#173d2c]',
          body: 'text-[#3f4a43]',
          pill: 'bg-[rgba(23,61,44,0.1)] text-[#173d2c]',
          bullet: 'bg-[#1f6146]',
          badge: 'bg-[#173d2c] text-[#f7f5f0]'
        };
      case 1:
        return {
          container: 'bg-[#f2ebdc] border border-[#e5dbc7] text-[#4a3a1d]',
          title: 'text-[#4a3a1d]',
          body: 'text-[#494133]',
          pill: 'bg-[rgba(74,58,29,0.08)] text-[#4a3a1d]',
          bullet: 'bg-[#7a6438]',
          badge: 'bg-[#4a3a1d] text-[#f7f5f0]'
        };
      case 2:
        return {
          container: 'bg-[#ece6e2] border border-[#ddd4ce] text-[#43352f]',
          title: 'text-[#43352f]',
          body: 'text-[#463b35]',
          pill: 'bg-[rgba(67,53,47,0.08)] text-[#43352f]',
          bullet: 'bg-[#6a5c55]',
          badge: 'bg-[#43352f] text-[#f7f5f0]'
        };
      case 3:
        // Feudr Social Platform: Soft Slate Blue Mist
        return {
          container: 'bg-[#e2ebf2] border border-[#c8d8e6] text-[#1d3144]',
          title: 'text-[#182938]',
          body: 'text-[#324557]',
          pill: 'bg-[rgba(24,41,56,0.08)] text-[#182938]',
          bullet: 'bg-[#2b4a64]',
          badge: 'bg-[#182938] text-[#f7f5f0]'
        };
      case 4:
      default:
        // SmartHaul Transport App: Warm Biscuit / Amber Stone
        return {
          container: 'bg-[#eee6d8] border border-[#ded3c2] text-[#423626]',
          title: 'text-[#392e20]',
          body: 'text-[#493d2e]',
          pill: 'bg-[rgba(57,46,32,0.08)] text-[#392e20]',
          bullet: 'bg-[#614e35]',
          badge: 'bg-[#392e20] text-[#f7f5f0]'
        };
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative border-t border-[#e6e1d6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
                Mobile applications I shipped.
              </h2>
              <p className="text-sm text-[#4a4740] max-w-2xl mt-1.5 leading-relaxed">
                Production mobile projects spanning offline-first architectures, real-time voice protocols, and dynamic state machines.
              </p>
            </div>
            <div className="text-xs font-mono text-[#6d6a62] bg-[#fffdf9] px-3 py-1.5 rounded-full border border-[#e6e1d6] self-start md:self-auto shadow-sm">
              5 Production Apps
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, index) => {
            const style = getCardStyle(index);
            const isFeatured = index === 0;

            return (
              <article
                key={project.id}
                className={`rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${style.container} ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${style.badge}`}>
                      0{index + 1}
                    </span>
                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${style.pill} px-2.5 py-0.5 rounded-full`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`font-display font-medium text-2xl sm:text-3xl tracking-tight mb-1 ${style.title}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs font-mono mb-4 opacity-80`}>
                    {project.subtitle} · <span className="font-semibold">{project.myRole.split('(')[0].trim()}</span>
                  </p>

                  {/* Overview */}
                  <p className={`text-sm sm:text-[15px] leading-relaxed mb-5 ${style.body}`}>
                    {project.overview}
                  </p>

                  {/* Key Contributions / Impact */}
                  <div className="space-y-2 mb-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider font-semibold opacity-75">
                      Key Technical Impact
                    </div>
                    <ul className="space-y-2">
                      {project.contributions.slice(0, isFeatured ? 4 : 3).map((item, idx) => (
                        <li key={idx} className={`text-xs sm:text-sm leading-relaxed relative pl-4 ${style.body}`}>
                          <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full opacity-70 ${style.bullet}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-colors ${style.pill}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
