import React, { useState } from 'react'
import { Sun } from 'lucide-react';
import { IoMoonOutline } from "react-icons/io5";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { type: "anchor", to: "#home", label: "Home" },
  { type: "anchor", to: "#about", label: "About" },
  { type: "anchor", to: "#skills", label: "Skills" },
  { type: "anchor", to: "#projects", label: "Projects" },
  { type: "anchor", to: "#contact", label: "Contact" },
  { type: "anchor", to: "#services", label: "My Services" },
  { type: "route", to: "/all_projects", label: "All Projects" }, // extra page
];


  return (
    <div
      className={`myfont w-full fixed left-0 z-20 pt-5 px-6 flex justify-between items-center 
        transition-colors duration-500
        ${isDarkMode ? "text-white" : "text-zinc-700"}`}
    >
      {/* title */}
      <div className="font-bold text-lg">
      </div>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex justify-center gap-7 backdrop-blur-lg items-center rounded-3xl shadow-md border px-6 h-11 
          transition-colors duration-500
          ${isDarkMode 
            ? " border-zinc-700 text-zinc-300" 
            : " border-zinc-100 text-zinc-700"}`}
      >
        {navItems.map((item) => (
  item.type === "anchor" ? (
    <a
      key={item.to}
      href={item.to}
      className="px-3 py-1 rounded-2xl transition-all duration-300 
        hover:bg-black hover:text-white"
    >
      {item.label}
    </a>
  ) : (
    <Link
      key={item.to}
      to={item.to}
      className="px-3 py-1 rounded-2xl transition-all duration-300 
        hover:bg-black hover:text-white"
    >
      {item.label}
    </Link>
  )
))}

      </div>

      {/* Dark Mode + Hamburger */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full transition-all duration-300 hover:scale-110"
        >
          {isDarkMode 
            ? <Sun className="w-5 h-5 text-yellow-400" /> 
            : <IoMoonOutline className="w-5 h-5 text-zinc-700" />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 w-full flex flex-col items-center gap-5 py-6 backdrop-blur-lg shadow-md border 
            transition-colors duration-500
            ${isDarkMode 
              ? "bg-black/80 border-zinc-700 text-zinc-300" 
              : "bg-white/80 border-zinc-100 text-zinc-700"}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-2xl transition-all duration-300 
                ${isDarkMode 
                  ? "hover:bg-white hover:text-black" 
                  : "hover:bg-black hover:text-white"}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
