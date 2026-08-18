import React from 'react';
import { MessageSquare, ClipboardCheck, Lightbulb, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      desc: 'Reach out via our simple online form or call to share your heating, cooling, or refrigeration needs.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'We Assess the System',
      desc: 'Our team evaluates your equipment or environment to understand the exact scope and requirements.',
      icon: ClipboardCheck,
    },
    {
      number: '03',
      title: 'We Recommend the Right Solution',
      desc: 'We provide clear recommendations tailored to your goals, performance needs, and budget.',
      icon: Lightbulb,
    },
    {
      number: '04',
      title: 'We Get the Job Done',
      desc: 'We perform the installation, repair, or maintenance with high-quality standards and attention to detail.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-darkText relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue text-white text-xs font-bold uppercase tracking-wider mb-4">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Simple. Professional. Reliable.
          </h2>
        </div>

        {/* Responsive Timeline Grid */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-hvac-blue/10 via-hvac-blue/40 to-hvac-blue/10 -translate-y-10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-start p-6 rounded-2xl bg-lightBg border border-gray-200/80 hover:border-hvac-blue/40 hover:bg-white transition-all duration-300 shadow-card hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-14 h-14 rounded-xl bg-hvac-blue-soft text-hvac-blue flex items-center justify-center border border-hvac-blue/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-gray-400" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-mutedText text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
