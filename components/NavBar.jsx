"use client";

import React, { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function NavBar() {
  const navLinks = {
    "#about": "About",
    "#experience": "Experience",
    "#projects": "Projects",
    "#other": "Other",
  };

  return (
    <div className="lg:px-16 lg:pt-10">
      <HamburgerMenu />
      <div className="hidden py-4 font-spaceGrotesk text-lg font-medium lg:block lg:flex lg:justify-between">
        <div className="rounded-bl-xl rounded-tr-xl bg-[#02FA9B] px-4 text-black">
          <p>Shane J.</p>
        </div>
        <div className="">
          <ul className="flex gap-14 font-light text-white">
            {Object.keys(navLinks).map((key, index) => (
              <div key={index} className="">
                <li>
                  <Link href={key}>{navLinks[key]}</Link>
                </li>
              </div>
            ))}
            <li>
              <button className="rounded-full bg-[#02FA9B] px-4 font-medium text-black">
                <Link href="#contact">Contact</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
