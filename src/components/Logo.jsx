import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const isSmall = size === 'sm';
  const logoHeight = isSmall ? 'h-10 sm:h-12' : 'h-12 sm:h-14';

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src="./db_logo.webp"
        alt="DB Heating, Cooling & Refrigeration"
        className={`${logoHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        width="450"
        height="334"
        loading="eager"
      />
    </div>
  );
}
