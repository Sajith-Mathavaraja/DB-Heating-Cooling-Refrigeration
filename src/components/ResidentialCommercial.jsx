import React from 'react';
import { Home, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import resImg from '../assets/residential_hvac.webp';
import commImg from '../assets/commercial_refrig.webp';

export default function ResidentialCommercial() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resItems = [
    'Home heating solutions',
    'Air conditioning systems',
    'HVAC preventive maintenance',
    'Indoor comfort optimization',
    'Equipment repairs and replacements',
  ];

  const commItems = [
    'Commercial HVAC systems',
    'Refrigeration equipment solutions',
    'Walk-in coolers & freezers',
    'Commercial cooling units',
    'Business maintenance plans',
  ];

  return (
    <section className="py-20 lg:py-28 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue text-white text-xs font-bold uppercase tracking-wider mb-4">
            TAILORED SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Residential & Commercial Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Residential Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={resImg}
                  alt="Modern residential HVAC central air conditioning system"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-navy-900/90 text-cyan-accent px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 backdrop-blur-md">
                  <Home className="w-4 h-4" />
                  <span>Residential Services</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Residential HVAC
                </h3>
                <p className="text-mutedText text-base mb-6">
                  Dependable home heating and cooling services tailored to ensure your living spaces stay comfortable year-round.
                </p>

                <ul className="space-y-3 mb-8">
                  {resItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-accent shrink-0" />
                      <span className="text-darkText font-medium text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={handleScrollToContact}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-hvac-blue text-white font-bold text-base transition-colors"
              >
                <span>Request Home Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={commImg}
                  alt="Commercial refrigeration and walk-in cooler facility"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-navy-900/90 text-cyan-accent px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 backdrop-blur-md">
                  <Building2 className="w-4 h-4" />
                  <span>Commercial & Refrigeration</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Commercial HVAC & Refrigeration
                </h3>
                <p className="text-mutedText text-base mb-6">
                  Robust HVAC and commercial refrigeration services built to protect business assets, inventory, and occupant comfort.
                </p>

                <ul className="space-y-3 mb-8">
                  {commItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-accent shrink-0" />
                      <span className="text-darkText font-medium text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={handleScrollToContact}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-hvac-blue text-white font-bold text-base transition-colors"
              >
                <span>Request Business Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
