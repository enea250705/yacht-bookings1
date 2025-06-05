import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on any route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant for immediate scroll, no animation delay
    });

    // Also ensure the document body scroll is reset
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Reset any potential scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname, search]); // Trigger on pathname or search params change

  // Also handle hash changes (like #section)
  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element after a small delay
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [hash]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 