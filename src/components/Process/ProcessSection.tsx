import React from "react";

const ProcessSection = () => {
  interface ProcessStep {
    number: string;
    title: string;
    description: string;
  }

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a solid strategy.",
    },
    {
      number: "02",
      title: "Planning and Strategy",
      description:
        "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align the strategy with your vision.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our expert designers translate the project requirements into a captivating visual language. We focus on creating a seamless user experience, an intuitive user interface, and a robust design architecture. We iterate on the design based on your feedback and test it to ensure the final look and feel.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and modern frameworks to build a high-performance, scalable digital platform. Throughout the development process, we maintain open communication to keep you updated and address any questions or concerns.",
    },
    {
      number: "05",
      title: "Testing and Quality Assurance",
      description:
        "We conduct rigorous testing to ensure that your digital product is functional, reliable, and secure. Our quality assurance process includes a combination of automated and manual testing to identify and fix any bugs or issues before deployment. We strive for a seamless user experience and a high level of reliability.",
    },
    {
      number: "06",
      title: "Deployment and Launch",
      description:
        "When your digital product is thoroughly tested and meets your satisfaction, we prepare it for deployment. We handle all the technical aspects of the launch, including server setup, domain configuration, and database migration. Our team ensures a smooth go-live with minimal disruption, setting up everything, configuring servers, and managing any required integrations.",
    },
    {
      number: "07",
      title: "Post-Launch Support",
      description:
        "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product remains up-to-date and performs optimally. We're here to help you with bug fixing, feature enhancements, security updates, and technical assistance.",
    },
    {
      number: "08",
      title: "Continuous Improvement",
      description:
        "We believe in continuous improvement and actively optimize your digital product even after launch. We monitor user feedback, analyze performance metrics, and identify opportunities for enhancements. Our goal is to make ongoing improvements and updates to keep your digital product ahead of the curve.",
    },
  ];

  const ProcessCard = ({ number, title, description }: ProcessStep) => (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-[#FF80C0]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:border-[#FF80C0] hover:shadow-xl hover:shadow-pink-500/20 overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF80C0]/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col space-y-4 h-full">
        {/* Make the number bigger */}
        <h4 className="text-5xl md:text-6xl font-bold text-[#FF80C0] leading-tight">
          {number}
        </h4>
        <h5 className="text-xl font-semibold text-[#FEE3FA] mb-2 leading-tight">
          {title}
        </h5>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Main Section Header with a full-width background */}
      <section
        className="relative overflow-hidden w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center py-16 md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/13050C/FF80C0?text=Process+Page+Background')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FEE3FA] mb-4 drop-shadow-lg">
            Process of Starting the Project
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
            At CreaSells, we value transparency, communication, and delivering
            exceptional results.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 md:py-24 px-4 bg-transparent text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;
