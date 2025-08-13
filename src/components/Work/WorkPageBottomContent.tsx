import React from "react";

const WorkPageBottomContent = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/workpagebottombanner.png')] bg-cover bg-center bg-no-repeat w-full min-h-[50vh] md:min-h-[75vh] flex items-center justify-center text-center py-16 md:py-24">
      {/* Content Container */}
      {/* Added flex, items-center, and justify-center to vertically and horizontally center the content */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 md:px-8">
        <div className="bg-white/5 backdrop-blur-sm border border-[#FF80C0]/50 rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-8xl mx-auto">
          {/* Logo/Icon Placeholder */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-[#FF80C0] rounded-xl flex items-center justify-center mb-6 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.25 7.5-7.5 7.5m10.669-9.155a4.5 4.5 0 0 1-5.772 1.45l-4.708 4.708a4.5 4.5 0 0 1-1.45 5.772v0a4.5 4.5 0 0 0 6.364-6.364l1.45-1.45a4.5 4.5 0 0 0-6.364-6.364l-1.45 1.45zm5.772 1.45a4.5 4.5 0 0 0-1.45-5.772l-1.45-1.45a4.5 4.5 0 0 0-6.364 6.364l1.45 1.45a4.5 4.5 0 0 0 5.772 1.45z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FEE3FA] mb-4 drop-shadow-lg">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations. Our
            multidisciplinary team works closely together to ensure seamless
            collaboration and a unified vision for your digital product.
          </p>
          <button className="bg-[#FF80C0] text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#ff69b4] transition-colors duration-200">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkPageBottomContent;
