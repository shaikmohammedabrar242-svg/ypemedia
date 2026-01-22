
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Linkedin, Instagram, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Rocket className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight">YPE MEDIA</span>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed">
              High-converting websites and cold email systems that bring clients — not just traffic. Serving India, USA, UK & Australia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/sheikhabrar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ypemedia.in?igsh=MWJjNWVzNTVlNzd4aw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link to="/services/web-design" className="hover:text-blue-400">Web Design</Link></li>
              <li><Link to="/services/cold-email" className="hover:text-blue-400">Cold Email Systems</Link></li>
              <li><Link to="/services/web-design" className="hover:text-blue-400">Landing Pages</Link></li>
              <li><Link to="/services/cold-email" className="hover:text-blue-400">Lead Generation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@ypemedia.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-400" />
                <span>ypemedia.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>India (Serving Global)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} YPE Media. Founded by Sheikh Abrar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
