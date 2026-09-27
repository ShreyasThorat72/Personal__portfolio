import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  FileText,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  Github,
  Mail,
  Sun,
  Moon,
  Zap,
  ArrowRight,
  X,
  Code2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SOCIAL_LINKS } from '../../data/socials';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterModal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenRecruiterModal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Actions
    {
      id: 'recruiter',
      title: 'Executive Recruiter Summary (Fast-Track View)',
      category: 'Actions',
      icon: Zap,
      action: () => {
        onClose();
        if (onOpenRecruiterModal) onOpenRecruiterModal();
      },
      shortcut: 'R',
    },
    {
      id: 'resume',
      title: 'View & Print Resume (ATS Format)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        navigate('/resume');
      },
      shortcut: 'CV',
    },
    {
      id: 'theme',
      title: `Toggle Theme (Currently ${theme === 'dark' ? 'Dark' : 'Light'})`,
      category: 'Actions',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'email',
      title: `Send Email to ${SOCIAL_LINKS.email}`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${SOCIAL_LINKS.email}`;
        onClose();
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile (@ShreyasThorat72)',
      category: 'Actions',
      icon: Github,
      action: () => {
        window.open(SOCIAL_LINKS.github, '_blank');
        onClose();
      },
    },

    // Projects
    {
      id: 'p-civicconnect',
      title: 'Project: CivicConnect (AI-Driven Civic Issue Triage)',
      category: 'Projects',
      icon: Code2,
      action: () => {
        onClose();
        navigate('/projects/civicconnect');
      },
    },
    {
      id: 'p-water',
      title: 'Project: Smart Water Tank Automation (IoT / ESP32)',
      category: 'Projects',
      icon: Code2,
      action: () => {
        onClose();
        navigate('/projects/smart-water-tank');
      },
    },
    {
      id: 'p-bottle',
      title: 'Project: BottlePoints Reverse Vending (AI / OpenCV)',
      category: 'Projects',
      icon: Code2,
      action: () => {
        onClose();
        navigate('/projects/bottlepoints');
      },
    },

    // Navigation
    {
      id: 'nav-home',
      title: 'Navigate to Home',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => {
        onClose();
        navigate('/');
      },
    },
    {
      id: 'nav-about',
      title: 'Navigate to About & Philosophy',
      category: 'Navigation',
      icon: ArrowRight,
      action: () => {
        onClose();
        navigate('/about');
      },
    },
    {
      id: 'nav-projects',
      title: 'Navigate to Projects Catalog',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        onClose();
        navigate('/projects');
      },
    },
    {
      id: 'nav-skills',
      title: 'Navigate to Technical Skills Matrix',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        onClose();
        navigate('/skills');
      },
    },
    {
      id: 'nav-education',
      title: 'Navigate to Academic Education (RIT)',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => {
        onClose();
        navigate('/education');
      },
    },
    {
      id: 'nav-achievements',
      title: 'Navigate to Achievements & Hackathons',
      category: 'Navigation',
      icon: Award,
      action: () => {
        onClose();
        navigate('/achievements');
      },
    },
    {
      id: 'nav-contact',
      title: 'Navigate to Contact Form',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        onClose();
        navigate('/contact');
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-stone-900/40 dark:bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#181716] border border-stone-200 dark:border-stone-700/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-stone-800 dark:text-stone-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-100 dark:border-stone-800 bg-[#FCFBF9] dark:bg-[#1A1918]">
          <Search className="w-4 h-4 text-stone-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or destination..."
            className="w-full bg-transparent text-sm placeholder:text-stone-400 text-stone-900 dark:text-stone-100 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-400">
              No matching commands found for "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50 dark:bg-stone-800/80 text-amber-950 dark:text-amber-300 font-semibold'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected
                            ? 'bg-amber-100 dark:bg-stone-700 text-amber-800 dark:text-amber-200'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.shortcut && (
                        <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-500 rounded border border-stone-200 dark:border-stone-700">
                          {item.shortcut}
                        </kbd>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 border-t border-stone-100 dark:border-stone-800/80 bg-[#FAF8F5] dark:bg-[#141312] flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to dismiss</span>
          </div>
          <span className="font-mono text-stone-400">Shreyas Thorat · Portfolio</span>
        </div>
      </div>
    </div>
  );
};
