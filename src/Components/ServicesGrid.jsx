import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Monitor, 
  Cloud, 
  PenTool, 
  TrendingUp, 
  Server, 
  Briefcase 
} from 'lucide-react';

const servicesData = [
  {
    title: 'Website Designing & Development',
    description: 'We create and develop websites and web applications compatible with Windows, Mac OS X, and BSD/Unix platforms',
    Icon: Monitor,
  },
  {
    title: 'Cloud Technology Services',
    description: 'We resell Google Cloud, Microsoft, and AWS technologies to help businesses grow, providing tailored solutions for our clients.',
    Icon: Cloud,
  },
  {
    title: 'Logo Designing & Branding',
    description: 'Want your brand to captivate clients? We create simple, powerful visuals to ensure your brand’s unique identity. Let us help you.',
    Icon: PenTool,
  },
  {
    title: 'Search Engine Optimization',
    description: 'Search engine optimization helps achieve organic search result listings on internet search engines!',
    Icon: TrendingUp,
  },
  {
    title: 'Domains, Web Hosting & Emails',
    description: 'Our Domain and Web Hosting service ensures your website is reliably accessible and professionally managed.',
    Icon: Server,
  },
  {
    title: 'IT Business Consulting Services',
    description: 'By offering both design and construction services under one contract, we streamline the process and maximize efficiency.',
    Icon: Briefcase,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-green-700 font-bold uppercase tracking-wider text-sm mb-2">
              Our Services
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              We Provide Our Services <br className="hidden lg:block" />
              All Over The World
            </h2>
          </div>
          
          {/* View All Button */}
          <div>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 rounded text-slate-700 font-semibold hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-all duration-300"
            >
              View All Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#022c22] p-8 rounded-sm hover:bg-[#064e3b] transition-colors duration-300 relative overflow-hidden"
            >
              {/* Green Accent Line on Hover (Optional aesthetic touch) */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-green-500 group-hover:h-full transition-all duration-500"></div>

              {/* Icon Box */}
              <div className="w-14 h-14 bg-white/10 rounded flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <service.Icon className="w-7 h-7 text-green-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Decorative line/structure inside card (like image) */}
              <div className="mt-6 w-12 h-1 bg-green-800/50 rounded group-hover:w-full group-hover:bg-green-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;