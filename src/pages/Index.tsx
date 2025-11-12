import { useState } from 'react';
import { Starfield } from '@/components/Starfield';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PollutantCards } from '@/components/PollutantCards';
import { CityComparison } from '@/components/CityComparison';
import { MapAndTrends } from '@/components/MapAndTrends';
import { Footer } from '@/components/Footer';
import { LiveAQIModal } from '@/components/LiveAQIModal';
import { StoriesModal } from '@/components/StoriesModal';
import { ForecastModal } from '@/components/ForecastModal';

const Index = () => {
  const [liveAQIOpen, setLiveAQIOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [forecastOpen, setForecastOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Effects */}
      <Starfield />

      {/* Main Content */}
      <Navbar
        onLiveAQIClick={() => setLiveAQIOpen(true)}
        onHealthAlertsClick={() => setLiveAQIOpen(true)}
        onStoriesClick={() => setStoriesOpen(true)}
        onForecastClick={() => setForecastOpen(true)}
      />
      
      <main className="relative z-10">
        <HeroSection />
        <PollutantCards />
        <CityComparison />
        <MapAndTrends />
      </main>

      <Footer />

      {/* Modals */}
      <LiveAQIModal open={liveAQIOpen} onOpenChange={setLiveAQIOpen} />
      <StoriesModal open={storiesOpen} onOpenChange={setStoriesOpen} />
      <ForecastModal open={forecastOpen} onOpenChange={setForecastOpen} />
    </div>
  );
};

export default Index;
