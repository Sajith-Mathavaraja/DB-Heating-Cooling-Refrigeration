import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observe #about section: when #about leaves viewport going down, show scroll-to-top button
    const target = document.getElementById('about');
    let observer;

    if (target) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { rootMargin: '-100px 0px 0px 0px', threshold: 0 }
      );
      observer.observe(target);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white text-hvac-blue border border-gray-200 shadow-2xl hover:bg-hvac-blue hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue"
      aria-label="Scroll back to top of page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
