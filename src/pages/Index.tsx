
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import DynamicBackground from '../components/DynamicBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <DynamicBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
