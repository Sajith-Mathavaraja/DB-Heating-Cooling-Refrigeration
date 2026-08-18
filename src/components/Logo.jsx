import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const isSmall = size === 'sm';
  // Adjust logo height to scale cleanly in navbar & footer
  const logoHeight = isSmall ? 'h-11 sm:h-13' : 'h-14 sm:h-16';

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src="./db_logo.webp"
        alt="DB Heating, Cooling & Refrigeration"
        className={`${logoHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        width="600"
        height="363"
        loading="eager"
      />
    </div>
  );
}
