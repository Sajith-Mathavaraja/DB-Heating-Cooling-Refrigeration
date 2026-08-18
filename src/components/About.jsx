import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/about_technician.webp';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checklist = [
    'Professional Service',
    'Reliable Solutions',
    'Residential & Commercial',
    'Quality-Focused Work',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-darkText relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={aboutImg}
                alt="Expert DB HVAC technician checking heating and cooling system equipment"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            {/* Background accent element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-lightBg border border-gray-200 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-accent-light rounded-xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue text-white text-xs font-bold uppercase tracking-wider mb-4 w-max">
              ABOUT DB
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
              Heating, Cooling & Refrigeration You Can Rely On
            </h2>

            <p className="text-base sm:text-lg text-mutedText leading-relaxed mb-6">
              <strong className="text-darkText font-semibold">DB Heating, Cooling & Refrigeration</strong> provides professional solutions for maintaining comfortable, efficient, and properly functioning indoor environments for both homes and businesses.
            </p>

            <p className="text-base text-mutedText leading-relaxed mb-8">
              Whether you need routine preventive maintenance, system repairs, air conditioning upgrades, or specialized commercial refrigeration support, our team delivers high-quality workmanship focused on long-term performance and reliability.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-lightBg p-3 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-accent shrink-0" />
                  <span className="text-navy-900 font-semibold text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg text-base font-bold text-white bg-navy-900 hover:bg-hvac-blue active:scale-95 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:ring-offset-2"
              >
                <span>Learn More About DB</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
