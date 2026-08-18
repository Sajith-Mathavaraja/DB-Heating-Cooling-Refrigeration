import React, { useState, lazy, Suspense } from 'react';

// Above-the-fold: load eagerly (critical for LCP)
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';

// Below-the-fold: lazy-load to reduce initial JS bundle
const About              = lazy(() => import('./components/About'));
const Services           = lazy(() => import('./components/Services'));
const Process            = lazy(() => import('./components/Process'));
const WhyChooseUs        = lazy(() => import('./components/WhyChooseUs'));
const ResidentialCommercial = lazy(() => import('./components/ResidentialCommercial'));
const Reviews            = lazy(() => import('./components/Reviews'));
const CTASection         = lazy(() => import('./components/CTASection'));
const Contact            = lazy(() => import('./components/Contact'));
const Footer             = lazy(() => import('./components/Footer'));
const LegalModal         = lazy(() => import('./components/LegalModal'));

// Minimal skeleton placeholder while sections load
const SectionFallback = () => (
  <div className="py-20 lg:py-28" aria-hidden="true" />
);

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
        {/* Hero is eager — critical for LCP */}
        <Hero />

        {/* All below-fold sections are code-split */}
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ResidentialCommercial />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />
      </Suspense>

      <ScrollToTop />

      {legalModal.isOpen && (
        <Suspense fallback={null}>
          <LegalModal
            isOpen={legalModal.isOpen}
            type={legalModal.type}
            onClose={closeLegalModal}
          />
        </Suspense>
      )}
    </div>
  );
}
