'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'red' | 'outline';
  className?: string;
}

const variants = {
  default: 'bg-gray-100 text-gray-700',
  red: 'bg-tsa-red/10 text-tsa-red',
  outline: 'border border-gray-300 text-gray-600',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface CollabBadgeProps {
  name: string;
  shortName: string;
}

export function CollabBadge({ name, shortName }: CollabBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100 whitespace-nowrap"
      whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(208, 0, 0, 0.15)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tsa-red to-tsa-red-dark flex items-center justify-center text-white text-xs font-bold">
        {shortName.slice(0, 2)}
      </div>
      <span className="text-tsa-charcoal font-medium">{name}</span>
    </motion.div>
  );
}

