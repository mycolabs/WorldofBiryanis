import React from 'react';
import { Package, Truck, Users, CheckCircle } from 'lucide-react';

const ProductsServices = () => {
  const products = [
    {
      icon: Package,
      title: "Premium Nutrition Packs",
      description: "Ready-to-eat healthy meals made from organic grains, fresh vegetables, and traditional recipes.",
      features: ["Ragi & Jowar Rotis", "Quinoa Bowls", "Millet-based Snacks", "Fresh Vegetable Curries"]
    },
    {
      icon: Truck,
      title: "Bulk Delivery System",
      description: "We deliver fresh meal packs to your location in bulk quantities, perfectly packaged for retail.",
      features: ["Daily Fresh Delivery", "Hygienic Packaging", "Temperature Controlled", "Inventory Management"]
    },
    {
      icon: Users,
      title: "Community Distribution",
      description: "Sell directly to families in your neighborhood, building lasting relationships and steady income.",
      features: ["Local Customer Base", "Repeat Orders", "Word-of-Mouth Growth", "Community Trust"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What You'll Be Selling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium healthy meal packs that your community will love, delivered fresh to your doorstep for easy distribution.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <product.icon className="h-10 w-10 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Business Model Explanation */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How Your Business Works</h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Simple, profitable, and sustainable - here's your path to success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">1</span>
              </div>
              <h4 className="font-bold text-lg mb-3">We Prepare</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Fresh, healthy meals prepared daily in our certified kitchen using premium ingredients
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">2</span>
              </div>
              <h4 className="font-bold text-lg mb-3">We Deliver</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Bulk quantities delivered to your location, ready for immediate sale to customers
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">3</span>
              </div>
              <h4 className="font-bold text-lg mb-3">You Sell</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Distribute to families in your community, building relationships and steady income
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">4</span>
              </div>
              <h4 className="font-bold text-lg mb-3">You Earn</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Keep 40% margin on every sale, with potential for ₹25K+ monthly earnings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;