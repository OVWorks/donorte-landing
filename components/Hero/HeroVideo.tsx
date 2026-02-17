'use client';

import { motion } from 'framer-motion';
import { SALES_VIDEO_URL } from '@/lib/constants';
import { scaleIn } from '@/lib/animations';

export default function HeroVideo() {
  // If no video URL is configured, show a placeholder
  const hasVideo = SALES_VIDEO_URL && SALES_VIDEO_URL.trim() !== '';

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mt-12 sm:mt-16"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1 }}
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden glow">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2970ff] to-[#1d5ed9] rounded-2xl p-[2px]">
          <div className="w-full h-full bg-[#171717] rounded-2xl overflow-hidden">
            {hasVideo ? (
              <iframe
                src={SALES_VIDEO_URL}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video de presentación"
              />
            ) : (
              /* Placeholder when no video is configured */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#171717]">
                <div className="w-20 h-20 rounded-full bg-[#2970ff]/20 flex items-center justify-center mb-4 animate-pulse-glow">
                  <svg
                    className="w-10 h-10 text-[#2970ff] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/50 text-sm">Video de presentación</p>
                <p className="text-white/30 text-xs mt-1">Configurar en lib/constants.ts</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
