'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1200px' }}>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Pricing */}
          <motion.div 
            className="flex w-full flex-col items-center justify-center rounded-[40px] bg-white p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-16"
            initial={{ opacity: 0, y: 50, x: -30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"></div>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Pricing
              </h2>
            </div>
            
            <h3 className="mb-6 font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
              Simple pricing, built for institutions.
            </h3>
            
            <p className="mx-auto mb-10 w-full whitespace-normal break-normal text-base leading-relaxed text-gray-600 sm:text-lg">
              Pricing is based on your school&apos;s size and needs — not per-parent upsells. Book a quick call and we&apos;ll set up a plan that fits your staff and student count.
            </p>

            <button className="mt-auto rounded-full bg-[var(--color-primary)] px-8 py-4 font-bold text-white transition-transform hover:scale-105 hover:bg-[var(--color-secondary)]">
              Talk to us about pricing
            </button>
          </motion.div>

          {/* Card 2: Demo */}
          <motion.div 
            className="flex w-full flex-col items-center justify-center rounded-[40px] bg-white p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-16"
            initial={{ opacity: 0, y: 50, x: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"></div>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Get Started
              </h2>
            </div>
            
            <h3 className="mb-6 font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
              Ready to spend less time on paperwork, and more time with students?
            </h3>
            
            <p className="mx-auto mb-10 w-full whitespace-normal break-normal text-base leading-relaxed text-gray-600 sm:text-lg">
              No commitment — just a 20-minute walkthrough with your team.
            </p>

            <button className="mt-auto rounded-full bg-[var(--color-primary)] px-8 py-4 font-bold text-white transition-transform hover:scale-105 hover:bg-[var(--color-secondary)]">
              Book a free demo
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
