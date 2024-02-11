"use client";

import Image from "next/image";
import selfie from "../public/profile_img.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import javascript from "../public/JS.png";
import flask from "../public/flask.svg";
import next from "../public/nextJS.svg";
import typescript from "../public/TS.png";
import react from "../public/React.svg";
import postgres from "../public/postgresql.svg";
import tailwind from "../public/tailwind.svg";
import python from "../public/python.svg";

export default function About() {
  const splideImages = [
    javascript,
    typescript,
    next,
    react,
    tailwind,
    python,
    flask,
    postgres,
  ];
  const splideOptions = {
    perPage: 3,
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "8rem",
    width: "20rem",
    rewind: true,
    arrows: false,
  };
  return (
    <div
      id="about"
      className="grid h-screen grid-cols-5 grid-rows-5 items-center justify-around gap-x-20 font-spaceGrotesk">
      <div
        id="left"
        className="col-start-2 col-end-4 row-start-3 row-end-5 text-[#F8F8FF]">
        <div id="header">
          <h1 className="text-4xl lg:text-6xl">Shane Jeon</h1>
          <h2 className="pb-4 text-3xl lg:text-4xl">Software Engineer</h2>
        </div>
        <div id="body">
          <p className="pb-8 text-xl font-light text-[#949686]">
            An inquisitive software engineer with a passion for tinkering with
            new technologies and building applications. My professional
            experiences in tech include work in Quality Assurance and Frontend
            Development. I am seeking a support engineer role, as I can best
            leverage my familiarities from my prior career in customer service
            with my ever-growing technical skillsets as a developer.
          </p>
          <h3 className="text-2xl font-normal text-[#949494]">Tech Stack</h3>
          <div className="flex flex-wrap">
            {splideImages.map((splideImage) => (
              <Image
                src={splideImage}
                className="w-12 object-contain pb-6 pr-4 lg:w-16"
              />
            ))}
          </div>
        </div>
      </div>
      <div id="right" className="col-start-4 col-end-6 row-start-3 row-end-4">
        <Image src={selfie} className="rounded-full" />
      </div>
    </div>
  );
}
