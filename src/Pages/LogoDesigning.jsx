import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import img from "../assets/services/img1.png";

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const LogoDesigning = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sidebar Links Data
  const serviceLinks = [
    { name: 'Logo Designing', path: '/services/logo-designing', active: true },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'SEO & Branding', path: '/services/seo-branding' },
    { name: 'Domain & Web Hosting', path: '/services/hosting' },
    { name: 'Web Design & Development', path: '/services/web-dev' },
    { name: 'Business Emails', path: '/services/business-emails' },
  ];

  const features = [
    "Simple yet unique logo designs",
    "Creativity masterminds offering a wide range of packages",
    "Gives a distinct identity to a firm",
    "Entirely unique, original, attractive, colorful logos"
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Logo Designing" 
        breadcrumbText="Services / Logo Designing" 
      />

      {/* 2. Main Content Area (Two Column Layout) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: Main Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Logo Designing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We provide a personalized design that illustrates the goals, thoughts, and personalities of your company. By establishing a separate identity to your firm that indicates classiness, we bring your website into public attention. Our designs are unique, influential and designed through comprehensive thinking. You have a unique identity, exclusive style and visibility for your company.
              </p>

              {/* Middle Image */}
              <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={img}
                  alt="Creative Graphic Design Process" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Solutions We Offer
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We pride ourselves with the quality of our logo designs. We are a team of experienced and creative professionals that enjoy shaping your impressive business identities. Our goal is to have satisfied customers only. We will keep designing until you will have your perfect logo to the satisfactory level. Understanding your business is the key part of our process and it lets us tailor our concept, and design the perfect and unique logo that meets your business needs.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                        <Check className="w-4 h-4 text-green-700 font-bold" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">
                You'll love knowing that you have the most creative and experienced logo designers heading your project and making you free from the burden of managing the logo concept. Our logo design process, experienced designers and knowledgeable design consultants, ensures your design will evoke the emotional response that you overlook to attract the right customers for your business. We stand behind the ideology that a good logo has to do much more than just looking pretty; it has a purpose far beyond function.
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

export default LogoDesigning;