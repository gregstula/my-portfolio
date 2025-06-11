import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
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
  );
};

export default Hero;
