import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What HVAC services do you provide?',
      answer: 'DB Heating, Cooling & Refrigeration provides complete heating, air conditioning, HVAC system installation, repair, replacement, ventilation, indoor air quality solutions, and preventive maintenance.',
    },
    {
      question: 'Do you service residential and commercial systems?',
      answer: 'Yes. We service both residential homes and commercial businesses, tailoring our solutions to the specific scale and needs of each property.',
    },
    {
      question: 'Do you provide refrigeration services?',
      answer: 'Yes. We provide commercial refrigeration services including installation, maintenance, and repairs for walk-in coolers, freezers, and commercial cooling units.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes. We offer preventive maintenance programs designed to improve system reliability, extend equipment life, and help prevent issues before they occur.',
    },
    {
      question: 'How can I request service?',
      answer: 'You can request service by completing our online request form on this page or contacting our team directly by phone or email.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-lightBg text-darkText relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-accent-light text-hvac-blue text-xs font-bold uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Got Questions? We Have Answers.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-card transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-navy-900 text-lg hover:text-hvac-blue transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-accent shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-cyan-accent' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-mutedText text-base leading-relaxed animate-fade-in border-t border-gray-100 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
