import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { MapPin, Calendar, Users, Star, Phone, Mail, Anchor, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const rentalDestinations = [
  {
    id: 'montenegro',
    name: 'Montenegro',
    image: '/tirana.jpeg',
    description: 'Luxury yacht charters from Porto Montenegro and Tivat, offering exclusive experiences along the stunning Montenegrin coast.',
    features: ['Premium Yacht Selection', 'Experienced Crew', 'Luxury Service', 'Porto Montenegro Marina'],
    priceRange: 'From €1,500/day',
    flag: '🇲🇪'
  },
  {
    id: 'croatia',
    name: 'Croatia',
    image: '/CabinLowres-38-1.jpg',
    description: 'Experience the beauty of Croatian islands with our luxury yacht charter services based in Split.',
    features: ['Professional Crew', 'Custom Itineraries', 'Luxury Amenities', 'Split Base Location'],
    priceRange: 'Price on request',
    flag: '🇭🇷'
  },
  {
    id: 'greece',
    name: 'Greece',
    image: '/38 GRAND SPORT-01.jpg',
    description: 'Explore the Greek islands with our premium yacht fleet offering flexible charter options.',
    features: ['Premium Fleet', 'Half-Day from €800', 'Full-Day from €1,100', 'Multiple Island Bases'],
    priceRange: 'From €800/half-day',
    flag: '🇬🇷'
  },
  {
    id: 'albania',
    name: 'Albania',
    image: '/OMEGA 47-02.jpg',
    description: 'Discover the Albanian Riviera with our extensive fleet based in prime locations including Himarë, Sarandë, Orikum, and Vlorë.',
    features: ['Premium Fleet', 'Multiple Base Locations', 'Day & Weekly Charters', 'Luxury Yachts'],
    priceRange: 'From €500/day',
    flag: '🇦🇱'
  }
];

const Rental: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-32 text-white">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/homepage.mp4)` // Using video thumbnail or we can change this
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-xl border border-white/30 mb-8">
                <Anchor size={18} className="mr-3 text-white" />
                <span className="text-white font-medium tracking-wide">Yacht Rental Services</span>
                <Waves size={18} className="ml-3 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-playfair mb-8 text-white"
            >
              Luxury Yacht Rentals
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            >
              Charter premium yachts across the most beautiful destinations in the Adriatic and Mediterranean
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Destinations
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
                Charter Destinations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our premium destinations across the Adriatic and Mediterranean seas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {rentalDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500"
                >

                  
                  <div className="relative z-10 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{destination.flag}</span>
                        <h3 className="text-3xl font-playfair text-white">{destination.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold text-lg">{destination.priceRange}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {destination.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {destination.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <MapPin size={16} className="text-blue-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        onClick={() => navigate(`/rental/${destination.id}`)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => navigate('/contact')}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
                Ready to Charter?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our charter specialists to plan your perfect yacht experience
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+355 69 604 7159</p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">class.av.yachts@gmail.com</p>
                </motion.div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rental; 
