'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          className="group relative -mt-[1px] -ml-[35px] translate-x-[10px] md:translate-x-0 flex items-center gap-1 overflow-hidden rounded-xl px-2"
        >
          {/* Constant Glaze Shine Loop */}
          <div className="pointer-events-none absolute inset-0 z-30">
            <div className="animate-shine absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
          <div className="z-10 flex items-center justify-center bg-transparent transition-colors">
            <img
              src="/logosvg.svg?v=2"
              alt="TherapInc Icon"
              className="h-[40px] md:h-[60px] w-auto object-contain"
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
              className="flex items-center pb-1 font-sans text-[1.5rem] md:text-[2rem] font-semibold tracking-tight"
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

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className={`transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}>
            <Link
              href="#demo"
              className="inline-flex items-center gap-[var(--spacing-xs)] rounded-[var(--radius-full)] bg-gradient-to-r from-[#200A67] via-[#581c87] to-[#c026d3] px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-sm font-medium text-white shadow-sm transition-all hover:scale-105 hover:opacity-90"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#200A67] transition-colors hover:bg-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 px-[var(--spacing-md)] py-6 shadow-xl backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center text-lg font-medium text-gray-700">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">Home</Link>
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">Features</Link>
              <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">Solutions</Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">About Us</Link>
              <Link href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">Resources</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-primary)]">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
