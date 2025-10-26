// // import React, { useState, useEffect } from "react";
// // import hero1 from "../../assets/images/hero/hero1.png";
// // import hero2 from "../../assets/images/hero/hero2.jpg";
// // import hero3 from "../../assets/images/hero/hero3.webp";
// // import hero4 from "../../assets/images/hero/hero2.1.jpg";
// // import hero5 from "../../assets/images/hero/office.webp";

// // const slides = [
// //   {
// //     image: hero1,
// //     title: "Modern Prefabricated Container Solutions",
// //     subtitle: "We design, build, and deliver portable structures with precision and quality.",
// //     button: "Get a Quote",
// //   },
// //   {
// //     image: hero2,
// //     title: "Customized Office & Living Containers",
// //     subtitle: "Tailored container offices and homes built to match your vision.",
// //     button: "Explore Projects",
// //   },
// //   {
// //     image: hero3,
// //     title: "Sustainable and Durable Construction",
// //     subtitle: "Experience durability, mobility, and modern design in every build.",
// //     button: "Contact Us",
// //   },
// //   {
// //     image: hero4,
// //     title: "Modern Prefabricated Container Solutions",
// //     subtitle: "We design, build, and deliver portable structures with precision and quality.",
// //     button: "Get a Quote",
// //   },
// //   {
// //     image: hero5,
// //     title: "Customized Office & Living Containers",
// //     subtitle: "Tailored container offices and homes built to match your vision.",
// //     button: "Explore Projects",
// //   },
 
// // ];

// // export default function HeroSection() {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="relative w-full h-[85vh] overflow-hidden">
// //       {/* Slides */}
// //       {slides.map((slide, index) => (
// //         <div
// //           key={index}
// //           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
// //             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
// //           }`}
// //           style={{
// //             backgroundImage: `url(${slide.image})`,
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //           }}
// //         >
// //           {/* Overlay */}
// //           <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// //           {/* Content */}
// //           <div className="relative z-20 flex flex-col justify-center items-start text-left text-white h-full px-6 md:px-16 max-w-2xl">
// //             <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
// //               {slide.title}
// //             </h1>
// //             <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
// //             <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition">
// //               {slide.button}
// //             </button>
// //           </div>
// //         </div>
// //       ))}

// //       {/* Dots */}
// //       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrent(index)}
// //             className={`w-3 h-3 rounded-full transition-all ${
// //               index === current ? "bg-yellow-500 w-6" : "bg-gray-300"
// //             }`}
// //           ></button>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import hero1 from "../../assets/images/hero/hero1.png";
// import hero2 from "../../assets/images/hero/hero2.jpg";
// import hero3 from "../../assets/images/hero/hero3.webp";
// import hero4 from "../../assets/images/hero/hero2.1.jpg";
// import hero5 from "../../assets/images/hero/office.webp";

// const slides = [
//   {
//     image: hero4,
//     subtitle: "YOUR TRUSTED CONTAINER SOLUTION PROVIDER",
//     title: "INNOVATIVE CONTAINER SPACES BUILT FOR MODERN NEEDS",
//     btnPrimary: "Get a Quote →",
//     btnSecondary: "Our Products →",
//   },
//   {
//     image: hero3,
//     subtitle: "RELIABLE. DURABLE. CUSTOMIZED.",
//     title: "FROM DESIGN TO DELIVERY, WE BUILD QUALITY CONTAINERS",
//     btnPrimary: "Explore Projects →",
//     btnSecondary: "Contact Us →",
//   },
//   {
//     image: hero5,
//     subtitle: "BUILD SMART. BUILD FAST.",
//     title: "MODULAR SOLUTIONS FOR OFFICES, HOMES & WORKSPACES",
//     btnPrimary: "Start Your Project →",
//     btnSecondary: "Learn More →",
//   },
//   {
//     image: hero2,
//     subtitle: "RELIABLE. DURABLE. CUSTOMIZED.",
//     title: "FROM DESIGN TO DELIVERY, WE BUILD QUALITY CONTAINERS",
//     btnPrimary: "Explore Projects →",
//     btnSecondary: "Contact Us →",
//   },
//   {
//     image: hero1,
//     subtitle: "BUILD SMART. BUILD FAST.",
//     title: "MODULAR SOLUTIONS FOR OFFICES, HOMES & WORKSPACES",
//     btnPrimary: "Start Your Project →",
//     btnSecondary: "Learn More →",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrent((prev) => (prev + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   const slide = slides[current];

//   return (
//     <section className="relative w-full h-[85vh] flex items-center justify-start text-white overflow-hidden">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${slide.image})`,
//         }}
//       /> 
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#0a1f44]/70"></div>

//       {/* Content */}
//       <div className="relative z-20 max-w-3xl px-6 md:px-16">
//         <p className="bg-[#facc15] text-[#0a1f44] text-xs md:text-sm font-semibold inline-block px-4 py-1 rounded">
//           {slide.subtitle}
//         </p>
//         <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
//           {slide.title}
//         </h1>

//         <div className="flex gap-4">
//           <button className="bg-[#facc15] hover:bg-yellow-400 text-[#0a1f44] font-semibold px-6 py-3 rounded-md transition">
//             {slide.btnPrimary}
//           </button>
//           <button className="border border-white hover:bg-white hover:text-[#0a1f44] text-white font-semibold px-6 py-3 rounded-md transition">
//             {slide.btnSecondary}
//           </button>
//         </div>
//       </div>

//      {/* Navigation Dots */}
//         <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 transition-all rounded-full ${
//                 index === current
//                   ? "h-6 bg-[#facc15] rounded-md" // active = taller and rounded rectangle
//                   : "h-3 bg-gray-300"             // inactive = small circle
//               }`}
//             ></button>
//           ))}
//         </div>

//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../../assets/images/hero/hero1.png";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.webp";
import hero4 from "../../assets/images/hero/hero2.1.jpg";
import hero5 from "../../assets/images/hero/Office.webp";

const slides = [
  {
    image: hero4,
    subtitle: "YOUR TRUSTED CONTAINER SOLUTION PROVIDER",
    title: "INNOVATIVE CONTAINER SPACES BUILT FOR MODERN NEEDS",
    btnPrimary: "Get a Quote →",
    btnSecondary: "Our Products →",
    primaryAction: "quote",
    secondaryLink: "/products",
  },
  {
    image: hero3,
    subtitle: "RELIABLE. DURABLE. CUSTOMIZED.",
    title: "FROM DESIGN TO DELIVERY, WE BUILD QUALITY CONTAINERS",
    btnPrimary: "Explore Projects →",
    btnSecondary: "Contact Us →",
    primaryLink: "/projects",
    secondaryLink: "/contact",
  },
  {
    image: hero5,
    subtitle: "BUILD SMART. BUILD FAST.",
    title: "MODULAR SOLUTIONS FOR OFFICES, HOMES & WORKSPACES",
    btnPrimary: "Start Your Project →",
    btnSecondary: "Learn More →",
    primaryAction: "quote",
    secondaryLink: "/about",
  },
  {
    image: hero2,
    subtitle: "QUALITY YOU CAN TRUST",
    title: "FROM DESIGN TO DELIVERY, WE BUILD QUALITY CONTAINERS",
    btnPrimary: "Explore Projects →",
    btnSecondary: "Contact Us →",
    primaryLink: "/projects",
    secondaryLink: "/contact",
  },
  {
    image: hero1,
    subtitle: "MODULAR & PORTABLE SOLUTIONS",
    title: "CUSTOM DESIGNED CONTAINER OFFICES AND HOMES",
    btnPrimary: "Get a Quote →",
    btnSecondary: "View Services →",
    primaryAction: "quote",
    secondaryLink: "/services",
  },
];

export default function HeroSection({ onOpenLeadPopup }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  const handlePrimaryClick = () => {
    if (slide.primaryAction === "quote" && onOpenLeadPopup) {
      onOpenLeadPopup(); // opens lead popup modal
    } else if (slide.primaryLink) {
      navigate(slide.primaryLink);
    }
  };

  const handleSecondaryClick = () => {
    if (slide.secondaryLink) {
      navigate(slide.secondaryLink);
    }
  };

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-start text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="absolute inset-0 bg-[#0a1f44]/70"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6 md:px-16">
        <p className="bg-[#facc15] text-[#0a1f44] text-xs md:text-sm font-semibold inline-block px-4 py-1 rounded">
          {slide.subtitle}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
          {slide.title}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={handlePrimaryClick}
            className="bg-[#facc15] hover:bg-yellow-400 text-[#0a1f44] font-semibold px-6 py-3 rounded-md transition"
          >
            {slide.btnPrimary}
          </button>
          <button
            onClick={handleSecondaryClick}
            className="border border-white hover:bg-white hover:text-[#0a1f44] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            {slide.btnSecondary}
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 transition-all rounded-full ${
              index === current
                ? "h-6 bg-[#facc15] rounded-md"
                : "h-3 bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
