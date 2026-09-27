import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, FileText, Mail, Github, Linkedin, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { BackgroundGrid } from '../components/hero/BackgroundGrid';
import { HeroVisual } from '../components/hero/HeroVisual';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROFILE_DATA } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socials';
import { getFeaturedProjects } from '../services/projectsService';
import { getFeaturedSkills } from '../services/skillsService';
import { Project, Skill } from '../types';

export const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [featuredSkills, setFeaturedSkills] = useState<Skill[]>([]);
  const context = useOutletContext<{ onOpenRecruiterModal?: () => void }>() || {};

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.roles.length);
    }, 2500);

    getFeaturedProjects().then((res) => setFeaturedProjects(res.data));
    getFeaturedSkills().then((res) => setFeaturedSkills(res.data));

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <BackgroundGrid />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge: Zero-pill clean unboxed text with rich amber accent */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-800 dark:text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span>Computer Science</span>
                <span aria-hidden="true">·</span>
                <span>AI & Machine Learning</span>
                <span aria-hidden="true">·</span>
                <span>Full Stack Engineering</span>
              </div>

              {/* Large Headline with text-wrap: balance */}
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]"
                style={{ textWrap: 'balance' }}
              >
                Building intelligent software that solves real-world challenges.
              </h1>

              {/* Animated rotating role */}
              <div className="h-8 sm:h-9 flex items-center space-x-2 text-base sm:text-xl font-mono text-stone-600 dark:text-stone-400">
                <span>Specializing as</span>
                <span className="text-amber-800 dark:text-amber-400 font-bold border-b-2 border-amber-600/40 pb-0.5">
                  {PROFILE_DATA.roles[roleIndex]}
                </span>
              </div>

              {/* Concise Introduction */}
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
                I am <span className="text-stone-900 dark:text-stone-100 font-semibold">{PROFILE_DATA.name}</span>, a 5th-semester computer science and artificial intelligence undergraduate at{' '}
                <span className="text-stone-900 dark:text-stone-200 font-medium">{PROFILE_DATA.institute}</span>. I design scalable web architectures, embedded IoT telemetry controllers, and applied AI systems.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/projects"
                  className="px-6 py-3.5 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold text-xs tracking-wide transition-all shadow-md hover:bg-stone-800 dark:hover:bg-stone-100 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Selected Works</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/resume"
                  className="px-5 py-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 text-stone-800 dark:text-stone-100 font-semibold text-xs tracking-wide transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>Resume (ATS)</span>
                </Link>

                {context.onOpenRecruiterModal && (
                  <button
                    onClick={context.onOpenRecruiterModal}
                    className="px-5 py-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 hover:bg-amber-100/80 text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Recruiter Fast-Track</span>
                  </button>
                )}
              </div>

              {/* Secondary links */}
              <div className="pt-2 flex items-center space-x-5 text-xs text-stone-500 font-mono">
                <span className="text-stone-400">Profiles:</span>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-800 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-800 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span aria-hidden="true">·</span>
                <Link
                  to="/contact"
                  className="hover:text-amber-800 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Command Center */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & METRICS STRIP */}
      <section className="border-y border-stone-200/80 dark:border-stone-800/80 bg-white/70 dark:bg-[#141312]/70 py-8 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {PROFILE_DATA.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-stone-900 dark:text-stone-100 tabular-nums">
                  {metric.value}
                </p>
                <p className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SPOTLIGHT */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="Selected Works"
            title="Engineered for Measurable Impact"
            description="Production-minded web architectures, microcontroller telemetry systems, and machine learning models built with clean, verifiable engineering."
            className="mb-0"
          />

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors shrink-0"
          >
            <span>View All Architectures</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. CORE STACK HIGHLIGHT STRIP */}
      <section className="py-16 bg-[#F5F2EB]/60 dark:bg-stone-900/30 border-t border-stone-200/80 dark:border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200/80 dark:border-stone-800">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1">
                Technical Competencies
              </p>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                Core Technologies & Toolchains
              </h3>
            </div>
            <Link
              to="/skills"
              className="text-xs font-bold text-amber-800 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 flex items-center gap-1"
            >
              <span>Explore Full Competency Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 pt-6">
            {featuredSkills.slice(0, 6).map((skill) => (
              <div
                key={skill.id}
                className="p-4 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 text-left hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
              >
                <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">{skill.name}</p>
                <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">{skill.category}</p>
                <p className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 mt-2 font-semibold">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECRUITER / HIRING INVITATION BANNER */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#161514] border border-amber-900/15 dark:border-stone-800 shadow-[0_20px_60px_-15px_rgba(28,25,23,0.06)] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-800 dark:text-amber-400 uppercase">
              Targeting Entry-Level Software Engineering Opportunities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Looking for a motivated, fast-learning developer on your team?
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Currently advancing through 5th semester at Rajarambapu Institute of Technology with a focus on AI/ML, React, Node.js, and algorithmic problem solving. Open to internships, software developer roles, and engineering collaborations.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold text-xs tracking-wide shadow-md hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors"
              >
                Start Conversation
              </Link>
              <Link
                to="/resume"
                className="px-5 py-3.5 rounded-2xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs transition-colors"
              >
                View Full ATS Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
