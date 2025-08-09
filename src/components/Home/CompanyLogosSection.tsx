import React from "react";
import Image from "next/image";

interface CompanyLogo {
  name: string;
  src: string;
  alt: string;
}

interface CompanyLogosSectionProps {
  title?: string;
  logos?: CompanyLogo[];
  className?: string;
}

const defaultLogos: CompanyLogo[] = [
  {
    name: "Zapier",
    src: "/logos/zapier.svg", // You'll need to add these logo files to your public/logos folder
    alt: "Zapier logo",
  },
  {
    name: "Spotify",
    src: "/logos/spotify.svg",
    alt: "Spotify logo",
  },
  {
    name: "Zoom",
    src: "/logos/zoom.svg",
    alt: "Zoom logo",
  },
  {
    name: "Slack",
    src: "/logos/slack.svg",
    alt: "Slack logo",
  },
  {
    name: "Amazon",
    src: "/logos/amazon.svg",
    alt: "Amazon logo",
  },
  {
    name: "Adobe",
    src: "/logos/adobe.svg",
    alt: "Adobe logo",
  },
];

const CompanyLogosSection: React.FC<CompanyLogosSectionProps> = ({
  title = "Plus de 250 entreprises nous font confiance",
  logos = defaultLogos,
  className = "",
}) => {
  return (
    <section className={`bg-[#13050C] px-4 ${className} -mt-30`}>
      <div className="max-w-6xl mx-auto">
        {/* Header with pill-shaped background and decorative lines */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            {/* Left decorative line */}
            <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent to-gray-600"></div>

            {/* Pill-shaped container */}
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-600 bg-transparent">
              <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
                {title}
              </span>
            </div>

            {/* Right decorative line */}
            <div className="hidden sm:block w-16 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>
        </div>

        {/* Logos grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain filter brightness-0 invert"
                priority={index < 3} // Load first 3 logos with priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
