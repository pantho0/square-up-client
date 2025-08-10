import { Banner } from "../components/Home/Banner";
import CompanyLogosSection from "../components/Home/CompanyLogosSection";
import OurServices from "../components/Home/OurServices";
import TestimonialSection from "../components/Home/TestimonialSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <CompanyLogosSection />
      <OurServices />
      <WhyChooseUs />
      <TestimonialSection />
    </>
  );
}
