'use client';

import React from 'react';
import { Files, Clock, UserX } from 'lucide-react';
import { motion } from 'framer-motion';

const problemCards = [
  {
    title: 'Scattered records',
    description:
      'Attendance in one register, therapy notes in another, IEP forms in a folder somewhere.',
    icon: Files,
  },
  {
    title: 'Hours of manual work',
    description: 'Staff spend more time writing reports than working with students.',
    icon: Clock,
  },
  {
    title: 'Parents left guessing',
    description: 'Parents only hear about progress at term-end meetings, not day to day.',
    icon: UserX,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-white pt-2 pb-40 sm:pt-4 sm:pb-48">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>

        {/* Left-Aligned Header Block — slides in from left */}
        <motion.div
          className="w-full whitespace-normal break-normal"
          style={{ maxWidth: '768px' }}
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              The problem
            </h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Special schools deserve better than paperwork.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Most school software is built for standard report cards and roll-call attendance. Your
            students, staff, and reports don&apos;t work that way — so most special schools are still stuck
            writing daily therapy notes by hand and re-typing the same records year after year.
          </p>
        </motion.div>

        {/* 3-Column Cards Grid — each card pops up with a stagger */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
