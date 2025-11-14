import React from "react";
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

// 🖼️ Import all images
// 🖼️ Import all images
import mainImg from "/src/assets/images/whychooseus//prefabhostel.jpg";
import interior1 from "/src/assets/images/product1/containerhallint.jpg";
import interior2 from "/src/assets/images/product1/containerhallint2.jpg";
import interior3 from "/src/assets/images/product1/containerhallint3.jpg";
import interior4 from "/src/assets/images/product1/containerhallint4.jpg";
import case1 from "/src/assets/images/product1/containerhallint5.jpg";
import case2 from "/src/assets/images/product1/containerhallint6.jpg";
import case3 from "/src/assets/images/product1/containerhallint7.jpg";
import case4 from "/src/assets/images/product1/containerhallint8.jpg";;
import related1 from "/src/assets/images/WhyChooseUs/ContainerHome.jpg";
import related2 from "/src/assets/images/WhyChooseUs/ContainerOffice.jpg";
import related3 from "/src/assets/images/WhyChooseUs/PreFabCabin.jpg";
import related4 from "/src/assets/images/WhyChooseUs/PreFabHostel.jpg";

const P1 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center">
          <img
            src={mainImg}
            alt="Modular Flat Pack Container House"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
            Modular Flat Pack Container House
          </h2>
          <p className="text-gray-600 mb-4">
            Modular flat-pack houses offer modern, efficient, and fast housing
            solutions with high-quality steel frame construction, thermal
            insulation, and mobility options.
          </p>

          <div className="space-y-2 text-sm">
            <p><strong>Material:</strong> Galvanized Steel + Sandwich Panel</p>
            <p><strong>Place of Origin:</strong> Hebei, China</p>
            <p><strong>Brand Name:</strong> Bangash Container</p>
            <p><strong>MOQ:</strong> 1 Set</p>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="bg-[#0a1f44] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
              Get a Quote
            </button>
            <button className="border border-[#0a1f44] text-[#0a1f44] px-5 py-2 rounded-md hover:bg-[#0a1f44] hover:text-white transition">
              Contact Us
            </button>
          </div>

          <div className="mt-6 flex space-x-4">
            <Facebook size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Linkedin size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Twitter size={18} className="text-[#0a1f44] hover:text-blue-400 cursor-pointer" />
            <Instagram size={18} className="text-[#0a1f44] hover:text-pink-500 cursor-pointer" />
            <Mail size={18} className="text-[#0a1f44] hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
          Product Introduction
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          The modular flat-pack container house is designed using precision
          engineering for easy assembly, transport, and sustainability. Featuring
          a steel structure, eco-friendly insulation, and weatherproof materials,
          it’s ideal for residential, office, or temporary housing.
        </p>

        {/* Interior Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src={interior1} alt="Interior 1" className="rounded-md shadow" />
          <img src={interior2} alt="Interior 2" className="rounded-md shadow" />
          <img src={interior3} alt="Interior 3" className="rounded-md shadow" />
          <img src={interior4} alt="Interior 4" className="rounded-md shadow" />
        </div>

        {/* Parameter Table */}
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">
          Parameter Table
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Material</td>
                <td className="border px-3 py-2">Galvanized Steel + EPS Panel</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Roof</td>
                <td className="border px-3 py-2">Corrugated Steel Sheet</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Wall Panel</td>
                <td className="border px-3 py-2">EPS / PU / Rockwool Sandwich Panel</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Window</td>
                <td className="border px-3 py-2">PVC Sliding Window</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Door</td>
                <td className="border px-3 py-2">Steel Security Door</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Engineering Cases */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
            Engineering Cases
          </h3>
          <p className="text-gray-600 mb-4">
            Our modular houses are used worldwide in housing projects, offices,
            and military camps. Below are a few examples of successful
            implementations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={case1} alt="Case 1" className="rounded-md shadow" />
            <img src={case2} alt="Case 2" className="rounded-md shadow" />
            <img src={case3} alt="Case 3" className="rounded-md shadow" />
            <img src={case4} alt="Case 4" className="rounded-md shadow" />
          </div>
        </div>
      </div>

      {/* Get a Quote */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
          Get A Quote
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone/WhatsApp"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <textarea
            rows="4"
            placeholder="Message/Requirements"
            className="border border-gray-300 rounded-md p-2 w-full"
          ></textarea>
          <button className="bg-[#0a1f44] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">
          Related Products
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            onClick={() => navigate("/product1")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related1} alt="Product A" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">
              Expandable Container Home
            </p>
          </div>
          <div
            onClick={() => navigate("/product2")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related2} alt="Product B" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">
              Office Container
            </p>
          </div>
          <div
            onClick={() => navigate("/product3")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related3} alt="Product C" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">
              Prefabricated Room
            </p>
          </div>
          <div
            onClick={() => navigate("/product4")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related4} alt="Product D" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">
              Living Container House
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P1;
