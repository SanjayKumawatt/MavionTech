import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Monitor, Layout, ShoppingCart, Smartphone, Code, Zap } from 'lucide-react';
import img from "../assets/services/img5.avif";

// Components Imports (Capital 'C' as requested)
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const WebDev = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data (Web Design & Development is Active here)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev', active: true },
    { name: 'Business Emails', path: '/services/business-emails' },
  ];

  const features = [
    "Fully Responsive & Mobile-First Design",
    "Custom UI/UX Design tailored to your brand",
    "SEO-Friendly structure for better ranking",
    "Fast loading speeds with optimized code",
    "E-commerce solutions (Shopify, WooCommerce, Custom)",
    "Content Management Systems (WordPress, CMS) integration"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Web Design & Development" 
        breadcrumbText="Services / Web Development" 
      />

      {/* 2. Main Content Area */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Crafting Digital Masterpieces
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Your website is the digital face of your business. At Maviontech, we don't just build websites; we create immersive digital experiences that engage visitors and convert them into loyal customers. Whether you need a stunning corporate website, a high-converting landing page, or a complex e-commerce platform, our team of expert designers and developers delivers pixel-perfect solutions tailored to your specific goals.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={img} 
                  alt="Web Development Code and Design" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Web Solutions
              </h3>

              {/* Service Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Monitor className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Corporate Websites</h4>
                        <p className="text-sm text-slate-600">Professional websites that establish authority and trust.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <ShoppingCart className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">E-Commerce</h4>
                        <p className="text-sm text-slate-600">Secure online stores with seamless payment gateways.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Layout className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">UI/UX Design</h4>
                        <p className="text-sm text-slate-600">User-centric designs that are intuitive and beautiful.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Code className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Custom Development</h4>
                        <p className="text-sm text-slate-600">Tailor-made functionalities using React, Node, and PHP.</p>
                    </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Our Websites Stand Out?
              </h3>
              
              {/* Bullet Points */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]">
                        <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                We believe that a great website is a blend of aesthetics and functionality. By using the latest technologies and design trends, we ensure your website is future-proof, secure, and ready to scale with your business growth.
              </p>
            </div>

            {/* RIGHT COLUMN: Sidebar (Clean - No Download Box) */}
            <div className="lg:w-1/3">
              
              {/* Sidebar Menu */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
                  Our Service
                </h3>
                <div className="space-y-2">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded transition-all duration-300 ${
                        link.active 
                          ? 'bg-[#022c22] text-white shadow-md' 
                          : 'bg-white text-slate-600 hover:bg-green-50 hover:text-green-700 border border-slate-100'
                      }`}
                    >
                      <span className="font-medium text-sm">{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${link.active ? 'text-green-400' : 'text-slate-400'}`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. CTA Section */}
      <ContactSection />

    </div>
  );
};

export default WebDev;