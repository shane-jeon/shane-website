"use client";

import Image from "next/image";

// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

export default function About() {
  const splideImages = [
    "/javascript.svg",
    "/typescript.svg",
    "/next.svg",
    "/react1.svg",
    "/tailwind.svg",
    "/python.svg",
    "/flask.svg",
    "/postgresql.svg",
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
      className="flex flex-col-reverse font-spaceGrotesk lg:mt-10 lg:grid lg:h-screen lg:grid-cols-5 lg:grid-rows-5 lg:items-center lg:justify-around lg:gap-x-20">
      <div
        id="left"
        className="flex flex-col text-[#F8F8FF] lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:justify-normal">
        <div id="header" className="mb-4">
          <h1 className="mb-1 text-4xl lg:text-6xl">Shane Jeon</h1>
          <h2 className="text-3xl lg:pb-4 lg:text-4xl">Software Engineer</h2>
        </div>
        <div id="body">
          <p className="pb-6 text-xl font-light leading-normal text-[#949686] lg:pb-8">
            An inquisitive software engineer with a passion for tinkering with
            new technologies and building applications. My professional
            experiences in tech include work in Quality Assurance and Frontend
            Development. I am seeking a support engineer role, as I can best
            leverage my familiarities from my prior career in customer service
            with my ever-growing technical skillsets as a developer.
          </p>
          <h3 className="pb-2 text-2xl font-normal text-[#949494]">
            Tech Stack
          </h3>
          <div className="mb-10 flex flex-wrap justify-center rounded-l-md bg-gradient-radial from-blue-950 from-10% to-black to-80% bg-repeat-y pl-4 lg:justify-start lg:from-20% lg:to-70%">
            {splideImages.map((splideImage, index) => (
              <Image
                key={index}
                src={splideImage}
                alt={Array.from(splideImage).slice(1, -4).join("")}
                className="w-12 object-contain pb-6 pr-4 lg:w-16 lg:pt-4"
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="right"
        alt="profile-picture"
        className="mb-10 flex justify-center lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-4 lg:justify-normal">
        <Image src="/profile_img.png" className="rounded-full" />
      </div>
    </div>
  );
}
