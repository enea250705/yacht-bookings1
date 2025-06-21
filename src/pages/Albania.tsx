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
const albaniaYachts = getYachtsByDestination('albania');

const albaniaDestinations = [
  {
    name: 'Himarë',
    description: 'Premium yacht charter base with crystal-clear waters and stunning coastline.',
    highlights: ['Sunseeker 56 available', 'Fiart 47 (2022) based here', 'Aicon 52 stationed here']
  },
  {
    name: 'Sarandë',
    description: 'Main charter hub with multiple yacht options and easy access to Greek waters.',
    highlights: ['Azimut 46 available', 'Mazarin 72 luxury yacht', 'Sunseeker 58 based here']
  },
  {
    name: 'Orikum',
    description: 'Strategic location near Vlorë with excellent yacht facilities.',
    highlights: ['Ferretti 39 available', 'Aicon 52 stationed here', 'Close to Vlorë Bay']
  },
  {
    name: 'Vlorë & Durrës',
    description: 'Northern Albania yacht bases with day charter options.',
    highlights: ['Verve 43 day charters', 'Azimut 68 luxury option', 'Cranchi 48 available']
  }
];

const Albania: React.FC = () => {
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
          style={{ backgroundImage: `url(/OMEGA 47-02.jpg)` }}
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
                <span className="text-6xl">🇦🇱</span>
                <div>
                  <h1 className="text-5xl md:text-7xl font-playfair text-white">Albania</h1>
                  <p className="text-2xl text-gray-300 mt-2">The Hidden Gem of the Mediterranean</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl"
            >
              Discover Albania's pristine and untouched coastline, often called the "last secret of the Mediterranean."
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
                Available Yachts in Albania
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the Albanian Riviera with our carefully selected yacht fleet
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albaniaYachts.map((yacht, index) => (
                <YachtCard key={yacht.id} yacht={yacht} index={index} />
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
                Our Charter Locations in Albania
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strategic yacht bases along the Albanian coast with our available fleet
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {albaniaDestinations.map((destination, index) => (
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
                Ready to Charter in Albania?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us to plan your perfect yacht charter experience along the Albanian coast.
                Daily rates from €500 to €60,900 per week.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +355 69 205 5440
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-4 text-lg font-semibold"
                  onClick={() => navigate('/contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
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

export default Albania; 