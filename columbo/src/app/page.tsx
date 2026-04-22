import HeroBanner from '@/components/homepage/HeroBanner';
import MarqueeNotice from '@/components/homepage/MarqueeNotice';
import QuickActions from '@/components/homepage/QuickActions';
import WelcomeSection from '@/components/homepage/WelcomeSection';
import WhyChooseSection from '@/components/homepage/WhyChooseSection';
import AwardsSection from '@/components/homepage/AwardsSection';
import AIBotBanner from '@/components/homepage/AIBotBanner';
import CampusExploreSection from '@/components/homepage/CampusExploreSection';
import ExcellenceSlider from '@/components/homepage/ExcellenceSlider';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="column_alignment">
      <HeroBanner />
      <MarqueeNotice />
      <QuickActions />
      <WelcomeSection />
      <WhyChooseSection />
      <AwardsSection />
      <AIBotBanner />
      <CampusExploreSection />
      <ExcellenceSlider />
      <TestimonialsSection />
    </div>
  );
}
