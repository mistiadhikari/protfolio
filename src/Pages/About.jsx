import React from "react";
import Miss from "../assets/miss.jpeg";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h1>

        {/* Profile + Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Miss}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              Hello! I'm Misti
            </h2>

            <p className="text-gray-600 mb-4">
              I recently graduated with a degree in 
              <span className="font-semibold"> Bachelor of Information Management (BIM)</span>. 
              My academic journey helped me understand digital construction 
              technologies and modern project workflows.
            </p>

            <p className="text-gray-600 mb-4">
              Currently, I am exploring the world of 
              <span className="font-semibold"> Full Stack Web Development</span>. 
              I enjoy building responsive and user-friendly web applications 
              using technologies like HTML, CSS, JavaScript, and React.
            </p>

            <p className="text-gray-600">
              My goal is to combine my technical knowledge with creativity 
              to build useful digital solutions and continuously improve 
              my development skills.
            </p>
          </div>

        </div>


        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Education
            </h3>
            <p className="text-gray-600">
              Bachelor Degree in Building Information Modeling (BIM)
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Current Focus
            </h3>
            <p className="text-gray-600">
              Learning Full Stack Development and building projects using React.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Career Goal
            </h3>
            <p className="text-gray-600">
              To become a skilled developer and work on modern web applications.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;