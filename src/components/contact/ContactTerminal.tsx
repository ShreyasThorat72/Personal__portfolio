import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const sequence = [
      'Establishing secure transmission with Shreyas Thorat...',
      'Status: Available for Entry-Level Software Engineering & AI-ML roles',
      'Affiliation: Rajarambapu Institute of Technology (RIT), Maharashtra',
      `Direct Dispatch: ${PROFILE_DATA.socials.email}`,
      'Connection verified. You may transmit a message directly below:',
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        const nextLine = sequence[current];
        setLines((prev) => [...prev, nextLine]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 160);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-5 font-mono text-xs shadow-sm text-stone-800 dark:text-stone-200">
      <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3 mb-3 text-stone-500">
        <div className="flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
          <span className="text-[11px] font-bold text-stone-800 dark:text-stone-300">Direct Inquiries Terminal</span>
        </div>
        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Channel
        </span>
      </div>

      <div className="space-y-1.5 min-h-[130px] p-3 rounded-2xl bg-[#FAF8F5] dark:bg-[#121110] border border-stone-200/70 dark:border-stone-850 text-[11px]">
        {lines.map((line, idx) => (
          <p
            key={idx}
            className={
              line.includes('verified')
                ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                : line.includes('Direct Dispatch')
                ? 'text-amber-800 dark:text-amber-400 font-semibold'
                : 'text-stone-600 dark:text-stone-400'
            }
          >
            {line}
          </p>
        ))}
        {lines.length < 5 && (
          <span className="inline-block w-2 h-3.5 bg-amber-600 animate-pulse" />
        )}
      </div>
    </div>
  );
};
