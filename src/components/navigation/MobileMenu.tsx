import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ArrowRight, X, Search, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socials';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommandPalette?: () => void;
  onOpenRecruiterModal?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenCommandPalette,
  onOpenRecruiterModal,
}) => {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'GitHub Analytics', path: '/github' },
    { label: 'LinkedIn Profile', path: '/linkedin' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#FAF8F5]/98 dark:bg-[#121110]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden text-stone-900 dark:text-stone-100"
        >
          {/* Top header */}
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-stone-900 border border-amber-300 dark:border-stone-800 flex items-center justify-center font-display font-black text-xs text-amber-800 dark:text-amber-400">
                ST
              </span>
              <span className="font-display font-extrabold text-base tracking-tight text-stone-900 dark:text-white">
                Shreyas Thorat
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Buttons on Mobile */}
          <div className="pt-4 grid grid-cols-2 gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300 shadow-2xs"
              >
                <Search className="w-3.5 h-3.5 text-stone-400" />
                <span>Search ⌘K</span>
              </button>
            )}

            {onOpenRecruiterModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenRecruiterModal();
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300/60 dark:border-amber-800/60 text-xs font-semibold text-amber-900 dark:text-amber-300 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Recruiter View</span>
              </button>
            )}
          </div>

          {/* Links list */}
          <nav className="my-auto py-5 space-y-1.5">
            {links.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02, duration: 0.15 }}
              >
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2 px-2 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-stone-900 font-bold border-l-2 border-amber-600'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="border-t border-stone-200 dark:border-stone-800 pt-5 space-y-4">
            <NavLink
              to="/resume"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold text-xs tracking-wide shadow-md"
            >
              <FileText className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span>View & Print ATS Resume</span>
            </NavLink>

            <div className="flex items-center justify-center space-x-6 text-stone-500 pt-1">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
