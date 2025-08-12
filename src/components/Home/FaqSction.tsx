"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    number: "01",
    question: "What services does CreaSeils provide?",
    answer:
      "CreaSeils offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    number: "02",
    question: "How can CreaSeils help my business?",
    answer:
      "CreaSeils can help your business by creating a strong online presence, developing custom software solutions to streamline your operations, and building mobile applications that engage your customers and drive growth.",
  },
  {
    number: "03",
    question: "What industries does CreaSeils work with?",
    answer:
      "We have experience working with a wide variety of industries, including e-commerce, real estate, event management, and fitness tracking. Our team is adaptable and eager to take on new challenges.",
  },
  {
    number: "04",
    question: "How long does it take to complete a project with CreaSeils?",
    answer:
      "Project timelines vary depending on the scope and complexity of the work. After an initial consultation, we provide a detailed project plan with estimated timelines and milestones.",
  },
  {
    number: "05",
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your digital products continue to run smoothly and stay up-to-date with the latest technologies.",
  },
  {
    number: "06",
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely. Our team is skilled in integrating with existing systems and can work within various design and development frameworks to meet your specific needs.",
  },
  {
    number: "07",
    question: "How involved will I be in the project development process?",
    answer:
      "We believe in a collaborative approach. You will be actively involved throughout the project, with regular check-ins, feedback sessions, and opportunities to review progress.",
  },
  {
    number: "08",
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we provide comprehensive maintenance and update services for both websites and mobile apps. This includes security patches, feature enhancements, and content updates.",
  },
];

const FaqSection = () => {
  return (
    <div className="w-full min-h-screen py-16">
      {/* Header */}
      <div className="relative z-10 bg-[url('/images/faqbg.png')] bg-cover bg-center flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-inter text-[#FEE3FA]">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-[#FEE3FA] max-w-xl font-inter">
          Still you have any questions? Contact our Team via{" "}
          <a
            href="mailto:info@CreaSeils.com"
            className="underline text-[#FF80C0] hover:text-white transition-colors"
          >
            info@CreaSeils.com
          </a>
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {faqs.map((faq, index) => (
          <Disclosure key={index} defaultOpen={index === 0}>
            {({ open }) => (
              <div className="border-b border-[#FF5733] border-t-0 border-x-0 transform transition-transform duration-300 ease-out hover:scale-[1.03]">
                <Disclosure.Button className="flex w-full items-start justify-between py-5 px-4 sm:px-6 text-left focus:outline-none">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 text-xl font-bold text-[#FF80C0] mr-4 sm:mr-6">
                      {faq.number}
                    </span>
                    <span className="text-base sm:text-lg font-semibold font-inter text-[#FEE3FA]">
                      {faq.question}
                    </span>
                  </div>
                  <span className="ml-4 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6 text-[#FEE3FA]" />
                    ) : (
                      <PlusIcon className="h-6 w-6 text-[#FEE3FA]" />
                    )}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-5 px-4 sm:px-6 text-sm sm:text-base text-[#FEE3FA] font-inter">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
