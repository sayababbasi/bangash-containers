import React from "react";

const ContactCTA1 = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6 md:px-12">
      {/* Background Shapes */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,300 200,0 400,300" fill="#b9babbff" opacity="0.6" />
          <polygon points="200,300 300,100 400,300" fill="#041f46ff" opacity="0.4" />
          <polygon points="320,220 360,150 400,220" fill="#040c27ff" opacity="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to work together?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you have a project in mind and you're looking for a reliable
          construction partner or you’re looking to take the next step in your
          career, we want to hear from you!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/projects">
            <button className="bg-[#1e3a8a] hover:bg-[#0f174f] text-white px-6 py-3 font-semibold text-sm tracking-wider rounded transition">
              BUILD A PROJECT WITH US
            </button>
          </a>
          <a href="/contact">
          <button className="border border-[#004F34] text-[#1e3a8a] hover:bg-[#0f174f] hover:text-white px-6 py-3 font-semibold text-sm tracking-wider rounded transition">
            BUILD A CAREER WITH US
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA1;


// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative flex items-center justify-between bg-[#0e0e0e] text-white px-16 py-24 overflow-hidden">
//       {/* Left Text Section */}
//       <div className="z-10 w-1/2 space-y-6">
//         <h1 className="text-5xl font-bold leading-tight">
//           Build Smarter with <span className="text-[#00AEEF]">AI Solutions</span>
//         </h1>
//         <p className="text-lg opacity-80">
//           Empower your business with next-gen AI-driven automation and analytics
//           built for real-world impact.
//         </p>
//         <button className="px-6 py-3 bg-[#00AEEF] hover:bg-[#008EC4] transition-all rounded-lg font-medium">
//           Get Started
//         </button>
//       </div>

//       {/* Right Background Image */}
//       <div
//         className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-right opacity-70 mix-blend-multiply"
//         style={{
//           backgroundImage: "url('/your-image.png')", // <-- Replace with your image path
//           backgroundColor: "#0e0e0e",
//           filter:
//             "grayscale(100%) brightness(0.8) sepia(20%) hue-rotate(180deg) saturate(120%)",
//         }}
//       ></div>
//     </section>
//   );
// };

// export default HeroSection;
