import React from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import design from "../../../public/images/design.png";
import engineering from "../../../public/images/eng.png";
import projectManagement from "../../../public/images/pm.png";

interface Service {
  icon: any;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: design,
    title: "Design",
    description:
      "At CreaSeils, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
  },
  {
    icon: engineering,
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
  },
  {
    icon: projectManagement,
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
  },
];

const OurServices = () => {
  return (
    <section className="w-full text-white bg-[#13050C]">
      {/* Background Section */}
      {/* The height is now responsive, and we added a semi-transparent black overlay for better text readability */}
      <div className="relative bg-[url('/images/ourservicesbg.png')] bg-cover bg-center bg-no-repeat w-full h-64  flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          {/* Responsive font sizes are used for the heading and paragraph */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Our Services
          </h2>
          <p className="mt-4 text-base text-[#FEE3FA] md:text-lg max-w-2xl mx-auto drop-shadow-lg">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className=" p-2 text-left bg-transparent transform transition-transform duration-300 hover:scale-105"
          >
            <CardBody className="flex flex-col items-start space-y-6 h-full justify-between">
              {/* Image styling for responsiveness and a fixed size */}
              <div>
                <div className="flex-shrink-0 mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#FEE3FA]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#FEE3FA]">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* The button now has a full width on mobile for better touch targets */}
              <Button
                color="secondary"
                className="w-full bg-[#FF80C0] text-[#FEE3FA] hover:text-[#FEE3FA]  duration-200"
              >
                Learn More
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
