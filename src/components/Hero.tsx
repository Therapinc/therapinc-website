'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-300 uppercase shadow-inner">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          Next-Generation Therapy Support
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Intelligent AI Solutions for <br className="hidden sm:inline" />
          <span className="gradient-text">Modern Mental Healthcare</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-normal text-gray-300 sm:text-xl">
          Therapinc empowers mental health professionals and organizations with AI-driven workflow
          tools, compassionate client interactions, and intelligent practice automation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:opacity-95 sm:w-auto"
          >
            Schedule a Demo <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#features"
            className="glass-card inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gray-200 transition-all hover:bg-white/10 sm:w-auto"
          >
            Explore Platform Features
          </Link>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 text-left sm:grid-cols-3">
          <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
            <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">HIPAA Compliant</h4>
              <p className="text-xs text-gray-400">Bank-grade data encryption</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
            <div className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Empathetic Design</h4>
              <p className="text-xs text-gray-400">Human-centric AI interactions</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
            <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Instant Insights</h4>
              <p className="text-xs text-gray-400">Automated session summaries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
