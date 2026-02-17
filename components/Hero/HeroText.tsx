'use client';

import { motion } from 'framer-motion';
import { clipPathReveal, staggerContainer } from '@/lib/animations';
import { HERO_COPY } from '@/lib/constants';

export default function HeroText() {
  return (
    <motion.div
      className="text-center max-w-5xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Main Headlines */}
      <div className="mb-8">
        {HERO_COPY.headline.map((line, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            variants={clipPathReveal}
          >
            <h1
              className={`
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                font-bold leading-tight tracking-tight
                ${index === 1 ? 'gradient-text' : 'text-white'}
              `}
            >
              {line}
            </h1>
          </motion.div>
        ))}
      </div>

      {/* Subheadline */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {HERO_COPY.subheadline}
      </motion.p>
    </motion.div>
  );
}
