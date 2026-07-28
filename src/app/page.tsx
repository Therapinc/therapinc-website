import Hero from '@/components/Hero/index';
import ProblemSection from '@/components/ProblemSection';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorksSection from '@/components/HowItWorksSection';
import ParentPortalSection from '@/components/ParentPortalSection';
import BuiltForYourTeamSection from '@/components/BuiltForYourTeamSection';
import SecuritySection from '@/components/SecuritySection';
import FaqSection from '@/components/FaqSection';
import PricingSection from '@/components/PricingSection';
import DashboardShowcase from '@/components/Dashboard';

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <ProblemSection />
      <FeatureGrid />
      <HowItWorksSection />
      <ParentPortalSection />
      <BuiltForYourTeamSection />
      <SecuritySection />
      <FaqSection />
      <PricingSection />
    </div>
  );
}
