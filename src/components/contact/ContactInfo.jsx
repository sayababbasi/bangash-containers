import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Get in Touch With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <MapPin className="mx-auto text-blue-800 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Head Office
            </h3>
            <p className="text-gray-600">
              Oppo. Toyota Motors Near Chaudhary Ayub Petrolium Tarnol, G14/1, Sirinagar Highway, Islamabad, Pakistan
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Phone className="mx-auto text-blue-800 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">
              +92 335 9835538 <br />
              +92 333 5061973
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <Mail className="mx-auto text-blue-800 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600">
              info@bangashcontainers.com <br />
              sales@bangashcontainers.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
