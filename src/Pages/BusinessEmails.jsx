import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Mail, Shield, Smartphone, Users, Calendar, Lock } from 'lucide-react';
import img from "../assets/services/img6.webp";

// Components Imports (Capital 'C' as requested)
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const BusinessEmails = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data (Business Emails is Active here)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev' },
    { name: 'Business Emails', path: '/services/business-emails', active: true },
  ];

  const features = [
    "Custom domain email addresses (you@yourcompany.com)",
    "Advanced Spam & Virus Protection",
    "Seamless integration with Outlook, Mobile, and Web",
    "Shared Calendars and Contacts for teams",
    "Huge storage space per mailbox",
    "24/7 Support and 99.9% Uptime Guarantee"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Business Emails" 
        breadcrumbText="Services / Business Emails" 
      />

      {/* 2. Main Content Area */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Professionalize Your Communication
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                In business, first impressions matter. Using a generic email address (like @gmail.com or @yahoo.com) can make your business look unprofessional. At Maviontech, we provide secure, reliable, and professional business email solutions that carry your brand name. Whether you need a simple email hosting service or a full-suite collaboration tool like Google Workspace or Microsoft 365, we have you covered.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={img} 
                  alt="Professional Email Communication" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                More Than Just Email
              </h3>

              {/* Service Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Enterprise Security</h4>
                        <p className="text-sm text-slate-600">Keep your data safe with top-tier encryption and spam filters.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Smartphone className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Mobile Sync</h4>
                        <p className="text-sm text-slate-600">Access your emails, contacts, and calendars on the go.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Team Collaboration</h4>
                        <p className="text-sm text-slate-600">Share files and calendars easily with your team members.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-slate-100 rounded bg-slate-50 hover:shadow-md transition">
                    <Lock className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Data Privacy</h4>
                        <p className="text-sm text-slate-600">Your communication remains private and confidential.</p>
                    </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Switch to Business Email?
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
                Build trust with every email you send. Let Maviontech set up a robust email infrastructure for your organization so you can communicate with confidence.
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

export default BusinessEmails;