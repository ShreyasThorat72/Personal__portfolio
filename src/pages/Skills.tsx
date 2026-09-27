import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { SkillCard } from '../components/skills/SkillCard';
import { SkillGraph } from '../components/skills/SkillGraph';
import { SKILLS_DATA } from '../data/skills';
import { SkillCategory } from '../types';
import { Search } from 'lucide-react';

const CATEGORIES: ('All' | SkillCategory)[] = [
  'All',
  'Programming',
  'Frontend',
  'Backend',
  'Databases',
  'AI / Machine Learning',
  'Tools',
  'Deployment',
  'IoT / Hardware',
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Competency Framework"
        title="Technical Skills & Architecture Capabilities"
        description="A structured taxonomy of programming languages, libraries, platforms, and hardware interfaces mastered through academic curriculum and hands-on project engineering."
      />

      {/* Interactive Technology Pipeline Graph */}
      <div className="mb-14">
        <SkillGraph />
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-10 p-4 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Python, React, ESP32, MongoDB)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="p-12 text-center text-stone-500 text-xs font-mono">
          No skills matched the criteria &ldquo;{searchQuery}&rdquo;.
        </div>
      )}

      {/* Discipline note: No fake percentages */}
      <div className="mt-12 p-4 rounded-2xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
        <span>Proficiency measured by practical project implementation, not vanity percentage bars.</span>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">● Core Skill</span>
          <span className="text-amber-800 dark:text-amber-400 font-semibold">● Project Experience</span>
          <span className="text-blue-700 dark:text-blue-400 font-semibold">● Working Knowledge</span>
          <span className="text-purple-700 dark:text-purple-400 font-semibold">● Learning</span>
        </div>
      </div>
    </div>
  );
};
