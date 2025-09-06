import React from "react";
import { Code, Brush, Layers, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-quality and scalable websites using modern frameworks like React, Next.js, and Node.js.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    desc: "Crafting clean, modern, and user-friendly interfaces with a focus on seamless experiences.",
    icon: <Brush className="w-8 h-8" />,
  },
  {
    title: "Full Stack / MERN Stack",
    desc: "Building full-stack applications with smooth performance and modern UI using MongoDB, Express, React, and Node.js.",
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
  {
    title: "Integration",
    desc: "Seamlessly integrating APIs, third-party tools, and services to build powerful digital ecosystems.",
    icon: <Layers className="w-8 h-8" />,
  },
];

const Services = ({ isDarkMode }) => {
  // Dynamic classes based on dark mode
  const bgColor = isDarkMode ? "bg-black" : "bg-white";
  const cardBg = isDarkMode
    ? "bg-zinc-900 border border-zinc-700 shadow-md"
    : "bg-white border border-zinc-200 shadow-md";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const subTextColor = isDarkMode ? "text-zinc-400" : "text-zinc-700";
  const iconColor = isDarkMode ? "text-white" : "text-black";

  return (
    <section
      id="services"
      className={`myfont py-20 px-6 md:px-16 lg:px-28 ${bgColor} transition-colors duration-500`}
    >
      <div className="text-center mb-14">
        <h2 className={`text-4xl md:text-5xl font-extrabold ${textColor}`}>
          My Services
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${subTextColor} text-sm md:text-base`}>
          I provide end-to-end digital solutions that transform your ideas into
          powerful products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl ${cardBg} hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
          >
            <div
              className={`mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-100 ${
                isDarkMode ? "bg-zinc-800" : "bg-zinc-100"
              } group-hover:scale-110 transition-transform duration-300`}
            >
              {React.cloneElement(service.icon, { className: `w-8 h-8 ${iconColor}` })}
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${textColor} group-hover:text-indigo-500`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed ${subTextColor}`}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
