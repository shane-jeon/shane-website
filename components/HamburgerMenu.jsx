"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HamburgerMenu({ open, setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-28 lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex w-screen flex-col items-center justify-center bg-transparent py-10">
        <span
          className={`block h-0.5 w-6 rounded-sm bg-[#02FA9B]
        transition-all duration-300 ease-out ${
          isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }
      }`}></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-[#02FA9B] 
          transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-[#02FA9B]
        transition-all duration-300 ease-out ${
          isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
        }`}></span>
      </button>

      {isOpen && (
        <div className="flex-col bg-transparent text-center font-spaceGrotesk text-2xl font-light text-[#F8F8FF] lg:hidden">
          <ul>
            <li className="">
              <h1 className="font-medium text-[#02FA9B]">Shane J.</h1>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#other">Other</Link>
            </li>
            <li className="text-[#02FA9B]">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
