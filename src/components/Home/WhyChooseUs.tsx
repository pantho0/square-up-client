import { Card, CardBody } from "@heroui/card";
import React from "react";
import expertise from "../../../public/images/expertise.png";
import client from "../../../public/images/client.png";
import result from "../../../public/images/result.png";
import collab from "../../../public/images/collab.png";
import Image from "next/image"; // Import the Image component

interface Feature {
  icon: any; // Placeholder icon emoji (replace with HeroUI icons later)
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: expertise,

    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: client,

    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    icon: result,
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: collab,
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full text-white">
      {/* Top heading */}
      <div className="w-full bg-[url('/images/whychooseus.png')] h-64 flex items-center justify-center text-center">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Why Choose CreaSeils?</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} shadow="sm" className="bg-transparent border-0">
            <CardBody className="flex items-start space-x-4">
              <div className="flex items-center gap-3 mb-3">
                {/* Use Next.js Image component to render the icon */}
                <div className="text-3xl">
                  <Image
                    src={feature.icon}
                    alt={feature.title} // Add alt text for accessibility
                    width={48} // Adjust width as needed
                    height={48} // Adjust height as needed
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#FEE3FA]">
                  {feature.title}
                </h3>
              </div>
              <div>
                <p className="text-[#FEE3FA] text-sm">{feature.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
