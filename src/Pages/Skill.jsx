import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiExpress, SiMongodb } from "react-icons/si";

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
      { name: "REST APIs", icon: "⚡", color: "text-purple-500" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
      { name: "Responsive Design", icon: "📱", color: "text-pink-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My Tech Stack
        </h1>

        {/* Category Sections */}
        <div className="grid md:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/70 border border-white/40
              rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Glowing circle */}
                    <div
                      className={`w-16 h-16 flex items-center justify-center text-3xl rounded-full
                      bg-white shadow-md group-hover:scale-110 group-hover:shadow-2xl
                      transition duration-300 ${skill.color}`}
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

        {/* Floating badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {[
            "Problem Solving",
            "Team Collaboration",
            "Fast Learner",
            "Clean Code",
            "UI/UX Focused",
          ].map((badge, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500
              text-white rounded-full shadow-lg hover:scale-110 transition"
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