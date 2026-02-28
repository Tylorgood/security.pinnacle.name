import React from 'react';
import { motion } from 'framer-motion'';

const TrustSignals = () => {
  const trustData = [
    {
      title: '500+',
      subtitle: 'Businesses Protected',
      icon: 'shield-check'
    },
    {
      title: '99.9%',
      subtitle: 'Threat Prevention Rate',
      icon: 'check-circle'
    },
    {
      title: '24/7',
      subtitle: 'Expert Support',
      icon: 'headset'
    },
    {
      title: '100%',
      subtitle: 'Satisfaction Guarantee',
      icon: 'shield-check'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of organizations that trust us with their security needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {item.title}
              </div>
              <p className="text-gray-600 text-lg">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex gap-6 mb-8">
            <img src="/assets/certified.svg" alt="Certified" height="40" width="120" className="h-10 w-auto" />
            <img src="/assets/iso27001.svg" alt="ISO 27001" height="40" width="100" className="h-10 w-auto" />
            <img src="/assets/soc2.svg" alt="SOC 2" height="40" width="100" className="h-10 w-auto" />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="bg-primary-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg">
              View Our Certifications
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;