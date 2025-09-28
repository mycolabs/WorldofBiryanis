import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Refund & Cancellation Policy
        </h1>
        
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Full refund within 7 business days if an order is cancelled before delivery.
          </p>
          <p>
            Partial refunds available for damaged or unsold inventory.
          </p>
          <p>
            Refunds are always processed to the original payment method.
          </p>
          <p>
            If a group deal does not close, all payments will be refunded automatically.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
