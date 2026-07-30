import React from 'react';

/**
 * Dedicated wrapper component for the complex Hero SVG.
 * Currently renders an empty container that preserves the exact
 * layout, dimensions, overflow behavior, and stacking context.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
      {/* The left graphic (User provided) */}
      <div className="hidden sm:block absolute top-[-79px] left-[-27px] z-10 w-[250px] -translate-x-[20%] opacity-[.87] lg:top-[-39px] lg:w-[450px] xl:w-[550px] xl:-translate-x-[15%]">
        <img
          src="/leftyyyy.png"
          alt="Left Graphic"
          className="h-auto w-full object-contain object-left-top"
        />
      </div>

      {/* The main hero graphic, anchored to the right */}
      <div
        id="hero-background-svg"
        className="absolute top-[360px] sm:top-[330px] right-0 h-[600px] w-full max-w-[800px] opacity-90 contrast-[.95] scale-150 -rotate-12 sm:scale-100 sm:rotate-0 lg:top-0 lg:h-[1000px] lg:max-w-[1250px] lg:translate-x-[10%]"
      >
        <img
          src="/hero-graphic.png"
          alt="Hero Graphic"
          className="h-full w-full object-contain object-right-top"
        />
      </div>
    </div>
  );
}
