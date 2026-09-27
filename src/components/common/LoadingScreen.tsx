import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const steps = [
    'Initializing portfolio workspace...',
    'Loading architectures & engineering models...',
    'Calibrating competency matrix...',
    'Workspace ready.',
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 200);
    const timer2 = setTimeout(() => setStep(2), 440);
    const timer3 = setTimeout(() => setStep(3), 680);
    const timerEnd = setTimeout(() => onComplete(), 980);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-stone-900 select-none transition-colors"
    >
      <div className="flex flex-col items-center space-y-6 max-w-xs text-center px-4">
        {/* Monogram brand mark with champagne gold glow */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-stone-200 shadow-xl">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-amber-800">
            ST
          </span>
          <div className="absolute inset-0 rounded-2xl border border-amber-400/40 animate-pulse pointer-events-none" />
        </div>

        {/* Shreyas Thorat title */}
        <div>
          <h2 className="text-sm font-bold tracking-wide text-stone-900">
            Shreyas Thorat
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            B.Tech CSE (AI & ML) · RIT Maharashtra
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-stone-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700"
            initial={{ width: '5%' }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>

        {/* Step indicator */}
        <div className="h-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="text-xs font-mono text-stone-500"
            >
              {steps[step]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
