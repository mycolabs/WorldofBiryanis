import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About World of Biryanis
        </h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Company Description
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                World of Biryanis is a consumer brand operated under the MSME registration of J Dilip Kumar (Bengaluru, Karnataka, India)
              </p>
              <p>
                We specialize in delivering authentic group-buy biryani packs and millet-based rotis to communities across Bengaluru.
              </p>
              <p>
                Our mission is to make healthy, heritage-inspired meals accessible and affordable for every household.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded by passionate entrepreneurs bringing authentic flavors and health-conscious food habits through community group-buying.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="mb-4">
                <strong>Registered Office:</strong><br />
                World of Biryanis<br />
                Bengaluru, Karnataka 560068, India
              </p>
              <p className="mb-4">
                📧 Email: <a href="mailto:support@worldofbiryanis.in" className="text-emerald-600 hover:text-emerald-700">support@worldofbiryanis.in</a>
              </p>
              <p>
                📞 Phone: <a href="tel:+918217463518" className="text-emerald-600 hover:text-emerald-700">+91-8217463518</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
