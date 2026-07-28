import React from 'react';
import { Files, Clock, UserX } from 'lucide-react';

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
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1550px' }}>
        {/* Left-Aligned Header Block */}
        <div className="w-full whitespace-normal break-normal" style={{ maxWidth: '768px' }}>
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
        </div>

        {/* 3-Column Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
