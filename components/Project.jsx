"use client";

import Image from "next/image";
import Link from "next/link";
import LazyYoutube from "./Youtube";
import dcuniverse from "../public/dc_universe.jpg";
import specwebsite from "../public/specwebsite.jpg";
import luskin from "../public/luskin.jpg";

export default function Project() {
  return (
    <div id="projects" className="grid grid-cols-5 grid-rows-1 gap-y-10">
      <h1 className="col-start-2 text-4xl text-white lg:text-6xl">Projects</h1>
      <div className="col-start-2 col-end-6 flex">
        <div className="flex flex-col gap-20">
          <div id="project4" className="flex gap-36">
            <div className="w-96">
              <div className="flex justify-between">
                <h3 className="text-xl">LuskinOIC Website Redesign</h3>
                <p className="text-md">Fall 2023 - Spring 2024</p>
              </div>
              <p className="text-[#949494]">
                Currently engaged in collaborative effort to develop new
                frontend for medical non-profit, building upon success of
                securing $15k contract for Sustainable Progress and Equality
                Collective. Responsibilities encompass general site layout,
                navigation, setup of known data models, and early component
                scaffolding, making use of technologies such as React,
                TypeScript, Next.js, Tailwind CSS, and Contentful
              </p>
            </div>
            <div className="w-2/5">
              <Image src={luskin} className="object-fit" />
            </div>
          </div>
          <div id="project3" className="flex gap-36">
            <div className="w-96">
              <div className="flex justify-between">
                <h3 className="text-xl">SPEC Website Rebuild</h3>
                <p className="text-md">Spring 2023</p>
              </div>
              <p className="text-[#949494]">
                Contributed to constructing SPEC’s new website frontend in
                collaborative setting, demonstrating adaptability with
                technologies like Next.js, TypeScript, React, and TailwindCSS.
                Played key role in developing modern, responsive website aligned
                with organizational goals, improving skills through
                collaboration
              </p>
            </div>
            <div className="w-2/5">
              <Image src={specwebsite} className="object-fit" />
            </div>
          </div>
          <div className="flex gap-36">
            <div className="w-96">
              <div className="flex justify-between">
                <h3 className="text-xl">Into the DC Universe</h3>
                <p className="text-md">Winter 2022 - Spring 2023</p>
              </div>
              <p className="text-[#949494]">
                I created a web application for DC Animated Universe fans to
                explore their favorite characters, starting with Young Justice
                and planning to include Justice League and Harley Quinn. The
                homepage showcases character cards leading to detailed profiles
                and comic book lists by publication era. Recognizing the DC
                Universe's complexity, I aimed to simplify research for new
                fans. Inspired by my own journey from animated series to comics,
                I designed this app as a streamlined gateway into the DC
                Universe, making it easier for newcomers to navigate without the
                hassle of consulting multiple sources.
              </p>
            </div>
            <div className="w-2/5">
              <Image src={dcuniverse} className="object-fit" />
            </div>
          </div>
          <div
            id=""
            // className="col-start-2 col-end-6 row-start-3 gap-36">
            className="flex flex-col">
            <div className="flex gap-36">
              <div className="w-96">
                <div className="flex justify-between">
                  <h3 className="text-xl">Glow Up</h3>
                  <p className="text-md">Fall 2023</p>
                </div>
                <p className="text-[#949494]">
                  Web application built utilizing Python as primary programming
                  language, SQLAlchemy as ORM tool, and PostgreSQL for database
                  management on backend. Frontend interface built using HTML,
                  CSS, and JavaScript. Designed to provide small business owners
                  cost-effective solution for creating loyalty programs,
                  eliminating need for costly fees from pre-existing services
                </p>
              </div>
              <LazyYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
