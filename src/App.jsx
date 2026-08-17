import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import ResidentialCommercial from './components/ResidentialCommercial';
import Reviews from './components/Reviews';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const openTerms = (e) => {
    if (e) e.preventDefault();
    setLegalModal({ isOpen: true, type: 'terms' });
  };

  const openPrivacy = (e) => {
    if (e) e.preventDefault();
    setLegalModal({ isOpen: true, type: 'privacy' });
  };

  const closeLegalModal = () => {
    setLegalModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-darkText font-sans selection:bg-hvac-blue selection:text-white">
      <Header onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <ResidentialCommercial />
        <Reviews />
        <CTASection />
        <Contact onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
      </main>
      <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
      <ScrollToTop />

      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={closeLegalModal}
      />
    </div>
  );
}
