import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface BackToTopButtonProps {
  showAfter?: number; // Show button after scrolling this many pixels
  className?: string;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ 
  showAfter = 300,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTopSmooth } = useScrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          onClick={scrollToTopSmooth}
          className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronUp className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton; 

