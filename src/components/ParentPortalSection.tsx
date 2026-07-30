import React from 'react';
import { Check } from 'lucide-react';

export default function ParentPortalSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-primary)] py-24 sm:py-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">

          {/* Left Column: Content */}
          <div className="flex flex-col justify-center xl:max-w-[768px]">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></div>
              <h2 className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
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
                  <Check className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
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
          <div className="flex w-full items-center justify-center lg:justify-end lg:-translate-x-[75px]">
            {/* Phone Frame */}
            <div className="relative flex w-[340px] flex-col rounded-[40px] bg-[#F4F3ED] p-4 pt-10 shadow-2xl ring-8 ring-white/10 sm:w-[380px]">
              {/* Speaker notch */}
              <div className="absolute top-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gray-300"></div>

              <div className="flex flex-col gap-4">
                {/* Card 1 */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mb-1 text-xs font-semibold text-gray-400">Today, 11:20 AM</div>
                  <h4 className="mb-2 font-heading font-bold text-gray-900">Occupational therapy session</h4>
                  <p className="mb-4 text-xs leading-relaxed text-gray-600">
                    Priya had a great session today — worked on balance and followed two-step instructions well.
                  </p>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
                    Great progress
                  </span>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mb-1 text-xs font-semibold text-gray-400">Today, 9:05 AM</div>
                  <h4 className="mb-2 font-heading font-bold text-gray-900">Attendance</h4>
                  <p className="mb-4 text-xs leading-relaxed text-gray-600">
                    Priya checked in on time for morning class.
                  </p>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
                    Present
                  </span>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="mb-1 text-xs font-semibold text-gray-400">This week</div>
                  <h4 className="mb-2 font-heading font-bold text-gray-900">Speech goal — weekly summary</h4>
                  <p className="mb-4 text-xs leading-relaxed text-gray-600">
                    3 of 4 sessions completed. Slight improvement in word recall.
                  </p>
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold text-amber-700">
                    In progress
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
