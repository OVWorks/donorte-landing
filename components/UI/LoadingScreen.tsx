'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  duration = 2800,
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<'logo' | 'reveal' | 'exit'>('logo');

  useEffect(() => {
    // Phase 1: Logo animation
    const logoTimer = setTimeout(() => {
      setPhase('reveal');
    }, duration * 0.6);

    // Phase 2: Start exit
    const revealTimer = setTimeout(() => {
      setPhase('exit');
    }, duration * 0.85);

    // Phase 3: Complete
    const exitTimer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, duration);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, onLoadingComplete]);

  // Letter-by-letter animation for "donorte"
  const letters = ['d', 'o', 'n', 'o', 'r', 't', 'e'];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1] as const,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.5, 0.3],
      scale: [0.8, 1.2, 1],
      transition: {
        duration: 1.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.77, 0, 0.175, 1] as const,
      },
    },
  };

  const overlayExitVariants = {
    initial: { y: 0 },
    exit: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.77, 0, 0.175, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]"
          variants={overlayExitVariants}
          initial="initial"
          exit="exit"
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#2970ff]/20 blur-[120px]"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Logo container */}
          <motion.div
            className="relative flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated letters */}
            <div className="flex items-center perspective-[1000px]">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white inline-block"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '-0.02em',
                    textShadow: phase === 'reveal' ? '0 0 40px rgba(41, 112, 255, 0.5)' : 'none',
                    transition: 'text-shadow 0.5s ease',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated line under logo */}
            <motion.div
              className="mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#2970ff] to-transparent origin-center"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Tagline */}
            <motion.p
              className="mt-4 text-white/50 text-sm tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Studios
            </motion.p>
          </motion.div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[#2970ff]/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#2970ff]/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
