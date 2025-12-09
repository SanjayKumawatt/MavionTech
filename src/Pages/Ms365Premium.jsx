import React, { useEffect } from 'react';
import { Check, ShieldAlert, Lock, Monitor, Cloud, Smartphone, Users, Globe, Layout, Layers, ShieldCheck, Zap } from 'lucide-react';

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const Ms365Premium = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Features based on Image image_b16cea.png (Premium Features)
  const features = [
    {
      title: "Increase protection against cyberthreats",
      desc: "Help protect against malware, viruses, phishing attempts, malicious links, and other threats with advanced threat protection.",
      Icon: ShieldAlert
    },
    {
      title: "Add business data protection",
      desc: "Control access to sensitive data using encryption to help keep data from being accidentally shared with unauthorized people.",
      Icon: Lock
    },
    {
      title: "Simplified, multiuser Windows with WVD",
      desc: "With Windows Virtual Desktop support, get multi-session Windows 11 and Office support for Remote Desktop environments.",
      Icon: Layers
    },
    {
      title: "Enjoy Office apps",
      desc: "Get the latest security features and capabilities with fully installed and always up-to-date versions of Outlook, Word, Excel, PowerPoint.",
      Icon: Layout
    },
    {
      title: "1 TB secure cloud storage per user",
      desc: "Sync, share, and edit documents or photos easily across all devices with 1 TB of OneDrive cloud storage.",
      Icon: Cloud
    },
    {
      title: "Intranet and team sites",
      desc: "Inform and engage your teammates and connect people to content, expertise, and processes with team sites through SharePoint.",
      Icon: Globe
    },
    {
      title: "Connection and collaboration",
      desc: "Instantly access everything your employees may need including chat, content, tools, video conference and people with Microsoft Teams.",
      Icon: Users
    },
    {
      title: "Web and mobile app development",
      desc: "Get the fully installed Office apps on multiple PCs, Macs, tablets, and mobile devices (including Windows, iOS, and Android).",
      Icon: Smartphone
    },
    {
      title: "Workflow automation",
      desc: "Build automated workflows between apps and services to get notifications, collect data, synchronize files, and more with Power Automate.",
      Icon: Zap
    }
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Microsoft 365 Premium" 
        breadcrumbText="Products / Microsoft 365 Premium" 
      />

      {/* 2. Hero Section (Product Details & Partner Card) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT: Description */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Microsoft 365 Business Premium
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Microsoft 365 Business Premium brings together best-in-class Office apps and powerful cloud services with comprehensive security that helps protect your business against advanced cyberthreats.
              </p>

              <ul className="space-y-4">
                {[
                  "Stay up to date with the latest versions of Word, Excel, PowerPoint, and more.",
                  "Connect with customers and colleagues using Outlook, Exchange, and Microsoft Teams.",
                  "Manage your files from anywhere with 1 TB of cloud storage on OneDrive per user.",
                  "Defend your business against advanced cyberthreats with sophisticated phishing and ransomware protection.",
                  "Control access to sensitive information using encryption to keep data from being accidentally shared.",
                  "Secure devices that connect to your data and help keep iOS, Android, Windows, and Mac devices safe and up to date."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Partner Card (Updated for Premium) */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-[#0f1d15] text-white p-8 rounded-lg shadow-xl relative overflow-hidden group">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-900/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                
                {/* Logo Area */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-3 h-3 bg-red-500"></div>
                        <div className="w-3 h-3 bg-green-500"></div>
                        <div className="w-3 h-3 bg-blue-500"></div>
                        <div className="w-3 h-3 bg-yellow-500"></div>
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-white">Microsoft</span>
                    <span className="text-xl font-light text-slate-300">Partner</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                    Microsoft 365 Business Premium
                </h3>
                <p className="text-xs text-green-400 mb-6 uppercase tracking-wider">
                    Cloud Service - Commercial
                </p>

                <div className="border-t border-white/10 pt-4">
                    <h4 className="text-sm font-bold mb-2">Advanced Security + Apps & Services:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Intune, Azure Information Protection, Defender for Office 365, Word, Excel, PowerPoint, Outlook, OneNote, Publisher, Access, Teams, OneDrive, Exchange Online.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Features Grid Section */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
                Microsoft 365 Business Premium Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <feature.Icon className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. Why Choose Us Text */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest mb-4">
                Authorized Microsoft Solutions Partner
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why choose Maviontech as your preferred Microsoft 365 Reseller?
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
                Maviontech provides the ultimate solution with Microsoft 365 Business Premium, combining the productivity of Office apps with advanced security features to protect your business data. Our certified experts assist in seamless migration, deployment, and provide 24x7 support to ensure your business remains secure and productive.
            </p>
        </div>
      </div>

      {/* 5. Contact Section (Updated Checkboxes wala) */}
      <ContactSection />

    </div>
  );
};

export default Ms365Premium;