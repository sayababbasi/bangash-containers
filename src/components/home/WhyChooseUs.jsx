import React from "react";
import {
  ShieldCheck,
  Wrench,
  Factory,
  Truck,
  Users,
  BadgeCheck,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={36} className="text-blue-900 mb-3" />,
      title: "Reliable Quality",
      desc: "We use top-grade materials and precision engineering to ensure the highest product quality for every container.",
    },
    {
      icon: <Wrench size={36} className="text-blue-900 mb-3" />,
      title: "Custom Design",
      desc: "Our team offers complete customization — from layout to color — to fit your business or residential needs.",
    },
    {
      icon: <Factory size={36} className="text-blue-900 mb-3" />,
      title: "Modern Production Facility",
      desc: "Our advanced manufacturing setup allows us to produce containers with accuracy, speed, and consistency.",
    },
    {
      icon: <Truck size={36} className="text-blue-900 mb-3" />,
      title: "Fast Delivery Nationwide",
      desc: "We deliver and install across Pakistan — ensuring smooth logistics and reliable after-sales service.",
    },
    {
      icon: <Users size={36} className="text-blue-900 mb-3" />,
      title: "Experienced Team",
      desc: "Our engineers, designers, and technicians bring years of experience to every project we build.",
    },
    {
      icon: <BadgeCheck size={36} className="text-blue-900 mb-3" />,
      title: "Trusted Reputation",
      desc: "We have successfully completed hundreds of projects for corporate and government clients, earning lasting trust.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          WHY CHOOSE <span className="text-blue-900">BANGASH CONTAINERS</span>
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-900 mb-10"></div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          With innovation, craftsmanship, and sustainability at the core of our
          work — Bangash Containers stands out as Pakistan’s most trusted modular
          construction provider. Here’s why our clients choose us.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
