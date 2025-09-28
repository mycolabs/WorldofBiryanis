import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>
        
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            We collect only basic customer details required for order processing and payments.
          </p>
          <p>
            Customer data is never sold or shared with third parties without explicit consent.
          </p>
          <p>
            All payment data is securely processed via Razorpay in compliance with PCI-DSS standards.
          </p>
          <p>
            Customers can request account or data deletion by contacting our support team.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
