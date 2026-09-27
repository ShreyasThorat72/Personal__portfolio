import React, { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const updateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, prefersReduced]);

  if (prefersReduced || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden no-print">
      {/* Outer subtle ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out ${
          isHovering
            ? 'w-10 h-10 -ml-5 -mt-5 border-blue-500/80 bg-blue-500/10 scale-125'
            : 'w-6 h-6 -ml-3 -mt-3 border-neutral-400/50 dark:border-neutral-500/50'
        }`}
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0)`,
          willChange: 'transform',
        }}
      />
      {/* Center dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full transition-transform duration-75 ${
          isHovering ? 'bg-blue-400 scale-150' : 'bg-neutral-800 dark:bg-neutral-200'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};
