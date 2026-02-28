import React from 'react';
import { motion } from 'framer-motion'';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Security Risk Assessment',
      description: 'Comprehensive security audit identifying vulnerabilities and threats.',
      price: 'Starting at $999',
      icon: 'shield-check'
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Continuous surveillance and threat detection.',
      price: 'Starting at $499/month',
      icon: 'headset'
    },
    {
      title: 'Incident Response Services',
      description: 'Rapid breach containment and recovery.',
      price: 'Starting at $2,999',
      icon: 'shield-exclamation'
    },
    {
      title: 'Compliance Management',
      description: 'Regulatory requirement fulfillment and maintenance.',
      price: 'Starting at $1,499',
      icon: 'document-text'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From assessment to monitoring to incident response, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 text-primary-600">
                  <>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-primary-600 font-bold text-lg">
                  {service.price}
                </p>
                <button className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;