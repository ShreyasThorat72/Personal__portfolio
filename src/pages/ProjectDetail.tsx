import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Layers, Award, Sparkles } from 'lucide-react';
import { getProjectBySlug } from '../services/projectsService';
import { Project } from '../types';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';
import { ProjectFallbackPreview } from '../components/common/ProjectFallbackPreview';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProjectBySlug(id).then((res) => {
      if (res.data) {
        setProject(res.data);
      } else {
        setProject(null);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <div className="w-10 h-10 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs font-mono text-stone-500">Loading architectural case study...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-20 max-w-xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">Project Not Found</h2>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          The requested project specification could not be located.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-stone-900 text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 dark:text-stone-100">
      {/* Back button */}
      <button
        onClick={() => navigate('/projects')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-white mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Projects</span>
      </button>

      {/* Header Info */}
      <header className="mb-10 space-y-4">
        <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-400 font-semibold">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.status}</span>
          {project.isPlaceholder && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 font-mono text-[11px]">[Editable in src/data/projects.ts]</span>
            </>
          )}
        </div>

        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-tight"
          style={{ textWrap: 'balance' }}
        >
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 text-stone-800 dark:text-stone-100 text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-bold flex items-center gap-2 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span>Repository & Demo</span>
            </a>
          )}
        </div>
      </header>

      {/* Visual Preview Banner */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-stone-200/90 dark:border-stone-800 aspect-video w-full shadow-lg bg-stone-100 dark:bg-stone-900">
        <ProjectFallbackPreview
          projectId={project.id}
          title={project.title}
          accentColor={project.accentColor}
          category={project.category}
        />
      </div>

      {/* Case Study Sections */}
      <div className="space-y-12">
        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-400 block mb-2">
              01. The Problem
            </span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-3">
              Context & Core Challenge
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 block mb-2">
              02. The Solution
            </span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-3">
              Engineered Intervention
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.solution}
            </p>
          </section>
        </div>

        {/* 03 Architecture Diagram */}
        <section>
          <div className="mb-4">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 block mb-1">
              03. Architecture & Data Flow
            </span>
          </div>
          <ArchitectureDiagram
            overview={project.architecture.overview}
            flow={project.architecture.flow}
            accentColor={project.accentColor}
          />
        </section>

        {/* 04 Technologies */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
          <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 block mb-2">
            04. Technologies Used
          </span>
          <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">
            Component Stack & Tooling
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-xs font-mono font-medium text-stone-800 dark:text-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 05 Features & 06 Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400 block mb-2">
              05. Key Capabilities
            </span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">
              Functional Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 block mb-2">
              06. Technical Hurdles
            </span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">
              Challenges Overcome
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 07 Outcome */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-white dark:from-stone-900/60 dark:via-[#181716] dark:to-[#181716] border border-amber-900/20 dark:border-stone-800 shadow-sm">
          <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-400 font-mono text-xs font-bold mb-2">
            <Award className="w-4 h-4" />
            <span>07. Outcome & Practical Verification</span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
            Practical Impact & Engineering Takeaway
          </h3>
          <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {project.outcome}
          </p>
        </section>

        {/* Navigation bar */}
        <section className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/projects"
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-bold hover:bg-stone-800 transition-colors shadow-sm"
          >
            Discuss this Architecture
          </Link>
        </section>
      </div>
    </div>
  );
};
