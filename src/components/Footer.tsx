import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-3 rounded-xl shadow-lg mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                World of Biryanis
              </h3>
              <p className="text-sm text-gray-400">Nourishing Communities, Empowering Lives</p>
              <p className="text-gray-400 text-xs mt-1">Operated by J Dilip Kumar (Udyam Registered Individual Proprietor)</p>
            </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Making families healthier through heritage grains and empowering local entrepreneurs to build profitable businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/apply" 
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Apply Now
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <a 
                  href="mailto:support@worldofbiryanis.in"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  support@worldofbiryanis.in
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <a 
                  href="tel:+918217463518"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  +91-8217463518
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                Contact Us Page →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 World of Biryanis — Operated by J Dilip Kumar (Udyam Registered Individual Proprietor). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/refund-policy" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Refund Policy
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link 
                to="/shipping-and-delivery" 
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Shipping & Delivery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
