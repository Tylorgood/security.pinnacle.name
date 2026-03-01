import React from 'react';
import { NextSeo } from 'next-seo';

const ServicesPage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Security Services | Pinnacle Security"
        description="Comprehensive security services including assessment, monitoring, incident response, and compliance management."
      </NextSeo>
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From assessment to monitoring to incident response, we've got you covered.
            </p>
          </div>
          
          <ServicesGrid />
          <CTAButtons />
          <Footer />>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ServicesPage;