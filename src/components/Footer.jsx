import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sky-100">
          © 2025 Greg Stula. Built with React and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/gregstula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gregstula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
