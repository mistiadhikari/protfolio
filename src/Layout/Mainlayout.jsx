import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { ThemeProvider } from "../Context/ThemeContext";

const Mainlayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Mainlayout;
