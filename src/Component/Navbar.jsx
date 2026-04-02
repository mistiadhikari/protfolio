import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-300 ${
      isActive ? "text-yellow-300" : "text-white"
    } hover:text-yellow-300`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <h1 className="text-lg font-bold tracking-wide text-white sm:text-2xl">
          Misti<span className="text-yellow-400">.dev</span>
        </h1>
       
        

        <div className="hidden gap-8 md:flex">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/skill" className={navLinkStyle}>
            Skill
          </NavLink>
          <NavLink to="/project" className={navLinkStyle}>
            Project
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md px-2 py-1 text-sm font-semibold text-white"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-purple-600 px-4 pb-4 md:hidden">
          <div className="flex flex-col items-stretch rounded-2xl bg-white/10 p-3 text-center">
            <NavLink to="/" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/skill" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
              Skill
            </NavLink>
            <NavLink to="/project" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
              Project
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
