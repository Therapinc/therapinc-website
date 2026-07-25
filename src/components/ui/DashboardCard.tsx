import React, { ReactNode } from 'react';

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
  isGlass?: boolean;
}

export default function DashboardCard({
  children,
  className = '',
  isGlass = false,
}: DashboardCardProps) {
  const baseClasses =
    'rounded-[var(--radius-xl)] shadow-[var(--shadow-premium)] overflow-hidden transition-all duration-300';
  const bgClasses = isGlass ? 'glass-panel' : 'bg-white border border-gray-100';

  return <div className={`${baseClasses} ${bgClasses} ${className}`}>{children}</div>;
}
