import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  eyebrow?: string;
  urduSubtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  textColor?: 'dark' | 'light' | 'inherit';
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  textColor = 'dark',
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const titleColorClass = textColor === 'light' ? 'text-[#FAF8F5]' : 'text-[#2E2E2E]';
  const descColorClass = textColor === 'light' ? 'text-[#EFECE5]' : 'text-[#7A7F6A]';
  const eyebrowColorClass = textColor === 'light' ? 'text-[#BFA36F]' : 'text-[#7A7F6A]';

  return (
    <div className={`flex flex-col ${alignmentClass} ${className} mb-6 sm:mb-8`}>
      {eyebrow && (
        <span className={`text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold mb-2.5 ${eyebrowColorClass}`}>
          {eyebrow}
        </span>
      )}

      {level === 1 && (
        <h1 className={`font-serif text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] font-medium tracking-tight leading-[1.2] ${titleColorClass}`}>
          {title}
        </h1>
      )}

      {level === 2 && (
        <h2 className={`font-serif text-[1.5rem] sm:text-[1.75rem] lg:text-[1.875rem] font-medium tracking-tight leading-[1.25] ${titleColorClass}`}>
          {title}
        </h2>
      )}

      {level === 3 && (
        <h3 className={`font-serif text-[1.25rem] sm:text-[1.375rem] font-medium tracking-tight leading-[1.3] ${titleColorClass}`}>
          {title}
        </h3>
      )}

      {level === 4 && (
        <h4 className={`font-serif text-[1.125rem] font-medium leading-[1.35] ${titleColorClass}`}>
          {title}
        </h4>
      )}

      {description && (
        <p className={`text-sm sm:text-base ${descColorClass} mt-3.5 max-w-3xl leading-[1.65]`}>
          {description}
        </p>
      )}
    </div>
  );
};
