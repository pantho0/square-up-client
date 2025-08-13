import { PiIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Button } from "@heroui/button";

const EngineeringSection = () => {
  // SVG icons for engineering services, matching the user's design aesthetic.
  const webDevelopmentServices = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 21 12m0 0-3.75 5.25M21 12H3m0 0 3.75-5.25M3 12l3.75 5.25"
          />
        </svg>
      ),
      title: "Front-End Development (HTML, CSS, JavaScript)",
      description:
        "Building responsive and intuitive user interfaces that engage and delight your audience.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.25 7.5-7.5 7.5m10.669-9.155a4.5 4.5 0 0 1-5.772 1.45l-4.708 4.708a4.5 4.5 0 0 1-1.45 5.772v0a4.5 4.5 0 0 0 6.364-6.364l1.45-1.45a4.5 4.5 0 0 0-6.364-6.364l-1.45 1.45zm5.772 1.45a4.5 4.5 0 0 0-1.45-5.772l-1.45-1.45a4.5 4.5 0 0 0-6.364 6.364l1.45 1.45a4.5 4.5 0 0 0 5.772 1.45z"
          />
        </svg>
      ),
      title: "Back-End Development (PHP, Python, Ruby)",
      description:
        "Developing robust and scalable server-side logic, databases, and APIs for seamless functionality.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.75 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.75 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.75 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.75 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      ),
      title: "Content Management System (CMS) Development (WordPress, Drupal)",
      description:
        "Custom CMS solutions that give you full control over your website's content and functionality.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.076 60.076 0 0 1 3-5.25m15 5.25a60.076 60.076 0 0 0-3-5.25m-15 5.25h18m-9 3.75h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Z"
          />
        </svg>
      ),
      title: "E-Commerce Platform Development (Magento, Shopify)",
      description:
        "Building secure, high-converting online stores that provide an exceptional shopping experience.",
    },
  ];

  const mobileAppDevelopmentServices = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 10.5h12M18.75 14.25h-9.75m-2.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 18h.008v.008H12V18Z"
          />
        </svg>
      ),
      title: "Native iOS and Android App Development",
      description:
        "Creating high-performance, platform-specific mobile applications with native UI and UX.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a2.25 2.25 0 1 1-4.5 0m4.5 0a2.25 2.25 0 1 0-4.5 0M10.5 6H7.5m5.625 3-.5 3m-.5 3H12m-9.75 4.5l1.5-1.5m10.666-3.563-1.5-1.5m-5.416 0L9.75 13.5m4.5-4.5-1.5-1.5"
          />
        </svg>
      ),
      title: "Cross-Platform App Development (React Native, Flutter)",
      description:
        "Developing efficient and cost-effective apps that run on multiple platforms from a single codebase.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041.02a.75.75 0 0 1 1.063 0l.041-.02m.085.639-4.545 2.361a.75.75 0 0 0-.256.551v3.456a.75.75 0 0 0 1.072.63l4.545-2.362a.75.75 0 0 0 .256-.551v-3.456a.75.75 0 0 0-1.072-.63Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 11.25-.041.02a.75.75 0 0 1-1.063 0l-.041-.02m-.085.639 4.545 2.361a.75.75 0 0 1 .256.551v3.456a.75.75 0 0 1-1.072.63l-4.545-2.362a.75.75 0 0 1-.256-.551v-3.456a.75.75 0 0 1 1.072-.63Z"
          />
        </svg>
      ),
      title: "App Prototyping and UI/UX Design Integration",
      description:
        "Turning design concepts into interactive prototypes for testing and seamless integration with development.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      ),
      title: "App Testing, Deployment, and Maintenance",
      description:
        "Rigorous testing, streamlined deployment, and ongoing maintenance to ensure flawless app performance.",
    },
  ];

  const customSoftwareDevelopmentServices = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "Enterprise Software Development",
      description:
        "Building scalable and secure software solutions tailored to the complex needs of large enterprises.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
      title: "Custom Web Application Development",
      description:
        "Creating unique web applications from scratch, perfectly aligned with your business goals and processes.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.75c-2.003 0-3.901-.482-5.5-1.353m11 0c-1.599.871-3.497 1.353-5.5 1.353m0-11.25c-2.457 0-4.5-2.043-4.5-4.5S9.543 4.5 12 4.5s4.5 2.043 4.5 4.5-2.043 4.5-4.5 4.5Zm-1.875 3.75h3.75M12 17.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      ),
      title: "Integration with Third-Party APIs and Systems",
      description:
        "Connecting your applications with other services to create a powerful, unified digital ecosystem.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 7.5h-9m9 0a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25h-9m0-6a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 2.25 2.25m7.5-6v.75m-3-3v.75m3-3v.75M9.75 6.75v.75M9 12h.008v.008H9V12Zm2.25 0h.008v.008H11.25V12Zm2.25 0h.008v.008H13.5V12Zm2.25 0h.008v.008H15.75V12Zm-2.25-4.5h.008v.008H13.5V7.5ZM12 21h3v.75H12V21Z"
          />
        </svg>
      ),
      title: "Legacy System Modernization and Migration",
      description:
        "Upgrading outdated systems to modern technologies, improving performance and security.",
    },
  ];

  const ServiceCard = ({
    icon,
    title,
    description,
  }: {
    icon: ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-[#FF80C0]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-[#FF80C0] hover:shadow-xl hover:shadow-pink-500/20 overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF80C0]/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-[#FF80C0] rounded-xl flex items-center justify-center mb-4 md:mb-6">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-[#FEE3FA] mb-3 md:mb-4 leading-tight">
          {title}
        </h4>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  const ServiceCategory = ({
    title,
    services,
  }: {
    title: string;
    services: { icon: ReactNode; title: string; description: string }[];
  }) => (
    <div className="mb-12 md:mb-20">
      <h3 className="text-xl md:text-3xl font-semibold text-[#FEE3FA] mb-8 md:mb-10 border-l-4 border-[#FF80C0] pl-4 md:pl-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FEE3FA] mb-4">
              Our Engineering Services
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-6">
              Our engineering team combines technical expertise with a passion
              for innovation to build robust and scalable digital solutions. We
              leverage the latest technologies and best practices to deliver
              high-performance applications tailored to your specific needs.
            </p>
            <span className="inline-block bg-[#FF80C0] text-white px-6 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider">
              Our engineering services include:
            </span>
          </div>

          {/* Service Categories */}
          <ServiceCategory
            title="Web Development"
            services={webDevelopmentServices}
          />
          <ServiceCategory
            title="Mobile App Development"
            services={mobileAppDevelopmentServices}
          />
          <ServiceCategory
            title="Custom Software Development"
            services={customSoftwareDevelopmentServices}
          />
        </div>
      </section>
    </div>
  );
};

export default EngineeringSection;
