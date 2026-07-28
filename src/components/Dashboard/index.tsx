'use client';

import React from 'react';
import DashboardBackground from './DashboardBackground';
import DashboardCard from '../ui/DashboardCard';
import {
  Home,
  Users,
  Folder,
  MessageSquare,
  Settings,
  ArrowRight,
  CircleCheck,
  Activity,
  CheckCircle,
} from 'lucide-react';

export default function DashboardShowcase() {
  return (
    <section className="relative bg-white h-[600px] w-full overflow-hidden">
      <DashboardBackground />
    </section>
  );
}
