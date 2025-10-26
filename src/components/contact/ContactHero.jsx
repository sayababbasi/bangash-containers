// src/components/contact/ContactHero.jsx
import React from "react";
import contactHero from "../../assets/images/offer.jpg"; // your own image path

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${contactHero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Let’s Discuss Your Next Modular Container Project Together
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
