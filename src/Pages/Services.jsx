import React, { useEffect } from 'react';

// Components Imports
import PageHeader from '../Components/PageHeader';
import ServicesGrid from '../Components/ServicesGrid';
import ContactSection from '../Components/ContactSection';

const Services = () => {
  
  // Page open hote hi top par scroll ho jayega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Header: Professional Title */}
      <PageHeader 
        title="Our Expertise" 
        breadcrumbText="Services" 
      />

      {/* 2. Main Content: Saari Services yahan dikhengi */}
      {/* White background rakha hai taaki reading experience clean rahe */}
      <div className="bg-white pb-10">
        <ServicesGrid />
      </div>

      {/* 3. CTA: Seedha Contact Form */}
      {/* Koi idhar udhar ki baat nahi, seedha 'Get in Touch' */}
      <ContactSection />

    </div>
  );
};

export default Services;