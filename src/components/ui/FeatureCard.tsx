import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColorClass: string;
  iconColorClass: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  iconBgColorClass,
  iconColorClass,
}: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-white bg-white p-[var(--spacing-lg)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
      <div
        className={`mb-[var(--spacing-md)] flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] ${iconBgColorClass} ${iconColorClass}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading mb-[var(--spacing-xs)] text-sm font-bold text-gray-900">
        {title}
      </h3>
      <p className="flex-grow text-xs leading-relaxed text-gray-500">{description}</p>
    </div>
  );
}
