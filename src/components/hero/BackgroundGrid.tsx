import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for warm champagne connectivity
    const particleCount = Math.min(Math.floor(width / 40), 38);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 1,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current dark mode
      const isDark = document.documentElement.classList.contains('dark');

      const dotColor = isDark ? 'rgba(217, 180, 130, 0.35)' : 'rgba(180, 140, 90, 0.3)';
      const lineBaseColor = isDark ? '217, 180, 130' : '180, 140, 90';

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineBaseColor}, ${0.1 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Slight affinity with mouse cursor
        const mdx = p1.x - mouseX;
        const mdy = p1.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 130) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${lineBaseColor}, ${0.18 * (1 - mDist / 130)})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReduced]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Warm ambient diffuse glow */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[500px] bg-amber-400/8 dark:bg-amber-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[450px] bg-blue-500/5 dark:bg-indigo-500/4 rounded-full blur-[120px]" />

      {/* Subtle micro grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#92400e_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Background canvas for connected nodes */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60 dark:opacity-75 transition-opacity duration-300"
      />
    </div>
  );
};
