import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

export default function Contact({ onOpenTerms, onOpenPrivacy }) {
  const sectionRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Defer KDLead embed script until contact section is visible (eliminates forced reflow on load)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scriptLoaded.current) {
          scriptLoaded.current = true;
          const script = document.createElement('script');
          script.src = 'https://link.kdlead.com/js/form_embed.js';
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-28 bg-white text-darkText relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-hvac-blue-soft text-hvac-blue text-xs font-bold uppercase tracking-wider mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Request Service
          </h2>
          <p className="text-base sm:text-lg text-mutedText leading-relaxed">
            Tell us what you need and our team will get back to you with prompt, expert service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Embedded Custom Lead Capture Form Widget */}
          <div className="lg:col-span-7 w-full overflow-hidden">
            <iframe
              src="https://link.kdlead.com/widget/form/ElnIwJ3u2zPpoqrxVjkt"
              style={{ width: '100%', height: '883px', border: 'none' }}
              id="inline-ElnIwJ3u2zPpoqrxVjkt" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="DB Heating,Cooling & Refrigeration"
              data-height="883"
              data-layout-iframe-id="inline-ElnIwJ3u2zPpoqrxVjkt"
              data-form-id="ElnIwJ3u2zPpoqrxVjkt"
              title="DB Heating,Cooling & Refrigeration"
              loading="lazy"
            />
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-lightBg text-darkText p-8 rounded-3xl border border-gray-200/80 shadow-card space-y-8">
              <h3 className="text-2xl font-bold text-navy-900 border-b border-gray-200 pb-4">
                Contact Information
              </h3>

              {/* Call Us Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white text-hvac-blue flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mutedText">
                    Call Us
                  </h4>
                  <a
                    href="tel:5185204822"
                    className="text-xl font-extrabold text-navy-900 hover:text-hvac-blue transition-colors mt-1 block"
                  >
                    518-520-4822
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white text-hvac-blue flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mutedText">
                    Address
                  </h4>
                  <p className="text-base font-bold text-navy-900 mt-1">
                    406 284 Crt <br />
                    Greenville, NY 12083
                  </p>
                </div>
              </div>

              {/* Service Response Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white text-hvac-blue flex items-center justify-center shrink-0 border border-gray-200 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mutedText">
                    Service Hours
                  </h4>
                  <p className="text-base font-semibold text-navy-900 mt-1">
                    Residential & Commercial Service
                  </p>
                </div>
              </div>
            </div>

            {/* Fast Response Note Box */}
            <div className="p-6 rounded-2xl bg-hvac-blue-soft border border-hvac-blue/20 text-navy-900">
              <h4 className="font-bold text-base mb-1 flex items-center gap-2 text-hvac-blue">
                <AlertCircle className="w-5 h-5" />
                Fast Service Response
              </h4>
              <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                Call <strong className="text-navy-900">518-520-4822</strong> or submit the request form and our team will get back to you promptly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
