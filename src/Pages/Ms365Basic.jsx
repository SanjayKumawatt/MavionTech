import React, { useEffect } from 'react';
import { Check, Calendar, Cloud, MessageCircle, List, Globe, Lock, ShieldCheck } from 'lucide-react';

// Components
import PageHeader from '../Components/PageHeader';
import ContactSection from '../Components/ContactSection';

const Ms365Basic = () => {
  
  // Page scroll top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Email & Calendars",
      desc: "With Outlook, you get a chance to create a business-class email and send attachments up to 150 MB. Plus, mailbox storage is up to 50 GB per user.",
      Icon: Calendar
    },
    {
      title: "1 TB secure cloud storage per user",
      desc: "Now you can sync, share, and edit all the documents, photos, and many more things from wherever on all the devices with 1 TB of OneDrive Cloud storage.",
      Icon: Cloud
    },
    {
      title: "Instant messaging and online meetings",
      desc: "Use Microsoft Teams to communicate with your colleagues over text, voice, or video calls. Conduct HD meeting conferences on the web using one-step screen sharing.",
      Icon: MessageCircle
    },
    {
      title: "Communication and work management",
      desc: "Connect and coordinate with your team members, partners, and customers from anywhere by using Microsoft Kaizala, which is a simple-to-use chat interface.",
      Icon: List
    },
    {
      title: "Intranet and team sites",
      desc: "Inform and engage your teammates and connect people to content, expertise, and processes with team sites through SharePoint.",
      Icon: Globe
    },
    {
      title: "Administration",
      desc: "Deploy and manage Office 365 across your company, no IT expertise required. You can add and remove users in minutes.",
      Icon: Lock
    }
  ];

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Microsoft 365 Basic" 
        breadcrumbText="Products / Microsoft 365" 
      />

      {/* 2. Hero Section (Product Details & Partner Card) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* LEFT: Description */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Microsoft 365 Basic
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                With Maviontech business basic, always get new updated version of Microsoft 365 applications, cloud services for running & increase your business.
              </p>

              <ul className="space-y-4">
                {[
                  "Email Hosting with a 50 GB mailbox and custom email domain.",
                  "Use remote working tools & Create a hub for teamwork with Microsoft Teams.",
                  "Access web versions of Office apps: Outlook, Word, Excel, PowerPoint, OneNote.",
                  "Store and share files with 1 TB of OneDrive cloud storage per user.",
                  "Host online meetings and video conferencing for up to 300 users.",
                  "Get help anytime with around-the-clock phone and web support from Maviontech & Microsoft."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Partner Card (Recreated from Image) */}
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
                    Microsoft 365 Business Basic
                </h3>
                <p className="text-xs text-green-400 mb-6 uppercase tracking-wider">
                    Cloud Service - Commercial
                </p>

                <div className="border-t border-white/10 pt-4">
                    <h4 className="text-sm font-bold mb-2">Web and mobile apps and services:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Teams, Microsoft Outlook, Microsoft Exchange, Microsoft OneDrive, Microsoft SharePoint.
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
                Microsoft 365 Business Basic Features
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
                Maviontech is one of the best Office 365 Reseller in India which have credited large deployments in thousands of companies having multiple office Locations & helped SMB's find the perfect business emailing & office productivity solutions they need in the cloud. Maviontech has a team of consultants & cloud migration experts who are expert in adapting Office 365 to your Organizational needs and deploys Microsoft business solutions with 24x7 support.
            </p>
        </div>
      </div>

      {/* 5. Contact Section (Updated with Checkboxes) */}
      <ContactSection />

    </div>
  );
};

export default Ms365Basic;