'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Box } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-gray-100 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1550px] items-center justify-between px-[var(--spacing-md)] py-3 lg:px-[var(--spacing-lg)]">
        {/* Static Logo */}
        <Link
          href="/"
          className="group relative -mt-[1px] -ml-[35px] flex items-center gap-1 overflow-hidden rounded-xl px-2"
        >
          {/* Constant Glaze Shine Loop */}
          <div className="pointer-events-none absolute inset-0 z-30">
            <div className="animate-shine absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
          <div className="z-10 flex items-center justify-center bg-transparent transition-colors">
            <img
              src="/logosvg.svg?v=2"
              alt="TherapInc Icon"
              className="h-[60px] w-auto object-contain"
            />
          </div>

          {/* Letter-by-Letter Text Reveal */}
          <div className="mt-4 -ml-[3px] flex items-center overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                hidden: {},
              }}
              className="flex items-center pb-1 font-sans text-[2rem] font-semibold tracking-tight"
              style={{ color: '#200A67' }}
            >
              {/* "Therap" */}
              {Array.from('Therap').map((letter, i) => (
                <motion.span
                  key={`therap-${i}`}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                  className={`inline-block ${letter === 'T' ? 'text-[1.1em]' : ''}`}
                >
                  {letter}
                </motion.span>
              ))}

              {/* "Inc" */}
              <span className="ml-[2px] inline-flex items-center">
                {Array.from('Inc').map((letter, i) => (
                  <motion.span
                    key={`inc-${i}`}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                    }}
                    className={`inline-block ${letter === 'I' ? 'text-[1.1em]' : ''}`}
                    style={{
                      color: '#d946ef',
                    }} /* Solid bright purple/pink to fix invisible text bug */
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-[var(--spacing-xl)] text-sm font-medium text-gray-600 md:flex">
          <Link href="/" className="font-semibold text-[var(--color-primary)] transition-colors">
            Home
          </Link>
          <Link href="#features" className="transition-colors hover:text-[var(--color-primary)]">
            Features
          </Link>
          <Link href="#solutions" className="transition-colors hover:text-[var(--color-primary)]">
            Solutions
          </Link>
          <Link href="#about" className="transition-colors hover:text-[var(--color-primary)]">
            About Us
          </Link>
          <Link href="#resources" className="transition-colors hover:text-[var(--color-primary)]">
            Resources
          </Link>
          <Link href="#contact" className="transition-colors hover:text-[var(--color-primary)]">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Link
            href="#demo"
            className="inline-flex items-center gap-[var(--spacing-xs)] rounded-[var(--radius-full)] bg-gradient-to-r from-[#200A67] via-[#581c87] to-[#c026d3] px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-sm font-medium text-white shadow-sm transition-all hover:scale-105 hover:opacity-90"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
