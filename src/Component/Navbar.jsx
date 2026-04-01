import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-300
     ${isActive ? "text-yellow-300" : "text-white"}
     hover:text-yellow-300`;

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-600 flex flex-col items-center py-4 space-y-4">
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
      )}
    </nav>
  );
};

export default Navbar;