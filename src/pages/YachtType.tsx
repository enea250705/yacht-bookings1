import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Ship, Users, Maximize, Gauge, Star, Award, Sparkles, Anchor, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { shipyardsData } from '@/data/shipyards';
import { motion } from 'framer-motion';

// Simple model interfaces
interface YachtModel {
  id: string;
  name: string;
  length: string;
  thumbnail: string;
  shortDesc: string;
  specs: {
    cabins: string;
    guests: string;
    engines?: string;
    maxSpeed: string;
  };
}

interface ShipyardData {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  models: YachtModel[];
}

const YachtType: React.FC = () => {
  const params = useParams<{ typeId?: string; shipyardId?: string }>();
  const id = params.typeId || params.shipyardId || '';
  const [isLoaded, setIsLoaded] = useState(false);
  const [shipyard, setShipyard] = useState<any>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  // Shimmer animation for luxury effect
  const shimmerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: [0, 0.05, 0], 
      x: [100, 0, -100],
      transition: { 
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
        repeatType: "loop" as const
      } 
    }
  };

  useEffect(() => {
    console.log("Looking for shipyard with ID:", id);
    
    // Simple direct match
    const data = shipyardsData[id];
    
    if (data) {
      console.log(`Found shipyard: ${data.name} with ${data.models.length} models`);
      setShipyard(data);
    } else {
      console.error(`Shipyard not found for ID: ${id}`);
    }
    
    // Trigger animations
    setTimeout(() => setIsLoaded(true), 300);
    
    // Setup Intersection Observer for mobile cards
    const setupIntersectionObserver = () => {
      if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('observed');
              observer.unobserve(entry.target);
            }
          });
        }, options);
        
        // Observe all card wrappers
        const cardWrappers = document.querySelectorAll('.mobile-card-wrapper');
        cardWrappers.forEach(wrapper => {
          observer.observe(wrapper);
        });
      }
    };
    
    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupIntersectionObserver();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (!shipyard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-md border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">Shipyard Not Found</h2>
          <p className="text-white mb-6">We couldn't find the shipyard you're looking for.</p>
          <p className="text-sm text-white/80 mb-4">Debug info: ID searched was "{id}"</p>
          <p className="text-xs text-white/60 mb-6">Available shipyards: {Object.keys(shipyardsData).join(", ")}</p>
          <Link to="/collection" className="inline-block px-6 py-3 bg-white text-navy-900 rounded-lg hover:bg-gray-100 transition-colors">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="relative h-[85vh] min-h-[700px] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${shipyard.image})`,
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: isLoaded ? 1 : 1.1, 
            opacity: isLoaded ? 1 : 0,
            transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] }
          }}
        />
        
        {/* Premium overlay with animated shimmer and grain texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/90">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ 
              x: [100, 0, -100],
              opacity: [0, 0.05, 0], 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              repeatType: "loop"
            }}
          />
        </div>
        
        {/* Animated overlay patterns like About page */}
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
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/collection" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group backdrop-blur-sm bg-navy-900/10 px-4 py-2 rounded-full border border-white/10">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Collection</span>
              </Link>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white/50/20 rounded-full p-3 mb-4">
                <Ship className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">{shipyard.name}</h1>
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8 leading-relaxed text-white/90">
                {shipyard.headline}
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <div className="flex justify-center space-x-6 mt-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 flex flex-col items-center">
                    <Award className="h-6 w-6 text-white mb-2" />
                    <span className="text-white/70 text-sm">Excellence</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 flex flex-col items-center">
                    <Sparkles className="h-6 w-6 text-white mb-2" />
                    <span className="text-white/70 text-sm">Luxury</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 flex flex-col items-center">
                    <Star className="h-6 w-6 text-white mb-2" />
                    <span className="text-white/70 text-sm">Prestige</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0
            }}
          />
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-2xl font-playfair font-semibold text-white mb-3">OVERVIEW</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-white to-white mb-5"></div>
              
              <nav className="space-y-3 mt-8">
                <a href="#about" className="flex items-center text-white hover:text-white transition-colors group">
                  <span className="w-6 h-px bg-white/40 mr-3 group-hover:w-10 transition-all duration-300"></span>
                  <span className="text-base">About {shipyard.name}</span>
                </a>
                <a href="#story" className="flex items-center text-white/70 hover:text-white transition-colors group">
                  <span className="w-6 h-px bg-white/30 mr-3 group-hover:bg-white/40 group-hover:w-10 transition-all duration-300"></span>
                  <span className="text-base">Our Story</span>
                </a>
                <a href="#models" className="flex items-center text-white/70 hover:text-white transition-colors group">
                  <span className="w-6 h-px bg-white/30 mr-3 group-hover:bg-white/40 group-hover:w-10 transition-all duration-300"></span>
                  <span className="text-base">Models</span>
                </a>
              </nav>
            </div>
          </div>
          
          <div className="md:w-2/3 pt-10 md:pt-0">
            <section id="about" className="mb-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">About {shipyard.name}</h3>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  {shipyard.description}
                </p>
              </motion.div>
            </section>
            
            <section id="story" className="mb-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Our Story</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  The {shipyard.name} journey began with a vision to redefine luxury yachting. Our founders sought to create vessels that would not only meet the highest standards of performance and comfort but would also stand as enduring symbols of nautical excellence.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-10">
                  Today, {shipyard.name} stands at the forefront of the industry, recognized worldwide for our commitment to innovation, quality craftsmanship, and distinctive design philosophy. Each yacht we create is a testament to our heritage and our unwavering dedication to exceeding expectations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden shadow-xl border border-white/5 group hover:border-white/50/30 transition-all duration-500">
                    <div className="p-8">
                      <h4 className="text-xl font-playfair font-medium text-white mb-4">Expertise</h4>
                      <p className="text-white/70 mb-6">Innovation & Contemporary Design</p>
                      <p className="text-white/60 text-sm">Years of excellence in yacht manufacturing</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden shadow-xl border border-white/5 group hover:border-white/50/30 transition-all duration-500">
                    <div className="p-8">
                      <h4 className="text-xl font-playfair font-medium text-white mb-4">Specialties</h4>
                      <ul className="text-white/70 space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
                          <span>Innovative designs</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
                          <span>Superior craftsmanship</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
                          <span>Cutting-edge technology</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
                          <span>Personalized service</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
            
            <section id="values" className="mb-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Our Values</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Dreams</h4>
                    <p className="text-white/60">That's where every idea comes from</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Geometry</h4>
                    <p className="text-white/60">Looking for patterns that will shape ideas</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Brains</h4>
                    <p className="text-white/60">To face feasibility issues and find the best solution</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Dust</h4>
                    <p className="text-white/60">Because projects keep being improved in the shipyard</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Balance</h4>
                    <p className="text-white/60">Between form, function and features</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                    <h4 className="text-white group-hover:text-white transition-colors font-medium mb-2">Innovation</h4>
                    <p className="text-white/60">Pushing boundaries to create the exceptional</p>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>

      {/* Enhanced Models Section */}
      <div className="py-24 bg-gradient-to-b from-navy-950 to-navy-900" ref={modelsRef} id="models">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white/50/10 px-4 py-1 rounded-full mb-4">
              <span className="text-white text-sm font-medium tracking-wider uppercase">Our Fleet</span>
            </div>
            <h2 className="text-3xl font-playfair font-semibold text-white mb-5">
              {shipyard.name} Models
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto pt-2">
              Discover our exceptional range of {shipyard.name} models, each crafted with precision and excellence
            </p>
          </motion.div>
          
          {shipyard.id === 'windy' ? (
            /* Special case for Windy - Image Gallery Only */
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img 
                    src="/lekker 45-3.jpg"
                    alt="Scandinavian Excellence"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Scandinavian Excellence</h4>
                    <p className="text-sm opacity-90">Sport Cruisers</p>
                </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img 
                    src="/LEKKER 38-1.jpg"
                    alt="Performance Yachts"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Performance Yachts</h4>
                    <p className="text-sm opacity-90">High Speed</p>
                </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img 
                    src="/LekkerPage-08.png"
                    alt="Luxury Tenders"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Luxury Tenders</h4>
                    <p className="text-sm opacity-90">Day Boats</p>
                </div>
                </motion.div>
              </div>
              <p className="text-center text-white/60 mt-8 mb-12">Additional models coming soon</p>
            </div>
          ) : (
            // Normal case - Models Grid
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {shipyard.models.map((model) => (
                <motion.div 
                  key={model.id}
                  variants={itemVariants}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={model.thumbnail} 
                      alt={model.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-white/70 bg-navy-900/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {shipyard.name}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{model.name}</h3>
                      </div>
                      <div className="bg-white/50/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-white/80 mb-6 line-clamp-2">{model.shortDesc}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white/50/10 flex items-center justify-center mb-2">
                          <Maximize className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white/50 uppercase">Length</span>
                        <span className="text-white font-medium">{model.length.split(' ')[0]}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white/50/10 flex items-center justify-center mb-2">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white/50 uppercase">Guests</span>
                        <span className="text-white font-medium">{model.specs.guests}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white/50/10 flex items-center justify-center mb-2">
                          <Gauge className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white/50 uppercase">Max Speed</span>
                        <span className="text-white font-medium">{model.specs.maxSpeed.split(' ')[0]}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white/50/10 flex items-center justify-center mb-2">
                          <Ship className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white/50 uppercase">Cabins</span>
                        <span className="text-white font-medium">{model.specs.cabins}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/model/${model.id}`}
                      className="block w-full bg-navy-900/10 hover:bg-navy-900/20 backdrop-blur-sm border border-white/10 text-white text-center py-3 rounded-lg transition-colors duration-300 group-hover:border-white/30"
                    >
                      <span className="flex items-center justify-center">
                        View Details
                        <ChevronRight className="ml-2 h-4 w-4 opacity-70" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Enhance Contact/CTA Section */}
      <div className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Interested in {shipyard.name}?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto mb-10">
            Contact our yacht specialists to discuss your requirements or schedule a private viewing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-navy-900 hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl shadow-navy-900/20 hover:shadow-navy-900/30 group"
            >
              <span className="flex items-center justify-center">
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <button className="bg-transparent border-2 border-white/30 text-white hover:bg-navy-900/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default YachtType; 

