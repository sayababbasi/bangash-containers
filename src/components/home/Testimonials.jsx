import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahmed Khan",
    position: "Project Manager, Al Noor Construction",
    message:
      "Bangash Containers delivered exceptional quality on time! Their modular site offices were sturdy, well-designed, and easy to assemble. Truly professional service from start to finish.",
    image: "https://images.pexels.com/photos/1181718/pexels-photo-1181718.jpeg?auto=compress&cs=tinysrgb&w=600", // Pakistani male
  },
  {
    name: "Sarah Malik",
    position: "Procurement Head, BuildSmart Pvt. Ltd.",
    message:
      "We ordered customized container homes for our workforce housing project — the quality and finishing exceeded expectations. Highly recommended for anyone needing portable solutions.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600", // Pakistani female
  },
  {
    name: "Engr. Hassan Raza",
    position: "Civil Engineer, PakHousing Developers",
    message:
      "Bangash Containers provided us with tailored storage units for on-site use. The durability and customer support were outstanding. A trusted partner for construction logistics.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600", // Engineer-looking
  },
  {
    name: "Ayesha Siddiqui",
    position: "Operations Director, GreenBuild Solutions",
    message:
      "From consultation to delivery, everything was seamless. The team’s expertise in modular container design saved us both time and cost on our project.",
    image: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600", // Pakistani businesswoman
  },
  {
    name: "Bilal Ahmed",
    position: "Site Supervisor, UrbanEdge Builders",
    message:
      "Excellent craftsmanship and support team. The containers were ready faster than expected and the quality was top-notch. Definitely our go-to supplier now!",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600", // Pakistani male
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a1f44] mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-lg text-[#0a1f44]">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">{t.position}</p>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  “{t.message}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
