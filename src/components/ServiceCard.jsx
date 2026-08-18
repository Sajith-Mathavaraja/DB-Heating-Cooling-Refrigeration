import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ number, title, description, icon: Icon, image, ctaText, onCtaClick }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-card hover:shadow-card-hover hover:border-hvac-blue/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Service Visual Image */}
        {image && (
          <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={`${title} service`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Header row: Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-hvac-blue-soft text-hvac-blue flex items-center justify-center group-hover:bg-hvac-blue group-hover:text-white transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 group-hover:text-hvac-blue transition-colors">
            {title}
          </h3>

          {/* Content */}
          <p className="text-mutedText text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>
        </div>
      </div>

      {/* CTA link button */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
        <button
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 text-sm font-bold text-hvac-blue group-hover:text-hvac-blue-dark transition-colors focus:outline-none"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
