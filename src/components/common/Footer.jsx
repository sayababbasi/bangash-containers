// // src/components/common/Footer.jsx
// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   Facebook,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Printer,
// } from "lucide-react";
// import logo from "../../assets/images/logo.jpg";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0a1f44] text-gray-300 py-10 px-6">
//       {/* Logo Section */}
//         {/* <div>
//           <img
//             src={logo}
//             alt="Bangash Container"
//             className="h-12 mb-4 rounded-md"
//           />
//           <p className="text-sm leading-relaxed">
//             Professional Manufacturer of Modular Buildings & Steel Structures.
//           </p>
//         </div> */}
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600 pb-8">
        
//         {/* Products */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Products</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Flat Pack Container House</li>
//             <li>Quick Assembly Modular House</li>
//             <li>Expandable Container House</li>
//             <li>Apple Capsule</li>
//             <li>Mobile Toilet</li>
//             <li>Steel Structure Engineering</li>
//             <li>Double-wing Expansion House</li>
//           </ul>
//         </div>

//         {/* About */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">About</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Company Profile</li>
//             <li>Our Factory</li>
//             <li>Qualification</li>
//             <li>Video Center</li>
//           </ul>
//         </div>

//         {/* Blog */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Blog</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Company News</li>
//             <li>Knowledge</li>
//             <li>Exhibition</li>
//           </ul>
//         </div>

//         {/* Service + Contact */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Service</h3>
//           <ul className="space-y-2 text-sm mb-6">
//             <li>Customer Support</li>
//             <li>Product FAQs</li>
//             <li>Download</li>
//           </ul>
//           </div>
//           <div>
//             {/* Social Icons */}
//           <div className="flex space-x-3 mb-6">
//             <a href="#" className="hover:text-blue-400">
//               <Facebook size={18} />
//             </a>
//             <a href="#" className="hover:text-blue-400">
//               <Linkedin size={18} />
//             </a>
//             <a href="#" className="hover:text-blue-400">
//               <Twitter size={18} />
//             </a>
//             <a href="#" className="hover:text-blue-400">
//               <Instagram size={18} />
//             </a>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-2 text-sm">
//             <p className="flex items-center space-x-2">
//               <Phone size={16} /> <span>+92 335 9835538</span>
//             </p>
//             <p className="flex items-center space-x-2">
//               <Mail size={16} /> <span>info@bangashcontainers.com</span>
//             </p>
//             <p className="flex items-center space-x-2">
//               <Printer size={16} /> <span>+92 333 5061973</span>
//             </p>
//             <p className="flex items-start space-x-2">
//               <MapPin size={16} />
//               <span>
//                Oppo. Toyota Motors Near Chaudhary Ayub Petrolium Tarnol, G14/1, Sirinagar Highway, Islamabad, Pakistan
            
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//         <p>
//           © {new Date().getFullYear()} Bangash Container | All Rights Reserved |
//           Business License
//         </p>
//         <p className="mt-2 md:mt-0">
//           Powered by Revotic AI |{" "}
//           <a href="#" className="hover:underline">
//             Privacy Policy
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Printer,
} from "lucide-react";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-gray-300 py-10 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600 pb-8">

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/product1" className="hover:text-blue-400">Flat Pack Container House</Link></li>
            <li><Link to="/product2" className="hover:text-blue-400">Quick Assembly Modular House</Link></li>
            <li><Link to="/product3" className="hover:text-blue-400">Expandable Container House</Link></li>
            <li><Link to="/product4" className="hover:text-blue-400">Apple Capsule</Link></li>
            <li><Link to="/product5" className="hover:text-blue-400">Mobile Toilet</Link></li>
            <li><Link to="/product6" className="hover:text-blue-400">Steel Structure Engineering</Link></li>
            <li><Link to="/product7" className="hover:text-blue-400">Double-wing Expansion House</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company Profile</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400">Our Projects</Link></li>
            <li><Link to="/experts" className="hover:text-blue-400">Our Experts</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400">Blogs News</Link></li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal Info</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-blue-400">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-white font-semibold mb-3">Service</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li><Link to="/support" className="hover:text-blue-400">Customer Support</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400">Product FAQs</Link></li>
            <li><Link to="/download" className="hover:text-blue-400">Download</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          {/* Social Icons */}
          <div className="flex space-x-3 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <Instagram size={18} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <p className="flex items-center space-x-2">
              <Phone size={16} />{" "}
              <a href="tel:+923359835538" className="hover:text-blue-400">
                +92 335 9835538
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={16} />{" "}
              <a href="mailto:info@bangashcontainers.com" className="hover:text-blue-400">
                info@bangashcontainers.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <Printer size={16} /> <span>+92 333 5061973</span>
            </p>
            <p className="flex items-start space-x-2">
              <MapPin size={16} />
              <a
                href="https://maps.google.com/?q=Bangash+Container+Islamabad"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                Oppo. Toyota Motors Near Chaudhary Ayub Petrolium Tarnol, G14/1,
                Sirinagar Highway, Islamabad, Pakistan
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Bangash Container | All Rights Reserved | Business License
        </p>
        <p className="mt-2 md:mt-0">
          Powered by{" "}
          <a href="https://revoticai.com" className="hover:underline" target="_blank" rel="noreferrer">
            Revotic AI
          </a>{" "}
          |{" "}
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
