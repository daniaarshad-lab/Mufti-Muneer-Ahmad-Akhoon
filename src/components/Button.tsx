import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface ButtonAsButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  to: string;
  href?: undefined;
  target?: string;
  rel?: string;
}

interface ButtonAsAnchorProps extends ButtonBaseProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-[8px] transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/40 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center';

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-[#D8C3A5] text-[#2E2E2E] font-semibold hover:bg-[#CFB999] shadow-sm hover:shadow border border-[#BFA36F]/50',
    secondary: 'bg-transparent text-[#2E2E2E] border border-[#7A7F6A]/40 hover:border-[#7A7F6A] hover:bg-[#D8C3A5]/15',
    outline: 'bg-transparent text-[#2E2E2E] border border-[#E5E0D6] hover:border-[#7A7F6A] hover:bg-[#EFECE5]',
    ghost: 'bg-transparent text-[#2E2E2E] hover:bg-[#EFECE5] border border-transparent',
    dark: 'bg-[#2E302B] text-[#FAF8F5] hover:bg-[#3B3E37] shadow-sm hover:shadow border border-transparent',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex">{icon}</span>}
    </>
  );

  if ('to' in props && props.to) {
    const { to, target, rel } = props as ButtonAsLinkProps;
    return (
      <Link to={to} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, target, rel } = props as ButtonAsAnchorProps;
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {content}
    </button>
  );
};
