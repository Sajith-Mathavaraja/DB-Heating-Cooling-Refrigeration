import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const isSmall = size === 'sm';
  const iconSize = isSmall ? 'w-9 h-9' : 'w-10 h-10';
  const titleSize = isSmall ? 'text-sm sm:text-base' : 'text-base sm:text-lg';
  const subSize = isSmall ? 'text-[10px]' : 'text-xs';

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Emblem SVG Icon */}
      <div className={`relative ${iconSize} rounded-xl bg-gradient-to-br from-hvac-blue via-navy-900 to-hvac-blue-dark p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200 flex items-center justify-center shrink-0`}>
        <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-hvac-blue/20 to-transparent" />
          
          {/* Flame & Cooling Ring SVG Icon */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Heating Orange Flame */}
            <path d="M12 3C12 3 14 5.5 14 7.5C14 9.15685 12.8 10.5 12 10.5C11.2 10.5 10 9.15685 10 7.5C10 5.5 12 3 12 3Z" fill="#FF6B35" />
            {/* Cooling Royal Blue Flame/Ice Accent */}
            <path d="M12 21C15.866 21 19 17.866 19 14C19 10.9 16.8 8.8 15.5 8C15.9 9.7 15.5 11.9 14.2 12.8C13.3 13.4 12 13.3 12 13.3C12 13.3 11.1 14.6 11.1 15.9C11.1 17.2 12 17.6 12 17.6C12 17.6 10.3 17.6 9.4 16.3C8.5 15 8.9 13.7 8.9 13.7C7.6 14.6 6.8 16.3 6.8 18C6.8 19.6569 8.14315 21 9.8 21H12Z" fill="#0084E3" />
            {/* Outer Accent Ring */}
            <circle cx="12" cy="12" r="9.5" stroke="#0084E3" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
          </svg>

          {/* Bold DB Text Overlay */}
          <span className="absolute inset-0 flex items-center justify-center font-black text-[11px] text-white tracking-tight drop-shadow-md">
            DB
          </span>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-navy-900 font-extrabold ${titleSize} tracking-tight leading-tight group-hover:text-hvac-blue transition-colors`}>
          DB Heating, Cooling
        </span>
        <span className={`text-hvac-blue ${subSize} font-bold tracking-wider uppercase`}>
          & Refrigeration
        </span>
      </div>
    </div>
  );
}
