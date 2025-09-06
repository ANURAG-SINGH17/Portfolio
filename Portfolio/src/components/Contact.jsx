import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'anuragaswal27@gmail.com',
      link: 'mailto:anuragaswal27@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+91 8264110182',
      link: 'tel:+918264110182'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      detail: 'Punjab, Patiala, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/ANURAG-SINGH17',
      color: 'hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anurag-singh-200001315/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      url: 'https://instagram.com/anurag_aswal_306',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section
      id="contact"
      className={`myfont py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-semibold mb-6 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                >
                  Let's Connect
                </h3>
                <p
                  className={`mb-8 leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology. Feel free to
                  reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-black text-white'
                      }`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}
                      >
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`transition-colors duration-200 ${
                            isDarkMode
                              ? 'text-gray-400 hover:text-white'
                              : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p
                          className={`${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      } ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Big "Get in Touch" */}
            <div className="flex h-[80vh] flex-col items-center justify-center">
              <h2
                className={`text-6xl md:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                Get In Touch
              </h2>
              <p
                className={`text-lg text-center max-w-2xl mx-auto ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Have a project in mind or want to collaborate? I'd love to hear
                from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
