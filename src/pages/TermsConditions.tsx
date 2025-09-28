import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>
        
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            By placing an order with World of Biryanis, you agree to participate fairly in the group-buy model.
          </p>
          <p>
            Accurate information must be provided during registration and checkout.
          </p>
          <p>
            Products must not be resold without prior written approval.
          </p>
          <p>
            World of Biryanis reserves the right to modify terms, refund rules, and pricing policies as required by law.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
