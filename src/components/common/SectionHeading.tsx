import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2.5">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
