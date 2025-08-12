"use client";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";

type ContactReason =
  | "Web Design"
  | "Mobile App Design"
  | "Collaboration"
  | "Others";

const ContactSection: React.FC = () => {
  const [selectedReasons, setSelectedReasons] = useState<ContactReason[]>([]);
  const [budget, setBudget] = useState(50000);

  const contactReasons: ContactReason[] = [
    "Web Design",
    "Mobile App Design",
    "Collaboration",
    "Others",
  ];

  const handleReasonChange = (reason: ContactReason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  return (
    <div className="w-full min-h-screen py-12 sm:py-16  bg-black bg-opacity-90" suppressHydrationWarning>
      {/* Header */}
      <div className="relative w-full bg-[url('/images/contactbg.png')] bg-cover bg-center text-[#FEE3FA] py-16 sm:py-20 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter">
            Thank you for your Interest in CreaSeils.
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto font-inter">
            We would love to hear from you and discuss how we can help bring your
            digital ideas to life. Here are the different ways you can get in
            touch with us.
          </p>
          <button className="mt-10 px-10 py-3 rounded-md text-white font-semibold bg-[#FF80C0] hover:bg-[#e573bf] transition-colors duration-200 transform hover:scale-[1.05]">
            Start Project
          </button>
        </div>
      </div>

      {/* Contact Form container */}
      <div className="max-w-4xl mx-auto mt-12 border border-[#FF80C0] rounded-lg p-6 space-y-6 text-white font-inter bg-transparent">
        {/* Name & Email inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Full Name", "Email"].map((label) => (
            <div
              key={label}
              className="border border-[#FF80C0] bg-[#242424]/50 rounded-md p-4"
            >
              <label
                htmlFor={label.toLowerCase().replace(/\s/g, "")}
                className="block text-white mb-2 font-semibold"
              >
                {label}
              </label>
              <input
                type={label === "Email" ? "email" : "text"}
                id={label.toLowerCase().replace(/\s/g, "")}
                placeholder="Type here"
                className="w-full bg-black bg-opacity-90 rounded-sm px-3 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF80C0] focus:border-transparent"
                suppressHydrationWarning
              />
            </div>
          ))}
        </div>

        {/* Contact Reasons */}
        <div className="border border-[#FF80C0] bg-[#242424]/50 rounded-md p-4">
          <div className="text-white font-semibold mb-4 text-lg">
            Why are you contacting us?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactReasons.map((reason) => {
              const selected = selectedReasons.includes(reason);
              return (
                <div
                  key={reason}
                  onClick={() => handleReasonChange(reason)}
                  className={`flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200 select-none ${
                    selected
                      ? "text-white"

                      : "bg-black bg-opacity-90 text-white  hover:text-[#FF80C0]"

                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-5 h-5 rounded-sm border-2 mr-3 ${
                      selected
                        ? "bg-black border-black"
                        : "border-[#FF80C0]"
                    }`}
                  >
                    {selected && (
                      <CheckIcon  className="w-4 h-4 text-[#FF80C0] " />
                    )}
                  </div>
                  <span className="text-sm">{reason}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget slider */}
        <div className="border border-[#FF80C0] bg-[#242424]/50 rounded-md p-4">
          <label className="block text-white font-semibold mb-1 text-lg">
            Your Budget
          </label>
          <p className="text-gray-300 text-sm mb-4">Slide to indicate your budget range</p>
          <input
            type="range"
            min="0"
            max="100000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-[#FF80C0] h-2 bg-black bg-opacity-80 rounded-lg appearance-none cursor-pointer"
            suppressHydrationWarning
          />
          <div className="text-white font-bold mt-2 text-lg">
            Budget: €{budget.toLocaleString()}
          </div>
        </div>

        {/* Message */}
        <div className="border border-[#FF80C0] bg-[#242424]/50 rounded-md p-4">
          <label
            htmlFor="message"
            className="block text-white font-semibold mb-2 text-lg"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Type here"
            className="w-full bg-black bg-opacity-90 rounded-sm px-3 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF80C0] focus:border-transparent resize-none"
            suppressHydrationWarning
          />
        </div>

        {/* Submit button */}
        <div className="text-center mt-6">
          <button className="px-10 py-3 rounded-md bg-[#FF80C0] text-black font-semibold hover:bg-[#e573bf] transition-colors duration-200 transform hover:scale-[1.05]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
