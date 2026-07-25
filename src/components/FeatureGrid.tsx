'use client';

import React from 'react';
import { Users, FileText, Award, Layers, Zap } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const features = [
  {
    title: 'Student Management',
    description: 'Comprehensive profiles with secure, centralized data documentation and insights.',
    icon: Users,
    iconBgColorClass: 'bg-blue-50',
    iconColorClass: 'text-blue-600',
  },
  {
    title: 'Plan & Documentation',
    description: 'Generate reports easily, save time on paperwork and stay fully compliant.',
    icon: FileText,
    iconBgColorClass: 'bg-pink-50',
    iconColorClass: 'text-[var(--color-accent)]',
  },
  {
    title: 'Achievements',
    description: 'Track and celebrate student milestones with customizable goal tracking.',
    icon: Award,
    iconBgColorClass: 'bg-green-50',
    iconColorClass: 'text-green-600',
  },
  {
    title: 'Record Assets',
    description: 'Log all your school assets, keep track of usage or maintenance records.',
    icon: Layers,
    iconBgColorClass: 'bg-orange-50',
    iconColorClass: 'text-orange-500',
  },
  {
    title: 'Smart Digital Support',
    description: 'Provide secure communication channels and automated resources for staff.',
    icon: Zap,
    iconBgColorClass: 'bg-purple-50',
    iconColorClass: 'text-[var(--color-secondary)]',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative -mt-32 overflow-hidden bg-gradient-to-b from-transparent via-[#F8F5FA] to-transparent pt-32 pb-48">
      <div className="mx-auto max-w-[1550px] px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]">
        <div className="flex flex-col items-start gap-[var(--spacing-xl)] xl:flex-row xl:items-center xl:gap-[var(--spacing-lg)]">
          {/* Section Header (Left Side) */}
          <div className="relative flex shrink-0 items-center pr-4 lg:pr-8 xl:w-1/5">
            <h2 className="font-heading text-2xl leading-tight font-bold tracking-tight text-gray-900 lg:text-3xl xl:text-4xl">
              Everything you need. <br />
              <span className="font-semibold text-[var(--color-primary)]">
                designed for impact.
              </span>
            </h2>
          </div>

          {/* 5-Card Row (Right Side) */}
          <div className="grid w-full flex-1 grid-cols-1 gap-[var(--spacing-md)] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconBgColorClass={feature.iconBgColorClass}
                iconColorClass={feature.iconColorClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
