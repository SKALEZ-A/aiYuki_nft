"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState("false");

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#0a0a0a] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link href={"/"} className="text-5xl text-[#6EEBDD] font-semibold">
          ZEN NINJAVERSE
        </Link>
        {/* ========== for mobile menu =========== */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text--white"
            >
              bar3 icon
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text--white"
            ></button>
          )}
        </div>
        <div className="menu hidden md:block w-auto" id="navbar">
          <ul className="flex p-4 md:flex-row md:space-x-8 mt-0">
            {/* {navLinks.map((link, index) => ( */}
            {/* <li key={index}> */}
            {/* <NavLink href={link.path} title={link.title} /> */}
            {/* </li> */}
            {/* ))} */}
            <li className="text-white text-semibold ">Home</li>
            <li className="text-white text-semibold ">Docs</li>
            <li className="text-white text-semibold ">Roadmap</li>
            <li className="text-white text-semibold ">Discord</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
