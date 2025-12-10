import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, FileText, ArrowRight, Code, Smartphone, Database } from 'lucide-react';
import img from "../assets/services/img2.avif";

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const SoftwareDevelopment = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data (Software Development is Active here)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development', active: true },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev' },
  ];

  const features = [
    "Custom Software Solutions tailored to your business needs",
    "Scalable & Secure Enterprise Applications",
    "Cross-platform Mobile App Development (iOS & Android)",
    "Agile Development Methodology for faster delivery",
    "Seamless API Integration & Modern Tech Stack",
    "Dedicated Support & Maintenance after launch"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Software Development" 
        breadcrumbText="Services / Software Development" 
      />

      {/* 2. Main Content Area */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Custom Software Development
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                In today's fast-paced digital world, off-the-shelf software doesn't always cut it. At Maviontech, we specialize in designing and developing custom software solutions that drive efficiency, innovation, and growth for your business. Whether you are a startup looking for an MVP or an enterprise needing a complex automation system, our expert developers craft robust, scalable, and secure applications tailored specifically to your workflows.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Software Development Team" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Development Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't just write code; we build digital assets. Our team leverages the latest technologies like React, Node.js, Python, and Cloud Computing to deliver high-performance software. From initial consultation and architecture design to coding, testing, and deployment, we ensure a transparent process at every step.
              </p>

              {/* Sub-Services Icons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Code className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-bold text-slate-800 mb-1">Web Apps</h4>
                    <p className="text-xs text-slate-500">Responsive & dynamic web applications.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Smartphone className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-bold text-slate-800 mb-1">Mobile Apps</h4>
                    <p className="text-xs text-slate-500">Native & Hybrid mobile solutions.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Database className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-bold text-slate-800 mb-1">Enterprise</h4>
                    <p className="text-xs text-slate-500">Large scale management systems.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Choose Our Development Services?
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
                Partner with Maviontech to transform your ideas into reality. We focus on code quality, user experience (UX), and long-term maintainability so that your software continues to deliver value for years to come.
              </p>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
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

export default SoftwareDevelopment;