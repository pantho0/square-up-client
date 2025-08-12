import React from "react";
import { Button } from "@heroui/button";

export const Banner = () => {
  return (
    // The main section is now more responsive. We've changed bg-contain to bg-cover
    // to ensure the image always fills the space, and adjusted the height to be
    // more flexible on different screen sizes.
    <section className="bg-[url(/images/banner.png)] bg-no-repeat bg-cover bg-center min-h-[75vh] md:min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center flex-col items-center space-y-6 md:space-y-8 text-center">
          {/* The heading now uses responsive font sizes to scale down on smaller screens. */}
          <div className="w-full max-w-3xl">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#FEE3FA] drop-shadow-lg">
              A Studio For Digital Products That Work
            </h2>
          </div>

          {/* This section now uses flex-wrap to ensure the buttons wrap to the next line on mobile. */}
          <div className="border border-[#FF80C0] px-4 py-3 sm:px-6 sm:py-4 rounded-lg bg-pink-500/20 backdrop-blur-sm">
            <p className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold text-[#FEE3FA]">
              <span>For</span>
              {/* The buttons are now properly spaced and wrap */}
              <Button className="font-semibold text-sm sm:text-base text-[#FEE3FA] bg-[#FF80C0] rounded-full px-4 py-2 hover:bg-[#ff69b4] transition-colors duration-200">
                Startup
              </Button>

              <Button className="font-semibold text-sm sm:text-base text-[#FEE3FA] bg-[#FF80C0] rounded-full px-4 py-2 hover:bg-[#ff69b4] transition-colors duration-200">
                Enterprise leaders
              </Button>

              <Button className="font-semibold text-sm sm:text-base text-[#FEE3FA] bg-[#FF80C0] rounded-full px-4 py-2 hover:bg-[#ff69b4] transition-colors duration-200">
                Media & Publishers
              </Button>

              <Button className="font-semibold text-sm sm:text-base text-[#FEE3FA] bg-[#FF80C0] rounded-full px-4 py-2 hover:bg-[#ff69b4] transition-colors duration-200">
                Social Good
              </Button>
            </p>
          </div>

          {/* The final button group is also made responsive with flex-row and a gap. */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="font-semibold text-base sm:text-lg px-6 py-3 rounded-lg border-2 border-gray-800 text-[#FEE3FA] bg-[#13050C] hover:bg-[#2a111a] transition-colors duration-200">
              Nos Travaux
            </Button>
            <Button className="font-semibold text-base sm:text-lg px-6 py-3 rounded-lg text-[#FEE3FA] bg-[#FD46CD] hover:bg-[#ff69b4] transition-colors duration-200">
              Nos Travaux
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
