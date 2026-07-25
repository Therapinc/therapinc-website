import Hero from '@/components/Hero/index';
import FeatureGrid from '@/components/FeatureGrid';
import DashboardShowcase from '@/components/Dashboard';

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <FeatureGrid />
      <DashboardShowcase />
    </div>
  );
}
