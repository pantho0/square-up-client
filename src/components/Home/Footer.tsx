import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Briefcase,
} from "lucide-react";
// Assuming you have a default logo or a way to import it
// import Logo from "../../../public/images/logo.png";

import { Divider } from "@heroui/divider";
import Image from "next/image";

// Placeholder for the logo import since the original path is external
// and may not work in this environment.
import Logo from "../../../public/images/logo.png";
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Briefcase,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: "info@CreaSells.com",
      href: "mailto:info@CreaSells.com",
    },
    {
      icon: Phone,
      value: "+33 6 98702575",
      href: "tel:+33698702575",
    },
    {
      icon: MapPin,
      value: "Somewhere in the World",
    },
  ];

  return (
    <footer
      className={`w-full ${className} border-t border-[#FF80C0] py-8 space-y-10`}
    >
      {/* Footer Top Section - Navigation Bar */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main container now uses flex-col for mobile and switches to flex-row for medium screens */}
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between h-auto md:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-lg transition-all duration-200 hover:scale-105">
                <Image src={Logo} alt="CreaSells" width={100} height={100} />
              </div>
            </Link>

            {/* Navigation and Socials are wrapped in a single flex container for responsive stacking */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
              {/* Navigation links now use flex-wrap to prevent overflow on small screens */}
              <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white hover:text-pink-400 px-3 py-1 text-sm font-medium transition-colors duration-200 hover:scale-105"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Stay Connected + Social Icons */}
              <div className="flex items-center gap-4 border border-[#FF80C0] rounded-lg px-4 py-2">
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
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-4 bg-[#FF80C0] max-w-7xl mx-auto" />
      {/* Footer Bottom Section - Contact Information */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bottom section now properly stacks on mobile and aligns on small screens */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between py-3 gap-4">
            {/* Contact Information also uses flex-wrap for better mobile display */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 group">
                    <div className="flex items-center justify-center w-4 h-4 text-pink-400">
                      <IconComponent
                        size={14}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
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

                return (
                  <div key={index} className="inline-block">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Copyright text is centered on mobile */}
            <div className="text-white/70 text-sm whitespace-nowrap text-center sm:text-right">
              © 2023 CreaSells. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
