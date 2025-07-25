import React from 'react';
import docbotImg from '../assets/docbot.png';
// import interviewImg from '../assets/ai-interview.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Project 1 */}
        <div className="bg-[#1f1f1f] border border-gray-700 rounded-xl p-6 hover:scale-105 hover:border-gray-500 hover:shadow-lg transition-transform duration-300">
          <img
            src={docbotImg}
            alt="DocBot"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">DocBot</h3>
          <p className="text-gray-300 mb-3">
            PDF chatbot using React and Python. Allows you to ask questions based on the PDF.
          </p>
          <a
            href="https://github.com/chetanp87/Doc-Bot-Conversation"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-[#1f1f1f] border border-gray-700 rounded-xl p-6 hover:scale-105 hover:border-gray-500 hover:shadow-lg transition-transform duration-300">
          <img
            // src={interviewImg}
            alt="AI Interview Tool"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">AI Interview Tool</h3>
          <p className="text-gray-300 mb-3">
            Get feedback on your answers using OpenAI API with React + Express + MongoDB.
          </p>
          <div className="flex gap-4">
            <a
              href="https://ai-interview-preparation-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 underline"
            >
              Try it here
            </a>
            <a
              href="https://github.com/chetanp87/Doc-Bot-Conversation"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Projects;
