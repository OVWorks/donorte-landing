'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoCardProps {
  src: string;
  index: number;
}

export default function VideoCard({ src, index }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="video-card relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Play indicator */}
      <motion.div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${isHovered ? 'opacity-0' : 'opacity-100'}
        `}
        initial={false}
      >
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <svg
            className="w-7 h-7 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Glow border on hover */}
      <div
        className={`
          absolute inset-0 rounded-2xl border-2 border-[#2970ff]
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ boxShadow: isHovered ? '0 0 30px rgba(41, 112, 255, 0.4)' : 'none' }}
      />
    </motion.div>
  );
}
