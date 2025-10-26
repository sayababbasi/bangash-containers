import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Transforming Shipping Containers into Modern Workspaces",
    image: "/assets/images/offer.jpg",
    date: "October 20, 2025",
    content: `
      At Bangash Containers, we believe innovation starts with simplicity.
      Shipping containers have transformed from simple steel boxes into dynamic workspaces that inspire creativity and efficiency.

      Our modular container offices are designed to adapt to any business environment — whether it's a construction site, startup hub, or remote office setup.
      Built with eco-friendly materials, these spaces offer flexibility, cost-effectiveness, and durability.
        
      Each container workspace is fully customizable — from insulation and HVAC systems to glass facades and interior furnishings.
      We focus on delivering both function and aesthetics to match your brand’s identity and work culture.

      Discover the future of work — sustainable, mobile, and smart.
    `,
  },
  {
    id: 2,
    title: "Why Container Homes Are the Future of Sustainable Living",
    image: "/assets/images/offer.jpg",
    date: "September 10, 2025",
    content: `
      Container homes are redefining modern architecture — merging sustainability with affordability.
      With increasing awareness of eco-conscious living, Bangash Containers crafts homes that are stylish, energy-efficient, and durable.

      Every container home is built using recycled materials and designed to reduce carbon footprint while maintaining luxury and comfort.
      From single-unit homes to multi-story residences, our designs offer modular flexibility.

      It's not just housing; it's a lifestyle — one that promotes environmental responsibility and innovation in living spaces.
    `,
  },
  {
    id: 3,
    title: "Storage Solutions That Save You Space and Money",
    image: "/assets/images/offer.jpg",
    date: "August 22, 2025",
    content: `
      Bangash Containers offers cost-effective storage solutions for businesses and individuals.
      Our storage containers are engineered for durability, weather resistance, and security.

      Whether you need temporary storage for construction materials or long-term warehousing, our containers are customizable to fit your exact needs.

      Optimize your operations with flexible and scalable storage systems that save both space and money.
    `,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-[#0a1f44] mb-4">
          Blog Not Found 😕
        </h1>
        <Link
          to="/blogs"
          className="text-[#facc15] font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#f9fafb] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Blog Image */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />

          {/* Blog Content */}
          <div className="p-10">
            <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
            <h1 className="text-4xl font-bold text-[#0a1f44] mb-6 leading-snug">
              {blog.title}
            </h1>
            <div className="border-l-4 border-yellow-400 pl-4 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-10">
              <Link
                to="/blogs"
                className="inline-flex items-center bg-[#facc15] text-[#0a1f44] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
