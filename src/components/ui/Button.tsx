import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
} as const;

const variantClasses = {
  primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20',
  secondary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
} as const;

export function Button({ variant = 'primary', size = 'md', children, className = '', ...rest }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link to={href} className={classes} {...(linkProps as any)}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
