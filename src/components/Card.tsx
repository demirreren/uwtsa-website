'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl p-6 
        shadow-sm border border-gray-100
        ${hover ? 'hover:shadow-lg hover:border-gray-200' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface CardIconProps {
  children: ReactNode;
  className?: string;
}

export function CardIcon({ children, className = '' }: CardIconProps) {
  return (
    <div className={`w-12 h-12 rounded-xl bg-tsa-red/10 text-tsa-red flex items-center justify-center mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-bold text-tsa-charcoal mb-2 ${className}`}>
      {children}
    </h3>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

