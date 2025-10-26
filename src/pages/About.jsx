// src/pages/About.jsx
import React from "react";
import AboutSectionHero from "../components/about/AboutSection"
import AboutHero from "../components/about/AboutHero"
import WhatWeOffer from "../components/home/WhatWeOffer";
import WhyChooseUs from "../components/home/WhyChooseUs";

const About = () => {
  return (
    <>
    <AboutHero />
    <AboutSectionHero />
    <WhatWeOffer />
    <WhyChooseUs />
    
    </>

  );

}

export default About