import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = ({isDarkMode , setIsDarkMode}) => {
  return (
    <footer className="myfont bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white bg-clip-text text-transparent">
                Anurag Singh
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                and bringing ideas to life through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Css', 'C++' , 'javaScript', 'VsCode', 'Figma', 'Git & GitHub'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 dark:bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Code className="w-4 h-4 text-blue-500" />
                <span>by Anurag Singh</span>
              </div>
              
              <div className="text-gray-400">
                © 2025 Anurag Singh. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
