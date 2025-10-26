import React from "react";
import catalogImg from "../../assets/images/catalog.jpg";
import customizedImg from "../../assets/images/contact-customized.jpg";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Catalog Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Catalog</h3>
            <p className="text-gray-600 mb-6">
              The catalog covers our company profile, capabilities, and products
              to help you know more about us and our services.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Download
            </button>
          </div>
          <div className="mt-6">
            <img
              src={catalogImg}
              alt="Catalog Preview"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Online Message Card */}
        <div className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">Online Message</h3>
            <p className="text-gray-200 text-sm mb-6">
              Please complete this form, and we will contact you by the next
              business day.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
              <input
                type="email"
                placeholder="*E-mail"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
              <input
                type="text"
                placeholder="Phone/WhatsApp"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />
              <textarea
                rows="4"
                placeholder="*Message"
                className="w-full px-4 py-2 rounded-md text-gray-900"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Customized Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Customized
            </h3>
            <p className="text-gray-600 mb-6">
              Each optimal solution is determined by its design and installation
              parameters combined with our experience and modular construction
              technology know-how.
            </p>
            <a href="/contact">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Contact
              </button>
            </a>
          </div>
          <div className="mt-6">
            <img
              src={customizedImg}
              alt="Customized Design"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
