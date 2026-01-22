
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Search, Zap, BarChart3, Users, CheckCircle, Shield, ArrowRight } from 'lucide-react';

const ColdEmail: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-indigo-900 to-blue-950 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">Predictable Lead Generation</h1>
          <p className="text-xl text-blue-200">Cold email isn’t spam when done right. We build complete outbound systems that book meetings on autopilot.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-blue-50 p-6 rounded-2xl text-center">
                 <p className="text-3xl font-bold text-blue-600">30-50</p>
                 <p className="text-sm text-gray-500 uppercase font-bold">Emails / Day</p>
               </div>
               <div className="bg-blue-50 p-6 rounded-2xl text-center">
                 <p className="text-3xl font-bold text-blue-600">100%</p>
                 <p className="text-sm text-gray-500 uppercase font-bold">Compliant</p>
               </div>
               <div className="bg-blue-50 p-6 rounded-2xl text-center">
                 <p className="text-3xl font-bold text-blue-600">2-4</p>
                 <p className="text-sm text-gray-500 uppercase font-bold">Week Results</p>
               </div>
               <div className="bg-blue-50 p-6 rounded-2xl text-center">
                 <p className="text-3xl font-bold text-blue-600">500+</p>
                 <p className="text-sm text-gray-500 uppercase font-bold">Verified Leads</p>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-950 mb-8">Outbound Simplified</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Most businesses fail at cold email because they treat it as a numbers game. We treat it as a psychology game. Every email we send is humanized and tailored to your ideal customer profile (ICP).</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="font-medium">ICP & High-Quality Lead Research</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="font-medium">Technical Email Infrastructure Setup</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="font-medium">Personalized Multi-Touch Sequences</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="font-medium">Continuous Automation & A/B Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Why Our Systems Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Shield className="h-10 w-10 text-blue-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">No Spam Filters</h4>
              <p className="text-gray-600">We use custom tracking domains and warm-up protocols to ensure your emails hit the primary inbox, not the junk folder.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Users className="h-10 w-10 text-blue-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">Hyper-Personalization</h4>
              <p className="text-gray-600">We research individual prospects to ensure the first line of every email is relevant and non-robotic.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">Full Automation</h4>
              <p className="text-gray-600">Wake up to positive replies in your inbox while we handle all the tedious manual work behind the scenes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-indigo-900 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl">
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">Scale Your Outreach</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Systems starting at just ₹20,000 / $249. Let's fill your calendar with qualified meetings.</p>
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white text-indigo-900 rounded-full font-bold text-xl hover:bg-gray-100 transition">
            Start Outreach System <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ColdEmail;
