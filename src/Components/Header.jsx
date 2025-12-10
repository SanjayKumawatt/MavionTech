import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, User } from 'lucide-react';
import logo from "../assets/logo.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    // Navigation Data Structure
    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '#',
            type: 'dropdown',
            items: [
                { name: 'Logo Designing', path: '/services/logo-designing' },
                { name: 'Software Development', path: '/services/software-development' },
                { name: 'SEO & Branding', path: '/services/seo-branding' },
                { name: 'Domain & Web Hosting', path: '/services/hosting' },
                { name: 'Web Design & Development', path: '/services/web-dev' },
                
            ],
        },
        { name: 'About Us', path: '/about' },
        
        { name: 'Contact Us', path: '/contact' },
    ];

    const toggleMobileSubmenu = (index) => {
        if (activeMobileSubmenu === index) {
            setActiveMobileSubmenu(null);
        } else {
            setActiveMobileSubmenu(index);
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        {/* Logo Placeholder - Replace with your <img src="" /> */}
                        <img src={logo} alt="" className='h-10' />
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold tracking-tighter text-slate-800">
                                <span className="text-green-600">MAVION </span> TECH
                            </h1>
                            <span className="text-[10px] tracking-widest text-gray-500 -mt-1 uppercase">PRIVATE LIMITED
                            </span>
                        </div>
                    </div>

                    {/* 2. Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 items-center">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group h-20 flex items-center">
                                {item.type === 'dropdown' || item.type === 'nested-dropdown' ? (
                                    <>
                                        <button className="flex items-center text-slate-700 font-medium hover:text-green-600 transition-colors duration-200">
                                            {item.name}
                                            <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-20 left-0 w-64 bg-white shadow-lg border-t-2 border-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="py-2">
                                                {item.items.map((subItem, subIndex) => (
                                                    <div key={subIndex} className="relative group/nested px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0">

                                                        {/* Check if it has nested subItems (Like Microsoft 365) */}
                                                        {subItem.subItems ? (
                                                            <>
                                                                <div className="flex justify-between items-center cursor-pointer text-slate-600 hover:text-green-600 font-medium text-sm">
                                                                    {subItem.name}
                                                                    <ChevronRight className="w-4 h-4" />
                                                                </div>

                                                                {/* Nested Submenu (Side Flyout) */}
                                                                <div className="absolute top-0 left-full w-60 bg-white shadow-lg border-l border-slate-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 ml-0.5">
                                                                    {subItem.subItems.map((nestedItem, nIndex) => (
                                                                        <Link
                                                                            key={nIndex}
                                                                            to={nestedItem.path}
                                                                            className="block px-4 py-3 text-sm text-slate-600 hover:text-green-600 hover:bg-slate-50 border-b border-slate-100 last:border-0"
                                                                        >
                                                                            {nestedItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            // Regular Dropdown Item
                                                            <Link
                                                                to={subItem.path}
                                                                className="block text-sm text-slate-600 hover:text-green-600 font-medium"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Simple Link
                                    <Link
                                        to={item.path}
                                        className="text-slate-700 font-medium hover:text-green-600 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>


                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-800 hover:text-green-600 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {navItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-50 pb-2">
                                {item.items ? (
                                    <div>
                                        <button
                                            onClick={() => toggleMobileSubmenu(index)}
                                            className="w-full flex justify-between items-center py-2 text-base font-medium text-slate-700"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform duration-200 ${activeMobileSubmenu === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {/* Mobile Submenu */}
                                        {activeMobileSubmenu === index && (
                                            <div className="pl-4 space-y-2 bg-slate-50 py-2 rounded-md">
                                                {item.items.map((subItem, subIndex) => (
                                                    <div key={subIndex}>
                                                        {subItem.subItems ? (
                                                            <div className="space-y-2">
                                                                <p className="px-2 py-1 text-sm font-semibold text-green-700">{subItem.name}</p>
                                                                {subItem.subItems.map((nested, nIndex) => (
                                                                    <Link
                                                                        key={nIndex}
                                                                        to={nested.path}
                                                                        className="block px-4 py-2 text-sm text-slate-600 hover:text-green-600"
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                    >
                                                                        {nested.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <Link
                                                                to={subItem.path}
                                                                className="block px-2 py-2 text-sm text-slate-600 hover:text-green-600"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="block py-2 text-base font-medium text-slate-700 hover:text-green-600"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="pt-4">
                            <Link to="/login" className="block w-full text-center py-3 rounded-md bg-slate-800 text-white font-medium hover:bg-slate-700">
                                Client Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;