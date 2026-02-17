'use client';

import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { CAROUSEL_VIDEOS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function DoubleCarousel() {
  // Duplicate videos for infinite scroll effect
  const duplicatedVideos = [...CAROUSEL_VIDEOS, ...CAROUSEL_VIDEOS];

  return (
    <section id="portfolio" className="py-20 md:py-32 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-16 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Nuestro <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Contenido que convierte. Resultados que hablan.
        </p>
      </motion.div>

      {/* Row 1 - Scrolls Left */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-scroll-left pause-on-hover">
          {duplicatedVideos.map((video, index) => (
            <VideoCard key={`row1-${index}`} src={video} index={index} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolls Right */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-right pause-on-hover">
          {duplicatedVideos.map((video, index) => (
            <VideoCard key={`row2-${index}`} src={video} index={index} />
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#171717] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#171717] to-transparent z-10" />
    </section>
  );
}
