import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenTerms, onOpenPrivacy }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-lightBg text-darkText pt-16 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-200/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <a 
              href="#hero" 
              onClick={(e) => handleScrollTo(e, 'hero')}
              className="inline-block mb-6 focus:outline-none"
            >
              <Logo size="md" />
            </a>

            <p className="text-mutedText text-sm leading-relaxed mb-6 max-w-sm">
              Professional heating, cooling, HVAC system, and commercial refrigeration solutions for residential homes and business properties in Greenville, NY and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-900 mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-mutedText">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About DB', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Why Us', id: 'why-us' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Request Service', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-hvac-blue transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered — Plain Text View Option Only */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-mutedText font-medium">
              <li>Heating</li>
              <li>Air Conditioning</li>
              <li>HVAC Systems</li>
              <li>Refrigeration</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-mutedText font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hvac-blue shrink-0" />
                <a href="tel:5185204822" className="hover:text-hvac-blue font-bold text-navy-900 transition-colors">
                  518-520-4822
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hvac-blue shrink-0 mt-1" />
                <span>
                  406 284 Crt <br />
                  Greenville, NY 12083
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mutedText">
          <p>© 2026 DB Heating, Cooling & Refrigeration. All Rights Reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-hvac-blue transition-colors focus:outline-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenTerms}
              className="hover:text-hvac-blue transition-colors focus:outline-none cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
