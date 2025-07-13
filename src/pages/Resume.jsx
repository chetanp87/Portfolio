import React from 'react';

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Resume</h2>

      <p className="mb-4 text-lg">
        You can view or download my resume using the button below.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 transition text-white font-medium px-6 py-3 rounded-lg"
      >
        View / Download Resume
      </a>
    </section>
  );
};

export default Resume;
