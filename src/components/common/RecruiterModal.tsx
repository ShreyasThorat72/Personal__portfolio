import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  ExternalLink,
  X,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/socials';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 dark:bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] dark:bg-[#161514] border border-amber-900/15 dark:border-stone-700 shadow-2xl p-6 sm:p-8 text-stone-900 dark:text-stone-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close executive brief"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recruiter Fast-Track · Executive Candidate Summary</span>
        </div>

        {/* Candidate Profile Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white">
              {PROFILE_DATA.name}
            </h2>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-300 mt-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>5th Semester B.Tech in CSE (AI & ML) · RIT Maharashtra</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internships & Roles
            </span>
          </div>
        </div>

        {/* 30-Second Executive Summary */}
        <div className="py-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Executive Value Proposition
          </h3>
          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
            High-aptitude undergraduate software engineer combining modern web engineering (React, TypeScript, Node.js, RESTful architectures) with applied AI/ML pipelines and embedded microcontroller systems (ESP32/C++). Proven track record of architecting solutions from concept to deployment.
          </p>

          {/* Key Competency Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
              <p className="text-xs font-bold text-stone-900 dark:text-white">Full Stack Engineering</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
              <p className="text-xs font-bold text-stone-900 dark:text-white">AI / Machine Learning</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Python, Scikit-Learn, PyTorch, Computer Vision (OpenCV), Feature Triage
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800">
              <p className="text-xs font-bold text-stone-900 dark:text-white">Hardware & Systems</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                C++, ESP32, Ultrasonic Sensors, Relay Actuators, Closed-Loop Telemetry
              </p>
            </div>
          </div>

          {/* Top 3 Verified Project Highlights */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5">
              Flagship Project Portfolio
            </h3>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200/70 dark:border-stone-800 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    CivicConnect · Municipal Grievance Triage Platform
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Full-stack citizen portal with GPS-backed reports, automated triage routing, and dispatch tracking.
                  </p>
                </div>
                <Link
                  to="/projects/civicconnect"
                  onClick={onClose}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5 shrink-0 ml-2"
                >
                  Specs <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200/70 dark:border-stone-800 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    Smart Water Tank Automation · IoT Telemetry & Actuation
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Embedded controller with ultrasonic depth sensing, fail-safe dry-run pump cutoff, and real-time dashboard.
                  </p>
                </div>
                <Link
                  to="/projects/smart-water-tank"
                  onClick={onClose}
                  className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-0.5 shrink-0 ml-2"
                >
                  Specs <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200/70 dark:border-stone-800 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    BottlePoints · Reverse Vending & Smart Recycling
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Optical object verification with real-time eco reward credits to incentivize circular waste streams.
                  </p>
                </div>
                <Link
                  to="/projects/bottlepoints"
                  onClick={onClose}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 shrink-0 ml-2"
                >
                  Specs <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fast Actions Bar */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              to="/resume"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-bold hover:bg-stone-800 dark:hover:bg-stone-100 transition-all shadow-md"
            >
              <FileText className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span>View & Print Resume</span>
            </Link>

            <a
              href={`mailto:${SOCIAL_LINKS.email}?subject=Interview%20Inquiry%20-%20Shreyas%20Thorat`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Candidate</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 text-stone-500">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
