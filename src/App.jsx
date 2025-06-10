import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, User, Code, Gamepad2, FileText, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const menuItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume/CV', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'solitaire', label: 'Solitaire', icon: Gamepad2 },
    { id: 'contact', label: 'Contact Me', icon: MessageCircle }
  ];

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sky-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-sky-900">
              Greg Stula
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-sky-600 bg-sky-100/50'
                      : 'text-gray-600 hover:text-sky-900 hover:bg-sky-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-sky-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-sky-200/50 shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === id
                      ? 'text-sky-600 bg-sky-100/50'
                      : 'text-gray-600 hover:text-sky-900 hover:bg-sky-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              GS
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-6">
            Greg Stula
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Software Engineer
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-6">
                Welcome to my portfolio! I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional applications that solve real-world problems.
              </p>
              <p className="mb-6">
                My journey in software development has led me to work with React, Node.js, Python, and various databases. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['React', 'JavaScript', 'Python', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                  <span key={skill} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm border border-sky-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume/CV Section */}
      <section id="resume" className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">Resume/CV</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Senior Developer</h4>
                  <p className="text-gray-600 mb-2">Tech Company • 2022 - Present</p>
                  <p className="text-gray-700">
                    Led development of full-stack applications using React and Node.js. 
                    Collaborated with cross-functional teams to deliver high-quality solutions.
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Full Stack Developer</h4>
                  <p className="text-gray-600 mb-2">Startup Inc • 2020 - 2022</p>
                  <p className="text-gray-700">
                    Developed and maintained web applications, implemented CI/CD pipelines, 
                    and optimized application performance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Computer Science Degree</h4>
                  <p className="text-gray-600 mb-2">University Name • 2018 - 2022</p>
                  <p className="text-gray-700">
                    Bachelor's degree in Computer Science with focus on software engineering 
                    and web development technologies.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Project One</h3>
                <p className="text-gray-700 mb-4">
                  A full-stack web application built with React and Node.js featuring real-time updates.
                </p>
                <div className="flex space-x-4">
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Project Two</h3>
                <p className="text-gray-700 mb-4">
                  Mobile-responsive e-commerce platform with payment integration and admin dashboard.
                </p>
                <div className="flex space-x-4">
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Project Three</h3>
                <p className="text-gray-700 mb-4">
                  Data visualization dashboard using D3.js and React for interactive analytics.
                </p>
                <div className="flex space-x-4">
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="text-sky-600 hover:text-sky-700 flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solitaire Section */}
      <section id="solitaire" className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-900 mb-12">Solitaire Game</h2>
          <div className="bg-white/80 rounded-lg p-12 shadow-sm border border-sky-100">
            <div className="mb-8">
              <Gamepad2 size={64} className="text-sky-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-sky-900 mb-4">Classic Solitaire</h3>
              <p className="text-gray-700 mb-8">
                Take a break and enjoy a classic game of Solitaire! Built with React and featuring 
                smooth animations and responsive design.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm"
                >
                  {['A♠', 'K♥', 'Q♦', 'J♣', '10♠', '9♥', '8♦', '7♣'][i]}
                </div>
              ))}
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Play Solitaire
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-700">
                  <Mail className="text-sky-600" size={20} />
                  <span>greg.stula@example.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <Github className="text-sky-600" size={20} />
                  <span>github.com/gregstula</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <Linkedin className="text-sky-600" size={20} />
                  <span>linkedin.com/in/gregstula</span>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sky-900 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Contact form submitted! (This is a demo - integrate with your backend)');
                  }}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-100">
            © 2025 Greg Stula. Built with React and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <button className="text-sky-200 hover:text-white transition-colors">
              <Github size={24} />
            </button>
            <button className="text-sky-200 hover:text-white transition-colors">
              <Linkedin size={24} />
            </button>
            <button className="text-sky-200 hover:text-white transition-colors">
              <Mail size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
