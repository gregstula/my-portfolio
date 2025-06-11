import React from "react";
import { Github, Code, Gamepad2, FileText } from "lucide-react";

const Projects = () => {
  return (
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
  );
};

export default Projects;
