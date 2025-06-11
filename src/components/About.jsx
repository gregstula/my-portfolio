import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/AboutMe.jpeg"
              alt="Greg Stula"
              className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-6">
              Welcome to my portfolio! I'm a passionate full-stack developer
              with expertise in modern web technologies. I love creating
              beautiful, functional applications that solve real-world problems.
            </p>
            <p className="mb-6">
              My journey in software development has led me to work with React,
              Node.js, Python, and various databases. I'm always eager to learn
              new technologies and take on challenging projects.
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
  );
};

export default About;
