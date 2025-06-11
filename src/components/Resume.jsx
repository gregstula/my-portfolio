import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  return (
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
                  Implemented backend library functions in JavaScript and XQuery
                  for entity mapping in Data Hub's Web UI. Developed custom
                  mapping logic, worked on 50+ unit test suites, and
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
                  Google App Script and created a Sheets extension for automated
                  alcohol delivery partner onboarding.
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
                  Oregon State University • Class of 2022
                </p>
                <p className="text-gray-700">Located in Corvallis, Oregon</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="resume/GregoryDStula_Resume_2025.pdf"
                download="GregoryDStula_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
  );
};

export default Resume;
