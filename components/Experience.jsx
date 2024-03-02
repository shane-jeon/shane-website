export default function Experience() {
  const workExperience = {
    "Sustainable Progress & Equality Collective [SPEC]": [
      "Associate Software Engineer",
      "April 2023 - Present",
      [
        "Enhanced user experience and represented client’s mission effectively by constructing custom web solutions for website reconstruction using NextJS, ReactJS, TypeScript, and headless CMS Contentful, resulting in increased online traffic and improved communication with patient and donor community",
        "Proficiently built responsive and interactive web pages in collaborative effort with product design through use of Figma, ReactJS, and TailwindCSS, ensuring highly responsive and interactive web pages",
        "Designed and structured Contentful data models to enhance web page foundations and efficiently implemented Content Delivery API for streamlined data integration into web frameworks, resulting in dynamic web page performance",
        "Demonstrated excellent communication skills, technical and non-technical, while effectively collaborating within team, contributing to enhanced problem resolution, and fostering cooperative team environment",
      ],
    ],
    "Rocket Lawyer": [
      "Quality Assurance Intern",
      "June 2022 - August 2022",
      [
        "Employed Java, Selenium, and Applitools to develop Proof of Concept, reducing manual testing time for 700+ static content pages from 3-4 weeks to under 4 hours",
        "Proactively refactored deprecated tests in codebase, pinpointing backend code issues and providing clear repair plans to streamline testing procedures and contribute to efficient debugging process by utilizing strong analytical abilities and commitment to problem resolution",
        "Re-engineered Selenium Python script to validate redirect functionality of over 1,000 URLs, successfully detecting and reporting 200-300 broken links, thereby contributing to overall quality of web content ",
      ],
    ],
  };
  return (
    <div
      id="experience"
      className="from-blue-950 from-0% to-black to-60% font-spaceGrotesk bg-radient-ellipse-c lg:grid lg:grid-cols-5 lg:place-items-start lg:gap-x-20 lg:pb-14">
      <h1 className="mb-6 text-4xl tracking-wider text-[#F8F8FF] lg:col-start-2 lg:row-start-1 lg:text-6xl">
        Experience
      </h1>
      <div className="lg:col-start-2 lg:col-end-5 lg:row-start-1 lg:mt-24">
        {Object.keys(workExperience).map((key, index) => (
          <div key={index} className="">
            <h2 className="mb-2 text-2xl font-normal leading-7 tracking-wide text-white">
              {key}
            </h2>
            <h3 className="mb-2 text-xl font-thin text-white">
              {workExperience[key][0]}
            </h3>
            <p className="mb-4 text-lg font-thin text-white">
              {workExperience[key][1]}
            </p>
            <p className="mb-6 pl-2 font-light text-[#949686] lg:mb-8 lg:text-xl">
              {workExperience[key][2].map((exp) => (
                <ul className="list-disc" key={index}>
                  <li className="pb-4 text-lg leading-relaxed">{exp}</li>
                </ul>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
