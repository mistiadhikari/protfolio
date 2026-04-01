import React, { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import { allProjects } from "../Data/ProjectsData";

const categories = ["All", "React", "JS", "BIM"];

const categoryStyles = {
  All: "from-gray-900 to-gray-700",
  React: "from-cyan-500 to-blue-600",
  JS: "from-amber-400 to-orange-500",
  BIM: "from-emerald-500 to-teal-600",
};

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProject = filteredProjects[0];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(147,51,234,0.16),_transparent_30%),linear-gradient(180deg,_#fcfbff_0%,_#f7f3ff_45%,_#fffaf6_100%)] py-16 sm:py-20">
      <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-12 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md">
              <FaStar className="text-pink-500" />
              Project Showcase
            </p>

            <h1 className="mt-6 max-w-3xl text-3xl sm:text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Projects that reflect my learning, creativity, and growth as a developer.
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600">
              A collection of work where I experiment with design, improve my coding skills, and turn ideas into interactive digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "Projects Built", value: `${allProjects.length}+` },
                { label: "Main Focus", value: "React UI" },
                { label: "Approach", value: "Learn by building" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-[9rem] rounded-2xl border border-white/80 bg-white/75 px-4 py-4 sm:px-5 shadow-lg backdrop-blur-md"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-500">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {featuredProject && (
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-3xl bg-pink-300/30 blur-2xl" />
              <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-violet-300/30 blur-2xl" />

              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-[18rem] w-full object-cover sm:h-[22rem]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-800 shadow">
                    Featured Work
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-purple-200">{featuredProject.category}</p>
                    <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{featuredProject.title}</h2>
                    <p className="mt-3 max-w-lg text-sm text-gray-200">
                      {featuredProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Explore My Work</h2>
            <p className="mt-2 text-gray-600">
              Filter by category and browse projects with their stack and links.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-3 rounded-3xl border border-white/70 bg-white/80 p-2 shadow-md backdrop-blur-md lg:w-auto lg:rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                  selectedCategory === cat
                    ? "bg-gray-900 text-white shadow-lg"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r ${categoryStyles[project.category] || categoryStyles.All} px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <FaLayerGroup className="text-purple-500" />
                  Built with
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
                  >
                    <FaGithub />
                    View Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50 sm:w-auto"
                  >
                    <FaExternalLinkAlt />
                    Live Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/80 bg-gradient-to-r from-gray-950 via-purple-950 to-fuchsia-900 px-5 py-8 text-white shadow-2xl sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                <FaCodeBranch />
                More On GitHub
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Want to see more of my project journey?</h3>
              <p className="mt-3 text-purple-100">
                I'm continuously building and improving projects as I learn. You can explore more code, experiments, and progress on my GitHub profile.
              </p>
            </div>

            <a
              href="https://github.com/mistiadhikari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-gray-900 transition hover:bg-purple-50 sm:w-auto"
            >
              View All Projects
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
