import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PortfolioHeader } from './portfolio/PortfolioHeader';
import { PortfolioHero } from './portfolio/PortfolioHero';
import { PortfolioProjects } from './portfolio/PortfolioProjects';
import { PortfolioAbout } from './portfolio/PortfolioAbout';
import { PortfolioContact } from './portfolio/PortfolioContact';
import { PortfolioFooter } from './portfolio/PortfolioFooter';
export function App() {
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio' or 'project'
  const handleViewProject = () => setCurrentView('project');
  const handleBackToPortfolio = () => setCurrentView('portfolio');
  if (currentView === 'project') {
    return <div className="w-full min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 z-50 flex justify-between items-center">
          <span className="font-medium">
            Viewing Demo Project: Nail Salon Website
          </span>
          <button onClick={handleBackToPortfolio} className="bg-white text-indigo-700 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors">
            Back to Portfolio
          </button>
        </div>
        <div className="pt-14">
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>;
  }
  return <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <PortfolioProjects onViewProject={handleViewProject} />
        <PortfolioAbout />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </div>;
}