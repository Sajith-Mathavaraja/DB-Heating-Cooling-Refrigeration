import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Customer testimonial placeholder. Outstanding service, fast response time, and expert technician work on our heating system.",
      author: "Customer Name",
      role: "Homeowner",
    },
    {
      id: 2,
      rating: 5,
      text: "Customer testimonial placeholder. Excellent commercial refrigeration repair for our business. Dependable and professional throughout.",
      author: "Customer Name",
      role: "Business Owner",
    },
    {
      id: 3,
      rating: 5,
      text: "Customer testimonial placeholder. Prompt air conditioning maintenance. Highly recommend DB Heating, Cooling & Refrigeration.",
      author: "Customer Name",
      role: "Property Manager",
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-accent-light text-hvac-blue text-xs font-bold uppercase tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid / Mobile Touch Scroll */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white p-8 rounded-2xl border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-cyan-accent/40 mb-3" />

                <p className="text-darkText text-base italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-navy-900 text-sm sm:text-base">
                    — {review.author}
                  </h3>
                  <span className="text-xs text-mutedText">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
