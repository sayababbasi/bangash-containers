// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhatWeOffer from "../components/home/WhatWeOffer";
import ExperienceSection from "../components/home/ExperienceSection";
import StatsSection from "../components/home/StatsSection";
import WorldwideProjects from "../components/home/WorldwideProjects";
import ClientsSlider from "../components/home/ClientsSlider";
import ContactCTA from "../components/home/ContactCTA";
import ContactCTA1 from "../components/home/ContactCTA1";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import BlogsSection from "../components/home/BlogsSection";
import LeadPopup from "../components/common/LeadPopup";


const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <ExperienceSection />
      <StatsSection />
      <WorldwideProjects />
      <ClientsSlider />
      <ContactCTA1 />
      <ContactCTA />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <BlogsSection />
      <LeadPopup />
    </>
  );
};

export default Home;
