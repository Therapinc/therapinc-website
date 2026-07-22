'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-card border-t border-white/10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <div className="rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-2 shadow-lg shadow-indigo-500/30">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Therap<span className="text-indigo-400">inc</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Empowering mental healthcare providers with safe, intelligent AI tools designed to
              streamline practice workflows and elevate patient outcome tracking.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="#features" className="transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="transition-colors hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  HIPAA Security Statement
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Therapinc Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 fill-pink-500 text-pink-500" /> for therapy
            professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
