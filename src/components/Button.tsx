'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

const variants = {
  primary: 'bg-tsa-red hover:bg-tsa-red-dark text-white shadow-lg shadow-tsa-red/25 hover:shadow-tsa-red/40',
  secondary: 'bg-white hover:bg-tsa-cream text-tsa-charcoal border border-gray-200',
  outline: 'border-2 border-tsa-red text-tsa-red hover:bg-tsa-red hover:text-white',
  ghost: 'text-tsa-charcoal hover:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-tsa-red focus:ring-offset-2
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={baseStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}

