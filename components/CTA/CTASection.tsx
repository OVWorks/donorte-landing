'use client';

import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';
import { CALENDLY_URL, CTA_COPY } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2970ff]/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1d5ed9]/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            {CTA_COPY.headline}
          </motion.h2>

          {/* CTA Button */}
          <motion.div className="mb-8" variants={fadeInUp}>
            <Button
              href={CALENDLY_URL}
              size="lg"
              className="animate-pulse-glow"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              {CTA_COPY.cta}
            </Button>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-white/50 text-lg"
            variants={fadeInUp}
          >
            {CTA_COPY.subheadline}
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/30 text-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2970ff]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2970ff]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2970ff]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Análisis personalizado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
