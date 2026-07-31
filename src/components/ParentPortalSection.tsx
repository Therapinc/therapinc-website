import React from 'react';
import { Check } from 'lucide-react';
import AnimatedPhoneMockup from './ParentPortal/AnimatedPhoneMockup';

export default function ParentPortalSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-primary)] py-24 sm:py-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">

          {/* Left Column: Content */}
          <div className="flex flex-col justify-center xl:max-w-[768px]">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"></div>
              <h2 className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
                Parent Portal
              </h2>
            </div>

            <h3 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
              Parents shouldn&apos;t have to wait for a meeting to know how their child is doing.
            </h3>

            <p className="mb-10 text-lg leading-relaxed text-purple-200">
              Families can check in anytime — see how a therapy session went, how attendance looks this month, or read a simple summary of long-term progress.
            </p>

            <ul className="mb-10 flex flex-col gap-4">
              {[
                'Session-by-session updates, not just term reports',
                'Auto-translated into the parent\'s preferred language',
                'Simple, jargon-free summaries — not clinical notes',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <button className="rounded-full bg-white px-8 py-3.5 font-bold text-[var(--color-primary)] transition-transform hover:scale-105 hover:bg-gray-50">
                See the parent experience
              </button>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="translate-x-[20px]">
            <AnimatedPhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
