import { useEffect, useRef, useState, RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number;
  enabled?: boolean;
  elementRef?: RefObject<HTMLElement>;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, enabled = true, elementRef: externalRef } = options;
  const [offset, setOffset] = useState(0);
  const internalRef = useRef<HTMLDivElement>(null);
  const elementRef = externalRef || internalRef;
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const updateParallax = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      const normalizedDistance = distance / windowHeight;
      
      setOffset(normalizedDistance * speed * 100);
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, enabled, elementRef]);

  return { ref: internalRef, offset };
};

