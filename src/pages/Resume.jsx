import React from 'react';

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white text-center "
    >
      <h2 className="text-4xl font-bold mb-6">Resume</h2>

      <p className="mb-4 text-lg text-gray-300">
        You can view or download my resume using the button below.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-400 text-white px-6 py-3 rounded-md hover:border-gray-400 hover:bg-[#1f1f1f] hover:scale-105 transition-all duration-300 bg-[#1A1A1A]"
      >
        View / Download Resume
      </a>
    </section>
  );
};

export default Resume;
