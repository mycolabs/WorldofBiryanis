import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    area: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('partner_applications')
        .insert([
          {
            full_name: formData.fullName,
            phone_number: formData.phoneNumber,
            email: formData.email,
            area: formData.area,
            experience: '',
            motivation: 'Quick application from contact form',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitMessage('Application submitted successfully! We\'ll contact you within 24 hours.');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        area: ''
      });
    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitMessage('Failed to submit application. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    
    {
      icon: Mail,
      title: "Email Support",
      value: "support@worldofbiryanis.in",
      description: "Get detailed information via email",
      action: "mailto:support@worldofbiryanis.in",
      available: "24/7 response within 4 hours"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our partnership team. We're here to answer your questions and help you launch your healthy food business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Our Partnership Team
            </h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{method.title}</h4>
                    <a 
                      href={method.action}
                      className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg block mb-2 transition-colors"
                    >
                      {method.value}
                    </a>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-sm text-gray-500">{method.available}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Office Address */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 w-14 h-14 rounded-xl flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Our Office</h4>
                  <p className="text-gray-700 mb-1">World of Biryanis Foods Pvt. Ltd.</p>
                  <p className="text-gray-600">Koramangala, Bengaluru</p>
                  <p className="text-gray-600">Karnataka 560034, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Application Form */}
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-6">
              Quick Partnership Application
            </h3>
            <p className="text-emerald-100 mb-8 leading-relaxed">
              Fill out this form and we'll contact you within 24 hours to discuss your partnership opportunity.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitMessage && (
                <div className={`p-4 rounded-xl ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-emerald-100 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-emerald-100 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">
                  Your Area/Community
                </label>
                <input 
                  type="text" 
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="e.g., Koramangala, Bangalore"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-white text-emerald-700 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-emerald-200 text-center leading-relaxed">
                By submitting, you agree to our Terms & Conditions and Privacy Policy. 
                We'll contact you within 24 hours to discuss your partnership.
              </p>
            </form>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-emerald-50 px-6 py-3 rounded-full">
            <Clock className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-emerald-800 font-medium">
              Partnership Support: Monday to Saturday, 9:00 AM - 7:00 PM IST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;