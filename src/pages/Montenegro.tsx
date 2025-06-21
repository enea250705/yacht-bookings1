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
const montenegroYachts = getYachtsByDestination('montenegro');



const montenegroDestinations = [
  {
    name: 'Porto Montenegro',
    description: 'Luxury marina with world-class facilities and stunning mountain views.',
    highlights: ['5-star marina', 'Designer boutiques', 'Gourmet restaurants']
  },
  {
    name: 'Kotor Bay',
    description: 'UNESCO World Heritage site with dramatic fjord-like scenery.',
    highlights: ['Medieval towns', 'Crystal clear waters', 'Historic architecture']
  },
  {
    name: 'Budva Riviera',
    description: 'Vibrant coastal area with beautiful beaches and nightlife.',
    highlights: ['Sandy beaches', 'Beach clubs', 'Water sports']
  },
  {
    name: 'Sveti Stefan',
    description: 'Iconic island resort with luxury accommodations.',
    highlights: ['Exclusive island', 'Luxury resort', 'Photo opportunities']
  }
];

const Montenegro: React.FC = () => {
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
          style={{ backgroundImage: `url(/tirana.jpeg)` }}
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
                <span className="text-6xl">🇲🇪</span>
                <div>
                  <h1 className="text-5xl md:text-7xl font-playfair text-white">Montenegro</h1>
                  <p className="text-2xl text-gray-300 mt-2">Yacht Charters in the Adriatic Jewel</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl"
            >
              Discover Montenegro's pristine Adriatic coastline where dramatic mountains meet crystal-clear waters.
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
                Available Yachts in Montenegro
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our premium fleet of luxury yachts perfect for exploring Montenegro's coastline
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {montenegroYachts.map((yacht, index) => (
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
                Must-Visit Destinations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore Montenegro's most spectacular coastal destinations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {montenegroDestinations.map((destination, index) => (
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
                Ready to Charter in Montenegro?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our Montenegro charter specialists to plan your perfect Adriatic adventure
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Season</h3>
                  <p className="text-gray-300">May - October</p>
                  <p className="text-sm text-gray-400 mt-1">Best weather conditions</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Euro className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Starting Price</h3>
                  <p className="text-gray-300">€1,500/day - €76,800/week</p>
                  <p className="text-sm text-gray-400 mt-1">Catamaran to mega yacht collection</p>
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

export default Montenegro; 