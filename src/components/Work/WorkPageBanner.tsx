import React from "react";

const WorkPageBanner = () => {
  return (
    <section className="relative w-full bg-[url('/images/workpagebanner.png')] bg-cover bg-center bg-no-repeat w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center text-center">
      {/* Add a semi-transparent overlay with a backdrop blur effect */}
      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-[#FF80C0]/50 rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FEE3FA] mb-4 md:mb-6 drop-shadow-2xl">
            Our Works
          </h1>
          <p className="text-base md:text-lg text-[#FEE3FA] leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Discover a portfolio of visually stunning and strategically crafted
            digital projects that showcase our creativity and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkPageBanner;
