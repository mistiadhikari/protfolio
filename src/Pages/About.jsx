import React from "react";
import { FaArrowRight, FaGraduationCap, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import Miss from "../assets/miss.jpeg";

const highlights = [
  {
    title: "Education",
    description: "Bachelor of Information Management with a growing interest in building modern digital products.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Current Focus",
    description: "Sharpening my frontend and full stack skills through React projects and hands-on practice.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Mindset",
    description: "Curious, creative, and committed to turning ideas into clean and user-friendly experiences.",
    icon: <FaLightbulb />,
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-violet-100 py-16 sm:py-20">
      <div className="absolute left-0 top-16 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-44 w-44 rounded-full bg-fuchsia-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-14 text-center">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm">
            Get To Know Me
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
            A learner who enjoys blending creativity, technology, and curiosity to build meaningful web experiences.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-3xl bg-pink-400/20 blur-xl" />
            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-purple-400/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-3 sm:p-4 shadow-2xl backdrop-blur-md">
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6 max-w-[11rem] sm:max-w-none rounded-full bg-white/90 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 shadow">
                Creative Developer Journey
              </div>

              <img
                src={Miss}
                alt="Misti portrait"
                className="h-[22rem] sm:h-[26rem] lg:h-[28rem] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 max-w-[12rem] sm:max-w-[14rem] rounded-2xl bg-gray-900 px-4 py-3 sm:px-5 sm:py-4 text-white shadow-xl">
                <p className="text-sm font-medium text-purple-200">Currently exploring</p>
                <p className="mt-1 text-sm sm:text-lg font-semibold">React, UI design, and full stack development</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 sm:p-8 shadow-xl backdrop-blur-md md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hello! I'm <span className="text-purple-600">Misti</span>
            </h2>

            <div className="mt-6 space-y-5 text-gray-600">
              <p>
                I recently graduated with a degree in
                <span className="font-semibold text-gray-800"> Bachelor of Information Management (BIM)</span>.
                My academic journey helped me understand how technology and structure can work together to solve real problems.
              </p>

              <p>
                Right now, I am exploring
                <span className="font-semibold text-gray-800"> Full Stack Web Development</span> and enjoying the process of building responsive, user-friendly applications with HTML, CSS, JavaScript, and React.
              </p>

              <p>
                My goal is to keep learning, strengthen my development skills, and create digital solutions that feel both useful and visually engaging.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 p-5 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-100">Focus Area</p>
                <p className="mt-2 text-xl font-semibold">Frontend and Full Stack Growth</p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-500">What Drives Me</p>
                <p className="mt-2 text-xl font-semibold text-gray-800">Learning by building real projects</p>
              </div>
            </div>

            <div className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white shadow-lg">
              Building step by step toward a confident developer career
              <FaArrowRight className="text-purple-300" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/70 bg-white/80 p-7 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-2xl text-white shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
