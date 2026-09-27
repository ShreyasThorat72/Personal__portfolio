import React from 'react';
import { ProjectArchitectureStep } from '../../types';
import { ArrowRight, Layers } from 'lucide-react';

interface ArchitectureDiagramProps {
  overview: string;
  flow: ProjectArchitectureStep[];
  accentColor?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  overview,
  flow,
  accentColor = '#B45309',
}) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 md:p-8 shadow-sm">
      <div className="flex items-center space-x-2.5 mb-3">
        <Layers className="w-5 h-5 text-amber-800 dark:text-amber-400" />
        <h3 className="text-lg font-bold text-stone-900 dark:text-white">System Architecture & Data Pipeline</h3>
      </div>
      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-3xl">
        {overview}
      </p>

      {/* Pipeline flow nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {flow.map((step, index) => (
          <div key={index} className="relative flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 hover:border-amber-400/60 transition-colors h-full flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 font-semibold">
                    Node 0{index + 1}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">{step.name}</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-snug">{step.role}</p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/70 dark:border-stone-800">
                <span className="text-[11px] font-mono text-stone-700 dark:text-stone-300">
                  {step.tech}
                </span>
              </div>
            </div>

            {/* Step connector arrow (desktop) */}
            {index < flow.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-stone-400">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
