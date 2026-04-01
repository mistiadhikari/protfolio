import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { allProjects } from "../Data/ProjectsData";

const ProjectsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === allProjects.length - 1 ? 0 : prev + 1
      );
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
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="relative w-11/12 md:max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {allProjects.map((project, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute bottom-0 bg-black/70 text-white w-full p-6">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-sm mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="text-center mt-10">
        <a href="/project">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            View All Projects →
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSlider;