"use client";

import Image from "next/image";
import Link from "next/link";
import LazyYoutube from "@/components/Youtube";

export default function Project() {
  const projects = [
    {
      title: "LuskinOIC Website Redesign *",
      time: "Fall 2023 - Spring 2024",
      image: "/luskin.jpg",
      summary:
        "Currently engaged in collaborative effort to develop new frontend for medical non-profit, building upon success of securing $18k contract for Sustainable Progress and Equality Collective. Responsibilities encompass general site layout, navigation, setup of known data models, and early component scaffolding, making use of technologies such as React, TypeScript, Next.js, Tailwind CSS, and Contentful ",
      link: "",
    },
    {
      title: "SPEC Website Rebuild",
      time: "Spring 2023",
      summary:
        "As part of a team effort, the project focused on building SPEC's new website frontend, utilizing technologies such as Next.js, TypeScript, React, and TailwindCSS in a collaborative environment. Contributions were crucial in developing a modern, responsive website that aligned with organizational objectives, facilitating skill enhancement through collaboration.",
      image: "/specwebsite.jpg",
      link: "https://specollective.org/",
    },
    {
      title: "Into the DC Universe",
      time: "Winter 2022 - Spring 2023",
      summary:
        "A web application developed for fans of the DC Animated Universe, offering an exploration of favorite characters, initially featuring the animated television series 'Young Justice'(2010) with plans to expand to 'Justice League'(2001) and 'Harley Quinn'(2019). The homepage presents character cards that lead to detailed profiles and comic book lists organized by publication era. Acknowledging the complexity of the DC Universe, the application was designed to simplify research for new fans. Inspired by the transition from animated series to comics, the app serves as a streamlined gateway into the DC Universe, facilitating an easier navigation for newcomers without the need to consult multiple sources.",
      image: "/dc_universe.jpg",
      link: "https://github.com/shane-jeon/Into_the_DCUniverse",
    },
  ];
  return (
    <div
      id="projects"
      className="from-blue-950 from-0% to-black to-60% py-10 bg-radient-ellipse-c lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-y-10">
      <h1 className="mb-6 text-4xl tracking-wider text-white lg:col-start-2 lg:mb-2 lg:text-6xl">
        Projects
      </h1>
      <div className="flex lg:col-start-2 lg:col-end-6">
        <div className="lg:flex lg:flex-col lg:gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mb-14 flex flex-col-reverse gap-5 lg:mb-2 lg:flex lg:flex-row lg:gap-36">
              <div className="lg:w-96">
                <div className="justify-between lg:flex">
                  <h3 className="mb-1 text-xl">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-[#02FA9B] underline-offset-4 hover:text-white hover:underline">
                        {" "}
                        {project.title}
                      </Link>
                    ) : (
                      <span className="text-[#02FA9B]">{project.title}</span>
                    )}
                  </h3>
                  <p className="text-md mb-2 text-white">{project.time}</p>
                </div>
                {project.title.slice(-1) === "*" ? (
                  <p className="text-sm italic text-white">
                    &#42;In development
                  </p>
                ) : null}
                <p className="text-lg tracking-normal text-[#949494]">
                  {project.summary}
                </p>
              </div>
              <div className="lg:w-2/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-fit"
                />
              </div>
            </div>
          ))}
          <div id="" className="flex flex-col">
            <div
              id="project1"
              className="mb-10 flex flex-col-reverse gap-5 lg:flex-row lg:gap-36">
              <div className="lg:w-96">
                <div className="justify-between text-white lg:flex">
                  <h3 className="mb-1 text-xl">
                    <Link
                      href="https://github.com/shane-jeon/loyalty-program"
                      target="_blank"
                      className="text-[#02FA9B] underline-offset-4 hover:text-white hover:underline">
                      Glow Up
                    </Link>
                  </h3>
                  <p className="text-md mb-2">Fall 2023</p>
                </div>
                <p className="text-lg text-[#949494]">
                  Web application built utilizing Python as primary programming
                  language, SQLAlchemy as ORM tool, and PostgreSQL for database
                  management on backend. Frontend interface built using HTML,
                  CSS, and JavaScript. Designed to provide small business owners
                  cost-effective solution for creating loyalty programs,
                  eliminating need for costly fees from pre-existing services
                </p>
              </div>
              <div className="hidden lg:block lg:w-2/5">
                <LazyYoutube />
              </div>
              <div className="lg:hidden lg:w-3/5">
                <Image
                  alt="glowup"
                  src="/glowupstatic.jpg"
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
