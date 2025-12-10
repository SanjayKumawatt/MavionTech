import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, FileText, ArrowRight, Search, Megaphone, TrendingUp, Globe } from 'lucide-react';
import img from "../assets/services/img3.avif";


// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const SeoBranding = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data (SEO & Branding is Active here)
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding', active: true },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev' },
  ];

  const features = [
    "Comprehensive keyword research & competitor analysis",
    "On-page and Off-page optimization strategies",
    "Consistent brand messaging across all channels",
    "Local SEO to dominate your geographical area",
    "Content marketing strategies that align with brand voice",
    "Regular performance tracking and reporting"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="SEO & Branding" 
        breadcrumbText="Services / SEO & Branding" 
      />

      {/* 2. Main Content Area */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Visibility Meets Identity
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                In the crowded digital marketplace, being found is only half the battle; being remembered is the other. At Maviontech, we offer integrated SEO and Branding services that ensure your business doesn't just rank high on search engines but also resonates deeply with your audience. We combine data-driven search strategies with compelling brand storytelling to build authority, trust, and long-term customer loyalty.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={img}
                  alt="SEO and Digital Marketing Strategy" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Holistic Approach
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't treat SEO and Branding as separate silos. A strong brand makes link building easier, and good SEO gets your brand message seen by the right people. Our experts work together to create a unified strategy that amplifies your online presence.
              </p>

              {/* Sub-Services Icons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4 p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Search className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Technical SEO</h4>
                        <p className="text-sm text-slate-600">Optimizing site structure and speed for search crawlers.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Megaphone className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Brand Voice</h4>
                        <p className="text-sm text-slate-600">Developing a consistent tone and message across platforms.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <Globe className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Local Presence</h4>
                        <p className="text-sm text-slate-600">Ranking high for local search queries and Maps.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border border-slate-100 rounded hover:shadow-md transition bg-slate-50">
                    <TrendingUp className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Growth Strategy</h4>
                        <p className="text-sm text-slate-600">Long-term planning for sustainable traffic increase.</p>
                    </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Key Benefits of our Integrated Service
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
                Stop chasing algorithms and start building a brand that people love and search engines trust. Let Maviontech help you establish a dominant and recognizable digital footprint.
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

export default SeoBranding;