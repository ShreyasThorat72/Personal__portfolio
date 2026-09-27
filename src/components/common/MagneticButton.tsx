import React, { useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  disabled = false,
}) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReduced = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced || disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Small subtle magnetic pull (max 5-6px)
    setPosition({ x: distanceX * 0.15, y: distanceY * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const inlineStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
      };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={inlineStyle}
        className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={inlineStyle}
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      {children}
    </button>
  );
};
