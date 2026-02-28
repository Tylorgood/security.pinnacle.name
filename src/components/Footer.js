import React from 'react';
import { motion } from 'framer-motion'';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              Pinnacle Security
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for comprehensive security solutions.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-300">
                <>
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-300">
                <>
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-300">
                <>
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Security Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24/7 Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Incident Response</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Management</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>
            <div className="text-gray-400 text-sm space-y-2">
              <div>
                <span className="font-medium">Email:</span> 
                <a href="mailto:info@pinnacle.security" className="hover:text-white transition-colors">info@pinnacle.security</a>
              </div>
              <div>
                <span className="font-medium">Phone:</span> 
                <a href="tel:4155550123" className="hover:text-white transition-colors">(415) 555-0123</a>
              </div>
              <div>
                <span className="font-medium">Address:</span> 
                <span className="hover:text-white transition-colors">123 Security Drive, Suite 100, San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Pinnacle Security. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
            </div>
          </div>
        </div>
      </div>
    <footer>
  );
};

export default Footer;