import { Card, CardBody } from "@heroui/card";
import React from "react";

interface Feature {
  icon: string; // Placeholder icon emoji (replace with HeroUI icons later)
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🏅",
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: "👥",
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    icon: "⚡",
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: "👑",
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
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
