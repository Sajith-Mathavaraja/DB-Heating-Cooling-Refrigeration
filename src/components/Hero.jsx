import React from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import heroMaleImg from '/hero_tech_clean.webp';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean Balanced Typography & Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] mb-4">
              Comfort You Can Count On.
            </h1>

            {/* Subheadline Line */}
            <p className="text-hvac-blue font-bold text-lg sm:text-xl mb-4">
              Precision Heating, Cooling & Commercial Refrigeration Solutions.
            </p>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-mutedText font-medium leading-relaxed mb-8 max-w-xl">
              Professional heating, cooling, HVAC and refrigeration solutions for residential and commercial customers.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-hvac-blue hover:bg-hvac-blue-dark active:scale-[0.98] shadow-lg shadow-hvac-blue/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:ring-offset-2"
              >
                <span>Request Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-navy-900 bg-white hover:bg-gray-50 border border-gray-300 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hvac-blue"
              >
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Trust Highlights Line */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-mutedText">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-hvac-blue shrink-0" />
                <span className="font-bold text-navy-900">Reliable Service</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-hvac-blue shrink-0" />
                <span className="font-bold text-navy-900">Quality Workmanship</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-hvac-blue shrink-0" />
                <span className="font-bold text-navy-900">Customer Focused</span>
              </div>
            </div>

          </div>

          {/* Right Column: Preloaded LCP WebP Image Card */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 group aspect-[16/11]">
              <img
                src={heroMaleImg}
                alt="Male DB HVAC technician servicing central air conditioning outdoor unit"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                fetchPriority="high"
                width="1280"
                height="880"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
