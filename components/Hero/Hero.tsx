'use client';

import { motion } from 'framer-motion';
import HeroText from './HeroText';
import HeroVideo from './HeroVideo';
import Button from '@/components/UI/Button';
import ScrollIndicator from '@/components/UI/ScrollIndicator';
import { CALENDLY_URL, HERO_COPY } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <HeroText />

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button
            href={CALENDLY_URL}
            size="lg"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            {HERO_COPY.cta}
          </Button>
        </motion.div>

        {/* Video */}
        <HeroVideo />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171717] pointer-events-none z-[1]" />
    </section>
  );
}
