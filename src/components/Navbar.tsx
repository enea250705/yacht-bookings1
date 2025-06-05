import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Anchor, 
  Sparkles,
  Crown,
  Diamond,
  Star,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Simple navigation items
  const navigation = [
    { name: 'Home', href: '/', icon: <Crown className="w-5 h-5" /> },
    { name: 'Shipyards', href: '/collection', icon: <Anchor className="w-5 h-5" /> },
    { name: 'Rental', href: '/rental', icon: <Diamond className="w-5 h-5" /> },
    { name: 'About', href: '/about', icon: <Star className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <Sparkles className="w-5 h-5" /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };


  return (
    <>
    <motion.nav
      data-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity: navOpacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              {/* Desktop logo and text */}
              <div className="hidden sm:flex items-center space-x-3">
                <motion.div
                  className={`p-3 rounded-2xl transition-all duration-500 ${
                    scrolled 
                      ? 'bg-gradient-to-br from-navy-900/95 to-navy-800/95 shadow-xl border border-navy-700/50' 
                      : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.6 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src="/logoclass1.png" 
                    alt="Class Yachts Logo" 
                    className="h-10 w-auto object-contain"
                    style={{
                      filter: scrolled ? 'brightness(1.1) contrast(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'brightness(1.1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <motion.h2 
                    className={`text-lg font-bold transition-all duration-300 ${
                      scrolled ? 'text-navy-900' : 'text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
              Class Yachts
                  </motion.h2>
                  <motion.p 
                    className={`text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                      scrolled ? 'text-gray-600' : 'text-white'
                    }`}
                  >
                    Premium Vessels
                  </motion.p>
                </div>
              </div>
              {/* Mobile logo - left positioned */}
              <div className="block sm:hidden">
                <motion.div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    scrolled ? 'bg-navy-900 shadow-lg' : 'bg-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src="/logoclass1.png" 
                    alt="Class Yachts Logo" 
                    className="h-8 w-auto object-contain"
                    style={{
                      filter: scrolled ? 'brightness(1) contrast(1.2)' : 'brightness(1)'
                    }}
                  />
                </motion.div>
              </div>
            </Link>
          </motion.div>
            
          {/* Desktop Navigation */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
            <Link 
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.href
                      ? scrolled 
                        ? 'text-white' 
                        : 'text-white'
                      : scrolled 
                        ? 'text-gray-700 hover:text-white' 
                        : 'text-white hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-white rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
            </Link>
              ))}
        </div>
          </motion.div>
        
          {/* Enhanced CTA Button */}
          <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild
                className={`relative overflow-hidden bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-white border-0 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl shadow-white/50/25 hover:shadow-white/50/40 ${
                  scrolled ? 'shadow-lg' : 'shadow-xl'
                }`}
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Crown className="w-4 h-4" />
                  <span>Book Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </Link>
                </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile menu button */}
          <motion.div variants={itemVariants} className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-2xl transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
              
              {/* Premium button effects */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: isOpen 
                    ? ['0 0 0 0px rgba(255, 255, 255, 0.4)', '0 0 0 10px rgba(255, 255, 255, 0)']
                    : '0 0 0 0px rgba(255, 255, 255, 0)'
                }}
                transition={{ duration: 0.6 }}
                />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>

    {/* New Mobile Navigation - Outside navbar context to avoid transform issues */}
      <AnimatePresence>
        {isOpen && (
          <>
          {/* Backdrop */}
            <motion.div 
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
                  style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
                }}
              />

          {/* Mobile Menu Panel */}
                <motion.div 
            className="fixed z-[1000] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 shadow-2xl"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
              transform: 'none'
            }}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
                  transition={{
              type: "spring", 
              damping: 25, 
              stiffness: 120,
              duration: 0.6 
            }}
          >
            {/* Content Container with Safe Padding */}
            <div className="h-full flex flex-col">
                  
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-white to-white rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                    <Anchor className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                    <h2 className="text-white font-bold text-lg">Class Yachts</h2>
                    <p className="text-white text-xs uppercase tracking-wider">Premium Vessels</p>
                      </div>
                </div>
                
                    <motion.button
                      onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                  <X className="w-6 h-6 text-white" />
                    </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                      {navigation.map((item, index) => (
                <motion.div 
                          key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                        className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                              location.pathname === item.href
                            ? 'bg-gradient-to-r from-white/20 to-white/20 border border-white/40/30'
                            : 'hover:bg-white/10 border border-transparent'
                            }`}
                          >
                            <motion.div 
                          className={`p-3 rounded-lg transition-all duration-300 ${
                                location.pathname === item.href
                                                  ? 'bg-white text-navy-900'
                    : 'bg-navy-900/10 text-white group-hover:bg-white group-hover:text-navy-900'
                          }`}
                          whileHover={{ scale: 1.1 }}
                            >
                              {item.icon}
                            </motion.div>
                            <div className="flex-1">
                          <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                                location.pathname === item.href
                                  ? 'text-white'
                                  : 'text-white group-hover:text-white'
                              }`}>
                                {item.name}
                              </h3>
                            </div>
                        <ArrowRight className={`w-5 h-5 transition-colors duration-300 ${
                                location.pathname === item.href ? 'text-white' : 'text-white/50 group-hover:text-white'
                        }`} />
                          </Link>
                        </motion.div>
                      ))}
                </nav>
                    </div>

              {/* Footer with CTA */}
              <div className="p-6 border-t border-white/10">
                    <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                    >
                      <Button 
                        asChild
                    className="w-full bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-white font-semibold py-4 rounded-xl shadow-lg"
                      >
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Crown className="w-5 h-5 mr-2" />
                      Book Consultation
                        </Link>
                      </Button>
                    </motion.div>
                    
                {/* Social Links */}
                <motion.div 
                  className="flex justify-center gap-4 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                        <motion.a
                    href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                    <Instagram className="w-5 h-5" />
                        </motion.a>
                </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;



