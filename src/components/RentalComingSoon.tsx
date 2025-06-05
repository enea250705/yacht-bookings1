import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Calendar, Clock, Anchor, Star, Crown, Diamond, Sparkles, Waves } from 'lucide-react';
import { shimmer, fadeInUp, staggerContainer, float } from '@/lib/animations';

const RentalComingSoon: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-32 text-white min-h-screen flex items-center">
      {/* Hero Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: `url(/CabinLowres-38-1.jpg)`
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: 1.05, 
          opacity: 1
        }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/90" />
      
      {/* Animated overlay patterns */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
            'linear-gradient(225deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
            'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)'
          ]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 animate-pulse" />
        
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Premium particle system */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>


      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Header Section */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            {/* Luxury Status Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-xl border border-white/40/30 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Diamond size={18} className="mr-3 text-white" />
              <span className="text-white font-medium tracking-wide">Exclusive Development</span>
              <Sparkles size={18} className="ml-3 text-white" />
            </motion.div>
            
            {/* Main Title with Enhanced Typography */}
            <motion.h1 
              className="text-5xl md:text-7xl font-playfair mb-8 relative"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                Luxury Yacht
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                Charters
              </span>
              
              {/* Decorative underline */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
              variants={fadeInUp}
            >
              We're crafting an unparalleled luxury charter experience that will redefine maritime excellence. 
              <span className="text-white font-medium"> Prepare for something extraordinary.</span>
            </motion.p>
          </motion.div>
          
          {/* Premium Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid gap-8 mb-20 max-w-4xl mx-auto"
          >
            {/* Main Charter Card */}
              <motion.div
                variants={fadeInUp}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              >
              <div className="relative p-10 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-2xl rounded-3xl border border-white/40/20 hover:border-white/40/40 transition-all duration-500 overflow-hidden">
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating crown icon */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Crown className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-playfair text-white mb-6">
                    Exclusive Charter Services
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Our team is meticulously designing charter experiences that will set new standards in luxury maritime travel. Every detail is being crafted to exceed expectations.
                  </p>
                  
                  {/* Premium features list */}
                  <div className="space-y-4">
                    {[
                      "World-class yacht fleet curation",
                      "Bespoke itinerary planning",
                      "White-glove concierge services",
                      "Exclusive destination access"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-xl rounded-full border border-white/40/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Waves className="w-6 h-6 text-white" />
              <span className="text-white font-medium text-lg tracking-wide">
                Luxury Awaits on the Horizon
              </span>
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalComingSoon; 

