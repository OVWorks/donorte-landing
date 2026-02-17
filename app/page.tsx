'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import DoubleCarousel from '@/components/Carousel/DoubleCarousel';
import Results from '@/components/Results/Results';
import CTASection from '@/components/CTA/CTASection';
import Footer from '@/components/Footer/Footer';
import LoadingScreen from '@/components/UI/LoadingScreen';

// Dynamically import the 3D Scene to avoid SSR issues
const Scene = dynamic(() => import('@/components/3D/Scene'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen
        duration={2800}
        onLoadingComplete={() => setIsLoaded(true)}
      />

      {/* Main Content - fades in after loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* 3D Background */}
        <Scene />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Portfolio Carousel */}
          <DoubleCarousel />

          {/* Results Section */}
          <Results />

          {/* CTA Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}
