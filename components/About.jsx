"use client";

import Image from "next/image";

// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

export default function About() {
  const splideImages = [
    "/javascript.svg",
    "/typescript.svg",
    "/react1.svg",
    "/tailwind.svg",
    "/next.svg",
    // "/nextlogo.png",
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
      className="flex flex-col-reverse from-blue-950 from-0% to-black to-60% font-spaceGrotesk bg-radient-ellipse-c lg:mt-10 lg:grid lg:h-screen lg:grid-cols-5 lg:grid-rows-5 lg:items-center lg:justify-around lg:gap-x-20">
      <div
        id="left"
        className="flex flex-col text-[#F8F8FF] lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:justify-normal">
        <div id="header" className="mb-4">
          <h1 className="mb-1 text-4xl lg:text-6xl">Shane Jeon</h1>
          <h2 className="text-3xl lg:pb-4 lg:text-4xl">Software Engineer</h2>
        </div>
        <div id="body">
          <p className="pb-6 text-xl font-light leading-normal text-[#949686] lg:pb-8">
            As a software engineer with hands-on experience in modern web
            technologies, my background is characterized by a strong blend of
            creativity, determination, and practical problem-solving skills. My
            expertise spans frontend development and quality assurance, both of
            which have been instrumental in honing my engineering capabilities.
            This experience has not only enhanced my technical skills but also
            deepened my understanding of team dynamics and workflow within the
            technology sector. With a track record of applying my knowledge to
            real-world challenges, I am excited to make a significant impact and
            contribute effectively to projects and teams in the tech industry.
          </p>
          <h3 className="pb-2 text-2xl font-normal text-[#949494]">
            Tech Stack
          </h3>
          <div className="mb-10 flex flex-wrap justify-center rounded-l-md pl-4 lg:justify-start">
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
        <Image src="/selfie.png" className="w-3/5 rounded-full" />
      </div>
    </div>
  );
}
