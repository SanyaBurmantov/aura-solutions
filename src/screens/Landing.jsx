import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import HomeSection from "../components/Sections/HomeSection";
import Services from "../components/Sections/Services";
import BeneficialSection from "../components/Sections/BeneficialSection";
import AdvantagesSection from "../components/Sections/AdvantagesSection";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <HomeSection />
      {/* <Services /> */}
      <BeneficialSection />
      <AdvantagesSection />
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
