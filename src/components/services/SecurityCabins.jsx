import React from "react";
import { Link } from "react-router-dom";
const SecurityCabins = () => {
  const features = [
    {
      title: "Compact & Functional Design",
      description:
        "Our security cabins are designed to offer maximum utility in limited space — perfect for guardrooms, checkpoints, and site offices.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Durable Construction",
      description:
        "Built with weather-resistant steel and high-quality materials ensuring long-term strength and minimal maintenance.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Portable & Easy to Install",
      description:
        "These cabins are lightweight and easily movable, offering quick setup at any location.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Custom Interiors",
      description:
        "Available with built-in furniture, windows, lighting, and air conditioning options to suit your requirements.",
      image: "../../assets/images/offer.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('/src/assets/images/offer.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center px-6">
          <h1 className="text-5xl font-bold mb-4">Security Cabins</h1>
          <p className="max-w-2xl text-lg">
            Strong, portable, and ready-to-use security cabins tailored for site
            offices, checkpoints, and guard posts.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Built for Safety & Comfort</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our prefabricated security cabins are the ideal solution for on-site
          safety management and quick deployment. These portable structures are
          crafted for durability, comfort, and efficiency, with options for
          electrical fittings, insulation, and interior customization.
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
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
                to="/product6"
                className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-[#0a1f44] transition-all"
              >
                View Product
              </Link>
            </section>

      {/* CTA Section */}
      <section className="bg-[#0a1f44] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Looking for Custom Cabins?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          We design and deliver customized security cabins that match your
          operational needs. Contact us to discuss your requirements.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default SecurityCabins;
