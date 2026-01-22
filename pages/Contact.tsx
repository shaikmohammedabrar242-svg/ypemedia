
import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const CALENDLY_LINK = "https://calendly.com/ypemedia-in/new-meeting";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white pb-24">
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-blue-950 sm:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Let's discuss how we can help your business grow.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Instant Booking Highlight */}
        <div className="mb-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Want Results Faster?</h2>
            <p className="text-blue-100 text-lg mb-6 md:mb-0 max-w-md">
              Skip the email back-and-forth and book a direct discovery call with our strategist right now.
            </p>
          </div>
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl whitespace-nowrap"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule on Calendly
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-8">Contact Information</h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-xl mr-6">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-gray-600">contact@ypemedia.in</p>
                  <p className="text-sm text-blue-600 mt-1">Average response time: 24h</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-xl mr-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon – Sat: 10:00 AM – 7:00 PM (IST)</p>
                  <p className="text-gray-600 italic text-sm">Serving Global Timezones</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-xl mr-6">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-gray-600">India-based remote team serving clients in USA, UK, Australia, and India.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-50">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Message Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. A growth strategist will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Name</label>
                    <input type="text" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Email</label>
                    <input type="email" required className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Company / Industry</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="e.g. Apex Realty" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Service Interested In</label>
                  <select className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none">
                    <option>Web Design</option>
                    <option>Cold Email Systems</option>
                    <option>Both (Full Growth Package)</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
