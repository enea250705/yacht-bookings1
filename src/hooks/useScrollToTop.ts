import { useCallback } from 'react';

interface ScrollToTopOptions {
  behavior?: 'smooth' | 'instant';
  top?: number;
  left?: number;
}

export const useScrollToTop = () => {
  const scrollToTop = useCallback((options: ScrollToTopOptions = {}) => {
    const {
      behavior = 'instant',
      top = 0,
      left = 0
    } = options;

    // Scroll to top with specified behavior
    window.scrollTo({
      top,
      left,
      behavior
    });

    // Also ensure the document body scroll is reset
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
    
    // Reset scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const scrollToTopSmooth = useCallback(() => {
    scrollToTop({ behavior: 'smooth' });
  }, [scrollToTop]);

  const scrollToTopInstant = useCallback(() => {
    scrollToTop({ behavior: 'instant' });
  }, [scrollToTop]);

  return {
    scrollToTop,
    scrollToTopSmooth,
    scrollToTopInstant
  };
}; 
