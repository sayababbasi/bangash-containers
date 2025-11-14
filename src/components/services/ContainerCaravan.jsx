// import React from "react";
// import { Link } from "react-router-dom";

// const ContainerCaravan = () => {
//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center" 
//         style={{
//           backgroundImage:
//             "url('/src/assets/images/offer.jpg')", // update this image path
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Container Caravan
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Durable, portable, and comfortable — our caravans are built to move with you.
//           </p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20 px-6 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
//             Built for Mobility and Comfort
//           </h2>
//           <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Our container caravans combine durability and modern design to provide
//             high-quality, mobile living or office solutions. Whether used for
//             field projects, temporary accommodations, or on-the-go business setups,
//             each caravan is engineered for convenience, comfort, and sustainability.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
//             Key Features
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Customizable Interiors",
//                 desc: "Tailor your caravan with layouts, furniture, and decor that fit your specific needs.",
//               },
//               {
//                 title: "Weather-Resistant Design",
//                 desc: "Built with top-grade materials to withstand harsh environments and long travel.",
//               },
//               {
//                 title: "Fully Furnished Options",
//                 desc: "Choose from pre-fitted models equipped with sleeping areas, kitchens, and bathrooms.",
//               },
//               {
//                 title: "Energy Efficient",
//                 desc: "Optional solar systems, LED lighting, and insulated panels for energy conservation.",
//               },
//               {
//                 title: "Portable & Easy Setup",
//                 desc: "Designed for quick relocation and hassle-free installation anywhere you go.",
//               },
//               {
//                 title: "Affordable & Long-Lasting",
//                 desc: "A cost-effective solution with exceptional durability and minimal maintenance.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">
//           Ready to Get Your Container Caravan?
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-200">
//           Talk to our experts today and explore customizable designs tailored
//           for your travel, living, or work requirements.
//         </p>
//         <Link
//           to="/contact"
//           className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
//         >
//           Contact Us
//         </Link>
//       </section>
//     </main>
//   );
// };

// // export default ContainerCaravan;
// import React from "react";
// import { Link } from "react-router-dom";

// import interiorImg from "../../assets/images/offer.jpg";
// import ecoImg from "../../assets/images/offer.jpg";
// import modernImg from "../../assets/images/offer.jpg";
// import durableImg from "../../assets/images/offer.jpg";
// import transportImg from "../../assets/images/offer.jpg";
// import smartImg from "../../assets/images/offer.jpg";

// const ContainerCaravan = () => {
//   const features = [
//     {
//       title: "Mobile Living Spaces",
//       desc: "Our container caravans offer portable, comfortable living spaces ideal for travelers and remote site workers.",
//       image: modernImg,
//       link: "/product1",
//     },
//     {
//       title: "Eco-Friendly Build",
//       desc: "Each caravan is constructed using recyclable materials and designed for energy efficiency.",
//       image: ecoImg,
//       link: "/product2",
//     },
//     {
//       title: "Stylish Interiors",
//       desc: "Fully furnished interiors with smart layouts, lighting, and all essential amenities for comfort.",
//       image: interiorImg,
//       link: "/product3",
//     },
//     {
//       title: "Smart Utility Setup",
//       desc: "Integrated power, water, and solar solutions make it a self-sufficient mobile home.",
//       image: smartImg,
//       link: "/product4",
//     },
//     {
//       title: "Durable & Secure",
//       desc: "Built with high-grade steel and insulation to ensure safety, strength, and year-round usability.",
//       image: durableImg,
//       link: "/product5",
//     },
//     {
//       title: "Easy Transport & Setup",
//       desc: "Easily relocatable — ready to deploy and set up within hours at your preferred location.",
//       image: transportImg,
//       link: "/product6",
//     },
//   ];

//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/src/assets/images/offer.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Container Caravan
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Modern, portable living solutions for comfort and mobility — built
//             for work, travel, or leisure.
//           </p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20 px-6 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
//             Portable Comfort, Redefined
//           </h2>
//           <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Our container caravans are designed for those who need flexible,
//             stylish, and sustainable living or working spaces. Ideal for
//             construction sites, tourism, and mobile offices, these units combine
//             functionality with modern design.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
//             Key Features
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
//               >
//                 <Link
//                                     to={item.link}
//                                     className="text-[#0a1f44] font-medium hover:underline"
//                                   >
//                                    &gt;
                                
//                 <img
                
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-48 object-cover"
//                 />
//                   </Link>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">
//           Want to Explore Container Caravans?
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-200">
//           Reach out to us today to learn about design options, delivery times,
//           and customization possibilities for your ideal mobile space.
//         </p>
//         <Link
//           to="/contact"
//           className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
//         >
//           Contact Us
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default ContainerCaravan;


import React from "react";
import { Link } from "react-router-dom";

import interiorImg from "../../assets/images/offer.jpg";
import ecoImg from "../../assets/images/offer.jpg";
import modernImg from "../../assets/images/offer.jpg";
import durableImg from "../../assets/images/offer.jpg";
import transportImg from "../../assets/images/offer.jpg";
import smartImg from "../../assets/images/offer.jpg";

const ContainerCaravan = () => {
  const features = [
{
      title: "Modern Compact Design",
      desc: "Stylish, space-efficient container homes built for both comfort and functionality.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Eco-Friendly Construction",
      desc: "Made with recycled materials and energy-efficient systems for a sustainable lifestyle.",
      image: "/src/assets/images/product2/containerhome.jpg",
    },
    {
      title: "Fully Furnished Interiors",
      desc: "Includes modern flooring, lighting, kitchen setups, and smart storage solutions.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Smart Living Ready",
      desc: "Integrate smart devices for climate control, lighting, and security to enhance convenience.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Strong & Durable",
      desc: "Built using high-grade steel containers designed to withstand extreme environments.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
    {
      title: "Easy Setup & Relocation",
      desc: "Portable and modular — can be installed, expanded, or relocated effortlessly.",
      image: "/src/assets/images/whychooseus/containerhome.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/images/offer.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Container Caravan
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Modern, portable living solutions for comfort and mobility — built
            for work, travel, or leisure.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
            Portable Comfort, Redefined
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our container caravans are designed for those who need flexible,
            stylish, and sustainable living or working spaces. Ideal for
            construction sites, tourism, and mobile offices, these units combine
            functionality with modern design.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Link to={feature.link} className="block group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-all duration-300"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3 text-[#0a1f44] group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product CTA */}
            <section className="py-20 px-6 bg-white text-center">
              <h2 className="text-3xl font-semibold mb-4 text-[#0a1f44]">
                Explore Related Product
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-600">
                Discover our range of container home models built to perfection.
              </p>
              <Link
                to="/product2"
                className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-[#0a1f44] transition-all"
              >
                View Product
              </Link>
            </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Want to Explore Container Caravans?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Reach out to us today to learn about design options, delivery times,
          and customization possibilities for your ideal mobile space.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default ContainerCaravan;
