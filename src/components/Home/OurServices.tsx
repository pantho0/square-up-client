import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import React from "react";
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
    <section className="w-full  text-white">
      {/* Background Section */}
      <div className="relative bg-[url('/images/ourservicesbg.png')] object-bottom bg-no-repeat w-full h-64 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-opacity-40" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-transparent  text-left">
            <CardBody className="flex flex-col items-left space-y-6 h-full justify-between">
              <div className="text-3xl">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-2xl text-[#FEE3FA] font-semibold">
                  {service.title}
                </h3>
                <p className="text-[#FEE3FA] text-sm mt-2">
                  {service.description}
                </p>
              </div>
              <Button
                color="secondary"
                className="bg-[#FF80C0] text-white mt-4"
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
