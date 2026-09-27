import React, { useState, useEffect, useMemo } from 'react';
import { Search, LayoutGrid, ListFilter, ArrowRight, ShieldCheck, Github } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { getProjects } from '../services/projectsService';
import { Project, ProjectCategory } from '../types';

const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'IoT & Embedded', 'AI / ML'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProjects(selectedCategory).then((res) => {
      setProjects(res.data);
      setIsLoading(false);
    });
  }, [selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const q = searchQuery.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [projects, searchQuery]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      <SectionHeading
        eyebrow="Case Studies & Engineering"
        title="Featured Projects & Production Systems"
        description="Applied engineering across municipal platforms, microcontroller automation, and intelligent reverse vending. All architectures and codebases are open to inspection."
      />

      {/* Advanced Control Bar: Search, Category Filters, View Toggle */}
      <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === category
                  ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right: Search Input & View Mode Switcher */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, title, or problem..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              aria-label="Matrix view"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-2xs'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 rounded-3xl bg-stone-200/50 dark:bg-stone-800/40 animate-pulse border border-stone-200 dark:border-stone-800" />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-white dark:bg-[#181716] border border-stone-200 dark:border-stone-800 p-8">
          <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
            No projects matched "{searchQuery}" in category "{selectedCategory}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 px-4 py-2 rounded-xl text-xs font-bold text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Architecture Matrix View */
        <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#141312] text-stone-500 font-mono">
                  <th className="py-3.5 px-6 font-semibold">Project & Scope</th>
                  <th className="py-3.5 px-6 font-semibold">Category</th>
                  <th className="py-3.5 px-6 font-semibold">Primary Architecture</th>
                  <th className="py-3.5 px-6 font-semibold">Key Tech Stack</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800/80">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-amber-50/40 dark:hover:bg-stone-800/30 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <p className="font-bold text-stone-900 dark:text-stone-100">{project.title}</p>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{project.tagline}</p>
                    </td>
                    <td className="py-4 px-6 font-medium text-amber-800 dark:text-amber-400">
                      {project.category}
                    </td>
                    <td className="py-4 px-6 text-stone-600 dark:text-stone-300 max-w-xs truncate">
                      {project.architecture.overview}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-stone-500">
                      {project.technologies.slice(0, 3).join(', ')}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-amber-800 dark:text-amber-400 hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
