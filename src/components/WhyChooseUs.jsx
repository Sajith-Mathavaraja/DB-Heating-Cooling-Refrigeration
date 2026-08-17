import React from 'react';
import { Award, ShieldCheck, Building, UserCheck, Wrench, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Professional Approach',
      desc: 'Every service is handled with attention to quality and detail.',
      icon: Award,
    },
    {
      title: 'Reliable Solutions',
      desc: 'Focus on dependable heating, cooling and refrigeration performance.',
      icon: ShieldCheck,
    },
    {
      title: 'Residential & Commercial',
      desc: 'Solutions designed for homes and businesses.',
      icon: Building,
    },
    {
      title: 'Service-Focused',
      desc: 'Clear communication and customer-focused service.',
      icon: UserCheck,
    },
    {
      title: 'Maintenance Expertise',
      desc: 'Preventive maintenance to help systems operate reliably.',
      icon: Wrench,
    },
    {
      title: 'Quality Work',
      desc: 'Professional workmanship with a focus on long-term results.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white text-darkText relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-accent-light text-hvac-blue text-xs font-bold uppercase tracking-wider mb-4">
            WHY DB
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Why Choose DB?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-lightBg border border-gray-200/80 hover:border-cyan-accent/50 hover:bg-white transition-all duration-300 shadow-card hover:shadow-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-cyan-accent flex items-center justify-center mb-6 group-hover:bg-hvac-blue group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-hvac-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-mutedText text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
