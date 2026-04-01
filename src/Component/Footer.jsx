import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">

        {/* Logo / Name */}
        <h2 className="text-xl font-bold mb-4 md:mb-0">
          Misti Portfolio
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/mistiadhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/misti-adhikari-08am24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/mistiiiiiii__/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm py-4">
        © {new Date().getFullYear()} Misti. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;