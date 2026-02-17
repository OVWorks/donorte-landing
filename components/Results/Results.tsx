'use client';

import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import { METRICS, RESULTS_COPY } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Results() {
  return (
    <section id="resultados" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2970ff]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            {RESULTS_COPY.headline}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {RESULTS_COPY.subheadline}
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2970ff] to-[#1d5ed9] border-2 border-[#171717] flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-white/60 text-sm">
              +50 marcas confían en nosotros
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
