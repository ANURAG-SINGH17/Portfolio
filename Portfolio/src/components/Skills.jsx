import React from 'react';

const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'HTML', level: 95, color: 'bg-orange-400' },
        { name: 'CSS', level: 90, color: 'bg-blue-400' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
        { name: 'TailwindCSS', level: 88, color: 'bg-cyan-400' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'Express.js', level: 80, color: 'bg-gray-500' },
        { name: 'MongoDB', level: 75, color: 'bg-emerald-500' },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'C++ OOP', level: 80, color: 'bg-indigo-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className={`myfont py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
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
              My Skills
            </h2>
            <div
              className={`w-24 h-1 mx-auto mb-4 ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            ></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`p-6 rounded-2xl shadow-lg border transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-6 text-center ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full rounded-full h-3 overflow-hidden ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-16 text-center">
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "React", "Node.js", "MongoDB", "Express", "JavaScript",
                "TypeScript", "HTML5", "CSS3", "Tailwind", "C++", "Git", "VSCode"
              ].map((tech, index) => (
                <div
                  key={tech}
                  className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 cursor-default border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-gray-300 hover:border-white hover:text-white"
                      : "bg-gray-100 border-gray-300 text-gray-800 hover:border-black hover:text-black"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
