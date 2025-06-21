import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { MapPin, Calendar, Users, Star, Phone, Mail, Anchor, Waves, ArrowLeft, Clock, Euro, Fuel, Gauge, Ship, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getYachtById, Yacht } from '@/data/yachts';

const YachtDetail: React.FC = () => {
  const { yachtId } = useParams();
  const navigate = useNavigate();
  const [yacht, setYacht] = useState<Yacht | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find yacht by ID from all destinations
    if (yachtId) {
      const foundYacht = getYachtById(yachtId);
      setYacht(foundYacht || null);
    }
  }, [yachtId]);

  if (!yacht) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl mb-4">Yacht not found</h2>
          <Button onClick={() => navigate('/rental')}>Back to Rentals</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-32 text-white">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${yacht.image})` }}
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
                onClick={() => navigate(`/rental/${yacht.destination}`)}
                className="mb-8 bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {yacht.destination.charAt(0).toUpperCase() + yacht.destination.slice(1)}
              </Button>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                  <Ship className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-playfair text-white mb-2">
                    {yacht.name}
                  </h1>
                  <p className="text-2xl text-gray-300">
                    {yacht.model} • {yacht.year}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <Euro className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Price</h3>
                <p className="text-gray-300">
                  {yacht.price === 'Price on request' || yacht.price === 'On request' 
                    ? 'Price on request' 
                    : `€${yacht.price}${yacht.priceNote || '/day'}`
                  }
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Capacity</h3>
                <p className="text-gray-300">{yacht.capacity || yacht.guests}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <Anchor className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">Length</h3>
                <p className="text-gray-300">{yacht.length}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
                Detailed Specifications
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Specs */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-playfair text-white mb-6">Technical Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Model</span>
                    <span className="text-white font-semibold">{yacht.model}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Year Built</span>
                    <span className="text-white font-semibold">{yacht.year}</span>
                  </div>
                  
                  {yacht.refit && yacht.refit !== '—' && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Last Refit</span>
                      <span className="text-white font-semibold">{yacht.refit}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Length</span>
                    <span className="text-white font-semibold">{yacht.length}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Speed</span>
                    <span className="text-white font-semibold">{yacht.speed}</span>
                  </div>
                  
                  {yacht.enginePower && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Engine Power</span>
                      <span className="text-white font-semibold">{yacht.enginePower}</span>
                    </div>
                  )}
                  
                  {yacht.fuelConsumption && yacht.fuelConsumption !== 'N/A' && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Fuel Consumption</span>
                      <span className="text-white font-semibold">{yacht.fuelConsumption}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Accommodation */}
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-playfair text-white mb-6">Accommodation</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Guest Capacity</span>
                    <span className="text-white font-semibold">{yacht.capacity || yacht.guests}</span>
                  </div>
                  
                  {yacht.cabins && yacht.cabins !== '—' && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Cabins</span>
                      <span className="text-white font-semibold">{yacht.cabins}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Crew</span>
                    <span className="text-white font-semibold">{yacht.crew}</span>
                  </div>
                  
                  {yacht.type && (
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300">Yacht Type</span>
                      <span className="text-white font-semibold">{yacht.type}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Location</span>
                    <span className="text-white font-semibold">{yacht.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features */}
            {yacht.features && yacht.features.length > 0 && (
              <motion.div variants={fadeInUp} className="mt-12 bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-playfair text-white mb-6">Features & Amenities</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {yacht.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
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
                Book {yacht.name}
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us to charter this exceptional yacht
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Request Charter Quote
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

export default YachtDetail;