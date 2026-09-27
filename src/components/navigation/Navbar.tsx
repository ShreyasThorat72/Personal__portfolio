import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, FileText, Menu, X, Search, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { SOCIAL_LINKS } from '../../data/socials';

interface NavbarProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  onOpenCommandPalette?: () => void;
  onOpenRecruiterModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onMobileMenuToggle,
  isMobileMenuOpen,
  onOpenCommandPalette,
  onOpenRecruiterModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'GitHub', path: '/github' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        isScrolled
          ? 'py-2.5 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group text-stone-900 dark:text-stone-100 hover:opacity-90 transition-opacity"
            aria-label="Shreyas Thorat Home"
          >
            <span className="w-8 h-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700/80 shadow-xs flex items-center justify-center font-display font-black text-xs tracking-tighter text-amber-700 dark:text-amber-400 group-hover:border-amber-500/60 transition-colors">
              ST
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-stone-900 dark:text-stone-100 hidden sm:inline-block leading-tight">
                Shreyas Thorat
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 hidden sm:inline-block font-mono">
                Software & AI-ML
              </span>
            </div>
          </Link>

          {/* Zone 2: Clean text navigation links (hidden on mobile, visible on desktop) */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-stone-600 dark:text-stone-400"
            aria-label="Main Navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-colors hover:text-stone-900 dark:hover:text-stone-100 relative py-1 ${
                  isActive ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''
                }`
              }
            >
              Home
            </NavLink>

            {navLinks.slice(0, 5).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-stone-900 dark:hover:text-stone-100 relative py-1 ${
                    isActive ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Overflow "More" dropdown for secondary tabs */}
            <div className="relative group py-1">
              <button
                className={`transition-colors hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1 cursor-pointer ${
                  ['/certifications', '/achievements', '/github', '/linkedin'].includes(location.pathname)
                    ? 'text-amber-800 dark:text-amber-400 font-semibold'
                    : ''
                }`}
              >
                More
                <span className="text-[10px] text-stone-400">▾</span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-2 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 backdrop-blur-xl">
                <Link
                  to="/certifications"
                  className="block px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  Certifications
                </Link>
                <Link
                  to="/achievements"
                  className="block px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  Achievements
                </Link>
                <Link
                  to="/github"
                  className="block px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  GitHub Analytics
                </Link>
                <Link
                  to="/linkedin"
                  className="block px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  LinkedIn Profile
                </Link>
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors hover:text-stone-900 dark:hover:text-stone-100 relative py-1 ${
                  isActive ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Zone 3: Primary Actions & Utility Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Command Palette Trigger (Cmd+K) */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                aria-label="Open command palette"
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 text-xs shadow-2xs hover:border-stone-300 transition-all cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[11px] font-sans">Search...</span>
                <kbd className="px-1.5 py-0.5 text-[9px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-500 rounded border border-stone-200 dark:border-stone-700">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Recruiter Fast-Track Button */}
            {onOpenRecruiterModal && (
              <button
                onClick={onOpenRecruiterModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 rounded-xl hover:bg-amber-100/80 transition-colors shadow-2xs cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Recruiter View</span>
              </button>
            )}

            {/* Social quick links (Desktop) */}
            <div className="hidden xl:flex items-center gap-0.5">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Dark / Light Mode Switcher */}
            <ThemeToggle />

            {/* Resume button */}
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-stone-900 dark:bg-white dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-100 rounded-xl transition-all shadow-xs whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
              <span>Resume</span>
            </Link>

            {/* Mobile Menu trigger */}
            <button
              onClick={onMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2 rounded-xl text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
