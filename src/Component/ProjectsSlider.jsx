import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { allProjects } from "../Data/ProjectsData";

const ProjectsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === allProjects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? allProjects.length - 1 : current - 1);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <h2 className="mb-10 px-4 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
        Featured Projects
      </h2>

      <div className="relative mx-auto w-[92%] overflow-hidden rounded-2xl shadow-lg md:max-w-4xl">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {allProjects.map((project, index) => (
            <div key={index} className="relative min-w-full">
              <img
                src={project.image}
                alt={project.title}
                className="h-[320px] w-full object-cover sm:h-[380px] md:h-[420px]"
              />

              <div className="absolute bottom-0 w-full bg-black/70 p-4 text-white sm:p-6">
                <h2 className="text-xl font-bold sm:text-2xl">{project.title}</h2>
                <p className="mt-1 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow sm:left-3 sm:p-3"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow sm:right-3 sm:p-3"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/project"
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition text-center"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSlider;
