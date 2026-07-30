'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useAnimationFrame } from 'framer-motion';
import DashboardContent from './AnimatedDashboard/ModuleContent';

export default function HeroDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalModules = 6;

  // Cycle through modules every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalModules);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalModules]);

  // Unified physics for all motion values to completely eliminate glitches
  const isHovered = useRef(false);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  
  const rotateX = useSpring(4, springConfig);
  const rotateY = useSpring(-12, springConfig);
  const y = useSpring(80, springConfig); // Starts at 80 for a smooth entrance drop-in
  const scale = useSpring(0.95, springConfig);

  useAnimationFrame((time) => {
    if (!isHovered.current) {
      // 7 second continuous sine wave for idle floating
      const phase = (time / 7000) * Math.PI * 2; 

      // Sine wave goes from -1 to 1.
      // idle y smoothly bobs between 0 and -20
      y.set(Math.sin(phase) * 10 - 10);
      
      // idle rotateX gently rocks between 4 and 8 degrees
      rotateX.set(Math.sin(phase) * 2 + 6);
      
      // idle rotateY gently rocks between -12 and -6 degrees
      rotateY.set(Math.sin(phase) * 3 - 9);

      scale.set(0.95);
    }
  });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    isHovered.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left - rect.width / 2;
    const clientY = e.clientY - rect.top - rect.height / 2;
    
    // Map mouse position to -15deg to +15deg tilts
    rotateX.set(-(clientY / rect.height) * 30);
    rotateY.set((clientX / rect.width) * 30);
    y.set(0); // Flatten Y bounce while hovered
    scale.set(1); // Slightly grow while hovered
  }

  return (
    <div 
      className="relative z-10 flex h-full w-full items-center justify-center lg:justify-end lg:pr-16 xl:pr-24 perspective-[1200px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { isHovered.current = false; }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ rotateX, rotateY, y, scale }}
        className="relative flex aspect-[4/3] w-full max-w-[560px] flex-col rounded-3xl border border-white/80 bg-white/50 shadow-[0_30px_60px_-15px_rgba(60,30,93,0.3),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-3xl overflow-hidden"
      >
        {/* Time Progress Bar */}
        <motion.div
          key={`progress-${activeIndex}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute left-0 top-0 z-50 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] opacity-80"
        />

        {/* Subtle inner top glare */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl bg-gradient-to-b from-white/60 to-transparent opacity-80" />
        
        {/* Animated Background ambient glow inside dashboard */}
        <div className="pointer-events-none absolute -left-1/4 -top-1/4 z-0 h-1/2 w-1/2 rounded-full bg-[var(--color-secondary)]/20 blur-[80px]" />
        <div className="pointer-events-none absolute -right-1/4 -bottom-1/4 z-0 h-1/2 w-1/2 rounded-full bg-[var(--color-accent)]/15 blur-[80px]" />

        {/* Morphing Content Area */}
        <div className="relative z-10 h-full w-full">
          <DashboardContent activeIndex={activeIndex} />
        </div>
      </motion.div>
    </div>
  );
}
