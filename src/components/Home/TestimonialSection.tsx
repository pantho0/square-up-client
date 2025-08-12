import { Button } from "@heroui/button";
import React from "react";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import img5 from "../../../public/images/img5.png";
import img6 from "../../../public/images/img6.png";
import Image from "next/image";

interface Testimonial {
  title: string;
  text: string;
  clientName: string;
  clientTitle: string;
  websiteUrl: string;
  avatar: any;
}

const testimonials: Testimonial[] = [
  {
    title:
      "CreaSeils has been Instrumental in Transforming our Online Presence.",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    avatar: img1,
    clientName: "John Smith",
    clientTitle: "CEO of Chic Boutique",
    websiteUrl: "#",
  },
  {
    title: "Working with CreaSeils was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers have had a great user experience. CreaSeils is a trusted partner we highly recommend.",
    clientName: "Sarah Johnson",
    clientTitle: "Founder of HungryBites",
    websiteUrl: "#",
    avatar: img2,
  },
  {
    title:
      "CreaSeils developed a comprehensive booking and reservation system for our event management company",
    text: "Their attention-to-detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    clientName: "Mark Thompson",
    clientTitle: "CEO of EventMasters",
    websiteUrl: "#",
    avatar: img3,
  },
  {
    title: "ProTech Solutions turned to CreaSeils to automate our workflow",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. CreaSeils's expertise and professionalism have made them a trusted technology partner.",
    clientName: "Laura Adams",
    clientTitle: "COO of ProTech Solutions",
    websiteUrl: "#",
    avatar: img4,
  },
  {
    title:
      "CreaSeils designed and developed a captivating web portal for showcasing our real estate listings.",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. CreaSeils's expertise in the real estate industry is unmatched.",
    clientName: "Michael Anderson",
    clientTitle: "Founder of Dream Homes Realty",
    websiteUrl: "#",
    avatar: img5,
  },
  {
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    text: "CreaSeils's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend CreaSeils for our health and fitness app development needs.",
    clientName: "Emily Turner",
    clientTitle: "CEO of FitLife Tracker",
    websiteUrl: "#",
    avatar: img6,
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-10 sm:py-14">
      {/* Header */}
      <div className="relative bg-[url('/images/testimonialbg.png')] h-48 sm:h-56 md:h-64 bg-cover bg-no-repeat flex justify-center items-center px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-opacity-40" />
        <div className="relative z-10 text-[#FEE3FA]">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-inter">
            What our Clients say About us
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-inter">
            At CreaSeils, we take pride in delivering exceptional digital
            products and services that drive success for our clients. Here's
            what some of our satisfied clients have to say about their
            experience working with us
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <React.Fragment key={index}>
            <div className="p-5 sm:p-6 lg:p-8 relative overflow-hidden text-[#FEE3FA] bg-transparent rounded-2xl transform transition-transform duration-300 ease-out hover:scale-[1.03]">
              <div className="relative z-10 space-y-4 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-inter">
                    {testimonial.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed font-inter">
                    {testimonial.text}
                  </p>
                </div>

                {/* Client info section with border */}
                <div className="flex items-center justify-between mt-4 border border-[#FF80C0] rounded-lg p-3 sm:p-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                      <Image src={testimonial.avatar} alt="" />
                    </div>
                    <div>
                      <p className="font-bold font-inter">
                        {testimonial.clientName}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 font-inter">
                        {testimonial.clientTitle}
                      </p>
                    </div>
                  </div>
                  <Button
                    href={testimonial.websiteUrl}
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-sm font-semibold bg-[#FF80C0] text-[#FEE3FA] hover:text-white transition-colors duration-200 font-inter"
                  >
                    Open Website
                  </Button>
                </div>
              </div>
            </div>
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
