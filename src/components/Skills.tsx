import React, { useState, useMemo } from 'react';
import { 
  Smartphone, 
  Layout, 
  Database, 
  Radio, 
  Cpu, 
  Search
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
    <section id="skills" className="py-16 md:py-24 relative border-t border-[#e6e1d6] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium">
              Technical Stack
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1b1a17] tracking-tight">
              Technologies & frameworks I rely on.
            </h2>
            <p className="text-sm text-[#4a4740] max-w-xl">
              Curated from verified production work across cross-platform mobile apps, offline architectures, and real-time integrations.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6d6a62] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. SQLite, WebRTC)..."
              className="w-full pl-9 pr-4 py-2 bg-[#fffdf9] border border-[#e6e1d6] rounded-full text-xs text-[#1b1a17] placeholder-[#6d6a62] focus:outline-none focus:border-[#1f6146] transition-colors shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6d6a62] hover:text-[#1b1a17] text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[#1b1a17] text-[#f7f5f0] shadow-sm'
                : 'bg-[#fffdf9] text-[#6d6a62] border border-[#e6e1d6] hover:border-[#1f6146] hover:text-[#1b1a17]'
            }`}
          >
            All Skills ({totalSkillsCount})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#e7eee8] text-[#173d2c] border border-[#d5e0d8]'
                  : 'bg-[#fffdf9] text-[#6d6a62] border border-[#e6e1d6] hover:border-[#1f6146] hover:text-[#1b1a17]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Cpu;
            return (
              <div
                key={category.id}
                className="p-5 sm:p-6 rounded-[22px] bg-[#fffdf9] border border-[#e6e1d6] hover:border-[#d5e0d8] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-xl bg-[#e7eee8] text-[#1f6146]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-[#1f6146]">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6d6a62] mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-[rgba(27,26,23,0.05)] text-xs text-[#3f3c36] font-medium hover:bg-[#e7eee8] hover:text-[#173d2c] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e6e1d6] flex items-center justify-between text-[11px] font-mono text-[#6d6a62]">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-[#1f6146]">Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
