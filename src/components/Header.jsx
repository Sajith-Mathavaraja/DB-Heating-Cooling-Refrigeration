import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    // Zero-Reflow Sentinel Observer for Header Background Style
    const sentinel = document.getElementById('hero');
    let headerObserver;

    if (sentinel) {
      headerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(!entry.isIntersecting);
        },
        { rootMargin: '-60px 0px 0px 0px', threshold: 0 }
      );
      headerObserver.observe(sentinel);
    }

    // Zero-Reflow Observer for Navigation Scroll Spy
    const spyCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const spyObserver = new IntersectionObserver(spyCallback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) spyObserver.observe(section);
    });

    return () => {
      if (headerObserver) headerObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300">
      {/* Floating Pill Capsule Bar */}
      <div className={`bg-hvac-blue-soft/90 backdrop-blur-md border border-hvac-blue/20 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl transition-all duration-300 flex items-center justify-between ${
        isScrolled ? 'shadow-2xl bg-white/95 border-gray-200' : ''
      }`}>
        
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="focus:outline-none rounded-full"
          aria-label="DB Heating, Cooling & Refrigeration Home"
        >
          <Logo size="sm" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-hvac-blue font-bold'
                    : 'text-gray-700 hover:text-hvac-blue'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-hvac-blue rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Circular Phone Icon Button */}
          <a
            href="tel:5185204822"
            title="Call 518-520-4822"
            className="w-10 h-10 rounded-full bg-white border border-hvac-blue/30 text-hvac-blue flex items-center justify-center hover:bg-hvac-blue hover:text-white transition-all duration-200 shadow-sm focus:outline-none"
            aria-label="Call DB Heating, Cooling & Refrigeration at 518-520-4822"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Pill Action Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-hvac-blue hover:bg-hvac-blue-dark active:scale-95 shadow-md shadow-hvac-blue/25 transition-all duration-200 focus:outline-none"
          >
            <span>Get Free Quote</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-gray-700 hover:text-navy-900 hover:bg-white/80 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mt-2 lg:hidden bg-white/95 backdrop-blur-md border border-gray-200 rounded-3xl p-4 shadow-2xl space-y-2 animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-hvac-blue font-bold bg-hvac-blue-soft'
                      : 'text-gray-700 hover:text-navy-900 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-gray-200 flex gap-2">
            <a
              href="tel:5185204822"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white bg-hvac-blue hover:bg-hvac-blue-dark shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 518-520-4822</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
