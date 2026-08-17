import React from 'react';
import { Flame, Building2, Shield, Wrench } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    {
      icon: Flame,
      title: 'Heating & Cooling',
      desc: 'Professional HVAC solutions',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      desc: 'Service for every environment',
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      desc: 'Focused on dependable service',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      desc: 'Prevent problems before they happen',
    },
  ];

  return (
    <section className="bg-lightBg border-y border-gray-200/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200/80 hover:border-hvac-blue/40 shadow-sm transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-hvac-blue-soft text-hvac-blue flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-mutedText text-xs sm:text-sm mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
