'use client';

import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '@/lib/animations';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-colors duration-300
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-[#2970ff] text-white
      hover:bg-[#1d5ed9]
      shadow-lg shadow-[#2970ff]/25
    `,
    secondary: `
      bg-white/10 text-white
      hover:bg-white/20
      backdrop-blur-sm
    `,
    outline: `
      border-2 border-[#2970ff] text-[#2970ff]
      hover:bg-[#2970ff] hover:text-white
    `,
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={buttonHover}
        whileTap={buttonTap}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      {content}
    </motion.button>
  );
}
