import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-white text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left">
        <h2 className="text-lg font-bold sm:text-xl">Misti Portfolio</h2>

        <div className="flex flex-wrap justify-center gap-5 text-2xl sm:gap-6">
          <a
            href="https://github.com/mistiadhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gray-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/misti-adhikari-08am24"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-600"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/mistiiiiiii__/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="px-4 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Misti. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
