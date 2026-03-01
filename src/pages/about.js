import React from 'react';
import { NextSeo } from 'next-seo';

const AboutPage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="About Pinnacle Security | Professional Security Solutions"
        description="Learn about our mission, values, and team. Discover why businesses trust us with their security needs."
      </NextSeo>
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About Pinnacle Security
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is to create a safer digital world by providing uncompromising protection for businesses and individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2020, Pinnacle Security was born from a simple belief: security shouldn't be a barrier to innovation—it should be the foundation that enables it.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We started as a small team of security professionals who saw businesses struggling with complex security challenges. Today, we're a trusted partner to hundreds of organizations across industries.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      2020
                    </div>
                    <p className="text-gray-600 text-sm">
                      Founded
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      500+
                    </div>
                    <p className="text-gray-600 text-sm">
                      Businesses Protected
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      99.9%
                    </div>
                    <p className="text-gray-600 text-sm">
                      Threat Prevention Rate
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-bold text-primary-600 mb-2">
                      Trust-First Approach
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We build relationships based on transparency and integrity. No fear-mongering, just honest security advice.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-bold text-primary-600 mb-2">
                      Technical Excellence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We stay ahead of the curve with cutting-edge security solutions and continuous team training.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-bold text-primary-600 mb-2">
                      Client-Centric Philosophy
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your success is our success. We tailor solutions to your specific needs and provide dedicated support.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-bold text-primary-600 mb-2">
                      Proactive Protection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We believe in preventing threats before they materialize, not just responding to them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Team
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">CEO</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        Sarah Chen
                      </h4>
                      <p className="text-gray-600 text-sm">
                        15+ years in cybersecurity leadership
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">CTO</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        Michael Rodriguez
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Former government security architect
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">CISO</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        Emily Watson
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Enterprise security veteran
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Certifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <img src="/assets/iso27001.svg" alt="ISO 27001" height="40" width="100" className="h-10 w-auto mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      ISO 27001
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <img src="/assets/soc2.svg" alt="SOC 2" height="40" width="100" className="h-10 w-auto mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      SOC 2 Type II
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <img src="/assets/hipaa.svg" alt="HIPAA" height="40" width="100" className="h-10 w-auto mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      HIPAA Compliance
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <img src="/assets/pci.svg" alt="PCI" height="40" width="100" className="h-10 w-auto mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      PCI DSS
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <img src="/assets/cybersecurity.svg" alt="Cybersecurity" height="40" width="100" className="h-10 w-auto mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">
                      Cybersecurity Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CTAButtons />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutPage;