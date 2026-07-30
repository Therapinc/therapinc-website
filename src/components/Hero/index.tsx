'use client';

import React from 'react';
import HeroContent from './HeroContent';
import HeroDashboard from './HeroDashboard';
import HeroBackground from './HeroBackground';
import HeroDecorations from './HeroDecorations';
import HeroFeatureBar from './HeroFeatureBar';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-neutral-light)] pt-[120px] pb-[var(--spacing-lg)] md:pt-[160px]">
      {/* 
        Layer 1: Background SVG Wrapper
        Must be at the lowest stacking context within the Hero.
      */}
      <HeroBackground />

      {/* 
        Layer 2: Hero Content & Dashboard Layout
        Uses a standard max-w container and CSS Grid.
      */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1600px] flex-col px-[var(--spacing-md)] pb-12 lg:px-[var(--spacing-lg)]">
        <div className="grid grid-cols-1 items-start gap-[var(--spacing-2xl)] lg:grid-cols-2 lg:gap-[var(--spacing-xl)]">
          {/* Left Column */}
          <HeroContent />

          {/* Right Column */}
          <HeroDashboard />
        </div>

        <HeroFeatureBar />
      </div>

      {/* 
        Layer 3: Floating Decorations 
        Highest z-index within the Hero stacking context.
      */}
      <HeroDecorations />
    </section>
  );
}
