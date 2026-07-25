import React from 'react';

/**
 * Component for the dashboard UI elements floating in the Hero section.
 */
export default function HeroDashboard() {
  return (
    <div className="relative z-10 flex h-full w-full items-center justify-center lg:justify-end">
      {/* 
         This container is ready for the floating dashboard UI cards 
         that overlap the main Hero background SVG.
       */}
      <div className="aspect-square w-full max-w-lg" />
    </div>
  );
}
