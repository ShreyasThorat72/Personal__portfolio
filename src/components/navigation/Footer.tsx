import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socials';
import { PROFILE_DATA } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200/80 dark:border-stone-850 bg-[#F5F2EB] dark:bg-[#121110] text-stone-600 dark:text-stone-400 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center font-display font-black text-xs text-amber-700 dark:text-amber-400 shadow-2xs">
                ST
              </span>
              <span className="font-display font-bold text-lg text-stone-900 dark:text-stone-100">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
              B.Tech in Computer Science Engineering (AI & ML) at Rajarambapu Institute of Technology (RIT), Maharashtra.
              Designing intelligent architectures, scalable web applications, and embedded IoT automations.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                aria-label="Email"
                className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 mb-3.5">
              Explore Portfolio
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/about" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Academic Timeline (RIT)
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Competency Matrix
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Roles & Positions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Credentials & Connect */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 mb-3.5">
              Credentials & Contact
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/certifications" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Verified Certifications
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Achievements & Contests
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  ATS Resume & Print
                </Link>
              </li>
              <li>
                <Link to="/github" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  GitHub Commits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-300/70 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} Shreyas Thorat. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Rajarambapu Institute of Technology</span>
            <span aria-hidden="true">·</span>
            <span>Maharashtra, India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
