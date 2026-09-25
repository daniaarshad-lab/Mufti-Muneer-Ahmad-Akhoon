import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'white' | 'dark' | 'cream';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  variant = 'white',
  hoverable = false,
  padding = 'md',
  children,
  ...props
}) => {
  const variantClasses = {
    white: 'bg-[#FFFFFF] text-[#2E2E2E] border-[#E5E0D6] shadow-xs',
    dark: 'bg-[#2E302B] text-[#FAF8F5] border-[#7A7F6A]/30',
    cream: 'bg-[#FAF8F5] text-[#2E2E2E] border-[#E5E0D6]',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  const hoverClass = hoverable
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#BFA36F]/60'
    : '';

  return (
    <div
      className={`rounded-[12px] border border-solid ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
