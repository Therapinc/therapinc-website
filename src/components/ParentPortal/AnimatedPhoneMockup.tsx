'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useAnimationFrame } from 'framer-motion';

export default function AnimatedPhoneMockup() {
  const isHovered = useRef(false);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  
  // We use slightly different baseline tilts so it feels organic compared to the dashboard
  const rotateX = useSpring(5, springConfig);
  const rotateY = useSpring(10, springConfig); 
  const y = useSpring(0, springConfig);
  const scale = useSpring(0.95, springConfig);

  useAnimationFrame((time) => {
    if (!isHovered.current) {
      // 8 second cycle for idle float to be slightly out of sync with hero dashboard (7s)
      const phase = (time / 8000) * Math.PI * 2; 

      // idle y smoothly bobs between 0 and -20
      y.set(Math.sin(phase) * 10 - 10);
      
      // idle rotateX gently rocks between 3 and 7 degrees
      rotateX.set(Math.sin(phase) * 2 + 5);
      
      // idle rotateY gently rocks between 8 and 12 degrees
      rotateY.set(Math.sin(phase) * 2 + 10);

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
    y.set(0);
    scale.set(1);
  }

  // Rich Data for the infinite scroll feed
  const feedCards = [
    {
      type: "ai-summary",
      time: "Just now",
      title: "AI Weekly Summary",
      desc: "Priya showed a 15% improvement in sustained attention this week. Ready to advance to Level 2 puzzle tasks.",
      badge: "✨ AI Generated",
      badgeClass: "bg-purple-100 text-[var(--color-primary)]"
    },
    {
      type: "standard",
      time: "Today, 11:20 AM",
      title: "Occupational Therapy",
      desc: "Worked on balance and followed two-step instructions well.",
      badge: "Great progress",
      badgeClass: "bg-green-100 text-green-700"
    },
    {
      type: "image",
      time: "Yesterday, 2:15 PM",
      title: "Activity Media",
      desc: "Priya successfully completed the obstacle course!",
      imageGradient: "from-blue-400 to-indigo-500",
      badge: "Media attached",
      badgeClass: "bg-blue-100 text-blue-700"
    },
    {
      type: "chart",
      time: "Yesterday, 9:05 AM",
      title: "Attendance Streak",
      desc: "Perfect attendance for 3 weeks in a row.",
      badge: "15 days",
      badgeClass: "bg-amber-100 text-amber-700"
    },
    {
      type: "message",
      time: "Monday, 4:00 PM",
      title: "Message from Sarah (SLP)",
      desc: "\"Priya was very engaged today. Please practice the 'S' sound worksheet sent home.\"",
      badge: "Direct message",
      badgeClass: "bg-pink-100 text-pink-700"
    }
  ];

  return (
    <div 
      className="flex w-full items-center justify-center lg:justify-end lg:-translate-x-[55px] perspective-[1200px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { isHovered.current = false; }}
    >
      <motion.div
        style={{ rotateX, rotateY, y, scale }}
        className="relative flex h-[580px] w-[340px] flex-col rounded-[40px] bg-[#F4F3ED] p-4 pt-10 shadow-[0_40px_80px_-20px_rgba(60,30,93,0.4)] ring-8 ring-white/10 sm:w-[380px] overflow-hidden"
      >
        {/* Subtle inner top glare for glass effect */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-[40px] bg-gradient-to-b from-white/80 via-transparent to-transparent opacity-60 mix-blend-overlay" />

        {/* Speaker notch */}
        <div className="absolute top-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gray-300 z-30 shadow-sm"></div>

        {/* Infinite Scroll Container with Fade Masks */}
        <div className="relative z-10 h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]">
          <motion.div 
            className="flex flex-col gap-4 pt-4"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {/* Duplicate the feed cards twice to create a seamless infinite loop */}
            {[...feedCards, ...feedCards].map((card, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 shrink-0">
                
                <div className="mb-2 flex items-center justify-between">
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{card.time}</div>
                   {card.type === 'ai-summary' && <div className="text-[10px] animate-pulse">✨</div>}
                </div>
                
                <h4 className="mb-2 font-heading text-sm font-bold text-gray-900">{card.title}</h4>
                
                {card.type === 'image' && (
                  <div className={`w-full h-24 mb-3 rounded-xl bg-gradient-to-br ${card.imageGradient} opacity-90 shadow-inner flex items-center justify-center`}>
                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                )}

                {card.type === 'chart' && (
                  <div className="flex items-end gap-1 mb-3 h-12 w-full">
                    {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-amber-100 relative overflow-hidden" style={{ height: `${h}%` }}>
                         {h === 100 && <div className="absolute inset-0 bg-amber-400 rounded-t-sm animate-pulse" />}
                      </div>
                    ))}
                  </div>
                )}

                {card.type === 'message' && (
                  <div className="mb-3 rounded-lg bg-gray-50 p-3 border border-gray-100">
                    <p className="text-xs italic text-gray-600">{card.desc}</p>
                  </div>
                )}

                {card.type !== 'message' && (
                   <p className="mb-4 text-xs leading-relaxed text-gray-600">
                     {card.desc}
                   </p>
                )}
                
                <span className={`inline-block rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${card.badgeClass}`}>
                  {card.badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
