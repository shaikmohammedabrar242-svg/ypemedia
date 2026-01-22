
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Globe, Zap, Users, ShieldCheck, Mail } from 'lucide-react';
import GeminiStrategySection from '../components/GeminiStrategySection';

const Home: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/ypemedia-in/new-meeting";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-blue-950 sm:text-5xl md:text-6xl leading-tight">
                High-Converting Websites & Cold Email Systems That <span className="text-blue-600">Bring Clients</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We help dentists, real estate agents, and growing companies get more leads with stunning websites and personalized cold email outreach—at prices that actually make sense.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition transform hover:-translate-y-1"
                >
                  Get a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link to="/services/web-design" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-full text-blue-900 bg-white hover:bg-gray-50 transition">
                  See Our Services
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-gray-600">
                <span className="flex items-center text-sm font-medium">
                  <Globe className="h-4 w-4 mr-1 text-blue-600" />
                  Serving India, USA, UK & Australia
                </span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform lg:rotate-2 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Marketing Dashboard" 
                  className="rounded-xl shadow-inner"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-xs font-medium uppercase tracking-wider">Systems Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-blue-900">1.5+</span>
              <span className="text-sm text-gray-500 font-medium">Years in Business</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-blue-900">50+</span>
              <span className="text-sm text-gray-500 font-medium">Websites Delivered</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-blue-900">4</span>
              <span className="text-sm text-gray-500 font-medium">Countries Served</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-blue-900">100%</span>
              <span className="text-sm text-gray-500 font-medium">Client Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Why Businesses Choose YPE Media
            </h2>
            <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Built to Convert</h3>
              <p className="text-gray-600">We don’t design “pretty” websites. We design lead-generating machines that turn visitors into inquiries.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <MessageSquare className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">High Reply Rate</h3>
              <p className="text-gray-600">No spam. No templates. We build personalized cold email systems that book meetings consistently.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Agency-level quality—without bloated agency costs. Premium results at affordable pricing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Globe className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Global Delivery</h3>
              <p className="text-gray-600">We work across India, USA, UK, and Australia, adapting strategies for each local market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section (Using Gemini API logic) */}
      <GeminiStrategySection />

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">Featured Services</h2>
              <p className="mt-4 text-xl text-gray-600">Specialized solutions for rapid growth.</p>
            </div>
            <Link to="/services/web-design" className="mt-6 md:mt-0 text-blue-600 font-bold flex items-center group">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group bg-blue-50 rounded-3xl p-1 overflow-hidden transition-transform hover:-translate-y-2">
              <div className="bg-white rounded-[22px] p-8 h-full border border-blue-100 shadow-sm">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" alt="Web Design" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Web Design Services</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Custom Business Websites
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Dentist & Real Estate Specialty
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Conversion-Focused Landing Pages
                  </li>
                </ul>
                <Link to="/services/web-design" className="block text-center py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-blue-50 rounded-3xl p-1 overflow-hidden transition-transform hover:-translate-y-2">
              <div className="bg-white rounded-[22px] p-8 h-full border border-blue-100 shadow-sm">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Cold Email" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Cold Email Systems</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Lead List Building (Verified)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Personalized Email Copywriting
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Full Automation & Inbox Setup
                  </li>
                </ul>
                <Link to="/services/cold-email" className="block text-center py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-950 transition">
                  Explore Outreach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl">What Our Clients Say</h2>
            <div className="mt-4 h-1 w-24 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-blue-100 italic mb-6">“YPE Media redesigned our website and inquiries doubled within 30 days. Extremely professional and affordable.”</p>
              <div>
                <p className="font-bold">Dr. Rahul Mehta</p>
                <p className="text-sm text-blue-400">Dentist, India</p>
              </div>
            </div>
            <div className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-blue-100 italic mb-6">“Their cold email system booked me 11 meetings in the first month. Worth every rupee.”</p>
              <div>
                <p className="font-bold">James Carter</p>
                <p className="text-sm text-blue-400">Real Estate Agent, UK</p>
              </div>
            </div>
            <div className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-blue-100 italic mb-6">“Clean design, clear communication, and real results. Highly recommended for any service business.”</p>
              <div>
                <p className="font-bold">Sarah Williams</p>
                <p className="text-sm text-blue-400">SaaS Founder, USA</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="text-blue-400 font-bold hover:text-white transition underline">Read all 50+ case studies</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <FAQItem 
              question="What industries do you specialize in?" 
              answer="We specialize in Dentists, Real Estate agents, and service-based companies who need predictable leads." 
            />
            <FAQItem 
              question="Do you work with USA & UK clients?" 
              answer="Yes. Over 60% of our client base is international, spanning the USA, UK, and Australia." 
            />
            <FAQItem 
              question="How long does a website take?" 
              answer="Typically 7–14 days depending on the scope and complexity of the project." 
            />
            <FAQItem 
              question="Is cold email legal?" 
              answer="Yes, when done correctly, ethically, and compliantly (GDPR/CAN-SPAM). We follow all best practices." 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-8">Ready to Get More Clients?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book a free consultation today. Limited slots available for this month. Let's build your growth engine.
          </p>
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-full text-xl font-bold hover:bg-blue-50 transition shadow-2xl"
          >
            Book My Strategy Call
          </a>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition font-bold text-blue-950"
      >
        <span>{question}</span>
        <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50 text-gray-600 border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Home;
