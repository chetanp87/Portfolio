import React from "react";
import {
  FaGamepad,
  FaPlane,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiC, SiCplusplus  } from "react-icons/si";
import image1 from "../assets/image1.jpg";
import SkillsCard from "../Component/SkillCard";

const About = () => {
  const skills = [
    { icon: SiC, label: "C" },
    { icon: SiCplusplus , label: "C++" },
    { icon: FaJsSquare, label: "JavaScript" },
    { icon: FaNodeJs, label: "Node.js" },
    { icon: FaReact, label: "React" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: FaGitAlt, label: "Git" },
    { icon: SiPostgresql, label: "SQL" },
    { icon: FaPython, label: "Python" },
  ];

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-28 space-y-8">
      <section
        id="about"
        className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-28 space-y-8"
      >
        <h1 className="text-4xl font-bold">Know Who I'M</h1>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-6">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-4 text-lg">
            <p>Hi Everyone, I am Chetan Parate from Chandrapur.</p>
            <p>
              I am a final year student pursuing Computer Engineering at Rajiv
              Gandhi College of Engineering, Research and Technology.
            </p>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaGamepad className="text-purple-400 mr-2" /> Playing Games
              </li>
              <li className="flex items-center">
                <FaPlane className="text-purple-400 mr-2" /> Travelling
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-8">
            <img
              src={image1}
              alt="Image"
              className="w-3/4 md:w-full max-w-xs md:max-w-sm rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="skills">
          <h2 className="text-4xl font-bold text-center pt-8">
            My <span className="text-purple-400">Skillset</span>
          </h2>
          <div className="flex mx-auto flex-wrap mt-10 w-3/4 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <SkillsCard key={index} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
