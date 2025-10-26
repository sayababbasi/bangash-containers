import React from "react";
import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#0a1f44] text-white text-sm py-2 px-4 md:px-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0 text-center md:text-left">
      
      {/* Left Section - Address */}
      <div className="flex justify-center md:justify-start items-center space-x-2">
        <MapPin size={14} className="text-white-400" />
        <p>G14/1, Sirinagar Highway, Islamabad</p>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <Facebook size={16} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <Instagram size={16} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <Linkedin size={16} />
        </a>
      </div>

      {/* Right Section - Email & Phone */}
      <div className="flex justify-center md:justify-end items-center flex-wrap gap-2">
        <a href="mailto:info@bangashcontainers.com" className="hover:underline">
          info@bangashcontainers.com
        </a>
        <span className="hidden md:inline">|</span>
        <a href="tel:+923359835538" className="hover:underline">
          +92 335 9835538
        </a>
      </div>
    </div>
  );
};

export default Topbar;
