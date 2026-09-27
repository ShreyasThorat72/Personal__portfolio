import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { fetchGitHubProfile, fetchGitHubRepositories } from '../services/githubService';
import { GitHubRepo, GitHubStats } from '../types';
import { Star, GitFork, BookOpen, ExternalLink, Calendar, Code } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

export const GitHub: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filter, setFilter] = useState<'all' | 'pinned'>('all');

  useEffect(() => {
    fetchGitHubProfile().then(setStats);
    fetchGitHubRepositories().then(setRepos);
  }, []);

  const displayedRepos = repos.filter((r) => (filter === 'pinned' ? r.isPinned : true));

  // Generate simulated GitHub contribution square grid (20 weeks x 7 days)
  const contributionWeeks = Array.from({ length: 20 }, (_, wIdx) =>
    Array.from({ length: 7 }, (_, dIdx) => {
      const val = (wIdx * 7 + dIdx * 3) % 11;
      let level = 0;
      if (val > 8) level = 3;
      else if (val > 5) level = 2;
      else if (val > 2) level = 1;
      return level;
    })
  );

  const levelColor = [
    'bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800',
    'bg-emerald-200/80 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-900',
    'bg-emerald-500/80 dark:bg-emerald-700/80',
    'bg-emerald-600 dark:bg-emerald-400',
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Open Source & Version Control"
        title="GitHub Developer Analytics"
        description="A telemetry dashboard tracking public code repositories, languages, and commit activities on GitHub."
      />

      {/* GitHub Top Stats Bar */}
      {stats && (
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-mono text-stone-500">Public Repositories</span>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-stone-900 dark:text-stone-100 mt-1 tabular-nums">
              {stats.publicRepos}
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500">Total Contributions</span>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums">
              {stats.totalContributions}+
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500">Followers</span>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-stone-900 dark:text-stone-100 mt-1 tabular-nums">
              {stats.followers}
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500">GitHub Profile</span>
            <div className="mt-1">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline"
              >
                <span>@ShreyasThorat72</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Language Breakdown & Contribution Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Language Breakdown Bar */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-800 dark:text-amber-400" />
              Language Distribution
            </h3>

            {/* Segmented color bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex mb-6 shadow-2xs">
              {stats?.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* List */}
            <div className="space-y-2.5">
              {stats?.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-stone-700 dark:text-stone-300 font-medium">{lang.name}</span>
                  </div>
                  <span className="font-mono text-stone-500">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-stone-400 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
            Aggregated across public repositories and core algorithmic suites.
          </p>
        </div>

        {/* Contribution Heatmap Grid */}
        <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                Commit Activity Grid (20 Weeks)
              </h3>
              <span className="text-xs font-mono text-stone-500">Regular Development</span>
            </div>

            {/* Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[500px]">
                {contributionWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-xs transition-colors ${levelColor[level]}`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
            <span>Learn more on GitHub</span>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-xs bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800" />
                <div className="w-2.5 h-2.5 rounded-xs bg-emerald-200" />
                <div className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                <div className="w-2.5 h-2.5 rounded-xs bg-emerald-700" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Repositories Section */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-800 dark:text-amber-400" />
            <span>Public Repositories</span>
          </h3>

          <div className="flex items-center space-x-1 p-0.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              All Repos ({repos.length})
            </button>
            <button
              onClick={() => setFilter('pinned')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                filter === 'pinned'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              Pinned Only
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRepos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 hover:border-amber-400/60 dark:hover:border-stone-700 transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-amber-800 dark:text-amber-400">{repo.language}</span>
                  {repo.isPinned && (
                    <span className="text-[10px] font-mono text-stone-500 font-semibold">Pinned</span>
                  )}
                </div>

                <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] dark:bg-stone-900 text-[10px] font-mono text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 dark:border-stone-850 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center gap-1 font-mono">
                    <Star className="w-3.5 h-3.5 text-amber-600" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
