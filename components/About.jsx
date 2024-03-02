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
    // "/next.svg",
    "/nextlogo.png",
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
            Transitioning into software engineering with a non-traditional
            background, I bring a unique blend of determination, creativity, and
            hands-on experience with modern web technologies. My journey is
            marked by self-directed learning and practical problem-solving,
            equipping me with a robust skill set ready to tackle real-world
            challenges. Eager to apply my knowledge and drive, I am poised to
            make a significant impact in the technology sector.
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
        <Image src="/profile_img.png" className="w-2/5 rounded-full" />
      </div>
    </div>
  );
}
