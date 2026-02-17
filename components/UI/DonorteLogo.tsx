'use client';

import { motion } from 'framer-motion';

interface DonorteLogoProps {
  className?: string;
  color?: string;
  animated?: boolean;
}

export default function DonorteLogo({
  className = '',
  color = '#ffffff',
  animated = false,
}: DonorteLogoProps) {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const letters = ['d', 'o', 'n', 'o', 'r', 't', 'e'];

  if (animated) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block font-bold"
            style={{
              color,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 400 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* d */}
      <path
        d="M45 15C45 15 45 5 45 5C45 5 55 5 55 5C55 5 55 15 55 15C65 15 75 25 75 40C75 55 65 65 50 65C35 65 25 55 25 40C25 25 35 15 45 15ZM50 55C58 55 65 48 65 40C65 32 58 25 50 25C42 25 35 32 35 40C35 48 42 55 50 55Z"
        fill={color}
      />
      {/* o */}
      <path
        d="M105 15C120 15 130 25 130 40C130 55 120 65 105 65C90 65 80 55 80 40C80 25 90 15 105 15ZM105 55C113 55 120 48 120 40C120 32 113 25 105 25C97 25 90 32 90 40C90 48 97 55 105 55Z"
        fill={color}
      />
      {/* n */}
      <path
        d="M135 65V17H145V25C150 18 158 15 165 15C180 15 190 25 190 42V65H180V44C180 32 173 25 163 25C153 25 145 32 145 44V65H135Z"
        fill={color}
      />
      {/* o */}
      <path
        d="M220 15C235 15 245 25 245 40C245 55 235 65 220 65C205 65 195 55 195 40C195 25 205 15 220 15ZM220 55C228 55 235 48 235 40C235 32 228 25 220 25C212 25 205 32 205 40C205 48 212 55 220 55Z"
        fill={color}
      />
      {/* r */}
      <path
        d="M250 65V17H260V28C264 20 272 15 282 15V26C270 26 260 34 260 48V65H250Z"
        fill={color}
      />
      {/* t */}
      <path
        d="M290 65V27H280V17H290V5H300V17H315V27H300V52C300 58 304 62 310 62H315V72C315 72 305 72 300 72C290 72 290 62 290 52V65Z"
        fill={color}
      />
      {/* e */}
      <path
        d="M345 15C360 15 375 25 375 42H330C331 52 340 58 352 58C362 58 370 52 372 45H382C379 58 365 68 350 68C332 68 320 55 320 40C320 25 332 15 345 15ZM345 25C336 25 330 32 330 40H365C365 30 356 25 345 25Z"
        fill={color}
      />
    </svg>
  );
}
