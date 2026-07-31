import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, BrainCircuit, Activity } from 'lucide-react';

export default function HeroFeatureBar() {
  const items = [
    { icon: ShieldCheck, title: 'HIPAA Compliant', subtitle: 'Secure infrastructure' },
    { icon: HeartHandshake, title: 'Therapy Focused', subtitle: 'Built for specialists' },
    { icon: Zap, title: 'Unified Workflow', subtitle: 'Save 10+ hours a week' },
    { icon: BrainCircuit, title: 'AI-Powered', subtitle: 'Intelligent insights' },
    { icon: Activity, title: 'Real-time Data', subtitle: 'Monitor progress daily' },
  ];

  return (
    <div className="relative z-20 mx-auto -mt-1 w-full max-w-[1200px] lg:mt-[89px]">
      <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/30 bg-white/10 px-6 py-8 shadow-xl backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-2xl lg:flex-row lg:gap-4 lg:rounded-full lg:px-12 lg:py-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full items-center justify-start gap-4 lg:w-auto lg:justify-center"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] transition-transform hover:scale-110">
              <item.icon size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-bold tracking-tight text-gray-900">
                {item.title}
              </span>
              <span className="text-xs font-medium text-gray-500">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
