import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsServices from '../components/ProductsServices';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductsServices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;