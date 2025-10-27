import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import client1 from "/bangash-containers/src/assets/images/Clients/mtcc.png";
import client2 from "/bangash-containers/src/assets/images/Clients/nlc.png";
import client3 from "/bangash-containers/src/assets/images/Clients/ptcl.png";
import client4 from "/bangash-containers/src/assets/images/Clients/Sky.png";
import client5 from "/bangash-containers/src/assets/images/Clients/un.png";
import client6 from "/bangash-containers/src/assets/images/Clients/maersk.png";

const clients = [
  { img: client1, name: "Client One" },
  { img: client2, name: "Client Two" },
  { img: client3, name: "Client Three" },
  { img: client4, name: "Client Four" },
  { img: client5, name: "Client Five" },
  { img: client6, name: "Client Six" },
];

const ClientsSlider = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Valuable Clients
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-600 mt-2 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We are proud to serve some of the most respected organizations in the
          industry our clients trust us to deliver excellence and reliability.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000} // smooth continuous speed
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={client.img}
                  alt={client.name}
                  className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
