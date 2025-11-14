import React from "react";
import { Link } from "react-router-dom";
import offerImage from "../assets/images/offer.jpg"; // Correct image path

const blogs = [
  {
    id: 1,
    title: "Transforming Shipping Containers into Modern Workspaces",
    image: "/src/assets/images/whychooseus/containerhome.jpg",
    date: "October 20, 2025",
    excerpt:
      "Discover how Bangash Containers is redefining workspaces using eco-friendly, cost-effective, and modular container designs.",
  },
  {
    id: 2,
    title: "Why Container Homes Are the Future of Sustainable Living",
    image: "/src/assets/images/whychooseus/containeroffice.jpg",
    date: "September 10, 2025",
    excerpt:
      "From concept to comfort — see how container homes are offering an affordable and eco-conscious solution for modern housing.",
  },
  {
    id: 3,
    title: "Storage Solutions That Save You Space and Money",
    image: "/src/assets/images/whychooseus/containerhall.jpg",
    date: "August 22, 2025",
    excerpt:
      "Explore smart storage innovations by Bangash Containers designed for businesses that demand flexibility and reliability.",
  },
  {
    id: 4,
    title: "Innovative Prefab Designs for Modern Offices",
    image: "/src/assets/images/whychooseus/BchOffice.jpg",
    date: "July 15, 2025",
    excerpt:
      "Revolutionizing office spaces with portable and stylish prefab container designs tailored for modern business needs.",
  },
  {
    id: 5,
    title: "Eco-Friendly Solutions: The Rise of Green Containers",
    image: "/src/assets/images/whychooseus/PreFabHomes.jpg",
    date: "June 02, 2025",
    excerpt:
      "How Bangash Containers is contributing to sustainability through recycled, energy-efficient container builds.",
  },
  {
    id: 6,
    title: "From Site Offices to Luxury Cabins — Container Evolution",
    image: "/src/assets/images/whychooseus/PreFabCabin.jpg",
    date: "May 10, 2025",
    excerpt:
      "Tracing the evolution of shipping containers from industrial use to stunning residential and commercial projects.",
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#f9fafb]">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,31,68,0.9), rgba(10,31,68,0.7)), url('/src/assets/images/offer.jpg')",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Insights, Innovation & Inspiration
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
            Stay updated with the latest trends, technologies, and success stories from
            <span className="text-[#facc15] font-semibold"> Bangash Containers </span> —
            your trusted container solutions partner.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-52 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                 {blog.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-[#0a1f44] mt-3 group-hover:text-[#facc15] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="mt-5 inline-block text-[#0a1f44] font-semibold hover:text-[#facc15] transition-colors text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA Section */}
      <div className="bg-[#0a1f44] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe for Exclusive Updates & Offers
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Get notified about our latest container innovations, design ideas, and
            limited-time promotions.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-lg w-full text-black outline-none focus:ring-2 focus:ring-[#facc15] text-sm"
            />
            <button
              type="submit"
              className="bg-[#facc15] text-[#0a1f44] font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
