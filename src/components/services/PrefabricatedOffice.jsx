import React from "react";
import { Link } from "react-router-dom";
const PrefabricatedOffice = () => {
  const features = [
    {
      title: "Modern & Efficient Design",
      description:
        "Our prefabricated offices offer a modern and efficient workspace solution that can be deployed quickly at any location.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Custom Layout Options",
      description:
        "Each office can be customized for size, layout, and internal partitions to perfectly fit your organization’s needs.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Fully Equipped Interiors",
      description:
        "Equipped with lighting, insulation, air conditioning, and electrical fittings — providing a professional environment instantly.",
      image: "../../assets/images/offer.jpg",
    },
    {
      title: "Sustainable & Reusable",
      description:
        "Constructed with eco-friendly materials and designed to be reused or relocated without construction waste.",
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
          <h1 className="text-5xl font-bold mb-4">Prefabricated Offices</h1>
          <p className="max-w-2xl text-lg">
            Smart, movable, and ready-to-use office structures designed for
            modern businesses and project sites.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Workspace Reinvented</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our prefabricated office units are designed to deliver productivity and
          comfort without the need for traditional construction. Perfect for
          remote work sites, start-ups, or temporary setups, these offices are
          fast to assemble, easy to relocate, and built for long-lasting use.
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
                to="/product5"
                className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-[#0a1f44] transition-all"
              >
                View Product
              </Link>
            </section>

      {/* CTA Section */}
      <section className="bg-[#0a1f44] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Need a Portable Office Solution?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          From on-site offices to business spaces, our prefabricated structures
          are built for flexibility and function. Let’s design one for your
          business today.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default PrefabricatedOffice;
