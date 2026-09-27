import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineNodeProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  isLast?: boolean;
  badge?: string;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  bullets = [],
  tags = [],
  isLast = false,
  badge,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="relative pl-8 md:pl-10 group">
      {/* Vertical line connecting nodes */}
      {!isLast && (
        <div className="absolute left-3.5 top-4 bottom-0 w-px bg-stone-300 dark:bg-stone-800 group-hover:bg-amber-500/50 transition-colors" />
      )}

      {/* Node indicator */}
      <div className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-stone-900 border-2 border-amber-600/70 flex items-center justify-center group-hover:border-amber-500 group-hover:scale-110 transition-all duration-200 shadow-xs">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
      </div>

      {/* Main card */}
      <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-5 md:p-6 mb-8 hover:border-amber-400/60 dark:hover:border-stone-700 transition-all duration-200 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div>
            {badge && (
              <span className="text-[11px] font-mono font-bold text-amber-800 dark:text-amber-400 mb-1 inline-block">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h3>
            <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mt-0.5">{subtitle}</p>
            {location && <p className="text-xs text-stone-500 mt-0.5">{location}</p>}
          </div>

          <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            <span>{period}</span>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          {description}
        </p>

        {/* Expandable highlights & bullets */}
        {bullets.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{isExpanded ? 'Hide Key Highlights' : 'Show Key Highlights'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {isExpanded && (
              <ul className="mt-2.5 space-y-1.5 text-xs text-stone-600 dark:text-stone-300 list-disc list-inside">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-x-2 gap-y-1 text-xs text-stone-500 font-mono">
            {tags.map((tag, idx) => (
              <span key={tag}>
                {tag}
                {idx < tags.length - 1 && <span className="ml-2 text-stone-300 dark:text-stone-700">/</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
