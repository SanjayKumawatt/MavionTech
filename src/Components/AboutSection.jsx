import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../assets/about/img1.avif";
import img2 from "../assets/about/img2.avif";

const AboutSection = () => {
  // Tabs state manage karne ke liye
  const [activeTab, setActiveTab] = useState('mission');

  // Tab ka content content yahan define kiya hai
  const tabContent = {
    mission: "Our mission is to deliver optimal solutions effectively with top quality and best services at affordable prices. Empowering Enterprises, Mid Size And Small Business To Deliver High-Performance With Smart And Innovative IT Solutions. We strive to be a partner of choice in our focused area of expertise by providing innovative, faster, reliable and profitable solutions.",
    vision: "Our vision is to become a global leader in digital transformation, fostering a culture of innovation and creativity. We aim to bridge the gap between complex technology and business growth, ensuring that every client, regardless of size, has access to world-class digital tools to succeed in the modern era.",
    insights: "We believe in data-driven strategies and continuous learning. By staying ahead of market trends and technological advancements, we provide our clients with actionable insights that not only solve current challenges but also future-proof their businesses against the rapidly evolving digital landscape."
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Main Image */}
          <div className="relative">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
              {/* Placeholder image - Replace src with your actual image */}
              <img 
                src={img1} 
                alt="Digital Agency Workspace" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Note: Green Stats Box removed as per request for Startup context */}
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="flex flex-col justify-center">
            
            {/* Small Header */}
            <h4 className="text-green-600 font-bold text-sm tracking-widest uppercase mb-2">
              Welcome to Maviontech Private Limited
            </h4>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              A Digital Startup that delivers guaranteed business growth
            </h2>

            {/* Secondary Small Image (Passion Never Fails) */}
            <div className="mb-8 w-full h-48 rounded-lg overflow-hidden relative shadow-lg group">
               <img 
                 src={img2}
                 alt="Tech Structure" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
               />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider border-2 border-white/30 p-4">
                    Passion <span className="text-green-500">Never Fails</span>
                  </h3>
               </div>
            </div>

            {/* TABS HEADER */}
            <div className="flex border-b border-gray-200 mb-6">
              {['mission', 'vision', 'insights'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-4 text-sm sm:text-base font-semibold transition-colors duration-300 capitalize relative ${
                    activeTab === tab 
                      ? 'text-green-700' 
                      : 'text-gray-500 hover:text-green-600'
                  }`}
                >
                  {tab === 'mission' ? 'Our Mission' : tab === 'vision' ? 'Our Vision' : 'Insights'}
                  
                  {/* Active Tab Indicator Line */}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-all duration-300"></span>
                  )}
                </button>
              ))}
            </div>

            {/* TABS CONTENT */}
            <div className="mb-8 min-h-[120px]">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg animate-fadeIn">
                {tabContent[activeTab]}
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;