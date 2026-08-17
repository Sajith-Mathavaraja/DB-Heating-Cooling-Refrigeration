import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-lightBg via-hvac-blue-soft/50 to-lightBg border-y border-gray-200 text-navy-900 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-hvac-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-hvac-blue/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
          Need Heating, Cooling or Refrigeration Service?
        </h2>

        <p className="text-lg sm:text-xl text-mutedText max-w-3xl mx-auto leading-relaxed mb-10">
          Let DB Heating, Cooling & Refrigeration help keep your home or business comfortable and your systems running reliably.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-hvac-blue hover:bg-hvac-blue-dark active:scale-95 shadow-lg shadow-hvac-blue/20 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>Request Service</span>
          </button>
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-navy-900 bg-white hover:bg-gray-100 border border-gray-300 shadow-sm transition-all duration-200"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
