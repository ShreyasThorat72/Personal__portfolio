import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROFILE_DATA } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socials';
import { Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react';

export const LinkedIn: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Professional Network"
        title="LinkedIn Profile & Career Focus"
        description="A synchronized view of my professional persona, network activities, career interests, and verified technical highlights."
      />

      {/* Main Profile Card */}
      <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-8 sm:p-10 shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-[#0A66C2]">
              <Linkedin className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-stone-900 dark:text-white">{PROFILE_DATA.name}</h2>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-0.5">
                Computer Science & AI/ML Undergraduate · Rajarambapu Institute of Technology (RIT)
              </p>
              <p className="text-xs text-stone-500 mt-1">Maharashtra, India</p>
            </div>
          </div>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md whitespace-nowrap"
          >
            <span>View LinkedIn Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Profile Content */}
        <div className="pt-8 space-y-8">
          {/* About Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              About Summary
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Career Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
              <span className="text-xs font-mono text-stone-500">Target Roles</span>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                Software Developer / Full Stack Engineer / AI-ML Developer
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
              <span className="text-xs font-mono text-stone-500">Availability</span>
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Internships & Software Engineering Roles
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-3">
              Professional Highlights
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Built and documented full-stack platforms including <strong className="text-stone-900 dark:text-white">CivicConnect</strong> and IoT water automation systems at RIT.
                </span>
              </div>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Consistent academic standing in 5th Semester B.Tech with specialization in Artificial Intelligence & Machine Learning.
                </span>
              </div>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Active contributor on GitHub with implementations spanning Python, C++, React, Node.js, and embedded systems.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
