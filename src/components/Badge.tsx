import React from 'react';

interface BadgeProps {
  variant?: 'neutral' | 'accent' | 'support' | 'outline' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'md',
  className = '',
  children,
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variantClasses = {
    neutral: 'bg-[#EFECE5] text-[#2E2E2E] border border-[#E5E0D6]',
    accent: 'bg-[#6B7C93]/15 text-[#4D5E73] border border-[#6B7C93]/30 font-medium',
    support: 'bg-[#7A7F6A]/15 text-[#545849] border border-[#7A7F6A]/30 font-medium',
    outline: 'bg-transparent text-[#7A7F6A] border border-[#E5E0D6]',
    dark: 'bg-[#2E302B] text-[#FAF8F5] border border-[#7A7F6A]/30',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-sans whitespace-nowrap leading-none transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
