import React from 'react';
// Lucide icons ka use kiya hai jo tumne pehle install kar rakhe hain.
import { Package, Globe, ShieldCheck } from 'lucide-react';

// Data ko array mein define kiya hai taaki mapping easy ho jaaye
const featuresData = [
  {
    title: 'Quality Digital Products and services',
    description: 'Premium website development, Graphic, Digital marketing and other business related services available here.',
    Icon: Package, // Lucide Icon for Products/Services
  },
  {
    title: 'Global service',
    description: 'Our service is accessible worldwide, and our customer support continues to offer comprehensive consulting and solutions to clients',
    Icon: Globe, // Lucide Icon for Global Service
  },
  {
    title: 'Assured and Quality Support',
    description: 'We are focused on the digital growth of our each customer and service team and are ready for quick support and regular assistance',
    Icon: ShieldCheck, // Lucide Icon for Support/Assurance
  },
];

const FeaturesSection = () => {
  return (
    // Section ka background dark green-black gradient rakha hai, jaisa image mein hai.
    <section className="bg-gradient-to-br from-[#0A1A14] to-black py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg transition-all duration-300 transform"
            >
              
              {/* Icon Container (Green outline/glow effect) */}
              <div className="mb-6 w-16 h-16 relative">
                {/* Subtle dark green background for the icon area */}
                <div className="absolute inset-0 bg-green-700/10 rounded-xl"></div>
                
                <div className="relative p-3">
                    {/* Icon (White/Light green, large size) */}
                    <feature.Icon className="w-10 h-10 text-white group-hover:text-green-400 transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;