import React from 'react';
import { Layers, Users, Send } from 'lucide-react';
import img1 from "../assets/about/img3.avif";
import img2 from "../assets/about/img4.avif";

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Strategic foundation',
      description: 'Our smart professionals analyze ideas from all angles as well-defined ideas form the foundation of every digital initiative we undertake at Maviontech.',
      Icon: Layers, // Icon representing foundation/structure
    },
    {
      title: 'Expert professionals',
      description: 'Close collaboration gives birth to successful projects and helps us appreciate the role teamwork plays in turning ideas into reality.',
      Icon: Users, // Icon for team
    },
    {
      title: 'Working towards goals',
      description: 'Conducting thorough research into your specific market and drawing on the experience of certified professionals, we push the envelope to meet objectives.',
      Icon: Send, // Icon for goals/direction (paper plane style)
    },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div>
            <h4 className="text-green-700 font-bold uppercase tracking-wider text-sm mb-2">
              Why Choose Us
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
              Consulting Solutions For Your Business Development
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* Icon Box */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#022c22] rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300 shadow-md">
                      <feature.Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Overlapping Images */}
          <div className="relative h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0">
            
            {/* Background Image (Large - Top Right) */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-2xl z-10">
              <img 
                src={img1} 
                alt="Business Team Meeting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Foreground Image (Small - Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-2xl border-4 border-white z-20">
              <img 
                src={img2} 
                alt="Consulting Discussion" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Optional Decorative Dot/Circle */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-green-100 rounded-full -z-0 opacity-50 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;