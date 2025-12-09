import React, { useEffect } from 'react';
import { Check, Calendar, Cloud, MessageCircle, Globe, Monitor, Smartphone, Layout, Users, Search } from 'lucide-react';

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const Ms365Standard = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Features specific to Standard Plan (Desktop Apps included)
  const features = [
    {
      title: "Email & Calendars",
      desc: "Host email with a 50 GB mailbox and custom email domain. Use business-class email on mobile devices, tablets, desktops, and the web.",
      Icon: Calendar
    },
    {
      title: "Web and mobile app development",
      desc: "Quickly build custom business apps for web and mobile with Power Apps. Choose from templates or start from scratch. No coding required.",
      Icon: Smartphone
    },
    {
      title: "Connection and collaboration",
      desc: "Instantly access everything your employees may need including chat, content, tools, video conference and people with Microsoft Teams.",
      Icon: MessageCircle
    },
    {
      title: "Works across multiple devices",
      desc: "Get fully installed Office apps on multiple PCs, Macs, tablets, and mobile devices (including Windows, iOS, and Android).",
      Icon: Layout
    },
    {
      title: "1 TB secure cloud storage per user",
      desc: "Sync, share, and edit documents or photos easily across all devices with 1 TB of OneDrive cloud storage.",
      Icon: Cloud
    },
    {
      title: "Intelligent search and discovery",
      desc: "Discover content and expertise across your organization with intelligent search across all your data sources including SharePoint, Delve, and Office apps.",
      Icon: Search
    },
    {
      title: "Monthly updates",
      desc: "Get the latest security features and capabilities with fully installed and always up-to-date versions of Outlook, Word, Excel, PowerPoint, OneNote, and Access/Publisher (PC only).",
      Icon: Monitor
    },
    {
      title: "Communication and work management",
      desc: "Microsoft Kaizala makes it easy to connect and coordinate with your Firstline workers, partners, and customers – using a simple-to-use chat interface.",
      Icon: Users
    },
    {
      title: "Intranet and team sites",
      desc: "Inform and engage your teammates and connect people to content, expertise, and processes with team sites through SharePoint.",
      Icon: Globe
    }
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Microsoft 365 Standard" 
        breadcrumbText="Products / Microsoft 365 Standard" 
      />

      {/* 2. Hero Section (Product Details & Partner Card) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT: Description */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Microsoft 365 Business Standard
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                With Microsoft 365 Business Standard plan, increase your impact and expand your business reach with Office powered by the cloud—must-have tools for business today.
              </p>

              <ul className="space-y-4">
                {[
                  "Get install-able desktop versions of Office apps: Outlook, Word, Excel, PowerPoint, OneNote (plus Access and Publisher for PC only).",
                  "Host Email with a 50 GB mailbox and custom email domain.",
                  "Use remote working tools & Create a hub for teamwork with Microsoft Teams.",
                  "Store and share files with 1 TB of OneDrive cloud storage per user.",
                  "Use one license to cover fully installed, Office apps on five mobile devices, five tablets, and five PCs or Macs per user.",
                  "Get help anytime with around-the-clock phone and web support from Microsoft."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Partner Card (Updated for Standard) */}
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
                    Microsoft 365 Business Standard
                </h3>
                <p className="text-xs text-green-400 mb-6 uppercase tracking-wider">
                    Cloud Service - Commercial
                </p>

                <div className="border-t border-white/10 pt-4">
                    <h4 className="text-sm font-bold mb-2">Web, mobile and Desktop apps and services:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Outlook, Microsoft OneNote, Microsoft Publisher, Microsoft Access, Microsoft SharePoint, Microsoft Teams, Microsoft OneDrive for Business, Exchange Online.
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
                Microsoft 365 Business Standard Features
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
                Maviontech is one of the best Office 365 Reseller in India. We offer Microsoft 365 Business Standard that helps you work better in teams. Moreover, it lets you collaborate in real time with Microsoft Teams, Outlook, OneDrive, and many other related products of Microsoft. You do not have to update the tools frequently, as Microsoft 365 Business tools update automatically and keep your data safe.
            </p>
        </div>
      </div>

      {/* 5. Contact Section (Updated Checkboxes) */}
      <ContactSection />

    </div>
  );
};

export default Ms365Standard;