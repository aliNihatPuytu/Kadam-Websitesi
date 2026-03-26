'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { IntroAnimation } from '@/components/layout/intro-animation';
import { HeroSection } from '@/components/sections/hero-section';
import { IntroSection } from '@/components/sections/intro-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ValuesSection } from '@/components/sections/values-section';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { NewsSection } from '@/components/sections/news-section';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleIntroComplete = () => {
    setContentVisible(true);
  };

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      
      {(contentVisible || !showIntro) && (
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <IntroSection />
            <ServicesSection />
            <ProjectsSection />
            <ValuesSection />
            <WhyUsSection />
            <NewsSection />
            <CTASection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
