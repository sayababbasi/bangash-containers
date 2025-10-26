import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    id: 1,
    title: "The Rise of Modular Construction in Pakistan",
    date: "October 10, 2025",
    author: "Team Bangash Containers",
    image:
      "https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Discover how modular container construction is reshaping Pakistan’s housing and infrastructure landscape — faster, cheaper, and eco-friendly.",
  },
  {
    id: 2,
    title: "Portable Offices: The Future of On-Site Workspaces",
    date: "September 25, 2025",
    author: "Engr. Hassan Raza",
    image:
      "https://images.pexels.com/photos/8478053/pexels-photo-8478053.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Learn why container-based offices are becoming the top choice for construction and oil companies across Islamabad, Karachi, and Lahore.",
  },
  {
    id: 3,
    title: "Portable Offices: The Future of On-Site Workspaces",
    date: "September 25, 2025",
    author: "Engr. Hassan Raza", 
    image:
      "https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    excerpt:
      "Learn why container-based offices are becoming the top choice for construction and oil companies across Islamabad, Karachi, and Lahore.",
  },
  
  {
    id: 4,
    title: "Sustainable Construction with Recycled Containers",
    date: "July 20, 2025",
    author: "Engr. Bilal Ahmed",
    image:
      "https://images.pexels.com/photos/9570240/pexels-photo-9570240.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Container-based architecture promotes eco-friendly construction by reducing waste and reusing existing steel structures efficiently.",
  },
];

const BlogsSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
            Latest News & Insights
          </h2>
          <div className="mx-auto w-24 h-1 bg-blue-800 mt-3 mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Stay up to date with our latest innovations, construction updates,
            and modular solutions shaping Pakistan’s future.
          </p>
        </div>

        {/* Swiper Controls */}
        <div className="absolute top-[50%] left-4 z-10 cursor-pointer swiper-button-prev-custom bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition">
          <ChevronLeft size={22} />
        </div>
        <div className="absolute top-[50%] right-4 z-10 cursor-pointer swiper-button-next-custom bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition">
          <ChevronRight size={22} />
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#0a1f44] mb-2 hover:text-blue-800 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {blog.date} • {blog.author}
                  </p>
                  <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <button className="mt-5 bg-blue-900 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800 transition">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogsSection;
