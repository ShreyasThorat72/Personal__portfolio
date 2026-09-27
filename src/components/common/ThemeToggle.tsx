import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 dark:hover:bg-neutral-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 theme-toggle ${className}`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
};
