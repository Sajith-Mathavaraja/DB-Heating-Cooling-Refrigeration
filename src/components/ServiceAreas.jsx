import React from 'react';
import { MapPin, Navigation, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServiceAreas() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const areaPlaceholders = [
    '[Service Area 01]',
    '[Service Area 02]',
    '[Service Area 03]',
    '[Service Area 04]',
    '[Service Area 05]',
    '[Service Area 06]',
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white text-darkText relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Copy & List */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue-soft text-hvac-blue text-xs font-bold uppercase tracking-wider mb-4">
              SERVICE COVERAGE
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
              Serving Homes & Businesses in Your Area
            </h2>

            <p className="text-base sm:text-lg text-mutedText leading-relaxed mb-8">
              DB Heating, Cooling & Refrigeration provides reliable, prompt residential and commercial service across surrounding communities.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-900 mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-hvac-blue" />
                <span>Proudly Serving:</span>
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {areaPlaceholders.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-lightBg border border-gray-200/80 hover:border-hvac-blue/40 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-hvac-blue shrink-0" />
                    <span className="font-semibold text-navy-900 text-sm sm:text-base">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-hvac-blue hover:bg-hvac-blue-dark active:scale-95 shadow-md shadow-hvac-blue/20 transition-all duration-200"
            >
              <span>Check Service Availability</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column: Custom Modern Light Map Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-lightBg via-hvac-blue-soft/30 to-white border border-gray-200 p-8 sm:p-12 overflow-hidden shadow-card">
              
              {/* Subtle Grid Lines Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#0077D4_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-hvac-blue flex items-center justify-center text-hvac-blue shadow-md">
                  <MapPin className="w-10 h-10 animate-bounce" />
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Fast & Local Response
                </h3>

                <p className="text-mutedText text-sm max-w-md mx-auto mb-8">
                  Equipped and ready to dispatch to residential homes, retail stores, restaurants, and commercial facilities.
                </p>

                <div className="inline-flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-navy-900 bg-white py-3 px-6 rounded-full border border-gray-200 shadow-sm">
                  <span className="flex items-center gap-1.5 text-hvac-blue">
                    <CheckCircle className="w-4 h-4" /> Prompt Dispatch
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1.5 text-hvac-blue">
                    <CheckCircle className="w-4 h-4" /> Fully Equipped
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
