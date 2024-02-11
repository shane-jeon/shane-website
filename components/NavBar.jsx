"use client";

import React, { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function NavBar() {
  return (
    <div className="lg:px-16">
      <HamburgerMenu />
      <div className="hidden py-4 font-spaceGrotesk text-lg font-medium lg:block lg:flex lg:justify-between">
        <div className="rounded-bl-xl rounded-tr-xl bg-[#02FA9B] px-4 text-black">
          <p>Shane J.</p>
        </div>
        <div className="flex gap-14 font-light text-white">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          {/* dropdown menu */}
          <Link href="#other">Other</Link>
          <button className="rounded-full bg-[#02FA9B] px-4 font-medium text-black">
            <Link href="#contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
