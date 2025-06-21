import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { MapPin, Calendar, Users, Star, Phone, Mail, Anchor, Waves, ArrowLeft, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import YachtCard from '@/components/YachtCard';
import { getYachtsByDestination } from '@/data/yachts';

// Using centralized yacht data
const greeceYachts = getYachtsByDestination('greece');



const greeceDestinations = [
  {
    name: 'Mykonos',
    description: 'Cosmopolitan island famous for its vibrant nightlife and pristine beaches.',
    highlights: ['World-class beach clubs', 'Designer boutiques', 'Celebrity hotspot']
  },
  {
    name: 'Santorini',
    description: 'Volcanic island with iconic blue-domed churches and stunning sunsets.',
    highlights: ['Dramatic caldera views', 'Wine tasting tours', 'Romantic dining']
  },
  {
    name: 'Corfu',
    description: 'Emerald island with Venetian architecture and lush landscapes.',
    highlights: ['Historic Old Town', 'Beautiful beaches', 'Cultural heritage']
  },
  {
    name: 'Cyclades Islands',
    description: 'Island hopping paradise with traditional Greek architecture.',
    highlights: ['Authentic Greek culture', 'Crystal clear waters', 'Hidden coves']
  }
];

const Greece: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-32 text-white">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/38 GRAND SPORT-01.jpg)` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Button
                variant="outline"
                onClick={() => navigate('/rental')}
                className="mb-8 bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Button>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl">🇬🇷</span>
                <div>
                  <h1 className="text-5xl md:text-7xl font-playfair text-white">Greece</h1>
                  <p className="text-2xl text-gray-300 mt-2">Legendary Islands of the Aegean</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl"
            >
              Sail through the legendary waters of ancient Greece, where mythology meets modern luxury.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Available Yachts Section */}
      <section id="yachts" className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
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
                Available Yachts in Greece
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the Greek islands aboard our luxury yacht fleet
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {greeceYachts.map((yacht, index) => (
                <motion.div key={yacht.id} variants={fadeInUp}>
                  <YachtCard yacht={yacht} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-navy-900">
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
                Legendary Greek Islands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the most beautiful islands in the Aegean Sea
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {greeceDestinations.map((destination, index) => (
                <motion.div
                  key={destination.name}
                  variants={fadeInUp}
                  className="p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-3xl border border-white/20"
                >
                  <h3 className="text-2xl font-playfair text-white mb-4">{destination.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{destination.description}</p>
                  
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-3">
                        <MapPin size={16} className="text-blue-400" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
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
                Ready for a Greek Odyssey?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our Greece charter specialists for an unforgettable island adventure
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Sailing Season</h3>
                  <p className="text-gray-300">April - October</p>
                  <p className="text-sm text-gray-400 mt-1">Ideal Mediterranean climate</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Euro className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Starting Price</h3>
                  <p className="text-gray-300">€800 half day / €1,100 full day</p>
                  <p className="text-sm text-gray-400 mt-1">From our fleet of 16 luxury yachts</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Request Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-4 text-lg font-semibold"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Greece; 