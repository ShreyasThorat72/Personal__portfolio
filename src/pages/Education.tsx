import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EDUCATION_DATA } from '../data/education';
import { TimelineNode } from '../components/timeline/TimelineNode';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Academic Foundations"
        title="Theoretical Rigor & Practical Systems"
        description="Formal computer science engineering curriculum at Rajarambapu Institute of Technology, specializing in Artificial Intelligence and Machine Learning."
      />

      {/* Overview Highlight Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 shrink-0 border border-amber-200/60 dark:border-amber-900/40">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">B.Tech Degree</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Computer Science & Engineering (AIML)</p>
          </div>
        </div>

        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-900/40">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">Academic Standing</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">5th Semester (Active Coursework)</p>
          </div>
        </div>

        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-900/40">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">Institution</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Rajarambapu Institute of Technology (RIT)</p>
          </div>
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="max-w-4xl mx-auto">
        {EDUCATION_DATA.map((item, idx) => (
          <TimelineNode
            key={item.id}
            title={item.degree}
            subtitle={`${item.institute} · ${item.specialization}`}
            period={item.period}
            location={item.location}
            description={item.summary}
            bullets={item.highlights}
            tags={item.keyCoursework}
            badge={item.currentSemester}
            isLast={idx === EDUCATION_DATA.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
