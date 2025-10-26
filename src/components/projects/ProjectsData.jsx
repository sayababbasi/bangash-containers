import React, { useState } from "react";
import { Home, MessageCircle, Mail, PhoneCall, Globe, X } from "lucide-react";
import banner from "../../assets/images/offer.jpg"; // banner image
import proj1 from "../../assets/images/offer.jpg"; // replace these with your real images
import proj2 from "../../assets/images/offer.jpg";
import proj3 from "../../assets/images/offer.jpg";
import proj4 from "../../assets/images/offer.jpg";
import proj5 from "../../assets/images/offer.jpg";
import proj6 from "../../assets/images/offer.jpg";
import proj7 from "../../assets/images/offer.jpg";
import proj8 from "../../assets/images/offer.jpg";
import proj9 from "../../assets/images/offer.jpg";
import proj10 from "../../assets/images/offer.jpg";

const Projects = () => {
  const projects = [
    { img: proj1, title: "Modular Office Units" },
    { img: proj2, title: "Prefab Container Housing" },
    { img: proj3, title: "Expandable Modular Villa" },
    { img: proj4, title: "Steel Structure Warehouse" },
    { img: proj5, title: "Quick Assembly Modular House" },
    { img: proj6, title: "Prefab Medical Unit" },
    { img: proj7, title: "Container Café Project" },
    { img: proj8, title: "Emergency Shelter Module" },
    { img: proj9, title: "Portable School Unit" },
    { img: proj10, title: "Construction Site Camp" },
    // Add more as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  const [selectedImage, setSelectedImage] = useState(null);

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="relative bg-white text-[#0a1f44]">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[400px] w-full">
        <img src={banner} alt="Project Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">PROJECT</h1>
          <p className="text-sm md:text-base">
            We Provide Modular Construction Solutions for Global Customers
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 text-sm px-6 py-3 flex items-center space-x-2">
        <Home size={16} className="text-blue-600" />
        <span className="text-gray-500">Home</span>
        <span className="text-gray-400">{">"}</span>
        <span className="text-gray-700 font-medium">Project</span>
      </div>

      {/* Project Description */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0a1f44]">
          Our Project
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          The integrated house consists of structural, ground, wall and roof systems. 
          Each unit is completed in the factory and assembled on site. Integrated houses 
          can be dismantled and moved without land damage — transforming housing into 
          movable property, separating "house" and "land" in real estate.
        </p>
      </section>

      {/* Project Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProjects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(project.img)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center text-sm font-medium text-[#0a1f44]">
              {project.title}
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center pb-10 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"}`}
        >
          {"<"}
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"
          }`}
        >
          {">"}
        </button>
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project"
            className="max-w-3xl max-h-[80vh] object-contain rounded"
          />
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
        </div>
      )}

      {/* Floating Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
        <a href="#" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
          <MessageCircle size={18} />
        </a>
        <a href="mailto:sales@hbfzlx.com" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
          <Mail size={18} />
        </a>
        <a href="tel:+8619030279888" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
          <PhoneCall size={18} />
        </a>
        <a href="https://www.hbfzlx.com" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
          <Globe size={18} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
