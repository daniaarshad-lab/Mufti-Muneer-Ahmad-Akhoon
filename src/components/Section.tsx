import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: 'light' | 'primary' | 'dark' | 'cream';
  spacing?: 'compact' | 'default' | 'generous';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  className = '',
  variant = 'light',
  spacing = 'default',
  children,
  ...props
}) => {
  const variantStyles = {
    light: 'bg-[#F8FAFC] text-slate-900',
    primary: 'bg-gradient-to-br from-[#044E3D] via-[#05634E] to-[#008767] text-white shadow-inner',
    dark: 'bg-[#0B1916] text-white',
    cream: 'bg-[#F1F5F9] text-slate-900',
  };

  const spacingStyles = {
    compact: 'py-10 sm:py-14',
    default: 'py-16 sm:py-20 lg:py-24',
    generous: 'py-20 sm:py-28 lg:py-32',
  };

  return (
    <section
      className={`relative w-full ${variantStyles[variant]} ${spacingStyles[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
