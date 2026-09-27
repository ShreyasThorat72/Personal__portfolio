import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { MobileMenu } from '../components/navigation/MobileMenu';
import { Footer } from '../components/navigation/Footer';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { CustomCursor } from '../components/common/CustomCursor';
import { BackToTop } from '../components/common/BackToTop';
import { CommandPalette } from '../components/common/CommandPalette';
import { RecruiterModal } from '../components/common/RecruiterModal';

export const RootLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 dark:bg-[#121110] dark:text-stone-100 transition-colors duration-300 selection:bg-amber-500/20 selection:text-amber-900 dark:selection:text-amber-200 relative">
      {/* Subtle luxury ambient background illumination */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-blue-500/4 dark:bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <CustomCursor />
      <ScrollProgress />

      <Navbar
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      <main className="flex-1 w-full relative z-10">
        <Outlet context={{ onOpenRecruiterModal: () => setIsRecruiterModalOpen(true) }} />
      </main>

      <Footer />
      <BackToTop />

      {/* Global Interactive Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
};
