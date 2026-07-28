'use client';

import React from 'react';
import {
  Calendar,
  FileEdit,
  ClipboardList,
  Sparkles,
  Scan,
  Languages,
  Users,
  Activity,
} from 'lucide-react';

const features = [
  {
    title: 'Attendance, simplified',
    description: 'Daily attendance in seconds — by class, therapy session, or individual schedule.',
    icon: Calendar,
    iconBgColorClass: 'bg-blue-50',
    iconColorClass: 'text-blue-600',
  },
  {
    title: 'Daily therapy report entry',
    description: 'Therapists log session notes right after each session — structured, fast, searchable.',
    icon: FileEdit,
    iconBgColorClass: 'bg-pink-50',
    iconColorClass: 'text-[var(--color-accent)]',
  },
  {
    title: 'IEP & specialized forms',
    description: 'Build and manage IEPs and any custom assessment format your institution uses.',
    icon: ClipboardList,
    iconBgColorClass: 'bg-green-50',
    iconColorClass: 'text-green-600',
  },
  {
    title: 'AI progress summaries',
    description: 'Turn months of daily notes into a clear long-term summary — automatically.',
    icon: Sparkles,
    iconBgColorClass: 'bg-purple-50',
    iconColorClass: 'text-[var(--color-secondary)]',
  },
  {
    title: 'Image-to-text records',
    description: 'Snap a photo of old handwritten or scanned files and TherapinInc digitizes it.',
    icon: Scan,
    iconBgColorClass: 'bg-orange-50',
    iconColorClass: 'text-orange-500',
  },
  {
    title: 'Multi-language translation',
    description: "Reports and updates translate into a parent's native language automatically.",
    icon: Languages,
    iconBgColorClass: 'bg-cyan-50',
    iconColorClass: 'text-cyan-600',
  },
  {
    title: 'Parent portal',
    description: "Parents see how their child's day is going — period by period, not just at term end.",
    icon: Users,
    iconBgColorClass: 'bg-rose-50',
    iconColorClass: 'text-rose-600',
  },
  {
    title: 'Staff & student tracking',
    description: 'A clear view across therapists, teachers, and students — caseloads and schedules in one place.',
    icon: Activity,
    iconBgColorClass: 'bg-indigo-50',
    iconColorClass: 'text-indigo-600',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative w-full -mt-32 overflow-hidden bg-gradient-to-b from-transparent via-[#F8F5FA] to-transparent pt-32 pb-48">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1550px' }}>
        {/* Section Header (Top) */}
        <div className="mb-16 flex w-full flex-col justify-center whitespace-normal break-normal" style={{ maxWidth: '768px' }}>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]"></div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Features
            </h2>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
            One platform. Every part of your school&apos;s day.
          </p>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Everything your staff, admins, and parents need — built around how special schools actually run.
          </p>
        </div>

        {/* 8 Cards Contiguous Grid (4 Columns) */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
          <div className="grid w-full grid-cols-1 gap-[1px] sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex h-full flex-col bg-white p-8 transition-colors hover:bg-gray-50/50">
                <span className="mb-6 text-sm font-bold text-orange-400">
                  0{idx + 1}
                </span>
                <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="flex-grow text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
