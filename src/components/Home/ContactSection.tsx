"use client";
import { CheckIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

// Define types for the contact reasons
type ContactReason =
  | "Conception de sites Web"
  | "Conception d'applications mobiles"
  | "Collaboration"
  | "Autres";

const ContactSection: React.FC = () => {
  const [selectedReasons, setSelectedReasons] = useState<ContactReason[]>([]);
  const [budget, setBudget] = useState(50000);

  // The reasons for contact, with the same French text from the image
  const contactReasons: ContactReason[] = [
    "Conception de sites Web",
    "Conception d'applications mobiles",
    "Collaboration",
    "Autres",
  ];

  // Function to handle checkbox changes
  const handleReasonChange = (reason: ContactReason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  return (
    <div className="w-full min-h-screen py-16">
      {/* Main content container with backdrop-blur */}
      <div className="relative z-10">
        {/* Header section with text centered */}
        <div className="text-center bg-[url('/images/contactbg.png')] bg-cover bg-center text-white py-12">
          <div className="relative mb-3">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-inter text-[#FEE3FA]">
              Thank you for your Interest in CreaSeils.
            </h2>
            <p className="text-lg text-[#FEE3FA] max-w-2xl font-inter mx-auto">
              We would love to hear from you and discuss how we can help bring
              your digital ideas to life. Here are the different ways you can
              get in touch with us.
            </p>
          </div>
          <button className="mt-8 px-8 py-3 rounded-md text-[#FEE3FA] font-semibold bg-[#FD46CD] transition-colors duration-200">
            Start Project
          </button>
        </div>

        {/* Contact Form Section */}
        <div className=" max-w-4xl border border-[#FF80C0] py-8 mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#FEE3FA]">
          {/* Nom et prénom & E-mail section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-[#FF80C0] bg-[#242424]/50 backdrop-blur-md">
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-inter"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type here"
                className="w-full bg-[#13050C] border-none rounded-md px-4 py-3 text-gray-200 focus:ring-violet-500 focus:border-violet-500 font-inter"
              />
            </div>
            <div className="p-6 rounded-xl border border-[#FF80C0] bg-[#242424]/50 backdrop-blur-md">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-inter"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type here"
                className="w-full bg-[#13050C] border-none rounded-md px-4 py-3 text-gray-200 focus:ring-violet-500 focus:border-violet-500 font-inter"
              />
            </div>
          </div>

          {/* Pourquoi nous contactez-vous? section with checkboxes */}
          <div className="p-6 rounded-xl border border-[#FF80C0] bg-[#242424]/50 backdrop-blur-md">
            <div className="block text-gray-300 mb-4 font-inter">
              Why are you contacting us?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {contactReasons.map((reason) => (
                <div
                  key={reason}
                  onClick={() => handleReasonChange(reason)}
                  className={`flex items-center cursor-pointer rounded-md p-4 transition-colors duration-200
                    ${selectedReasons.includes(reason) ? "bg-violet-600 text-white" : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"}`}
                >
                  <div
                    className={`flex items-center justify-center w-4 h-4 rounded-full border-2 transition-colors duration-200 mr-4
                      ${selectedReasons.includes(reason) ? "bg-white border-white" : "bg-gray-900 border-gray-500"}`}
                  >
                    {/* Heroicon Checkmark */}
                    {selectedReasons.includes(reason) && (
                      <CheckIcon className="w-3 h-3 text-violet-600" />
                    )}
                  </div>
                  <span className="text-sm font-inter">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Votre budget section */}
          <div className="p-6 rounded-xl border border-[#FF80C0] bg-[#242424]/50 backdrop-blur-md">
            <div className="block text-gray-300 mb-2 font-inter">
              Your Budget
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Slide to indicate your budget range
            </p>
            <input
              type="range"
              min="0"
              max="100000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-violet-600 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-gray-200 mt-2 font-bold font-inter">
              Budget: €{budget.toLocaleString()}
            </div>
          </div>

          {/* Votre message section */}
          <div className="p-6 rounded-xl border border-[#FF80C0] bg-[#242424]/50 backdrop-blur-md">
            <label
              htmlFor="message"
              className="block text-gray-300 mb-2 font-inter"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type here"
              className="w-full bg-[#13050C] border-none rounded-md px-4 py-3 text-gray-200 focus:ring-violet-500 focus:border-violet-500 font-inter"
            />
          </div>

          <div className="text-center mt-8">
            <button className="px-10 py-4 rounded-full text-white font-semibold bg-violet-600 hover:bg-violet-700 transition-colors duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
