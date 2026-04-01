import React from "react";
import {
  FaBolt,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "REST APIs", icon: <FaBolt />, color: "text-purple-500" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
      { name: "Responsive Design", icon: <FaMobileAlt />, color: "text-pink-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="mb-14 text-center text-3xl font-bold sm:mb-20 sm:text-4xl md:text-5xl">
          My Tech Stack
        </h1>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-lg transition duration-500 hover:shadow-2xl sm:p-8"
            >
              <h2 className="mb-6 text-center text-xl font-bold sm:mb-8 sm:text-2xl">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-md transition duration-300 group-hover:scale-110 group-hover:shadow-2xl sm:h-16 sm:w-16 sm:text-3xl ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <p className="mt-3 text-sm font-semibold opacity-80 group-hover:opacity-100">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 sm:mt-20 sm:gap-4">
          {[
            "Problem Solving",
            "Team Collaboration",
            "Fast Learner",
            "Clean Code",
            "UI/UX Focused",
          ].map((badge, i) => (
            <span
              key={i}
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm text-white shadow-lg transition hover:scale-110 sm:px-6 sm:py-3 sm:text-base"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
