import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Brand Logo */}
          <div className="flex justify-center items-center mb-12">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-2xl shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div className="ml-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                NutriVital
              </h1>
              <p className="text-lg text-gray-600 font-medium">Nourishing Communities, Empowering Lives</p>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Start Your 
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Healthy Food</span> Business
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join the nutrition revolution. Sell premium healthy meal packs to your community with zero kitchen investment and full business support.
          </p>

          {/* Primary CTA */}
          <div className="mb-16">
            <Link 
              to="/apply"
              className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              Start Your Business Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">No upfront investment • Launch in 48 hours</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">₹25K+</div>
                <div className="text-gray-600 font-medium">Monthly Earnings</div>
                <div className="text-sm text-gray-500 mt-1">Average partner income</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">48hrs</div>
                <div className="text-gray-600 font-medium">Quick Launch</div>
                <div className="text-sm text-gray-500 mt-1">From signup to selling</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Support Included</div>
                <div className="text-sm text-gray-500 mt-1">Marketing & training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;