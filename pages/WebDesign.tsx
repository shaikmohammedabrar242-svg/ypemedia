
import React from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, Smartphone, TrendingUp, Search, Layers, Layout, Rocket, ArrowRight } from 'lucide-react';

const WebDesign: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Conversion-Focused Web Design</h1>
          <p className="text-xl text-blue-200">Your website is your 24/7 salesperson. We design websites that build trust, generate leads, and grow revenue.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-8">What We Offer</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Layout className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Custom Business Websites</h4>
                  <p className="text-gray-600">Fully tailored designs that reflect your brand identity and professional standing.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Mobile-Optimized Design</h4>
                  <p className="text-gray-600">Websites that look and perform flawlessly on phones, tablets, and desktops.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <MousePointer2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Landing Pages for Leads</h4>
                  <p className="text-gray-600">High-converting pages designed specifically to capture inquiry details from ads.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800" alt="Web Design Interface" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-blue-600 font-bold text-2xl">₹15,000+</p>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Starting Price</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessCard step="01" title="Strategy" desc="Deep research into your niche and competitor analysis." />
            <ProcessCard step="02" title="Structure" desc="Designing wireframes focused on conversion logic." />
            <ProcessCard step="03" title="Design" desc="Creating a high-end, stunning visual interface." />
            <ProcessCard step="04" title="Launch" desc="Rigorous testing and final performance optimization." />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">Need a Website Quote?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get a custom proposal within 24 hours. No hidden costs. Fast 7-14 day delivery.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl">
            Get Website Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Rocket className="w-64 h-64" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcessCard = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">
    <div className="text-blue-600 text-4xl font-black mb-4 opacity-20">{step}</div>
    <h4 className="text-xl font-bold text-blue-950 mb-3">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default WebDesign;
