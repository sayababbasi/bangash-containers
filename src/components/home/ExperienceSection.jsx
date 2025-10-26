import React, { useState } from "react";
import { Play, X } from "lucide-react";

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-[#0a1f44] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/src/assets/images/factory-bg.jpg')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-6xl font-bold mb-2">10+</h2>
          <h3 className="text-3xl font-semibold leading-tight">
            Years of Production Experience
          </h3>

          <button className="mt-6 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0a1f44] transition">
           <a href="/about">View More</a> 
          </button>

          {/* White Box */}
          <div className="mt-10 bg-white text-[#0a1f44] rounded-2xl shadow-xl p-6 space-y-6">
            {/* Card 1 */}
            <div>
              <div className="flex items-start gap-3">
                {/* Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#0a1f44"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18v6H3V3zM3 15h18v6H3v-6zM3 9l9 6 9-6"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">
                    Integrated Machining
                  </h4>
                  <p className="text-sm text-gray-600">
                    High-efficient manufacturing in the factory can contribute
                    to 60% cost savings. We have a large production capacity and
                    inventory of prefabricated kits, enabling us to meet your
                    needs quickly.
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="flex items-start gap-3">
                {/* Wrench Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#0a1f44"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9h6v6H9V9z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">OEM/ODM Factory</h4>
                  <p className="text-sm text-gray-600">
                    We provide OEM/ODM services all over the world. We can
                    customize turnkey modular solutions based on your needs,
                    including site housing, camp buildings, and offices.
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
                <img
                  src="/src/assets/images/offer.jpg"
                  alt=""
                  className="rounded-md object-cover h-20 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE WITH PLAY ICON */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/src/assets/images/offer.jpg"
            alt="Factory"
            className="w-full h-[500px] object-cover"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-60 transition"
          >
            <Play className="w-14 h-14 text-white bg-[#0a1f44] rounded-full p-3" />
          </button>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-black rounded-lg w-[90%] md:w-[70%] lg:w-[60%] aspect-video">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white bg-red-600 hover:bg-red-700 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* YouTube or local video */}
            <iframe 
            width="640"
            height="480"
            src="https://www.youtube.com/embed/uP3TaakVo3c?autoplay=1&mute=1"
            title="HOW CONTAINER MADE BY BANGASH CONTAINER HOME"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
             ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
