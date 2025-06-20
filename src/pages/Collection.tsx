import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Anchor, Ship, Sparkles, Crown, Diamond, Star, ArrowRight, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Shipyard {
  name: string;
  logo: string;
  description: string;
  slug: string;
  founded?: string;
  location?: string;
  specialty?: string;
}

// Enhanced luxury animation variants
const luxuryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const premiumReveal = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
};

const magneticHover = {
  hover: {
    y: -15,
    scale: 1.03,
    rotateY: 5,
    boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const shimmerAnimation = {
  animate: {
    x: ['-100%', '100%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut"
    }
  }
};

const floatingParticle = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 180, 360],
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Collection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Motion values for enhanced effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Enhanced mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const shipyards: Shipyard[] = [
    {
      name: 'EVO Yachts',
      logo: '/plus6.png',
      description: 'Innovation & Contemporary Design',
      slug: 'evo-yachts',
      founded: '2006',
      location: 'Italy',
      specialty: 'Transformable XTension bulwarks technology'
    },
    {
      name: 'MAORI Yachts',
      logo: '/LekkerPage-08.png',
      description: 'Italian Excellence in Luxury Tenders',
      slug: 'maori',
      founded: '2008',
      location: 'Italy',
      specialty: 'Advanced composite construction techniques'
    },
    {
      name: 'Reborn Yachts',
      logo: '/lekker 45-2.jpg',
      description: 'Dutch Craftsmanship & Future-Classic Design',
      slug: 'reborn',
      founded: '2015',
      location: 'Netherlands',
      specialty: 'Completely smooth hull without penetrations'
    },
    {
      name: 'TECHNOHULL',
      logo: '/LEKKER 38-1.jpg',
      description: 'Performance with Absolute Control',
      slug: 'technohull',
      founded: '1995',
      location: 'Monaco',
      specialty: 'Patented Dynastream hull technology'
    },
    {
      name: 'LEKKER Boats',
      logo: '/LekkerPage-08.png',
      description: 'Dutch Design Meets Modern Luxury',
      slug: 'lekker',
      founded: '2018',
      location: 'Netherlands',
      specialty: 'Aluminum construction with complete customization'
    },
    {
      name: 'Windy',
      logo: '/Windy/SR52-Merrick_4415.jpg',
      description: 'Scandinavian excellence in sport cruisers with superior build quality and handling, representing over 55 years of Nordic maritime tradition.',
      slug: 'windy',
      founded: '1966',
      location: 'Norway',
      specialty: 'Nordic design philosophy with performance focus'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Floating luxury particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingParticle}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          >
            <Diamond className="h-3 w-3 text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Dynamic mouse-following gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 50%)`
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Navbar />
      
      {/* Enhanced Hero Section */}
      <motion.div 
        className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAyMGgyME0yMCAyMHYyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Parallax background image - Enhanced visibility */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ 
            backgroundImage: `url(/38bowriderlowres1.jpg)`,
            scale: isLoaded ? 1 : 1.1
          }}
          animate={{ 
            scale: isLoaded ? 1.05 : 1.1,
            opacity: isLoaded ? 1 : 0
          }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Enhanced gradient overlay - Lighter to show photo more */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-900/60 to-navy-950/70" />
        
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
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 relative z-20 pt-20">
          <motion.div 
            variants={luxuryContainer}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            {/* Premium badge */}
            <motion.div 
              variants={premiumReveal}
              className="relative inline-block mb-6"
            >
              <motion.span 
                className="px-6 py-3 bg-gradient-to-r from-white/80 to-white/80 backdrop-blur-md rounded-full text-sm uppercase tracking-wider inline-block font-medium text-navy-950 shadow-[0_5px_15px_rgba(255, 255, 255,0.3)] border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(255, 255, 255,0.4)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <Crown className="inline w-4 h-4 mr-2" />
                Exclusive Shipyard Collection
              </motion.span>
            </motion.div>
            
            {/* Enhanced icon */}
            <motion.div 
              variants={premiumReveal}
              className="mb-6"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/20 backdrop-blur-sm border border-white/30"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                <Ship className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              variants={premiumReveal}
              className="text-4xl md:text-6xl font-bold font-playfair mb-6 relative"
            >
              <motion.span 
                className="inline-block text-white"
                initial={{ y: 50, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
              >
                Shipyard
              </motion.span>
              {" "}
              <motion.span 
                className="inline-block text-white"
                initial={{ y: 50, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
              >
                Collection
              </motion.span>
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 250, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.h1>
            
            <motion.p 
              variants={premiumReveal}
              className="text-lg md:text-xl max-w-3xl mx-auto font-light mb-6 text-white/90 leading-relaxed"
            >
              Discover the world's most prestigious yacht builders, each representing decades of maritime excellence and uncompromising craftsmanship in luxury vessel construction.
            </motion.p>
            
            {/* Enhanced stats */}
            <motion.div 
              variants={premiumReveal}
              className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
            >
              {[
                { number: "8", label: "Premium Shipyards" },
                { number: "50+", label: "Luxury Models" },
                { number: "25+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + (index * 0.2), duration: 0.8 }}
                >
                  <div className="text-2xl md:text-3xl font-playfair text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Shipyards Section */}
      <motion.section 
        ref={sectionRef}
        className="py-32 relative overflow-hidden"
        variants={luxuryContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        {/* Elegant section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-900/80 backdrop-blur-sm" />
        
        {/* Premium accent lines */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={premiumReveal}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block px-6 py-2 bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium mb-6 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.5)"
              }}
            >
              <Crown className="inline w-4 h-4 mr-2" />
              Premium Partners
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-playfair font-semibold text-white mb-6 relative inline-block"
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center bottom' }}
            >
              <motion.span className="inline-block">Exclusive</motion.span>
              {" "}
              <motion.span 
                className="inline-block text-white"
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'center bottom' }}
              >
                Shipyards
              </motion.span>
              <motion.span 
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-white via-white to-white"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              variants={premiumReveal}
            >
              We collaborate with the world's finest shipyards to offer you vessels of exceptional quality, 
              innovative design, and unparalleled craftsmanship that defines maritime luxury.
            </motion.p>
          </motion.div>

          {/* Enhanced Desktop Grid */}
          <motion.div 
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={luxuryContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {shipyards.map((shipyard, index) => (
              <motion.div
                key={shipyard.name}
                variants={premiumReveal}
                whileHover={magneticHover.hover}
                className="group relative cursor-pointer"
              >
                <Link to={`/shipyard/${shipyard.slug}`} className="block">
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800/50 to-navy-900/80 backdrop-blur-md border border-navy-700/30 hover:border-white/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(255, 255, 255,0.2)]"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"
                      variants={shimmerAnimation}
                      animate="animate"
                    />

                    {/* Image container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        src={shipyard.logo} 
                        alt={shipyard.name} 
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                      
                      {/* Bottom overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-playfair font-bold text-white mb-2">{shipyard.name}</h3>
                        <div className="flex items-center text-white text-sm">
                          <Award className="w-4 h-4 mr-2" />
                          <span>{shipyard.specialty}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6">
                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">{shipyard.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white text-sm font-medium">Explore Models</div>
                        <motion.div 
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-navy-900/20 text-white group-hover:bg-navy-900/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Mobile Layout */}
          <div className="md:hidden">
            <div className="space-y-8">
              {shipyards.map((shipyard, index) => (
                <motion.div
                  key={shipyard.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link to={`/shipyard/${shipyard.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-md border border-navy-700/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                      {/* Mobile shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                      
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={shipyard.logo} 
                          alt={shipyard.name}
                          className="absolute inset-0 w-full h-full object-cover" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
                        
                        {/* Mobile specs overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-playfair font-bold text-white mb-1">{shipyard.name}</h3>
                          <div className="flex items-center text-white text-sm">
                            <Star className="w-3.5 h-3.5 mr-1" />
                            <span>{shipyard.specialty}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <p className="text-white/80 text-sm mb-4 leading-relaxed">{shipyard.description}</p>
                        
                        <div className="flex items-center justify-end">
                          <div className="text-white flex items-center text-sm font-medium">
                            <span className="mr-1">View Models</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Collection; 


