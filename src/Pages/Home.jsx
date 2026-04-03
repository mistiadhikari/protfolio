import React from "react";
import { Link } from "react-router-dom";
import Hello from "../assets/hello.jpeg";
import About from "./About";
import Skills from "./Skill";
import Contact from "./Contact";
import ProjectsSlider from "../Component/ProjectsSlider";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-slate-950 flex items-center">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-slate-100 sm:text-4xl md:text-5xl">
              Hello, I'm <span className="text-purple-600 dark:text-purple-300">Misti</span>
            </h2>

            <p className="mt-4 text-base text-gray-600 dark:text-slate-300 sm:text-lg">
              A passionate learner exploring the world of
              <span className="font-semibold"> Full Stack Development</span>. I recently
              graduated in
              <span className="font-semibold">
                {" "}
                Bachelor of Information Management (BIM)
              </span>
              and love creating modern, user-friendly web applications.
            </p>

            <p className="mt-4 text-gray-500 dark:text-slate-400">
              Currently learning React and building projects to improve my development
              skills.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Link
                to="/project"
                className="rounded-full bg-purple-600 px-6 py-3 text-center text-white shadow transition hover:bg-purple-700"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-purple-600 px-6 py-3 text-center text-purple-600 transition hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-[18rem] w-full max-w-[28rem] items-center justify-center sm:h-[22rem] md:h-[24rem]">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl dark:opacity-40" />

              <FaReact className="float absolute left-8 top-3 z-20 text-3xl text-cyan-400 sm:left-14 sm:text-4xl md:left-16 md:text-5xl" />

              <FaNodeJs
                className="float absolute bottom-6 left-6 z-20 text-3xl text-green-500 sm:left-10 sm:text-4xl md:left-12 md:text-5xl"
                style={{ animationDelay: "1s" }}
              />

              <SiMongodb
                className="float absolute right-8 top-5 z-20 text-3xl text-green-600 sm:right-12 sm:text-4xl md:right-14 md:text-5xl"
                style={{ animationDelay: "2s" }}
              />

              <SiExpress
                className="float absolute bottom-4 right-8 z-20 text-3xl text-gray-700 dark:text-slate-200 sm:right-12 sm:text-4xl md:right-14 md:text-5xl"
                style={{ animationDelay: "3s" }}
              />

              <FaGitAlt
                className="float absolute left-0 top-1/2 z-20 -translate-y-1/2 text-3xl text-red-500 sm:left-1 sm:text-4xl md:left-2 md:text-5xl"
                style={{ animationDelay: "2.5s" }}
              />

              <SiJavascript
                className="float absolute right-0 top-1/2 z-20 -translate-y-1/2 text-3xl text-yellow-400 sm:right-1 sm:text-4xl md:right-2 md:text-5xl"
                style={{ animationDelay: "1.5s" }}
              />

              <img
                src={Hello}
                alt="Profile"
                className="relative z-10 h-52 w-52 rounded-full border-4 border-white object-cover shadow-2xl dark:border-slate-800 sm:h-64 sm:w-64 md:h-72 md:w-72"
              />
            </div>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <ProjectsSlider />
      <Contact />
    </div>
  );
};

export default Home;
