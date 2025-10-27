import React from "react";
import aboutImg from "/src/assets/images/whychooseus/bchffice.jpg";
import { Building2, Users, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative group">
          <img
            src={aboutImg}
            alt="About Bangash Containers"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover transform transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-900/20 rounded-2xl group-hover:bg-blue-900/0 transition duration-500"></div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-900">Bangash Containers</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Bangash Containers is a leading provider of innovative and sustainable
            prefabricated container structures in Pakistan. We specialize in the
            design, manufacturing, and installation of high-quality container
            offices, homes, cafés, and commercial spaces. With a strong focus on
            craftsmanship, durability, and affordability we transform standard
            shipping containers into stylish, functional, and eco-friendly spaces.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to deliver versatile container-based solutions that meet
            the evolving needs of construction, housing, and business environments —
            ensuring premium quality and satisfaction in every project we undertake.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <Building2 className="text-blue-900 mb-2" size={32} />
              <h3 className="text-xl font-bold text-gray-800">10+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <Users className="text-blue-900 mb-2" size={32} />
              <h3 className="text-xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <CheckCircle className="text-blue-900 mb-2" size={32} />
              <h3 className="text-xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-500 text-sm">Projects Delivered</p>
            </div>
          </div>
          <a href="/about">
            <button className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
