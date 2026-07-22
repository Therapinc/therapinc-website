'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="glass-card fixed top-0 right-0 left-0 z-50 border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <div className="rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-2 shadow-lg shadow-indigo-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Therap<span className="text-indigo-400">inc</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          <Link href="#features" className="transition-colors hover:text-white">
            Features
          </Link>
          <Link href="#solutions" className="transition-colors hover:text-white">
            Solutions
          </Link>
          <Link href="#about" className="transition-colors hover:text-white">
            About Us
          </Link>
          <Link href="#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:scale-105 hover:from-blue-500 hover:to-indigo-500"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
