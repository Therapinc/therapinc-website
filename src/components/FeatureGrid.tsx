'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  Calendar,
  FileEdit,
  ClipboardList,
  Sparkles,
  Scan,
  Languages,
  Users,
  Activity,
  X,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBgColorClass: string;
  iconColorClass: string;
  accentColor: string;
  modalDescription: string;
  highlights: string[];
};

const features: Feature[] = [
  {
    title: 'Attendance, simplified',
    description: 'Daily attendance in seconds — by class, therapy session, or individual schedule.',
    icon: Calendar,
    iconBgColorClass: 'bg-blue-50',
    iconColorClass: 'text-blue-600',
    accentColor: '#2563eb',
    modalDescription:
      'Stop spending the first 20 minutes of every session on roll-call. TherapInc lets any staff member mark attendance in seconds — by class, therapy session, or individual schedule — and the data is instantly visible across the platform.',
    highlights: [
      'Mark attendance by class, session, or individual',
      'Instant visibility for admins and coordinators',
      'Tracks therapy session hours alongside class attendance',
      'End-of-term reports generated automatically',
    ],
  },
  {
    title: 'Daily therapy report entry',
    description: 'Therapists log session notes right after each session — structured, fast, searchable.',
    icon: FileEdit,
    iconBgColorClass: 'bg-pink-50',
    iconColorClass: 'text-pink-500',
    accentColor: '#ec4899',
    modalDescription:
      'Therapists shouldn\'t spend their evenings catching up on paperwork. TherapInc\'s structured session note templates let therapists log everything right after a session ends — in minutes, not hours.',
    highlights: [
      'Structured templates tailored for therapy sessions',
      'Log notes from any device, right after the session',
      'Fully searchable and filterable history',
      'AI can summarize months of notes into a progress report',
    ],
  },
  {
    title: 'IEP & specialized forms',
    description: 'Build and manage IEPs and any custom assessment format your institution uses.',
    icon: ClipboardList,
    iconBgColorClass: 'bg-green-50',
    iconColorClass: 'text-green-600',
    accentColor: '#16a34a',
    modalDescription:
      'Every special school uses different IEP formats, assessment tools, and reporting forms. TherapInc lets you build, manage, and track any form your institution uses — standardized or completely custom.',
    highlights: [
      'Fully customizable IEP templates',
      'Track goal progress across sessions',
      'Supports any assessment or evaluation format',
      'Version history and audit trails built in',
    ],
  },
  {
    title: 'AI progress summaries',
    description: 'Turn months of daily notes into a clear long-term summary — automatically.',
    icon: Sparkles,
    iconBgColorClass: 'bg-purple-50',
    iconColorClass: 'text-purple-600',
    accentColor: '#7c3aed',
    modalDescription:
      'Writing a term-end progress report used to mean hours of reading back through months of notes. TherapInc\'s AI reads every session log and produces a structured, readable summary — ready for parents and review boards.',
    highlights: [
      'AI synthesizes all session notes into a cohesive summary',
      'Highlights measurable progress and goal milestones',
      'Editable before sharing or printing',
      'Supports multi-language output for parent reports',
    ],
  },
  {
    title: 'Image-to-text records',
    description: 'Snap a photo of old handwritten or scanned files and TherapInc digitizes it.',
    icon: Scan,
    iconBgColorClass: 'bg-orange-50',
    iconColorClass: 'text-orange-500',
    accentColor: '#f97316',
    modalDescription:
      'Years of existing paper records don\'t have to sit in filing cabinets. TherapInc\'s image-to-text tool reads handwritten notes, old forms, and scanned documents — and converts them into searchable digital records.',
    highlights: [
      'Handles handwritten notes and printed forms',
      'Supports scanned PDFs and direct camera photos',
      'Auto-classifies records by student and date',
      'No manual re-entry required',
    ],
  },
  {
    title: 'Multi-language translation',
    description: "Reports and updates translate into a parent's native language automatically.",
    icon: Languages,
    iconBgColorClass: 'bg-cyan-50',
    iconColorClass: 'text-cyan-600',
    accentColor: '#0891b2',
    modalDescription:
      'Not every parent reads fluently in English. TherapInc automatically translates therapy reports, progress summaries, and parent portal updates into the parent\'s preferred language — no third-party tools needed.',
    highlights: [
      'Auto-translates reports and portal updates',
      'Supports 40+ languages',
      'Parents choose their preferred language in the portal',
      'Staff write in English — parents read in their language',
    ],
  },
  {
    title: 'Parent portal',
    description: "Parents see how their child's day is going — period by period, not just at term end.",
    icon: Users,
    iconBgColorClass: 'bg-rose-50',
    iconColorClass: 'text-rose-600',
    accentColor: '#e11d48',
    modalDescription:
      'Parents of children in special schools deserve more than a once-a-term update. TherapInc\'s parent portal gives families a live view of their child\'s day, session by session — securely, from any device.',
    highlights: [
      'Real-time attendance and session summaries',
      'Progress reports and goal milestones visible anytime',
      'Secure, login-protected access — no app download needed',
      'Translated automatically into the parent\'s language',
    ],
  },
  {
    title: 'Staff & student tracking',
    description: 'A clear view across therapists, teachers, and students — caseloads and schedules in one place.',
    icon: Activity,
    iconBgColorClass: 'bg-indigo-50',
    iconColorClass: 'text-indigo-600',
    accentColor: '#4f46e5',
    modalDescription:
      'Coordinators and admins need to see the full picture — who is assigned to whom, what sessions happened, and what is still pending. TherapInc gives every admin a clear, real-time view of their entire team and student roster.',
    highlights: [
      'Full staff and student directory with caseload assignments',
      'Live session and attendance status across the school',
      'Alerts for missed sessions or incomplete records',
      'Schedule view by student, therapist, or class',
    ],
  },
];

export default function FeatureGrid() {
  const [selected, setSelected] = useState<Feature | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {selected && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          />

          {/* Modal Panel */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative mt-8 w-[min(92vw,42rem)] shrink-0 max-h-[calc(100vh-4rem)] overflow-hidden rounded-3xl bg-white shadow-2xl sm:mt-0"
              initial={{ scale: 0.88, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Coloured top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: selected.accentColor }}
              />

              {/* Content */}
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto p-8 sm:p-10">
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Icon + title */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${selected.iconBgColorClass} ${selected.iconColorClass}`}>
                    <selected.icon className="h-7 w-7" />
                  </div>
                  <h2
                    className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {selected.title}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {selected.modalDescription}
                </motion.p>

                {/* Highlights */}
                <ul className="mt-8 flex flex-col gap-3">
                  {selected.highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.26 + i * 0.08,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: selected.accentColor }}
                      />
                      <span className="text-sm leading-relaxed text-gray-700">{point}</span>
                    </motion.li>
                  ))}
                </ul>

              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section id="features" className="relative w-full -mt-32 overflow-hidden bg-gradient-to-b from-transparent via-[#F8F5FA] to-transparent pt-48 pb-[132px]">
        <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>

          {/* Section Header */}
          <motion.div 
            className="mb-16 flex w-full flex-col justify-center whitespace-normal break-normal" style={{ maxWidth: '768px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]"></div>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Features
              </h2>
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-primary)] lg:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              One platform. Every part of your school&apos;s day.
            </p>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Everything your staff, admins, and parents need — built around how special schools actually run.
            </p>
          </motion.div>

          {/* 8 Cards Contiguous Grid */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
            <div className="grid w-full grid-cols-1 gap-[1px] sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelected(feature)}
                  className="group flex h-full w-full cursor-pointer flex-col bg-white p-8 text-left transition-all duration-300 hover:bg-gray-50/50 hover:shadow-inner focus:outline-none hover:-translate-y-1"
                >
                  <span className="mb-6 text-sm font-bold text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-1">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-3 font-heading text-xl font-bold text-gray-900 transition-colors group-hover:text-[var(--color-primary)]">
                    {feature.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                  <span className="mt-6 text-xs font-semibold tracking-wide text-[var(--color-secondary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more →
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portal: render modal directly into document.body to escape overflow:hidden */}
      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
