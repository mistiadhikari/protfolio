import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-300 ${
      isActive ? "text-amber-400 dark:text-amber-300" : "text-slate-700 dark:text-slate-100"
    } hover:text-amber-400 dark:hover:text-amber-300`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-lg shadow-slate-200/50 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85 dark:shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <h1 className="text-lg font-bold tracking-wide text-slate-900 dark:text-white sm:text-2xl">
          Misti<span className="text-purple-600 dark:text-amber-300">.dev</span>
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

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <span>{theme === "dark" ? "Day" : "Dark"}</span>
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md px-2 py-1 text-sm font-semibold text-slate-700 dark:text-white"
              aria-label="Toggle menu"
            >
            <FaHome size={22} className="text-purple-500 hover:text-yellow-300 transition" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="px-4 pb-4 md:hidden">
          <div className="flex flex-col items-stretch rounded-2xl border border-slate-200 bg-white/90 p-3 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900/95">
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
