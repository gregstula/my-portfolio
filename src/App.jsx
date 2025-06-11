import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  User,
  Code,
  Gamepad2,
  FileText,
  MessageCircle,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "resume", label: "Resume/CV", icon: FileText },
    { id: "projects", label: "Projects", icon: Code },
    { id: "solitaire", label: "Solitaire", icon: Gamepad2 },
    { id: "contact", label: "Contact Me", icon: MessageCircle },
  ];

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-sky-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-sky-900">Greg Stula</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-sky-600 bg-sky-100/50"
                      : "text-gray-600 hover:text-sky-900 hover:bg-sky-50"
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
                      ? "text-sky-600 bg-sky-100/50"
                      : "text-gray-600 hover:text-sky-900 hover:bg-sky-50"
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
            <img
              src="https://github.com/gregstula.png"
              alt="Greg Stula"
              className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-sky-900 mb-6">
            Greg Stula
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Software Engineer
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/assets/AboutMe.jpeg"
                alt="Greg Stula"
                className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-6">
                Welcome to my portfolio! I'm a passionate full-stack developer
                with expertise in modern web technologies. I love creating
                beautiful, functional applications that solve real-world
                problems.
              </p>
              <p className="mb-6">
                My journey in software development has led me to work with
                React, Node.js, Python, and various databases. I'm always eager
                to learn new technologies and take on challenging projects.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "React",
                  "JavaScript",
                  "Python",
                  "Node.js",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm border border-sky-200"
                  >
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
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
            Resume/CV
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">
                    Software Developer
                  </h4>
                  <p className="text-gray-600 mb-2">
                    4V Services • March 2022 - Present
                  </p>
                  <p className="text-gray-700">
                    Implemented backend library functions in JavaScript and
                    XQuery for entity mapping in Data Hub's Web UI. Developed
                    custom mapping logic, worked on 50+ unit test suites, and
                    collaborated across teams for data harmonization. Led code
                    reviews and technical interviews.
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">
                    Data Operations Specialist
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Marxent 3D Cloud • March 2021 - July 2021
                  </p>
                  <p className="text-gray-700">
                    Worked on a cross-functional scrum team to deploy custom 3D
                    model applications. Developed internal tooling for efficient
                    3D model data loading and created an API scraping tool in
                    Node.js for bulk data collection.
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">
                    Compliance Coordinator
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Uber Technologies • June 2019 - February 2020
                  </p>
                  <p className="text-gray-700">
                    Provided software solutions and data analysis for Florida
                    alcohol law compliance. Developed data auditing tools with
                    Google App Script and created a Sheets extension for
                    automated alcohol delivery partner onboarding.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-white/80 p-6 rounded-lg shadow-sm border border-sky-100">
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-gray-600 mb-2">
                    University of Central Florida • 2018 - 2022
                  </p>
                  <p className="text-gray-700">
                    Focused on software engineering, algorithms, and systems
                    programming. Graduated with honors.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/resume/GregoryDStula_Resume_2025.pdf"
                  download="GregoryDStula_Resume_2025.pdf"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 inline-block"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center">
                <Gamepad2 size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  Quick Snake
                </h3>
                <p className="text-gray-700 mb-4">
                  A fast-paced terminal snake-like game that will test your
                  reflexes! Built with C++.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/gregstula/quick-snake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  CHIP-8 Emulator
                </h3>
                <p className="text-gray-700 mb-4">
                  A CHIP-8 emulator written in C++, implementing the classic
                  virtual machine architecture.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/gregstula/chip8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                <FileText size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  Unix Config
                </h3>
                <p className="text-gray-700 mb-4">
                  My Unix system configuration files and setup scripts for a new
                  system.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/gregstula/unix-config"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-sm border border-sky-100">
              <div className="h-48 bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                <Gamepad2 size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">
                  Sudoku NCurses
                </h3>
                <p className="text-gray-700 mb-4">
                  A terminal-based Sudoku game built with C++ and NCurses for a
                  classic gaming experience.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/gregstula/sudoku-ncurses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 flex items-center space-x-1"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solitaire Section */}
      <section id="solitaire" className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-900 mb-12">
            Solitaire Game
          </h2>
          <div className="bg-white/80 rounded-lg p-12 shadow-sm border border-sky-100">
            <div className="mb-8">
              <Gamepad2 size={64} className="text-sky-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-sky-900 mb-4">
                Classic Solitaire
              </h3>
              <p className="text-gray-700 mb-8">
                Take a break and enjoy a classic game of Solitaire! Built with
                React and featuring smooth animations and responsive design.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm"
                >
                  {["A♠", "K♥", "Q♦", "J♣", "10♠", "9♥", "8♦", "7♣"][i]}
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
          <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-700 mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
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
                  <label className="block text-sky-900 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/80 border border-sky-200 rounded-lg text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Contact form submitted! (This is a demo - integrate with your backend)"
                    );
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
