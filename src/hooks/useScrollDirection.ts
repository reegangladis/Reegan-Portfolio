import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

export function useScrollDirection(threshold: number = 20): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;

      let direction: 'up' | 'down' | null = scrollState.scrollDirection;
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        direction = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > 40,
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollState.scrollDirection, threshold]);

  return scrollState;
}

