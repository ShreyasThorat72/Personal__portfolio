import React from 'react';
import { Skill, SkillLevel } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

const levelBadgeColor: Record<SkillLevel, string> = {
  'Core Skill': 'text-emerald-700 dark:text-emerald-400',
  'Project Experience': 'text-amber-800 dark:text-amber-400',
  'Working Knowledge': 'text-blue-700 dark:text-blue-400',
  'Learning': 'text-purple-700 dark:text-purple-400',
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-4 hover:border-amber-400/60 dark:hover:border-stone-700 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">{skill.name}</h3>
          <span className={`text-[11px] font-mono font-semibold ${levelBadgeColor[skill.level]}`}>
            {skill.level}
          </span>
        </div>

        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mt-1">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-2.5 border-t border-stone-100 dark:border-stone-850 flex items-center justify-between text-[11px] text-stone-500">
        <span>{skill.category}</span>
        {skill.featured && <span className="text-amber-800 dark:text-amber-400 font-semibold font-mono">★ Primary Focus</span>}
      </div>
    </div>
  );
};
