import React from "react";

const Name = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-6xl mx-auto"
    >
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Hi there,</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-100">
          I am <span className="text-purple-400 font-semibold">Chetan Parate</span>
        </h2>
      </div>
    </section>
  );
};

export default Name;
