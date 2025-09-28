import React from 'react';
import { Shield, Lock, FileText, RefreshCw } from 'lucide-react';

const PoliciesSection = () => {
  const policies = [
    {
      icon: RefreshCw,
      title: "Refund & Cancellation Policy",
      content: [
        "Full refund within 7 days if bulk order is cancelled before delivery",
        "Partial refunds available for damaged or unsold inventory",
        "No questions asked return policy for quality issues",
        "Refunds processed within 5-7 business days via original payment method"
      ]
    },
    {
      icon: Lock,
      title: "Privacy Policy",
      content: [
        "We collect only essential information for business operations and payments",
        "Personal data is never shared with third parties without explicit consent",
        "All payment information is encrypted and processed securely via Razorpay",
        "You can request data deletion at any time by contacting our support team"
      ]
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      content: [
        "Partners must maintain product quality and hygiene standards during distribution",
        "Accurate representation of products and pricing to end customers is mandatory",
        "Territory exclusivity is granted based on first-come, first-served basis",
        "Monthly sales targets are recommended but not mandatory for continued partnership"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Shield className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trust & Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clear policies that protect your interests and ensure a smooth, profitable partnership
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-8">
                <div className="bg-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <policy.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {policy.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {policy.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance Badge */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg">
            <Shield className="h-6 w-6 text-emerald-600 mr-3" />
            <span className="font-semibold text-gray-800 mr-2">Razorpay Compliant</span>
            <span className="text-gray-600">• Secure Payments • Transparent Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;