// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Briefcase } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      icon: Briefcase,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: 'info@CreaSells.com',
      href: 'mailto:info@CreaSells.com'
    },
    {
      icon: Phone,
      value: '+33 6 98702575',
      href: 'tel:+33698702575'
    },
    {
      icon: MapPin,
      value: 'Somewhere in the World'
    }
  ];

  return (
    <footer className={`w-full ${className}`}>
      {/* Footer Top Section - Navigation Bar */}
      <div className="w-full bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-lg transition-all duration-200 hover:scale-105">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45 hover:rotate-90 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 rounded-sm"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Stay Connected + Social Icons */}
            <div className="flex items-center gap-4">
              <span className="hidden lg:block text-white/80 text-sm font-medium border-r border-gray-700 pr-4">
                Stay Connected
              </span>
              <div className="flex gap-2">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex items-center justify-center w-8 h-8 bg-pink-500 hover:bg-pink-400 rounded-md transition-all duration-200 hover:scale-110 hover:shadow-lg group"
                    >
                      <IconComponent 
                        size={16} 
                        className="text-white group-hover:scale-110 transition-transform duration-200" 
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center justify-center w-8 h-8 text-white hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section - Contact Information */}
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-4">
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 group">
                    <div className="flex items-center justify-center w-4 h-4 text-pink-400">
                      <IconComponent size={14} className="group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="text-sm">{contact.value}</span>
                  </div>
                );

                if (contact.href) {
                  return (
                    <a 
                      key={index}
                      href={contact.href} 
                      className="inline-block hover:scale-105 transition-transform duration-200"
                      aria-label={`Contact us via ${contact.value}`}
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={index} className="inline-block">{content}</div>;
              })}
            </div>

            {/* Copyright */}
            <div className="text-white/70 text-sm whitespace-nowrap">
              © 2023 CreaSells. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;