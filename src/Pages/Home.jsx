import React from "react";
import { Link } from "react-router-dom";
import Hello from "../assets/hello.jpeg";
import About from "./About";
import Skills from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import ProjectsSlider from "../Component/ProjectsSlider";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Hello, I'm <span className="text-purple-600">Misti</span>
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              A passionate learner exploring the world of
              <span className="font-semibold"> Full Stack Development</span>.
              I recently graduated in
              <span className="font-semibold"> Bachelor of Information Management (BIM)</span>
              and love creating modern, user-friendly web applications.
            </p>

            <p className="mt-4 text-gray-500">
              Currently learning React and building projects to improve my development skills.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <Link
                to="/project"
                className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE WITH FLOATING ICONS */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">

              {/* Glow background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>

              {/* FLOATING ICONS */}
              <FaReact className="absolute text-cyan-400 text-5xl top-0 left-10 float" />
              
              <FaNodeJs
                className="absolute text-green-500 text-5xl bottom-5 left-0 float"
                style={{ animationDelay: "1s" }}
              />

              <SiMongodb
                className="absolute text-green-600 text-5xl top-10 right-0 float"
                style={{ animationDelay: "2s" }}
              />

              <SiExpress
                className="absolute text-gray-700 text-5xl bottom-0 right-10 float"
                style={{ animationDelay: "3s" }}
              />

              <FaGitAlt
                className="absolute text-red-500 text-5xl top-1/2 -left-10 float"
                style={{ animationDelay: "2.5s" }}
              />

              <SiJavascript
                className="absolute text-yellow-400 text-5xl top-1/2 -right-10 float"
                style={{ animationDelay: "1.5s" }}
              />

              {/* PROFILE IMAGE */}
              <img
                src={Hello}
                alt="Profile"
                className="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl z-10"
              />

            </div>
          </div>

        </div>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Skills />
      <ProjectsSlider />
      <Contact />
    </div>
  );
};

export default Home;