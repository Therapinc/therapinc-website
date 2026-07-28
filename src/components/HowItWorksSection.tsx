import React from 'react';

const steps = [
  {
    title: 'Import your records',
    description: 'Bring your existing data in — image-to-text handles old paper files, no manual re-entry.',
  },
  {
    title: 'Set up your team',
    description: 'Add teachers and therapists, and assign students, classes, and caseloads.',
  },
  {
    title: 'Log daily, as it happens',
    description: 'Attendance and therapy notes get logged in the moment — built for busy staff.',
  },
  {
    title: 'Everyone stays in the loop',
    description: 'Admins get oversight, therapists get structured records, parents get real updates.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F3ED] pt-8 pb-24 sm:pt-12 sm:pb-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1550px' }}>
        
        {/* Section Header */}
        <div className="mb-20 flex w-full flex-col justify-center whitespace-normal break-normal" style={{ maxWidth: '768px' }}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              How it works
            </h2>
          </div>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Set up in days, not semesters.
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Background connecting line (visible on large screens only) */}
          <div className="absolute top-6 left-6 right-6 hidden h-[2px] bg-purple-200 lg:block"></div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                {/* Circle Number */}
                <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-200 bg-[#F4F3ED] text-lg font-semibold text-[var(--color-primary)]">
                  {idx + 1}
                </div>
                
                {/* Content */}
                <h3 className="mb-3 font-heading text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
