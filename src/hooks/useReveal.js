import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view.
 * Runs once on mount and observes the whole document — new sections are
 * picked up automatically. Cheap enough for a single-page landing.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
