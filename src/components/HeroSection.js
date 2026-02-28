import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Your Security, Our Mission
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl text-primary-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Protecting businesses and individuals with uncompromising security solutions that enable growth and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="bg-white text-primary-900 font-bold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Security Assessment
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="h-12 w-full fill-current text-primary-800" viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-3.66,151.88,16.23c49.66,23.55,98.02,45.23,112.33,30.79c14.13-14.61,17.14-35.19,2.87-53.61c-6.14-7.92-20.83-10.91-37.33-4.9C416,72.68,343.22,65.59,321.39,56.44Z"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;