import React from "react";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
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
              exciting projects. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>
            <div className="space-y-4">
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
  );
};

export default Contact;
