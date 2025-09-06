import React from 'react';
import { Code, Briefcase, Heart } from 'lucide-react';

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`myfont py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-zinc-900 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About Me
            </h2>
            <div
              className={`w-24 h-1 mx-auto ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Hello! I'm Anurag Singh, a passionate Full Stack Developer with a
                strong foundation in modern web technologies. I love creating
                digital solutions that make a difference and bring ideas to life
                through code.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                My journey in software development has equipped me with expertise
                in both frontend and backend technologies. I'm particularly skilled
                in the MERN stack and enjoy working on challenging projects that
                push the boundaries of what's possible on the web.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                When I'm not coding, I'm exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer
                community. I believe in continuous learning and staying updated
                with the latest industry trends.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div
                  className={`text-center p-4 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? "bg-zinc-800 text-gray-200" : "bg-gray-50 text-zinc-700"
                  }`}
                >
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div
                  className={`text-center p-4 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? "bg-zinc-800 text-gray-200" : "bg-gray-50 text-zinc-700"
                  }`}
                >
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              <div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
                }`}
              >
                <Code
                  className={`w-12 h-12 mb-4 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  I write maintainable, scalable, and well-documented code that
                  follows industry best practices.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-gradient-to-r from-purple-50 to-pink-50 border-gray-200"
                }`}
              >
                <Briefcase
                  className={`w-12 h-12 mb-4 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  I enjoy tackling complex challenges and finding innovative
                  solutions to technical problems.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-gradient-to-r from-indigo-50 to-blue-50 border-gray-200"
                }`}
              >
                <Heart
                  className={`w-12 h-12 mb-4 ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">Passionate Learner</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Constantly exploring new technologies and frameworks to stay
                  ahead in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
