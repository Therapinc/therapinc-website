'use client';

import React from 'react';
import { Cpu, Lock, Clock, BarChart3, Users, MessageSquareQuote } from 'lucide-react';

const featureList = [
  {
    icon: Cpu,
    title: 'AI Session Assistance',
    description:
      'Real-time, unobtrusive clinical documentation support that lets therapists focus 100% on client care.',
  },
  {
    icon: Lock,
    title: 'Enterprise Privacy & Security',
    description:
      'End-to-end encrypted architecture designed to meet rigorous HIPAA, GDPR, and clinical compliance standards.',
  },
  {
    icon: Clock,
    title: '70% Reduction in Admin Overhead',
    description:
      'Automate progress notes, treatment plans, and intake assessments in seconds instead of hours.',
  },
  {
    icon: BarChart3,
    title: 'Outcome Analytics & Tracking',
    description:
      'Track client progress metrics seamlessly over time with objective assessment visualization.',
  },
  {
    icon: Users,
    title: 'Multi-Practitioner Workflows',
    description:
      'Built for independent practice owners, group clinics, and enterprise healthcare networks.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Guided Client Companion',
    description:
      'Provide clients between-session reflection exercises and mood check-ins guided by safe boundaries.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-3 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Core Platform Capabilities
          </h2>
          <p className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Designed for Therapists, <br />
            <span className="gradient-text">Powered by Intelligent AI</span>
          </p>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Therapinc combines clinical precision with intuitive tools to transform modern mental
            health practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card group rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
