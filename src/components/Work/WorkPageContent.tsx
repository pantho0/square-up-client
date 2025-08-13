import React from "react";

const WorkPageContent = () => {
  // Define a type for a project
  interface Project {
    title: string;
    description: string;
    imageUrl: string;
  }

  // Projects data with titles and descriptions from the provided image
  const projects: Project[] = [
    {
      title: "E-Commerce Platform for Fashion Hub",
      description:
        "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Chic+Boutique",
    },
    {
      title: "Mobile App for Food Delivery Service",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=HungryBites",
    },
    {
      title: "Back-End Reservation System for Event Management",
      description:
        "We built a robust back-end reservation system to streamline event management for a large-scale venue. The system automates booking, scheduling, and payment processing.",
      imageUrl:
        "https://placehold.co/800x600/13050C/FF80C0?text=Reservation+System",
    },
    {
      title: "Custom Software for Workflow Automation",
      description:
        "Our team developed custom software to automate a client's complex internal workflows, significantly reducing manual effort and improving operational efficiency.",
      imageUrl:
        "https://placehold.co/800x600/13050C/FF80C0?text=Workflow+Automation",
    },
    {
      title: "Mobile and Desktop Music Player",
      description:
        "A cross-platform application designed to deliver a seamless music listening experience on both mobile devices and desktops, with features for playlist management and high-quality audio streaming.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Music+Player",
    },
    {
      title: "Web App for a Customer Data Platform",
      description:
        "A comprehensive web application designed to help businesses collect, analyze, and act on customer data in a centralized platform, enhancing marketing and sales efforts.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Data+Platform",
    },
    {
      title: "Web Application for Product Showcasing",
      description:
        "A visually compelling web application for showcasing products, featuring interactive 3D models and an integrated content management system.",
      imageUrl:
        "https://placehold.co/800x600/13050C/FF80C0?text=Product+Showcasing",
    },
    {
      title: "Mobile App for Retail and Loyalty",
      description:
        "A mobile application for a retail brand, offering a personalized shopping experience, loyalty program management, and in-store navigation features.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Retail+App",
    },
    {
      title: "Custom ERP System for Logistics",
      description:
        "An enterprise resource planning system tailored for a logistics company to manage inventory, track shipments, and optimize delivery routes.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Logistics+ERP",
    },
    {
      title: "Web App for Customer Relationship Management",
      description:
        "A custom CRM solution to help businesses manage customer interactions, automate marketing campaigns, and analyze customer feedback.",
      imageUrl: "https://placehold.co/800x600/13050C/FF80C0?text=Custom+CRM",
    },
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-[#FF80C0]/50 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-[#FF80C0] hover:shadow-xl hover:shadow-pink-500/20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col space-y-4 h-full">
        <div className="flex-shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-semibold text-[#FEE3FA] mb-2 leading-tight">
            {project.title}
          </h4>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-auto">
          <button className="w-full bg-[#FF80C0] text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-[#ff69b4] transition-colors duration-200">
            View Project
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4  text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FEE3FA] mb-4">
            At CreaSells
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-6">
            Discover a portfolio of visually stunning and strategically crafted
            digital projects that showcase our creativity and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPageContent;
