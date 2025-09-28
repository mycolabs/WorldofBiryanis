import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsServices from '../components/ProductsServices';
import PoliciesSection from '../components/PoliciesSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductsServices />
      <PoliciesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;