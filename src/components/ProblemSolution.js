import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Security Challenge We Solve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's digital landscape, security threats evolve faster than defenses. Every business faces unique vulnerabilities that require specialized attention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Problem
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Evolving Threats:</strong> New attack vectors emerge daily</li>
                <li><strong>Complex Regulations:</strong> Compliance requirements keep changing</li>
                <li><strong>Resource Constraints:</strong> Limited security expertise available</li>
                <li><strong>Business Impact:</strong> Breaches cost millions in damages</li>
              </ul>
            </motion.div>
          </div>
          
          <div className="group relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Solution
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Proactive Protection:</strong> Stop threats before they materialize</li>
                <li><strong>Customized Security:</strong> Solutions tailored to your needs</li>
                <li><strong>24/7 Monitoring:</strong> Continuous surveillance and rapid response</li>
                <li><strong>Expert Team:</strong> Security professionals with proven track records</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;