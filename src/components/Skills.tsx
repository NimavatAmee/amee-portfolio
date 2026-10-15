import React, { useState, useMemo } from 'react';
import { 
  Smartphone, 
  Layout, 
  Database, 
  Radio, 
  Cpu, 
  Search, 
  Check
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Layout,
    Database,
    Radio,
    Cpu
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((category) => {
      const isCategorySelected = selectedCategory === 'all' || selectedCategory === category.id;
      if (!isCategorySelected) {
        return { ...category, skills: [] };
      }

      if (!searchTerm.trim()) {
        return category;
      }

      const matchingSkills = category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );

      return {
        ...category,
        skills: matchingSkills
      };
    }).filter((category) => category.skills.length > 0);
  }, [searchTerm, selectedCategory]);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
              Technical Skills
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
              What I work with.
            </h2>
            <p className="text-sm text-[#a39d92] max-w-xl">
              Curated directly from verified production work across cross-platform mobile apps, offline architectures, and real-time integrations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#a39d92] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. SQLite, WebRTC)..."
              className="w-full pl-9 pr-4 py-2 bg-[#1c1a17] border border-[#2e2b26] rounded-full text-xs text-[#f0ece4] placeholder-[#a39d92] focus:outline-none focus:border-[#f08a5d] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a39d92] hover:text-[#f0ece4] text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#2e2b26] text-[#f08a5d] border border-[#f08a5d]/40'
                : 'bg-[#1c1a17] border border-[#2e2b26] text-[#a39d92] hover:text-[#f0ece4]'
            }`}
          >
            All Categories ({totalSkillsCount})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2e2b26] text-[#f08a5d] border border-[#f08a5d]/40'
                  : 'bg-[#1c1a17] border border-[#2e2b26] text-[#a39d92] hover:text-[#f0ece4]'
              }`}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
            <p className="text-sm text-[#a39d92] mb-2">No skills matched "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="text-xs text-[#f08a5d] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((group) => {
              const Icon = iconMap[group.icon] || Cpu;
              return (
                <div
                  key={group.id}
                  className="p-6 rounded-2xl bg-[#1c1a17] border border-[#2e2b26] hover:border-[#f08a5d]/60 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#131210] border border-[#2e2b26] text-[#f08a5d]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#f0ece4] tracking-tight">
                          {group.name}
                        </h3>
                        <p className="text-xs text-[#a39d92]">
                          {group.skills.length} verified technologies
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[#a39d92] leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131210] border border-[#2e2b26] text-[#f0ece4] text-xs font-medium hover:border-[#f08a5d]/60 transition-colors"
                        >
                          <Check className="w-3 h-3 text-[#f08a5d]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
