import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Instagram, MessageSquare, Crown, Anchor, Waves, Star } from 'lucide-react';

const Contact: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/r4-1.jpg)`, 
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
            transition: 'opacity 1.5s ease-out, transform 2s ease-out'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-950/80 to-navy-950/95 backdrop-blur-[2px]"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 text-white/30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Anchor size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-16 text-white/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Crown size={35} />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 text-white/25"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Waves size={30} />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              className="inline-block mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white">
                Connect with
              </h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-6xl font-playfair text-white mb-8"
            >
              Luxury <span className="text-white">Yacht Specialists</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Experience white-glove service from our dedicated team of maritime experts. 
              Your dream yacht awaits our expertise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex justify-center"
            >
              <div className="flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-sm border border-white/40/30 rounded-full px-6 py-3">
                <Star className="text-white w-5 h-5" />
                <span className="text-white font-medium">Premium Concierge Service</span>
                <Star className="text-white w-5 h-5" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/10 backdrop-blur-sm border border-white/40/20 rounded-full px-8 py-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Crown className="text-white w-5 h-5" />
                <span className="text-white font-medium">Luxury Concierge</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6 relative">
                Get in Touch
                <motion.span 
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '200px' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Experience personalized service from our dedicated yacht specialists. 
                We're here to make your maritime dreams a reality.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <div className="space-y-8">
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-sm border border-white/40/30 rounded-full px-6 py-2 mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MessageSquare className="text-white w-4 h-4" />
                    <span className="text-white font-medium text-sm">24/7 Support Available</span>
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-playfair text-white mb-6 relative">
                    Contact Information
                    <motion.span 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '150px' }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.span>
                  </h3>
                  
                  <p className="text-white/80 text-lg mb-12 leading-relaxed">
                    Our luxury yacht specialists are available around the clock to provide personalized assistance 
                    and expert guidance for all your maritime needs.
                  </p>
                </div>
                
                <motion.div 
                  variants={scaleIn}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      className="flex items-start space-x-4 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="bg-gradient-to-br from-white/30 to-white/20 rounded-full p-4 group-hover:from-white/40 group-hover:to-white/30 transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Phone className="text-white w-6 h-6" />
                      </motion.div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                        <a 
                          href="tel:+35569604715​9" 
                          className="text-white hover:text-white transition-colors text-lg font-medium"
                        >
                          +355 69 604 7159
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start space-x-4 group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="bg-gradient-to-br from-white/30 to-white/20 rounded-full p-4 group-hover:from-white/40 group-hover:to-white/30 transition-all duration-300"
                        whileHover={{ rotate: -5 }}
                      >
                        <Mail className="text-white w-6 h-6" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                        <a 
                          href="mailto:class.av.yachts@gmail.com" 
                          className="text-white hover:text-white transition-colors text-lg font-medium"
                        >
                          class.av.yachts@gmail.com
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={scaleIn}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <div className="text-center">
                    <h4 className="text-2xl font-playfair text-white mb-6">Follow Our Journey</h4>
                    <p className="text-white/70 mb-6">Stay updated with our latest luxury yachts and exclusive experiences</p>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    <a 
                        href="https://www.instagram.com/class_yachts_/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 p-4 rounded-full transition-all duration-300 border border-pink-400/30 group"
                      >
                        <Instagram className="text-pink-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </motion.div>
                    <p className="text-white/60 text-sm mt-3">@class_yachts_</p>
                  </div>
                </motion.div>

                {/* Premium Service Features */}
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/40/20"
                >
                  <div className="text-center">
                    <Crown className="text-white w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-xl font-playfair text-white mb-4">Premium Service Promise</h4>
                    <div className="space-y-3 text-white/80">
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="text-white w-4 h-4" />
                        <span>24/7 Concierge Support</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="text-white w-4 h-4" />
                        <span>Personalized Yacht Matching</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="text-white w-4 h-4" />
                        <span>White-Glove Service</span>
                      </div>
                  </div>
                </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 
