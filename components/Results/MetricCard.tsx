'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  index: number;
}

function extractNumber(str: string): { num: number; prefix: string; suffix: string } {
  const match = str.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || '',
      num: parseInt(match[2], 10),
      suffix: match[3] || '',
    };
  }
  return { prefix: '', num: 0, suffix: str };
}

export default function MetricCard({ value, label, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  const { num, prefix, suffix } = extractNumber(value);

  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(num);
    }
  }, [isInView, num, spring]);

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <motion.div
      ref={ref}
      className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(41, 112, 255, 0.3)' }}
    >
      {/* Value */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
        <span className="gradient-text">
          {prefix}
          {displayValue}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-white/60 text-lg">{label}</p>

      {/* Decorative corner */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#2970ff]/50" />
    </motion.div>
  );
}
