import React from 'react';
import { Link } from 'react-router-dom';
import { X, ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { ProjectFallbackPreview } from './ProjectFallbackPreview';

interface ProjectInspectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectInspectModal: React.FC<ProjectInspectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 dark:bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] dark:bg-[#161514] border border-stone-200 dark:border-stone-700 shadow-2xl p-6 sm:p-8 text-stone-900 dark:text-stone-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Preview */}
        <div className="w-full rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 mb-6 aspect-video max-h-72">
          <ProjectFallbackPreview
            projectId={project.id}
            title={project.title}
            accentColor={project.accentColor}
            category={project.category}
          />
        </div>

        {/* Header Details */}
        <div className="space-y-2 pb-5 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-amber-800 dark:text-amber-400">
            {project.tagline}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 border-b border-stone-200 dark:border-stone-800">
          <div className="p-4 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5">
              The Engineering Problem
            </h4>
            <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
              Engineered Solution
            </h4>
            <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Flow */}
        <div className="py-5 space-y-3 border-b border-stone-200 dark:border-stone-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Modular Architecture Pipeline
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {project.architecture.flow.map((node, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 dark:text-stone-100">
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">0{i + 1}.</span>
                  <span className="truncate">{node.name}</span>
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">{node.role}</p>
                <p className="text-[10px] font-mono text-stone-400 dark:text-stone-500 mt-2 truncate">
                  {node.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="py-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/projects/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-bold hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors shadow-sm"
          >
            <span>Open Comprehensive Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
