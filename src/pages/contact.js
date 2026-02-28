import React from 'react';
import { NextSeo } from 'next-seo'';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

const ContactPage = () => {
  const ContactSchema = zod.object({
    name: zod.string().min(2, 'Name must be at least 2 characters'),
    email: zod.string().email('Invalid email address'),
    phone: zod.string().min(10, 'Phone number must be at least 10 digits'),
    company: zod.string().optional(),
    service: zod.string(),
    message: zod.string().min(10, 'Message must be at least 10 characters')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit = (data) =u003e {
    console.log('Form submitted: ', data);
    // TODO: Add form submission logic
  };

  return (
    <React.Fragment>
      <NextSeo
        title="Contact Pinnacle Security | Professional Security Solutions"
        description="Get in touch with Pinnacle Security for expert security consultation. 24/7 support and free security assessment available."
      </NextSeo>
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your security posture? Our experts are here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(555) 555-5555"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      <option value="security-assessment">Security Assessment</option>
                      <option value="24-7-monitoring">24/7 Security Monitoring</option>
                      <option value="incident-response">Incident Response Services</option>
                      <option value="compliance-management">Compliance Management</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your security needs..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        {...register('privacy')}
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> &amp; <a href="#" className="text-primary-600 hover:text-primary-700">Terms of Service</a>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          Main Office
                        </h4>
                        <p className="text-gray-600 text-sm">
                          123 Security Drive, Suite 100, San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          Phone
                        </h4>
                        <p className="text-gray-600 text-sm">
                          <a href="tel:4155550123" className="hover:text-primary-600">(415) 555-0123</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          Email
                        </h4>
                        <p className="text-gray-600 text-sm">
                          <a href="mailto:info@pinnacle.security" className="hover:text-primary-600">info@pinnacle.security</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          Emergency Support
                        </h4>
                        <p className="text-gray-600 text-sm">
                          <a href="tel:4155550199" className="hover:text-primary-600">(415) 555-0199</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          Business Hours
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday, 9:00 AM - 6:00 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <p className="text-gray-600 text-sm">
                Businesses Protected
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                99.9%
              </div>
              <p className="text-gray-600 text-sm">
                Threat Prevention Rate
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 text-sm">
                Expert Support
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <p className="text-gray-600 text-sm">
                Satisfaction Guarantee
              </p>
            </div>
          </div>
          
          <CTAButtons />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default ContactPage;