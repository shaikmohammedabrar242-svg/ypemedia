
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">YPE MEDIA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 transition flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/services/web-design" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50">Web Design</Link>
                <Link to="/services/cold-email" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50">Cold Email Systems</Link>
              </div>
            </div>
            <Link to="/testimonials" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
            <a 
              href="https://calendly.com/ypemedia-in/new-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-100"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 space-y-4 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium p-2">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium p-2">About</Link>
          <Link to="/services/web-design" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium p-2">Web Design</Link>
          <Link to="/services/cold-email" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium p-2">Cold Email</Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium p-2">Testimonials</Link>
          <a 
            href="https://calendly.com/ypemedia-in/new-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)} 
            className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
          >
            Free Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
