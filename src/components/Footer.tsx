'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F4F3ED] py-16 sm:py-24">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>
        
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="mb-6 flex items-center gap-4 text-[var(--color-primary)]">
              <img src="/logosvg.svg" alt="TherapInc Logo" className="h-16 w-16 object-contain" />
              <span className="font-heading text-3xl font-bold tracking-tight">TherapInc</span>
            </Link>
            <p className="w-full whitespace-normal break-normal text-sm leading-relaxed text-gray-600" style={{ maxWidth: '320px' }}>
              Built for special education, everywhere.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Product */}
            <div className="flex flex-col">
              <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-900 uppercase">
                Product
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                <li><Link href="#features" className="transition-colors hover:text-[var(--color-primary)]">Features</Link></li>
                <li><Link href="#how-it-works" className="transition-colors hover:text-[var(--color-primary)]">How it works</Link></li>
                <li><Link href="#security" className="transition-colors hover:text-[var(--color-primary)]">Security</Link></li>
                <li><Link href="#pricing" className="transition-colors hover:text-[var(--color-primary)]">Pricing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-900 uppercase">
                Company
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                <li><Link href="#about" className="transition-colors hover:text-[var(--color-primary)]">About</Link></li>
                <li><Link href="#contact" className="transition-colors hover:text-[var(--color-primary)]">Contact</Link></li>
                <li><Link href="#careers" className="transition-colors hover:text-[var(--color-primary)]">Careers</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col">
              <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-900 uppercase">
                Legal
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                <li><Link href="#privacy" className="transition-colors hover:text-[var(--color-primary)]">Privacy policy</Link></li>
                <li><Link href="#terms" className="transition-colors hover:text-[var(--color-primary)]">Terms of service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs font-medium text-gray-500">
            © {new Date().getFullYear()} TherapInc. All rights reserved.
          </p>
          <p className="text-xs font-medium text-gray-500">
            Made for special schools, everywhere.
          </p>
        </div>

      </div>
    </footer>
  );
}
