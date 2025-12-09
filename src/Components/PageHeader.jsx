import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import img from "../assets/hero.jpg";

const PageHeader = ({ title, breadcrumbText }) => {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Background Graphics (Optional Subtle Noise) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="inline-flex items-center justify-center gap-2 text-slate-300 text-sm font-medium bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          <Link to="/" className="hover:text-green-400 transition-colors duration-200">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-green-400">{breadcrumbText || title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
