import React from 'react';

const cards = [
  {
    role: 'Administrators',
    title: 'Full visibility, no chasing paper',
    description: 'Attendance, staff, students, and compliance — one dashboard.',
  },
  {
    role: 'Therapists & Teachers',
    title: 'Minutes, not hours',
    description: 'Structured templates that match the formats you already use.',
  },
  {
    role: 'Parents',
    title: 'Real, ongoing updates',
    description: 'Not just once-a-term meetings — the everyday picture too.',
  },
];

export default function BuiltForYourTeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-neutral-soft)] py-24 sm:py-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>

        {/* Section Header */}
        <div className="mb-16 flex w-full flex-col justify-center whitespace-normal break-normal" style={{ maxWidth: '768px' }}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Built for your team
            </h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Whoever&apos;s using it, it fits.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-6 text-xs font-bold tracking-widest text-[var(--color-secondary)] uppercase">
                {card.role}
              </span>
              <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
