import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { getAchievements } from '../services/achievementService';
import { AchievementItem, AchievementCategory } from '../types';
import { Trophy, Star, ArrowUpRight } from 'lucide-react';

const CATEGORIES: ('All' | AchievementCategory)[] = [
  'All',
  'Project Showcases',
  'Academic Milestones',
  'Competitions & Hackathons',
  'Technical Recognitions',
];

export const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'All' | AchievementCategory>('All');

  useEffect(() => {
    getAchievements(selectedCategory === 'All' ? undefined : selectedCategory).then((res) => {
      setAchievements(res.data);
    });
  }, [selectedCategory]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Milestones & Recognition"
        title="Achievements & Demonstrations"
        description="Highlights from academic performance, engineering exhibitions at RIT, and verified technical recognitions."
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
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

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-stone-700 transition-all duration-200 shadow-2xs hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-stone-500">
                  {item.date}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-400 mb-2 font-semibold">
                <span>{item.category}</span>
                {item.isPlaceholder && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-600 font-mono text-[11px]">[Editable in src/data/achievements.ts]</span>
                  </>
                )}
              </div>

              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-medium mt-1">
                Event: <span className="text-stone-900 dark:text-white font-semibold">{item.event}</span>
              </p>

              <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.description}
              </p>

              {item.impact && (
                <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
                  <Star className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.impact}</span>
                </div>
              )}
            </div>

            {item.link && (
              <div className="mt-6 pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center gap-1 transition-colors"
                >
                  <span>Related Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
