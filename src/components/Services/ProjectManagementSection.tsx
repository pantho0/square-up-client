import React, { ReactNode } from "react";

const ProjectManagementSection = () => {
  // SVG icons for project management services, following the user's design aesthetic.
  const projectPlanningServices = [
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
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.079 0-2.15.2-3.174.577zM12 6.042V3.75m0 2.292a8.967 8.967 0 0 1 6-2.292m0 0a8.967 8.967 0 0 1 3.174.577m0 0c.41.134.606.557.48.967A8.962 8.962 0 0 1 12 11.25c-1.079 0-2.15-.2-3.174-.577a1.002 1.002 0 0 0-.48.967c.096.3.266.505.48.577A8.967 8.967 0 0 0 12 15.75m0 0a8.967 8.967 0 0 0 6-2.292m0 0c.41.134.606.557.48.967a1.002 1.002 0 0 1-.48.967A8.967 8.967 0 0 1 12 21a8.967 8.967 0 0 1-6-2.292m0 0a1.002 1.002 0 0 1-.48-.967c.126-.41.322-.833.48-.967a8.967 8.967 0 0 1 6-2.292m0 0V3.75"
          />
        </svg>
      ),
      title: "Requirements Gathering and Analysis",
      description:
        "Defining project objectives, scope, and requirements to ensure a clear and shared understanding.",
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
      title: "Project Roadmap and Timeline Development",
      description:
        "Strategic planning of project milestones, deliverables, and timelines for effective execution.",
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
      title: "Resource Allocation and Task Assignment",
      description:
        "Efficiently allocating resources and assigning tasks to the right team members for maximum productivity.",
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
      title: "Risk Assessment and Mitigation Strategies",
      description:
        "Proactively identifying potential project risks and developing strategies to minimize their impact.",
    },
  ];

  const agileDevelopmentServices = [
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
      title: "Iterative Development and Sprints",
      description:
        "Delivering value in small, manageable increments with an iterative and continuous development cycle.",
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
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "Scrum or Kanban Methodology Implementation",
      description:
        "Implementing agile frameworks to optimize team collaboration and project workflow.",
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
      title: "Regular Progress Updates and Demos",
      description:
        "Keeping you informed with transparent, frequent updates and live demonstrations of progress.",
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
      title: "Continuous Improvement and Feedback Incorporation",
      description:
        "Continuously refining our processes based on feedback to deliver a better product.",
    },
  ];

  const qualityAssuranceServices = [
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
      title: "Test Planning and Execution",
      description:
        "Developing and executing comprehensive test plans to ensure the quality and reliability of your software.",
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
      title: "Functional and Usability Testing",
      description:
        "Verifying that your application's features function as expected and are easy for users to navigate.",
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
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.079 0-2.15.2-3.174.577zM12 6.042V3.75m0 2.292a8.967 8.967 0 0 1 6-2.292m0 0a8.967 8.967 0 0 1 3.174.577m0 0c.41.134.606.557.48.967A8.962 8.962 0 0 1 12 11.25c-1.079 0-2.15-.2-3.174-.577a1.002 1.002 0 0 0-.48.967c.096.3.266.505.48.577A8.967 8.967 0 0 0 12 15.75m0 0a8.967 8.967 0 0 0 6-2.292m0 0c.41.134.606.557.48.967a1.002 1.002 0 0 1-.48.967A8.967 8.967 0 0 1 12 21a8.967 8.967 0 0 1-6-2.292m0 0a1.002 1.002 0 0 1-.48-.967c.126-.41.322-.833.48-.967a8.967 8.967 0 0 1 6-2.292m0 0V3.75"
          />
        </svg>
      ),
      title: "Performance and Security Testing",
      description:
        "Assessing the performance and security of your application to protect user data and ensure reliability.",
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
      title: "Bug Tracking and Issue Resolution",
      description:
        "Implementing a system for tracking and resolving issues to ensure a smooth and stable user experience.",
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
    <div className="min-h-screen">
      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FEE3FA] mb-4">
              Project Management
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-6">
              Our experienced project management team ensures that your projects
              are delivered on time, within budget, and according to your
              specifications. We follow industry-standard methodologies and
              employ effective communication and collaboration tools to keep you
              informed throughout the development process.
            </p>
            <span className="inline-block bg-[#FF80C0] text-white px-6 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider">
              Our project management services
            </span>
          </div>

          {/* Service Categories */}
          <ServiceCategory
            title="Project Planning and Scoping"
            services={projectPlanningServices}
          />
          <ServiceCategory
            title="Agile Development"
            services={agileDevelopmentServices}
          />
          <ServiceCategory
            title="Quality Assurance and Testing"
            services={qualityAssuranceServices}
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectManagementSection;
