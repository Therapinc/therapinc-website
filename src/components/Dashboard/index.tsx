'use client';

import React from 'react';
import DashboardBackground from './DashboardBackground';
import DashboardCard from '../ui/DashboardCard';
import {
  Home,
  Users,
  Folder,
  MessageSquare,
  Settings,
  ArrowRight,
  CircleCheck,
  Activity,
  CheckCircle,
} from 'lucide-react';

export default function DashboardShowcase() {
  return (
    <section className="relative bg-white py-[var(--spacing-3xl)] md:py-32">
      <DashboardBackground />

      {/* Playful Educational Background Shapes */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-100/60 opacity-70 mix-blend-multiply blur-[100px] filter"></div>
        <div className="absolute top-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-pink-100/60 opacity-70 mix-blend-multiply blur-[100px] filter"></div>
        <div className="absolute bottom-[-20%] left-[30%] h-[700px] w-[700px] rounded-full bg-yellow-50/60 opacity-70 mix-blend-multiply blur-[100px] filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]">
        <div className="mb-[var(--spacing-3xl)] -mt-[250px] flex flex-col items-center gap-[var(--spacing-lg)] xl:flex-row xl:gap-[var(--spacing-xl)]">
          {/* Static Image (Far Left) */}
          <div className="relative flex w-full shrink-0 items-center justify-center -ml-[87px] xl:w-3/12">
            <img
              src="/middle.png"
              alt="Feature Showcase"
              className="w-full scale-[1.2] object-contain"
            />
          </div>

          {/* Section Heading (Middle Left) */}
          <div className="w-full text-left xl:w-4/12">
            <h2 className="font-heading mb-[var(--spacing-xs)] text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase">
              Educator Portal
            </h2>
            <p className="font-heading text-2xl leading-tight font-bold tracking-tight text-gray-900 lg:text-3xl xl:text-4xl">
              Support every student. <br />
              <span className="font-semibold text-[var(--color-primary)]">Empower your staff.</span>
            </p>
          </div>

          {/* Floating Dashboard UI Mockup (Right) */}
          <div className="animate-float3d group relative flex w-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-white/60 bg-white/95 shadow-[-30px_30px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl xl:w-6/12">
            {/* Glossy reflection overlay */}
            <div className="pointer-events-none absolute inset-0 z-50 translate-x-[-100%] bg-gradient-to-tr from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]"></div>
            <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-bl from-white/30 to-transparent mix-blend-overlay"></div>

            {/* Fake Window Header */}
            <div className="relative z-10 flex w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-[var(--color-primary)] shadow-inner"></div>
                <div>
                  <div className="text-xs leading-tight font-bold text-gray-800">Ana Doe</div>
                  <div className="text-[10px] font-medium text-gray-500">Therapist</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-200"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-gray-200"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="relative z-10 flex h-full w-full flex-col gap-4 bg-gray-50/30 p-4 sm:flex-row">
              {/* Stats Column */}
              <div className="flex w-full flex-col gap-3 sm:w-5/12">
                <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
                  <div className="mb-1 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    IEP Goals Met
                  </div>
                  <div className="font-heading mb-1.5 text-2xl font-black text-gray-900">842</div>
                  <div className="flex w-fit items-center gap-1 rounded-md bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-500">
                    <Activity className="h-3 w-3" /> +24% this term
                  </div>
                </div>

                <div className="flex-1 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
                  <div className="mb-3 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Today&apos;s Tasks
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[var(--color-primary)]" />
                      <span className="w-16 truncate text-[9px] font-bold text-gray-700">
                        Speech Prep
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-purple-100">
                        <div className="h-full w-full rounded-full bg-[var(--color-primary)]"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]" />
                      <span className="w-16 truncate text-[9px] font-bold text-gray-700">
                        Parent Comms
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-gray-100">
                        <div className="h-full w-3/4 rounded-full bg-[var(--color-accent)]"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-gray-300" />
                      <span className="w-16 truncate text-[9px] font-bold text-gray-400">
                        IEP Meeting
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-gray-100">
                        <div className="h-full w-1/4 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Graph Area */}
              <div className="relative flex w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:w-7/12">
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    Student Progress
                  </div>
                  <div className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-bold text-gray-600">
                    Fall Term
                  </div>
                </div>

                {/* Fake Graph SVG */}
                <div className="relative mt-auto min-h-[100px] w-full flex-1">
                  <svg
                    className="absolute bottom-[-16px] left-[-16px] h-[calc(100%+16px)] w-[calc(100%+32px)] text-[var(--color-primary)]"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0,100 L0,50 C20,70 35,30 50,45 C65,60 80,15 100,25 L100,100 Z"
                      fill="url(#grad)"
                      opacity="0.15"
                    />
                    <path
                      d="M0,50 C20,70 35,30 50,45 C65,60 80,15 100,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="mx-auto mt-[var(--spacing-3xl)] max-w-5xl">
          <h3 className="font-heading mb-[var(--spacing-xl)] text-center text-xl font-bold text-[var(--color-primary)]">
            Simple steps. Powerful outcomes.
          </h3>
          <div className="flex flex-col items-center justify-between gap-[var(--spacing-lg)] md:flex-row">
            <div className="relative flex flex-1 flex-col items-center text-center">
              <div className="z-10 mb-[var(--spacing-sm)] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-neutral-soft)] text-[var(--color-secondary)]">
                1
              </div>
              <h4 className="font-heading text-sm font-bold text-gray-900">AI Documentation</h4>
              <p className="mt-1 text-xs text-gray-500">Capture clinical notes instantly.</p>
              <div className="absolute top-6 left-1/2 -z-10 hidden h-[2px] w-full bg-gray-200 md:block" />
            </div>

            <div className="relative flex flex-1 flex-col items-center text-center">
              <div className="z-10 mb-[var(--spacing-sm)] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-neutral-soft)] text-[var(--color-secondary)]">
                2
              </div>
              <h4 className="font-heading text-sm font-bold text-gray-900">Data Processing</h4>
              <p className="mt-1 text-xs text-gray-500">Automated workflow routing.</p>
              <div className="absolute top-6 left-1/2 -z-10 hidden h-[2px] w-full bg-gray-200 md:block" />
            </div>

            <div className="relative flex flex-1 flex-col items-center text-center">
              <div className="z-10 mb-[var(--spacing-sm)] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]">
                <CircleCheck className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-gray-900">Powerful Outcomes</h4>
              <p className="mt-1 text-xs text-gray-500">Ready for analysis & review.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
