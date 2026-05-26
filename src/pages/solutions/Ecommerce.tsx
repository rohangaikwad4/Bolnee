import { Link } from 'react-router-dom';
import { ShoppingCart, Package, RotateCcw, Search, ArrowRight, Check, Star } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Smart Product Recommendations',
    desc: 'Analyze browsing behavior and purchase history to suggest the perfect products — just like a top-tier sales associate.',
  },
  {
    icon: Package,
    title: 'Order Tracking',
    desc: 'Let customers check order status, shipping dates, and delivery progress instantly without digging through emails.',
  },
  {
    icon: RotateCcw,
    title: 'Return Management',
    desc: 'Guide customers through returns and exchanges smoothly. Automate RMA generation and reduce friction.',
  },
  {
    icon: Search,
    title: 'Stock Inquiries',
    desc: 'Answer real-time inventory questions — check availability, estimated restock dates, and store-level stock.',
  },
];

export default function Ecommerce() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">E-commerce AI Assistant</h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8">
              Supercharge your online store with an AI that knows your catalog inside out. Drive sales, reduce returns, and
              keep shoppers coming back.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Start Free <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://cal.eu/anas-rabhi/30min" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Boost Sales &amp; Customer Satisfaction</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Turn every visitor into a repeat buyer with intelligent, personalized shopping assistance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="w-5 h-5" /> Start Free
            </Link>
            <a href="https://cal.eu/anas-rabhi/30min" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}