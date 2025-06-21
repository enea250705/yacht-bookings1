import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="white-underline">Contact</span> Us
        </h2>
        <p className="section-subtitle text-center">
          Have questions or ready to book? Reach out to our team for assistance.
        </p>
        
        <div className="flex flex-col items-center mt-12 max-w-md mx-auto">
          {/* Contact Information */}
          <div className="w-full">
            <div className="bg-hotel-navy text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-playfair mb-4 text-center">Get in Touch</h3>
              <p className="mb-6 text-center">Our dedicated team is ready to assist you with any inquiries or special requests you may have.</p>
              
              <div className="flex items-center justify-center mb-4">
                <Mail className="mr-3 text-white" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">class.av.yachts@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <Phone className="mr-3 text-white" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+355 69 604 7159</p>
                </div>
              </div>
            </div>
            
            <div className="bg-hotel-light-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair mb-4 text-center">Follow Us</h3>
              <p className="text-gray-600 mb-6 text-center">Stay updated with our latest offers and news.</p>
              
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/class_yachts_/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-navy-900 hover:bg-hotel-navy hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

