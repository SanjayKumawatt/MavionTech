import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Quick Links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // ✅ Updated Service Links (YOUR EXACT LIST)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev' },
    { name: 'Business Emails', path: '/services/business-emails' },
  ];

  return (
    <footer className="bg-[#022c22] text-slate-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* 1. Logo */}
          <div>
            <div className="flex flex-col mb-4 cursor-pointer">
              <h1 className="text-3xl font-bold tracking-tighter text-white">
                <span className="text-green-500">MAVION</span>TECH
              </h1>
              <span className="text-xs tracking-widest text-slate-400 -mt-1 uppercase">Private Limited</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering your business with innovative technology solutions and expert consulting for guaranteed digital growth.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-green-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services — UPDATED */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-green-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-green-500" />
                <p className="text-sm">
                  S.no. 130/4/3/4, Fl-505, Zen Business Center, Wakad, Pune, Pune City, Maharashtra, India, 411057
                </p>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-green-500" />
                <a href="mailto:support@maviontech.in" className="text-sm hover:text-green-500 transition-colors duration-200">
                  support@maviontech.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} MAVIONTECH PRIVATE LIMITED. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
