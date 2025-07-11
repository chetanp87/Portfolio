import React from "react";
import image1 from '../assets/image1.jpg';

const Intro = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-white text-center mx-auto">LET ME INTRODUCE MYSELF</h1>
      <div className="intro mt-10 flex">
        <div className="left text-2xl text-white">
          My name is Chetan Parate, and Im currently in my fourth year of
          Computer Science Engineering at [Your College Name] in Nagpur. Ive
          achieved 93% in 10th and 90% in 12th.
        </div>
        <div className="right w-96 h-96">
            <img src={image1}/>
        </div>
      </div> */}

{/* <div className="min-h-screen flex flex-col justify-center items-center  px-6">
      <h1 className="text-4xl font-semibold text-white text-center mb-10">
      LET ME INTRODUCE MYSELF
      </h1>
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div className="text-white text-lg md:w-1/2 leading-relaxed space-y-4">
          <p>
            My name is <strong>Chetan Parate</strong>, and I'm currently in my
            fourth year of Computer Science Engineering at Rajiv Gandhi College of Engineering, Research and Technology in
            Chandrapur.
          </p>
          <p>
          I am skilled in full-stack development and Python. I have completed projects like the DocBot conversation assistant
          </p>
          <p>

          </p>
        </div>

        <div className="md:w-1/2 mt-10 flex justify-center">
          <img src={image1} alt="Coding img" className="w-80 rounded-2xl md:w-96" />
        </div>
      </div>
    </div> */}

    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-10">
        LET ME INTRODUCE MYSELF
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-10 md:space-y-0 md:space-x-10">
        <div className="text-white text-base sm:text-lg md:w-1/2 leading-relaxed space-y-4">
          <p>
            My name is <strong>Chetan Parate</strong>, and I'm currently in my
            fourth year of Computer Science Engineering at Rajiv Gandhi College of
            Engineering, Research and Technology in Chandrapur.
          </p>
          <p>
            I am skilled in full-stack development and Python. I have completed
            projects like the DocBot conversation assistant.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={image1}
            alt="Chetan Coding"
            className="w-64 sm:w-80 md:w-96 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Intro;


//bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]