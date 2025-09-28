import React from 'react';
import { Package, Truck, Users, CheckCircle } from 'lucide-react';

const ProductsServices = () => {
  const products = [
    {
      icon: Package,
      title: "Signature Biryani Packs",
      description: "Authentic group-buy biryani made with fragrant basmati rice, farm-fresh vegetables, and premium meats. Cooked with traditional dum methods for rich flavor.",
      features: ["Hyderabadi Chicken Biryani", "Veg Dum Biryani", "Mutton Biryani", "Paneer Tikka Biryani"]
    },
    {
      icon: Truck,
      title: "Community Group Orders",
      description: "We deliver fresh biryani packs to your community in bulk, ensuring affordability and convenience for everyone.",
      features: ["Same-day Delivery", "Hygienic Packaging", "Freshly Cooked in Central Kitchens", "Affordable Group Pricing"]
    },
    {
      icon: Users,
      title: "Seller Partner Program",
      description: "Partner with us to bring World of Biryanis to your apartment, office, or neighborhood. Earn income while sharing authentic biryani experiences.",
      features: ["Exclusive Territory Rights", "Steady Income from Orders", "Strong Word-of-Mouth Growth", "Trusted Community Brand"]
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
            Authentic biryani packs that your community will love, delivered fresh to your doorstep for easy distribution.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
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
              
              <ul className="space-y-3 flex-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{feature}</span>
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
                Fresh, authentic biryani prepared daily in our certified kitchen using premium ingredients and traditional methods
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">2</span>
              </div>
              <h4 className="font-bold text-lg mb-3">We Deliver</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Fresh biryani packs delivered to your location, ready for immediate sale to customers
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-2xl">3</span>
              </div>
              <h4 className="font-bold text-lg mb-3">You Sell</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Distribute authentic biryani to families in your community, building relationships and steady income
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