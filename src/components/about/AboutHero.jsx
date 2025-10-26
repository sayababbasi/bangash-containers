// src/components/about/AboutHero.jsx
import React from "react";
import aboutHero from "../../assets/images/offer.jpg"; // use your own image

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Delivering Modular Container Solutions with Quality, Innovation, and Trust
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
