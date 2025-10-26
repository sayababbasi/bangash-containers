import React, { useEffect, useState } from "react";

// Helper to animate numbers
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const stats = [
  {
    title: "Manufacturing Experience",
    value: 10,
    suffix: "+ Years",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mx-auto mb-3"
      >
        <path d="M4 21V9a2 2 0 0 1 2-2h6l8 8v6H4z" />
        <path d="M14 3v8" />
      </svg>
    ),
  },
  {
    title: "Project Implementation Country",
    value: 40,
    suffix: "+",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
        className="w-10 h-10 mx-auto mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4M3 19l9 4 9-4"
        />
      </svg>
    ),
  },
  {
    title: "Number Of Projects",
    value: 500,
    suffix: "+",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
        className="w-10 h-10 mx-auto mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6M12 9v6m-9 4V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14"
        />
      </svg>
    ),
  },
  {
    title: "Annual Production Capacity",
    value: 20000,
    suffix: "Unit",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
        className="w-10 h-10 mx-auto mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 17h18M5 7v10m14-10v10"
        />
      </svg>
    ),
  },
];

const StatsSection = () => {
  return (
    <section
      className="bg-[#05205c] text-white py-16"
      style={{
        backgroundImage: "url('/src/assets/images/bg-blueprint.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/30 text-center">
        {stats.map((item, i) => {
          const count = useCounter(item.value);
          return (
            <div key={i} className="px-6 py-8">
              {item.icon}
              <h3 className="text-4xl font-bold mb-1">
                {count}
                {item.suffix && (
                  <span className="text-2xl font-medium ml-1">
                    {item.suffix}
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-200">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
