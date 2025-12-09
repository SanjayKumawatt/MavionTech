import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  // Contact Info Data
  const contactInfo = [
    {
      type: 'Corporate Office',
      details: 'S.no. 130/4/3/4, Fl-505, Zen Business Center, Wakad, Pune, Pune City, Maharashtra, India, 411057',
      Icon: MapPin,
    },
    {
      type: 'Email Address',
      details: 'support@maviontech.in',
      Icon: Mail,
    },
  ];

  // List of Services/Products for the Checkboxes
  const requirementsList = [
    "Logo Designing",
    "Software Development",
    "SEO & Branding",
    "Domain & Web Hosting",
    "Web Design & Development",
    "Business Emails",
    "Microsoft 365"
  ];

  return (
    // Deep Green background
    <section className="py-20 bg-[#0A3318] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Text and Contact Info */}
          <div className="lg:pr-10">
            <h4 className="text-sm font-bold tracking-widest uppercase text-green-400 mb-2">
              Contact
            </h4>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
              Have a Project in Mind? <br />
              Contact With Us
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Let's discuss your project, collaboration, or any innovative ideas you have. We're eager to hear from you and explore how we can work together to achieve remarkable results.
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <item.Icon className="w-5 h-5 text-green-400" />
                    <h5 className="font-semibold text-white uppercase text-sm">
                      {item.type}
                    </h5>
                  </div>
                  <p className="text-sm text-slate-300">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="p-8 bg-green-900 rounded-lg shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-2">
              Get in Touch
            </h3>
            <p className="text-green-300 mb-6 text-sm">
              Let's start working together get in touch!
            </p>

            <form className="space-y-4">
              {/* Name and Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-white/10 rounded border border-white/20 placeholder-slate-400 focus:ring-green-500 focus:border-green-500 transition text-white" required />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white/10 rounded border border-white/20 placeholder-slate-400 focus:ring-green-500 focus:border-green-500 transition text-white" />
              </div>

              {/* Email and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-white/10 rounded border border-white/20 placeholder-slate-400 focus:ring-green-500 focus:border-green-500 transition text-white" required />
                <input type="text" placeholder="Work Inquiries (Subject)" className="w-full p-3 bg-white/10 rounded border border-white/20 placeholder-slate-400 focus:ring-green-500 focus:border-green-500 transition text-white" />
              </div>

              {/* NEW SECTION: Requirement For (Checkboxes) */}
              <div className="py-2">
                <label className="block text-white font-semibold mb-3 text-sm">Requirement for *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {requirementsList.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                id={`req-${index}`} 
                                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white cursor-pointer"
                            />
                            <label htmlFor={`req-${index}`} className="text-slate-300 text-sm cursor-pointer hover:text-white transition-colors">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
              </div>

              {/* Project Details Textarea */}
              <div>
                <textarea placeholder="Brief project details..." rows="4" className="w-full p-3 bg-white/10 rounded border border-white/20 placeholder-slate-400 focus:ring-green-500 focus:border-green-500 transition text-white" required></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-800 font-semibold rounded hover:bg-slate-100 transition-colors duration-300"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;