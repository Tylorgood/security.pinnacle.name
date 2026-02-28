import React from 'react';
import { NextSeo } from 'next-seo'';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="Pinnacle Security | Professional Security Solutions"
        description="Comprehensive security solutions for businesses. Proactive protection, 24/7 monitoring, and expert support."
        openGraph={{
          title: 'Pinnacle Security',
          description: 'Professional security solutions for businesses',
          url: 'https://security.pinnacle.name',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      </NextSeo>
      
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <ProblemSolution />
        <TrustSignals />
        <ServicesGrid />
        <Testimonials />
        <CTAButtons />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default HomePage;