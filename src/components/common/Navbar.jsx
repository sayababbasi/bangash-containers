// import { useState } from "react";
// import logo from "../../assets/images/logo.jpg";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <a href="#"><img
//             src={logo}
//             alt="Bangash Containers Logo"
//             className="h-15 w-24 object-contain rounded"
//           />
//             <h1 className="text-2xl font-bold text-blue-700">
//               {/* Bangash Containers */}
//             </h1>
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Home
//           </a>

//           {/* Services Dropdown */}
//           <div className="relative group">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-gray-700 hover:text-blue-700 flex items-center"
//             >
//               Services ▾
//             </button>

//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2">
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Prefabricated Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Fabricated Office
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Carvan
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Offices
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Security Cabins
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Projects
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Blogs
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             About
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Contact
//           </a>

//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
//             Get Quote
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-blue-700 text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md py-3 text-center space-y-2">
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Home
//           </a>

//           {/* Services Dropdown (mobile) */}
//           <div>
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="w-full text-gray-700 hover:text-blue-700 flex justify-center items-center"
//             >
//               Services {isServicesOpen ? "▲" : "▼"}
//             </button>
//             {isServicesOpen && (
//               <ul className="mt-2 space-y-1">
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Prefabricated Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Fabricated Office
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Carvan
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Offices
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Security Cabins
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Projects
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             About
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Contact
//           </a>

//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900">
//             Get Quote
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// // import React, { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import logo from "../../assets/images/logo.jpg";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   // Close menu when clicking outside or pressing back button
// //   useEffect(() => {
// //     const handlePopState = () => setMenuOpen(false);
// //     window.addEventListener("popstate", handlePopState);

// //     // Close when clicking on overlay area
// //     const handleClickOutside = (e) => {
// //       if (e.target.id === "menu-overlay") setMenuOpen(false);
// //     };
// //     document.addEventListener("click", handleClickOutside);

// //     return () => {
// //       window.removeEventListener("popstate", handlePopState);
// //       document.removeEventListener("click", handleClickOutside);
// //     };
// //   }, []);

// //   const handleLinkClick = () => {
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <header className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
// //         {/* Logo */}
// //         <a href="/" className="flex items-center space-x-2">
// //           <img src={logo} alt="Bangash Containers" className="h-10 w-auto" />
// //           <span className="text-lg font-semibold text-gray-800">
// //             Bangash Containers
// //           </span>
// //         </a>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
// //           {["Home", "About", "Products", "Contact"].map((item) => (
// //             <a
// //               key={item}
// //               href={`#${item.toLowerCase()}`}
// //               className="hover:text-yellow-600 transition"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden p-2 text-gray-700"
// //           onClick={() => setMenuOpen(true)}
// //         >
// //           <Menu size={24} />
// //         </button>
// //       </div>

// //       {/* Mobile Menu Overlay */}
// //       {menuOpen && (
// //         <div
// //           id="menu-overlay"
// //           className="fixed inset-0 bg-black bg-opacity-40 z-40 flex"
// //         >
// //           {/* Side Drawer */}
// //           <div className="w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-left">
// //             <button
// //               onClick={() => setMenuOpen(false)}
// //               className="absolute top-4 right-4 text-gray-600 hover:text-black"
// //             >
// //               <X size={24} />
// //             </button>
// //             <nav className="mt-12 flex flex-col space-y-6 font-medium text-gray-800">
// //               {["Home", "About", "Products", "Contact"].map((item) => (
// //                 <a
// //                   key={item}
// //                   href={`#${item.toLowerCase()}`}
// //                   onClick={handleLinkClick}
// //                   className="hover:text-yellow-600 transition"
// //                 >
// //                   {item}
// //                 </a>
// //               ))}
// //             </nav>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../../assets/images/logo.jpg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   // Handle ESC key + Back button + Click outside to close menu
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     const handlePopState = () => setIsOpen(false);
//     const handleClickOutside = (e) => {
//       if (e.target.id === "menu-overlay") setIsOpen(false);
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("popstate", handlePopState);
//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("popstate", handlePopState);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       {/* Navbar main row */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-3">
//           <img
//             src={logo}
//             alt="Bangash Containers Logo"
//             className="h-14 w-auto object-contain rounded"
//           / >
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>

//           {/* Dropdown for Services */}
//           <div className="relative group">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-gray-700 hover:text-blue-700 flex items-center"
//             >
//               Services ▾
//             </button>

//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2 z-50">
//                 {[
//                   "Prefabricated Homes",
//                   "Fabricated Office",
//                   "Container Caravan",
//                   "Container Homes",
//                   "Container Offices",
//                   "Security Cabins",
//                 ].map((service) => (
//                   <li key={service}>
//                     <a
//                       href=""
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <a href="#" className="text-gray-700 hover:text-blue-700">Projects</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">Blogs</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">About</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">Contact</a>

//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
//             Get Quote
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-blue-700 text-2xl focus:outline-none"
//           onClick={() => setIsOpen(true)}
//         >
//           <Menu size={26} />
//         </button>
//       </div>

//       {/* Mobile Side Drawer */}
//       {isOpen && (
//         <div
//           id="menu-overlay"
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 flex"
//         >
//           <div className="w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-right ml-auto">
//             {/* Close (Cross) Button */}
//             <button
//               onClick={closeMenu}
//               className="absolute top-4 right-4 text-gray-600 hover:text-black"
//             >
//               <X size={24} />
//             </button>

//             {/* Logo */}
//             <div className="flex items-center space-x-3 mb-6">
//               <img
//                 src={logo}
//                 alt="Bangash Containers Logo"
//                 className="h-10 w-auto object-contain rounded"
//               />
//             </div>

//             {/* Navigation Links */}
//             <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Home
//               </a>

//               {/* Mobile Dropdown */}
//               <div>
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex justify-between items-center w-full hover:text-blue-700"
//                 >
//                   <span>Services</span>
//                   <span>{isServicesOpen ? "▲" : "▼"}</span>
//                 </button>
//                 {isServicesOpen && (
//                   <ul className="ml-4 mt-2 space-y-1">
//                     {[
//                       "Prefabricated Homes",
//                       "Fabricated Office",
//                       "Container Caravan",
//                       "Container Homes",
//                       "Container Offices",
//                       "Security Cabins",
//                     ].map((service) => (
//                       <li key={service}>
//                         <a
//                           href="#"
//                           onClick={closeMenu}
//                           className="block hover:text-blue-700"
//                         >
//                           {service}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Projects
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Blogs
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 About
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Contact
//               </a>

//               <button
//                 onClick={closeMenu}
//                 className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 mt-4"
//               >
//                 Get Quote
//               </button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// src/components/common/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Handle ESC key + Back button + Click outside to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handlePopState = () => setIsOpen(false);
    const handleClickOutside = (e) => {
      if (e.target.id === "menu-overlay") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Navbar main row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Bangash Containers Logo"
            className="h-14 w-auto object-contain rounded"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Dropdown for Services
          <div className="relative group">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-blue-700 flex items-center"
            >
              Services ▾
            </button>

            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2 z-50">
                {[
                  "Prefabricated Homes",
                  "Fabricated Office",
                  "Container Caravan",
                  "Container Homes",
                  "Container Offices",
                  "Security Cabins",
                ].map((service) => (
                  <li key={service}>
                    <NavLink
                      to={`/services/prefabricatedhomes`} // All link to products for now
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {service}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div> */}

          {/* Dropdown for Services */}
          <div className="relative group">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-700 hover:text-blue-700 flex items-center"
            >
              Services ▾
            </button>

            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2 z-50">
                {[
                  { name: "Prefabricated Homes", path: "/services/prefabricated-homes" },
                  { name: "Prefabricated Office", path: "/services/fabricated-office" },
                  { name: "Container Caravan", path: "/services/container-caravan" },
                  { name: "Container Homes", path: "/services/container-homes" },
                  { name: "Container Offices", path: "/services/container-offices" },
                  { name: "Security Cabins", path: "/services/security-cabins" },
                ].map((service) => (
                  <li key={service.name}>
                    <NavLink
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)} // closes dropdown after click
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "hover:bg-gray-100"
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : ""
              }`
            }
          >
            Projects
          </NavLink>


          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : ""
              }`
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/quote"
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
          >
            Get Quote
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex"
        >
          <div className="w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-right ml-auto">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Bangash Containers Logo"
                className="h-10 w-auto object-contain rounded"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="hover:text-blue-700"
              >
                Home
              </NavLink>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full hover:text-blue-700"
                >
                  <span>Services</span>
                  <span>{isServicesOpen ? "▲" : "▼"}</span>
                </button>
                {isServicesOpen && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {[
                      "Prefabricated Homes",
                      "Fabricated Office",
                      "Container Caravan",
                      "Container Homes",
                      "Container Offices",
                      "Security Cabins",
                    ].map((service) => (
                      <li key={service}>
                        <NavLink
                          to="/products"
                          onClick={closeMenu}
                          className="block hover:text-blue-700"
                        >
                          {service}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <NavLink
                to="/projects"
                onClick={closeMenu}
                className="hover:text-blue-700"
              >
                Projects
              </NavLink>

              <NavLink
                to="/blogs"
                onClick={closeMenu}
                className="hover:text-blue-700"
              >
                Blogs
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className="hover:text-blue-700"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="hover:text-blue-700"
              >
                Contact
              </NavLink>

              <NavLink
                to="/quote"
                onClick={closeMenu}
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 mt-4 text-center"
              >
                Get Quote
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

