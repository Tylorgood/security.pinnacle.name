import React from 'react';
import { motion } from 'framer-motion'';

const Testimonials = () => {
  const testimonials = [
    {
      quote: '"Pinnacle Security transformed our security posture. We sleep better knowing our data is protected."',
      author: 'Sarah Chen, CTO at TechStart',
      company: 'Technology Company'
    },
    {
      quote: '"Their proactive approach prevented what could have been a catastrophic breach."',
      author: 'Michael Rodriguez, CEO at FinSecure',
      company: 'Financial Services'
    },
    {
      quote: '"The 24/7 monitoring caught a sophisticated phishing attempt before it could cause damage."',
      author: 'Emily Watson, IT Director at HealthPlus',
      company: 'Healthcare Provider'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary-600 mb-4 text-lg italic">
                "{testimonial.quote}"
              </div>
              
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;