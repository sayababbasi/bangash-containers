// src/components/home/AboutSection.jsx
import React from "react";
import aboutImg from "/src/assets/images/whychooseus/BchOffice.jpg";
import { CheckCircle } from "lucide-react";

const AboutSectionHero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Bangash Containers"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-blue-800 font-semibold uppercase mb-3">
            About Bangash Containers
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            We Build Modular, Durable, and Modern Container Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bangash Containers is a professional manufacturer of modular
            buildings and prefabricated steel structures. We specialize in
            providing innovative, cost-effective, and eco-friendly living and
            workspace solutions across Pakistan and beyond.
          </p>

          <ul className="space-y-3 mb-6 text-gray-700">
            {[
              "Prefabricated homes and office cabins built for durability",
              "Fully customizable container-based solutions",
              "On-time delivery with precision manufacturing",
              "Trusted by corporate and industrial clients nationwide",
            ].map((point, i) => (
              <li key={i} className="flex items-start space-x-2">
                <CheckCircle className="text-blue-700 mt-1" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition">
           <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "100+", label: "Corporate Clients" },
          { number: "10+", label: "Years of Excellence" },
          { number: "50+", label: "Team Members" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
          >
            <h4 className="text-3xl font-bold text-blue-800">{item.number}</h4>
            <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSectionHero;
