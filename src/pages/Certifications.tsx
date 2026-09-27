import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { getCertifications } from '../services/certificationService';
import { CertificationItem, CertificationCategory } from '../types';
import { Award, ExternalLink, Search, CheckCircle2 } from 'lucide-react';

const CATEGORIES: ('All' | CertificationCategory)[] = [
  'All',
  'AI/ML',
  'Programming',
  'Web Development',
  'Cloud',
  'Data',
];

export const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'All' | CertificationCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getCertifications(selectedCategory === 'All' ? undefined : selectedCategory).then((res) => {
      setCertifications(res.data);
    });
  }, [selectedCategory]);

  const filteredCerts = certifications.filter((cert) => {
    const q = searchQuery.toLowerCase();
    return (
      cert.title.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q) ||
      cert.skillsGained.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Verified Credentials"
        title="Certifications & Technical Training"
        description="Formal coursework completions, professional development certifications, and specialized credentials. Structured for easy recruiter verification."
      />

      {/* Filter and Search Bar */}
      <div className="mb-10 p-4 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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

        <div className="relative max-w-md">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search credentials by title, issuer, or skill..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-stone-700 transition-all duration-200 shadow-2xs hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-2.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-850 border border-stone-200 dark:border-stone-800 text-amber-800 dark:text-amber-400 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-stone-500 block">
                    {cert.issueDate}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 justify-end mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-400 mb-1.5 font-semibold">
                <span>{cert.category}</span>
                {cert.isPlaceholder && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-600 font-mono text-[11px]">[Editable in src/data/certifications.ts]</span>
                  </>
                )}
              </div>

              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 font-medium">
                Issuer: <span className="text-stone-800 dark:text-stone-200 font-semibold">{cert.issuer}</span>
              </p>

              {cert.credentialId && (
                <p className="text-[11px] font-mono text-stone-500 mt-2">
                  ID: <span className="text-stone-700 dark:text-stone-300 font-semibold">{cert.credentialId}</span>
                </p>
              )}

              {/* Skills Gained */}
              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
                <p className="text-[11px] text-stone-500 font-semibold mb-2">Competencies Gained:</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-[10px] font-mono font-medium text-stone-700 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {cert.credentialUrl && (
              <div className="mt-6 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500">Verification</span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 flex items-center gap-1 transition-colors"
                >
                  <span>Verify Record</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
