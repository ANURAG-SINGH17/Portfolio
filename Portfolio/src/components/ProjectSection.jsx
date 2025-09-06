import React from 'react';
import { ExternalLink, Github, Code, Database, Globe , ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSection = ({isDarkMode , setIsDarkMode}) => {
  const projects = [
    {
      title: 'AI Study Assistent',
      description: 'AI-Based Study Assistant An intelligent, full-stack study assistant web application that allows students to upload PDF notes and receive: Summarized, quizzes, True/False, questions Q&A based on the document ',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Gsap'],
      image: 'https://epe.brightspotcdn.com/dims4/default/0495656/2147483647/strip/true/crop/7063x4793+52+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fcb%2Fcd%2Ff8213ccb4203abdae3aad13a1eef%2Fai-gpt-teacher-08162022-966654886-949652688.jpg',
      github: 'https://github.com/ANURAG-SINGH17/AI-Study-Assistant',
      live: 'https://ai-study-assistant-five.vercel.app/',
      category: 'Full Stack'
    },
    {
      title: 'Pinterest',
      description: 'Pinterest-inspired Web Application A modern web application designed for discovering, saving, and sharing visual content, inspired by Pinterest.',
      technologies: ['React', 'Express', 'MongoDB', 'Tailwind', 'Cloudinary', 'Node.js', 'Gsap'],
      image: 'https://www.greenqueen.com.hk/wp-content/uploads/2022/04/pinterest-green-queen.jpg',
      github: 'https://github.com/ANURAG-SINGH17/Pinterest',
      live: 'https://pintrest-sigma.vercel.app/',
      category: 'Full Stack'
    },
    {
      title: 'AI-Based Resume Maker',
      description: 'AI-Based Resume Maker An intelligent and user-friendly web application designed to streamline the resume creation process using AI. This project leverages cutting-edge technologies to allow users to generate professional resumes with ease.',
      technologies: ['React', 'Node.js', 'Express' , 'MongoDB', 'Gemini AI', 'TailwindCSS', "Gsap"],
      image: 'https://static.resumecoach.com/wp-content/uploads/sites/43/2023/11/13133339/resumecoach_resumebuilder_jumbo-1-736x703.webp',
      github: 'https://github.com/ANURAG-SINGH17/Ai_Resume-builder',
      live: 'https://ai-resume-builder-one-xi.vercel.app/',
      category: 'Full Stack'
    },
    {
      title: 'Apple Vision Pro',
      description: 'This project is a clone of Apple Vision Pro interface, replicating its immersive user experience. The goal is to recreate the fluid, intuitive interaction that Apple Vision Pro offers, using modern web technologies.',
      technologies: ['Html', 'CSS', 'JavaScript', 'Gsap' , 'locomotive'],
      image: 'https://cdn.theatlantic.com/thumbor/EOnfJgXmV77HsH_Jw0Q639th6iY=/0x0:4800x2700/960x540/media/img/mt/2024/02/HR_1258467649_1/original.jpg',
      github: 'https://github.com/ANURAG-SINGH17/Apple-Vision-Pro',
      live: 'https://anurag-singh17.github.io/Apple-Vision-Pro/',
      category: 'Frontend'
    },
    {
      title: 'Magma',
      description: 'Magma Clone: A fully responsive and animated website inspired by Magma, offering a seamless and dynamic user experience across all devices..',
      technologies: ['Html', 'CSS', 'JavaScript', 'Gsap' , 'locomotive'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaw7BILSU4nkH7GXMOaKlyQ3BNbDoeV3GTTJ3A-x82LN-1NC5PU9SMFRDgKdJ4fdSpDQ&usqp=CAU',
      github: 'https://github.com/ANURAG-SINGH17/MAGMA',
      live: 'https://anurag-singh17.github.io/MAGMA/',
      category: 'Frontend'
    },
    {
      title: 'Zelt',
      description: 'FRONTEND PROJECT Full Responsive - Zelt Clone: A visually captivating and animated digital platform, recreated from Zelt, designed to deliver immersive experiences with modern web animations and sleek design. ',
      technologies: ['Html', 'CSS', 'JavaScript', 'Gsap' , 'locomotive'],
      image: 'https://www.webfactoryltd.com/wp-content/uploads/2020/05/zelt.jpg',
      github: 'https://github.com/ANURAG-SINGH17?tab=repositories',
      live: 'https://anurag-singh17.github.io/Zelt/',
      category: 'Frontend'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return <Code className="w-5 h-5" />;
      case 'Frontend':
        return <Globe className="w-5 h-5" />;
      case 'Backend':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
<section
      id="projects"
      className={`myfont py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Projects
            </h2>
            <div
              className={`w-24 h-1 mx-auto mb-4 ${
                isDarkMode
                  ? "bg-gradient-to-r from-white to-gray-500"
                  : "bg-gradient-to-r from-black to-gray-700"
              }`}
            ></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Here are some of my recent projects that showcase my skills and
              passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:shadow-2xl"
                    : "bg-white border-gray-200 hover:shadow-2xl"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode ? "bg-gray-700 text-gray-100" : "bg-white/90 text-gray-700"
                    }`}
                  >
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white/90 hover:bg-gray-200"
                      }`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white/90 hover:bg-gray-200"
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                      isDarkMode ? "text-white group-hover:text-gray-200" : "text-gray-900 group-hover:text-black"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mb-4 line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200 border-gray-600"
                            : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors duration-200 ${
                        isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
              Want to see more of my work?
            </p>
            <Link
              to="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUpRight className="w-5 h-5 font-medium" />
              <span className="font-medium">View All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
