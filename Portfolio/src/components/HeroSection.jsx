import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FiDownload } from "react-icons/fi";

const HeroSection = ({ isDarkMode, setIsDarkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Backend Specialist', 'Frontend Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`myfont h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 
      ${isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            {/* Profile Image */}
            <div className="mt-14 w-full flex gap-6 justify-center z-1">
              <div className="h-30 w-30 rounded-full overflow-hidden">
                <img
                  src="/anuragimg.jpeg"
                  alt="Profile"
                  className="h-30 w-30 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 w-full flex gap-4 justify-center flex-wrap">
              <h1>Anurag Singh</h1>
            </div>

            {/* Role Animation */}
            <div className="h-16 flex items-center justify-center">
              <h2 className={`text-xl sm:text-2xl md:text-3xl 
                ${isDarkMode ? "text-zinc-300" : "text-zinc-800"}`}>
                {roles[currentRole]}
              </h2>
            </div>

            {/* Description */}
            <p className={`text-sm sm:text-md max-w-2xl mx-auto 
              ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Passionate about crafting exceptional digital experiences with modern technologies. 
              Specialized in full-stack development with expertise in MERN stack and beyond.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-5">
              {/* Contact Me Button */}
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium border transition-all duration-300
                  ${isDarkMode 
                    ? "bg-white text-black border-white hover:bg-zinc-800 hover:text-white" 
                    : "bg-black text-white border-black hover:bg-white hover:text-black"} 
                  hover:scale-105`}
              >
                contact me <ArrowRight size={18} />
              </a>

              {/* Resume Button */}
              <a
                href="/upload/anurag-resume.pdf"
                download="anurag-resume.pdf"
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium border transition-all duration-300
                  ${isDarkMode 
                    ? "border-white text-white hover:bg-white hover:text-black" 
                    : "border-black text-black hover:bg-black hover:text-white"} 
                  hover:scale-105`}
              >
                my resume <FiDownload size={18} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-5 animate-fade-in-up delay-700">
              {[
                { href: "https://github.com/ANURAG-SINGH17", Icon: Github },
                { href: "https://www.linkedin.com/in/anurag-singh-200001315/", Icon: Linkedin },
                { href: "mailto:anuragaswal27@gmail.com", Icon: Mail }
              ].map(({ href, Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 
                    ${isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-300"}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
