import { Button } from "@heroui/button";
import React from "react";

// Define the type for a single testimonial
interface Testimonial {
  title: string;
  text: string;
  clientName: string;
  clientTitle: string;
  websiteUrl: string;
}

// Dummy data for the testimonials, based on the provided image
const testimonials: Testimonial[] = [
  {
    title:
      "CreaSeils has been Instrumental in Transforming our Online Presence.",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    clientName: "John Smith",
    clientTitle: "CEO of Chic Boutique",
    websiteUrl: "#", // Placeholder URL
  },
  {
    title: "Working with CreaSeils was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers have had a great user experience. CreaSeils is a trusted partner we highly recommend.",
    clientName: "Sarah Johnson",
    clientTitle: "Founder of HungryBites",
    websiteUrl: "#", // Placeholder URL
  },
  {
    title:
      "CreaSeils developed a comprehensive booking and reservation system for our event management company",
    text: "Their attention-to-detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    clientName: "Mark Thompson",
    clientTitle: "CEO of EventMasters",
    websiteUrl: "#", // Placeholder URL
  },
  {
    title: "ProTech Solutions turned to CreaSeils to automate our workflow",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. CreaSeils's expertise and professionalism have made them a trusted technology partner.",
    clientName: "Laura Adams",
    clientTitle: "COO of ProTech Solutions",
    websiteUrl: "#", // Placeholder URL
  },
  {
    title:
      "CreaSeils designed and developed a captivating web portal for showcasing our real estate listings.",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. CreaSeils's expertise in the real estate industry is unmatched.",
    clientName: "Michael Anderson",
    clientTitle: "Founder of Dream Homes Realty",
    websiteUrl: "#", // Placeholder URL
  },
  {
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    text: "CreaSeils's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend CreaSeils for our health and fitness app development needs.",
    clientName: "Emily Turner",
    clientTitle: "CEO of FitLife Tracker",
    websiteUrl: "#", // Placeholder URL
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-16">
      {" "}
      {/* Main container with vertical padding */}
      {/* Testimonials Header Section */}
      <div className="relative bg-[url('/images/testimonialbg.png')] h-64  bg-cover bg-no-repeats flex justify-center items-center  sm:px-6 lg:px-8 text-center mb-12">
        <div className="absolute inset-0 bg-opacity-40" />
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#FEE3FA] font-inter">
            What our Clients say About us
          </h2>
          <p className="text-lg text-[#FEE3FA] max-w-2xl mx-auto font-inter">
            At CreaSeils, we take pride in delivering exceptional digital
            products and services that drive success for our clients. Here's
            what some of our satisfied clients have to say about their
            experience working with us
          </p>
        </div>
      </div>
      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <React.Fragment key={index}>
            <div className="p-8  relative overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0  rounded-2xl"></div>

              {/* Content container with padding */}
              <div className="relative z-10 space-y-6 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 font-inter text-[#FEE3FA]">
                    {testimonial.title}
                  </h3>
                  <p className="leading-relaxed font-inter text-[#FEE3FA]">
                    {testimonial.text}
                  </p>
                </div>

                {/* Client and button section */}
                <div className="flex border border-[#FF80C0] rounded-lg p-3 items-end justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    {/* Avatar with initials or placeholder */}
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl font-bold font-inter">
                      {testimonial.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-white font-inter">
                        {testimonial.clientName}
                      </p>
                      <p className="text-sm text-gray-400 font-inter">
                        {testimonial.clientTitle}
                      </p>
                    </div>
                  </div>
                  <Button
                    href={testimonial.websiteUrl}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-sm font-semibold bg-[#FF80C0] text-[#FEE3FA] hover:text-white transition-colors duration-200 font-inter"
                  >
                    Open Website
                  </Button>
                </div>
              </div>
            </div>
            {/* Conditional divider based on index */}
            {(index === 1 || index === 3) && (
              <div className="col-span-1 md:col-span-2 border-b border-gray-700 my-4 md:my-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
