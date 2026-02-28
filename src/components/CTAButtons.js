import React from 'react';
import { motion } from 'framer-motion'';

const CTAButtons = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Security Posture?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Let's start with a free security assessment to identify your vulnerabilities and create a roadmap to protection.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg mr-4">
              Get Free Security Assessment
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAButtons;