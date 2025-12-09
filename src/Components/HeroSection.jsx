import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#050A16] overflow-hidden isolate">
      
      {/* 1. Background Graphics & Network Effect */}
      <div className="absolute inset-0 -z-10">
        {/* Deep Blue Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-950/40 via-[#050A16] to-[#050A16]"></div>
        
        {/* Glowing Orb on the right */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        
        {/* SVG Network/Constellation Lines */}
        <svg 
          className="absolute top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 opacity-70 text-cyan-500/40" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
           <g className="animate-[pulse_4s_ease-in-out_infinite]">
            <circle cx="600" cy="200" r="3" fill="currentColor" />
            <circle cx="750" cy="350" r="3" fill="currentColor" />
            <circle cx="500" cy="500" r="3" fill="currentColor" />
            <circle cx="700" cy="600" r="3" fill="currentColor" />
            
            <line x1="600" y1="200" x2="750" y2="350" stroke="currentColor" strokeWidth="0.5" />
            <line x1="750" y1="350" x2="500" y2="500" stroke="currentColor" strokeWidth="0.5" />
            <line x1="750" y1="350" x2="700" y2="600" stroke="currentColor" strokeWidth="0.5" />
            <line x1="600" y1="200" x2="500" y2="500" stroke="currentColor" strokeWidth="0.5" />
            {/* Add more lines/circles as needed for complexity */}
          </g>
        </svg>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-3xl">
          
          {/* Sub-header Icon & Company Name */}
          <div className="flex items-center gap-3 mb-8">
            {/* Using Menu icon as a stylistic element like in the image */}
            <Menu className="w-6 h-6 text-slate-400" />
            <h3 className="text-sm sm:text-base text-slate-300 tracking-[0.2em] uppercase font-semibold">
              MAVIONTECH PRIVATE LIMITED
            </h3>
          </div>

          {/* Main Headline with Outline Effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Let's Innovate Your
            <span className="block mt-2 text-transparent [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:2px_white]">
              Digital Future
            </span>
          </h1>

          {/* Description Text */}
          <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Welcome to Maviontech Private Limited. We are a leading provider of cutting-edge technology solutions, dedicated to transforming businesses through innovation, modern strategies, and global digital excellence.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded transition-colors duration-300 shadow-lg shadow-green-900/30"
            >
              View Our Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;