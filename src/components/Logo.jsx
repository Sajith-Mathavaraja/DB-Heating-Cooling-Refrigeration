import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const isSmall = size === 'sm';
  const iconSize = isSmall ? 'w-9 h-9' : 'w-10 h-10';
  const titleSize = isSmall ? 'text-sm sm:text-base' : 'text-base sm:text-lg';
  const subSize = isSmall ? 'text-[10px]' : 'text-xs';

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Lightning Bolt Emblem SVG Icon */}
      <div className={`relative ${iconSize} rounded-xl bg-gradient-to-br from-hvac-blue via-navy-900 to-hvac-blue-dark p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200 flex items-center justify-center shrink-0`}>
        <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Lightning Bolt SVG with Purple to Blue Gradient */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#0084E3" />
                <stop offset="100%" stopColor="#00D2FF" />
              </linearGradient>
            </defs>
            <path d="M13 2L3 14h7.5L9.5 22 21 10h-7.5L15 2z" fill="url(#lightningGrad)" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-navy-900 font-extrabold ${titleSize} tracking-tight leading-tight group-hover:text-hvac-blue transition-colors`}>
          DB Heating, Cooling
        </span>
        <span className={`text-navy-900 ${subSize} font-bold tracking-wider uppercase`}>
          & Refrigeration
        </span>
      </div>
    </div>
  );
}
