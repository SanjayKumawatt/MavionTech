import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Server, ShieldCheck, Globe, Zap, Database, Headphones } from 'lucide-react';
import img from '../assets/services/img4.jpg';

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const Hosting = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data (Hosting is Active here)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting', active: true },
    { name: 'Web Design & Development', path: '/services/web-dev' },
  ];

  const features = [
    "99.9% Uptime Guarantee with robust infrastructure",
    "Free SSL Certificates for enhanced security",
    "Easy-to-use Control Panel (cPanel/Plesk)",
    "One-click WordPress & App Installation",
    "Daily Automated Backups to protect your data",
    "24/7 Technical Support from hosting experts"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Domain & Web Hosting" 
        breadcrumbText="Services / Hosting" 
      />

      {/* 2. Main Content Area */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Reliable Hosting & Secure Domains
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Your website's performance depends heavily on where it lives. At Maviontech, we provide lightning-fast, secure, and scalable web hosting solutions tailored for businesses of all sizes. Whether you need a simple shared hosting plan for a startup or a dedicated server for a high-traffic enterprise application, we ensure your online presence is always up and running smoothly.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={img}
                  alt="Server Room and Cloud Hosting" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                High-Performance Features
              </h3>

              {/* Features Grid with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Zap className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Blazing Fast Speed</h4>
                        <p className="text-sm text-slate-600">NVMe SSD storage & optimized servers for instant load times.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Advanced Security</h4>
                        <p className="text-sm text-slate-600">DDoS protection, malware scanning, and free SSL included.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Domain Registration</h4>
                        <p className="text-sm text-slate-600">Register your perfect .com, .in, or .net domain instantly.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Database className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Scalable Resources</h4>
                        <p className="text-sm text-slate-600">Upgrade CPU and RAM easily as your business grows.</p>
                    </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Everything You Need to Succeed Online
              </h3>
              
              {/* Simple List */}
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
                Don't let slow loading speeds or downtime cost you customers. Switch to Maviontech Hosting today and experience the difference in stability and support. We handle the technical side so you can focus on building your business.
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
                
                {/* Green Download Box Removed Here */}

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

export default Hosting;