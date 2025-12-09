import React, { useEffect } from 'react';

// Import all necessary components
import PageHeader from '../Components/PageHeader';
import AboutSection from '../Components/AboutSection';
import FeaturesSection from '../Components/FeaturesSection';
import ServicesGrid from '../Components/ServicesGrid';

const About = () => {
  
  // Page load hone par automatically top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Header Banner */}
      {/* Ye wahi simplified hero section hai jo inner pages ke liye banaya tha */}
      <PageHeader 
        title="About Company" 
        breadcrumbText="About Us" 
      />

      {/* 2. Main Story & Mission */}
      {/* White background */}
      <div className="bg-white">
        <AboutSection />
      </div>

      {/* 3. Core Values / Why Us */}
      {/* Dark Gradient background - Visual break create karega text ke beech mein */}
      <FeaturesSection />

      {/* 4. What We Do */}
      {/* Light background */}
      <div className="bg-slate-50 border-t border-slate-200">
        <ServicesGrid />
      </div>

    </div>
  );
};

export default About;