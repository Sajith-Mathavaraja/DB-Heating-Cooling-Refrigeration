import React from 'react';
import { Flame, Snowflake, Fan, Refrigerator, Wind, Settings } from 'lucide-react';
import ServiceCard from './ServiceCard';

import heatingImg from '../assets/service_heating.webp';
import acImg from '../assets/service_ac.webp';
import hvacImg from '../assets/service_hvac.webp';
import refrigImg from '../assets/commercial_refrig.webp';
import ventilationImg from '../assets/about_technician.webp';
import maintenanceImg from '../assets/residential_hvac.webp';

export default function Services() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      number: 'Service 01',
      title: 'Heating',
      description: 'Heating installation, repair, replacement and maintenance designed to keep indoor environments comfortable and efficient.',
      icon: Flame,
      image: heatingImg,
      ctaText: 'Request Heating Service',
    },
    {
      number: 'Service 02',
      title: 'Air Conditioning',
      description: 'Professional air conditioning installation, repair, maintenance and replacement services.',
      icon: Snowflake,
      image: acImg,
      ctaText: 'Request AC Service',
    },
    {
      number: 'Service 03',
      title: 'HVAC Systems',
      description: 'Complete HVAC solutions including installation, troubleshooting, maintenance and system upgrades.',
      icon: Fan,
      image: hvacImg,
      ctaText: 'Request HVAC Service',
    },
    {
      number: 'Service 04',
      title: 'Refrigeration',
      description: 'Reliable commercial refrigeration solutions including refrigeration repair, maintenance, coolers and freezers.',
      icon: Refrigerator,
      image: refrigImg,
      ctaText: 'Request Refrigeration Service',
    },
    {
      number: 'Service 05',
      title: 'Ventilation & Air Quality',
      description: 'Ventilation and indoor air-quality solutions designed to support cleaner, healthier and properly circulated indoor air.',
      icon: Wind,
      image: ventilationImg,
      ctaText: 'Request Service',
    },
    {
      number: 'Service 06',
      title: 'Preventive Maintenance',
      description: 'Routine inspections and maintenance designed to improve system reliability and help identify problems before they become major issues.',
      icon: Settings,
      image: maintenanceImg,
      ctaText: 'Schedule Maintenance',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue text-white text-xs font-bold uppercase tracking-wider mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
            Complete Heating, Cooling & Refrigeration Services
          </h2>
          <p className="text-base sm:text-lg text-mutedText leading-relaxed">
            From routine maintenance to system installation and repairs, DB provides dependable solutions for your comfort and equipment needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onCtaClick={handleScrollToContact}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
