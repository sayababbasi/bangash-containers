import React from "react";
import { Link } from "react-router-dom";

import interiorImg from "../../assets/images/offer.jpg";
import ecoImg from "../../assets/images/offer.jpg";
import modernImg from "../../assets/images/offer.jpg";
import durableImg from "../../assets/images/offer.jpg";
import transportImg from "../../assets/images/offer.jpg";
import smartImg from "../../assets/images/offer.jpg";

const PrefabricatedHomes = () => {
  const features = [
{
      title: "Modern Compact Design",
      desc: "Stylish, space-efficient container homes built for both comfort and functionality.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Eco-Friendly Construction",
      desc: "Made with recycled materials and energy-efficient systems for a sustainable lifestyle.",
      image: "/src/assets/images/product2/containerhome.jpg",
    },
    {
      title: "Fully Furnished Interiors",
      desc: "Includes modern flooring, lighting, kitchen setups, and smart storage solutions.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Smart Living Ready",
      desc: "Integrate smart devices for climate control, lighting, and security to enhance convenience.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Strong & Durable",
      desc: "Built using high-grade steel containers designed to withstand extreme environments.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Easy Setup & Relocation",
      desc: "Portable and modular — can be installed, expanded, or relocated effortlessly.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/images/offer.jpg')", // Change this image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prefabricated Homes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Smart, stylish, and sustainable living spaces — built to last, ready to move.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
            Modern Living, Redefined
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our prefabricated homes are designed to offer you luxury and convenience
            at an affordable price. Built with precision engineering and premium
            materials, these homes are perfect for both urban and remote living.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product CTA */}
            <section className="py-20 px-6 bg-white text-center">
              <h2 className="text-3xl font-semibold mb-4 text-[#0a1f44]">
                Explore Related Product
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-600">
                Discover our range of container home models built to perfection.
              </p>
              <Link
                to="/product4"
                className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-[#0a1f44] transition-all"
              >
                View Product
              </Link>
            </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Want Your Dream Prefab Home?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Contact our experts today to explore customizable designs, layouts, and
          finishes to build your perfect prefabricated home.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default PrefabricatedHomes;
