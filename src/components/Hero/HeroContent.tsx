import React from 'react';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl">
      <h1 className="animate-fade-in-up font-heading bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-3xl leading-[1.2] font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-4xl xl:text-5xl">
        Everything special schools need. <br />
        <span className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent">
          One intelligent platform.
        </span>
      </h1>

      <div className="animate-fade-in-up mt-[var(--spacing-lg)] font-sans text-sm sm:text-lg leading-relaxed text-gray-600 delay-100 sm:text-xl">
        <p className="font-semibold text-gray-800">Empowering Growth.<br className="sm:hidden" /> Enriching Lives.</p>
        <p className="mt-3 hidden sm:block">
          Therapinc is the unified platform special schools depend on to streamline operations,
          manage assets, and empower their heroes.
        </p>
      </div>

      <div className="mt-[var(--spacing-xl)] pt-[265px] sm:pt-0 flex flex-col items-start justify-start gap-[var(--spacing-md)] sm:flex-row sm:items-center">
        <Link
          href="#features"
          className="inline-flex w-full items-center justify-center gap-[var(--spacing-xs)] rounded-full border border-white/50 bg-gradient-to-r from-[#200A67]/90 via-[#581c87]/90 to-[#c026d3]/90 px-6 py-3 text-sm sm:px-[var(--spacing-xl)] sm:py-[var(--spacing-md)] sm:text-base font-semibold text-white shadow-[inset_0_2px_6px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_24px_rgba(192,38,211,0.5)] backdrop-blur-md transition-all hover:bg-gradient-to-r hover:from-[#200A67] hover:via-[#581c87] hover:to-[#c026d3] hover:shadow-[inset_0_6px_12px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.5)] sm:w-auto"
        >
          Book a Demo <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          href="#demo"
          className="inline-flex w-full items-center justify-center gap-[var(--spacing-xs)] rounded-full bg-[var(--color-neutral-light)] px-6 py-3 text-sm sm:px-[var(--spacing-xl)] sm:py-[var(--spacing-md)] sm:text-base font-semibold text-gray-700 shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,1)] transition-all hover:text-[var(--color-primary)] hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,1)] sm:w-auto"
        >
          <PlayCircle className="h-5 w-5" /> Explore Features
        </Link>
      </div>
    </div>
  );
}
