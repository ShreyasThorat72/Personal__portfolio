import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { getExperiences } from '../services/experienceService';
import { ExperienceItem, ExperienceCategory } from '../types';
import { TimelineNode } from '../components/timeline/TimelineNode';
import { Info } from 'lucide-react';

const CATEGORIES: ('All' | ExperienceCategory)[] = [
  'All',
  'Technical Activities',
  'Leadership',
  'Internships',
  'Job Simulations',
];

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ExperienceCategory>('All');
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    getExperiences(selectedCategory === 'All' ? undefined : selectedCategory).then((res) => {
      setExperiences(res.data);
    });
  }, [selectedCategory]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Practical Experience"
        title="Engineering Roles, Leadership & Simulations"
        description="A transparent breakdown of technical projects, student leadership, and industry simulations. Academic roles and simulations are strictly distinguished from full-time roles."
      />

      {/* Transparency Callout */}
      <div className="mb-8 p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-900/60 border border-amber-900/15 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300 flex items-start gap-3 shadow-2xs">
        <Info className="w-4 h-4 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-stone-900 dark:text-stone-100">Ethical Portfolio Commitment:</strong> All technical activities represent actual student projects and departmental engineering roles conducted at RIT. Where external industry internships are upcoming or in progress, items are explicitly marked as editable placeholders.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline of Experiences */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <TimelineNode
            key={exp.id}
            title={exp.role}
            subtitle={`${exp.organization} · ${exp.type}`}
            period={exp.period}
            location={exp.location}
            description={exp.responsibilities[0]}
            bullets={exp.responsibilities.slice(1).concat(exp.achievements || [])}
            tags={exp.technologies}
            badge={exp.type}
            isLast={idx === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
