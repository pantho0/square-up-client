import { Card, CardBody } from "@heroui/card";
import React from "react";
import expertise from "../../../public/images/expertise.png";
import client from "../../../public/images/client.png";
import result from "../../../public/images/result.png";
import collab from "../../../public/images/collab.png";
import Image from "next/image"; // Import the Image component

// Placeholder image URLs for the icons
const expertisePlaceholder = "https://placehold.co/48x48/13050C/FF80C0?text=Ex";
const clientPlaceholder = "https://placehold.co/48x48/13050C/FF80C0?text=Cl";
const resultPlaceholder = "https://placehold.co/48x48/13050C/FF80C0?text=Re";
const collabPlaceholder = "https://placehold.co/48x48/13050C/FF80C0?text=Co";

interface Feature {
  icon: any;
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
    <section className="w-full text-[#FEE3FA] bg-[#13050C]">
      {/* Top heading section with a fixed height of h-64 */}
      <div className="relative bg-[url('/images/whychooseus.png')] bg-cover bg-center bg-no-repeat w-full h-64 flex items-center justify-center text-center">
        <div className="relative z-10 px-4">
          {/* Responsive font sizes are used for the heading and paragraph */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg text-[#FEE3FA]">
            Why Choose CreaSeils?
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-[#FEE3FA]">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      {/* Container now has responsive padding and gap between cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <Card
              shadow="sm"
              className="bg-transparent p-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* CardBody now uses a column-based flex layout for better mobile stacking */}
              <CardBody className="flex flex-col space-y-4">
                {/* This div keeps the icon and title aligned horizontally */}
                <div className="flex items-center gap-4">
                  {/* Use Next.js Image component to render the icon */}
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-[#FEE3FA]">
                    {feature.title}
                  </h3>
                </div>
                {/* Description text with the specified color */}
                <div>
                  <p className="text-[#FEE3FA] text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardBody>
            </Card>
            {/* Add a full-width divider after the second card */}
            {index === 1 && (
              <div className="col-span-1 md:col-span-2 w-full h-px bg-[#FF80C0] my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
