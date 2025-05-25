"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Resume",
    path: "https://drive.google.com/file/d/1gTXzhT9aWAJWBtSOgh8GzxqxIb1D7QDD/view?usp=sharing",
  },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (path) => {
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(path, "_blank");
    }
  };

  return (
    <nav
      className={`fixed mx-auto border ${
        theme === "dark" ? "border-[#33353F]" : "border-gray-200"
      } top-0 left-0 right-0 z-10 ${
        theme === "dark" ? "bg-[#121212]" : "bg-white"
      } bg-opacity-100`}
    >
      <div className="flex items-center justify-between container lg:py-4 mx-auto px-4 py-2">
        {/* Left: Logo */}
       <Link href={"/"} className="flex items-center space-x-2">
  {/* Avatar image next to name */}
  <div className="flex items-center space-x-2">
    <Image
      src="/1.jpeg"
      alt="Profile"
      width={32}
      height={32}
      className="rounded-full"
    />
    <span
      className={`text-lg md:text-3xl semibold ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      Kampalli
    </span>
  </div>
</Link>


        {/* Right: Nav Links + Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex md:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.path)}
                  className={`px-3 py-2 rounded-md hover:bg-slate-800 hover:border ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className={`p-2 border rounded ${
                  theme === "dark"
                    ? "border-slate-200 text-slate-200"
                    : "border-gray-800 text-gray-800"
                }`}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className={`p-2 border rounded ${
                  theme === "dark"
                    ? "border-slate-200 text-slate-200"
                    : "border-gray-800 text-gray-800"
                }`}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} theme={theme} />}
    </nav>
  );
};

export default Navbar;
