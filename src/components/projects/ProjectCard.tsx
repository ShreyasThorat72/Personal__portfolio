import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../../types';
import { ProjectFallbackPreview } from '../common/ProjectFallbackPreview';
import { ProjectInspectModal } from '../common/ProjectInspectModal';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isInspectOpen, setIsInspectOpen] = useState(false);

  return (
    <>
      <article className="group relative rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 hover:border-amber-400/60 dark:hover:border-stone-700 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(28,25,23,0.03)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.08)] hover:-translate-y-1">
        {/* Top Preview Visual */}
        <div className="relative aspect-video w-full overflow-hidden bg-stone-100 dark:bg-stone-900 border-b border-stone-200/80 dark:border-stone-800/80">
          <ProjectFallbackPreview
            projectId={project.id}
            title={project.title}
            accentColor={project.accentColor}
            category={project.category}
          />

          {/* Hover overlay with dual actions: Quick Inspect & Deep Dive */}
          <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4 backdrop-blur-xs">
            <button
              onClick={() => setIsInspectOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-white text-stone-900 font-semibold text-xs shadow-md hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick Inspect</span>
            </button>
            <Link
              to={`/projects/${project.slug}`}
              className="px-3.5 py-2 rounded-xl bg-stone-900 text-white font-semibold text-xs shadow-md hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Clean unboxed metadata with typographic separators (anti-slop rule) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2.5">
              <span className="text-amber-800 dark:text-amber-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
              {project.isPlaceholder && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-600 font-mono text-[11px]">[Editable Template]</span>
                </>
              )}
            </div>

            {/* Primary Title */}
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies List & Action Links */}
          <div className="mt-6 pt-5 border-t border-stone-100 dark:border-stone-800/80">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-4 font-mono">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={tech}>
                  {tech}
                  {idx < Math.min(project.technologies.length, 4) - 1 && <span className="ml-2 text-stone-300 dark:text-stone-700">/</span>}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-stone-400 dark:text-stone-500 font-sans">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Architecture Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setIsInspectOpen(true)}
                  className="text-xs font-medium text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
                >
                  Quick View
                </button>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="p-2 rounded-xl text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Quick Inspect Modal */}
      <ProjectInspectModal
        project={isInspectOpen ? project : null}
        onClose={() => setIsInspectOpen(false)}
      />
    </>
  );
};
