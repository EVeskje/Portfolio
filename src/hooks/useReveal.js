import { useEffect } from 'react';

export function useReveal(selector = '.reveal', options = { threshold: 0.12 }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, options]);
}