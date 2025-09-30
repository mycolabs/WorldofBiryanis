import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingAndDelivery: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Shipping & Delivery Policy
        </h1>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Introduction</h2>
            <p className="text-lg">
              At World of Biryanis, we are committed to delivering your orders hot and fresh.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Delivery Areas</h2>
            <p className="text-lg">
              Currently, we serve select locations within Bengaluru city.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Delivery Timeframe</h2>
            <p className="text-lg">
              Orders are typically delivered within 60–90 minutes after confirmation.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Shipping Charges</h2>
            <p className="text-lg">
              We offer free delivery for orders above ₹499. For smaller orders, a nominal fee of ₹30 may apply.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Delayed Deliveries</h2>
            <p className="text-lg">
              In case of unexpected delays, our support team will keep you informed.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact</h2>
            <p className="text-lg">
              For any issues, contact: <a href="mailto:support@worldofbiryanis.in" className="text-emerald-600 hover:text-emerald-700 underline">support@worldofbiryanis.in</a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingAndDelivery;
