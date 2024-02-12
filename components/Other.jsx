import Image from "next/image";
import Link from "next/link";

export default function Other() {
  const communityEngagements = [
    {
      link: "https://www.twilio.com/en-us/blog/ai-hackathon-google",
      title: "Twilio Hackathon",
      date: "May 2023",
      role: "Participant",
      image: "/twilio.jpg",
    },
    {
      link: "https://www.reactathon.com/",
      title: "Reactathon",
      date: "May 2023",
      role: "Volunteer",
      image: "/reactathon.png",
    },
  ];

  const awards = [
    {
      link: "https://girlsintech2023.devpost.com/project-gallery",
      title: "Girls in Tech SF: Hacking for Humanity",
      project: "https://github.com/hicass/nalam-jellyfish",
      projectTitle: "Team Jellyfish: NALAM Donor Portal",
      date: "November 2023",
      win: "2nd Place",
      image: "/group_pic.png",
    },
  ];
  return (
    <div id="other" className="lg:grid lg:grid-cols-5">
      <h1 className="mb-6 text-4xl tracking-wider text-white lg:col-start-2 lg:mb-0 lg:text-6xl">
        Other
      </h1>
      <div className="flex flex-col justify-between lg:col-start-2 lg:col-end-5 lg:mt-10 lg:flex-row lg:gap-10">
        <div className="mb-6 lg:col-start-4 lg:mb-0">
          <h2 className="tracking-loose mb-5 text-2xl text-[#02FA9B] lg:mb-12 lg:text-3xl">
            Community Engagement
          </h2>
          {communityEngagements.map((engagement, index) => (
            <div key={index} className="mb-8 flex flex-col-reverse lg:flex-col">
              <div className="leading-looser">
                <h4 className="tracking-looser text-xl text-white hover:text-[#02FA9B]">
                  <Link
                    href={engagement.link}
                    target="_blank"
                    className="underline underline-offset-4 hover:text-[#02FA9B] hover:no-underline">
                    {engagement.title}
                  </Link>
                </h4>
                <p className="text-md text-white">{engagement.date}</p>
                <p className="text-md text-[#949494]">{engagement.role}</p>
              </div>
              <div>
                <Image
                  alt={engagement.title}
                  src={engagement.image}
                  className="mb-4 lg:mt-2 lg:w-96"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h2 className="tracking-loose mb-5 text-2xl text-[#02FA9B] lg:mb-12 lg:text-3xl">
            Awards
          </h2>
          {awards.map((award, index) => (
            <div key={index}>
              <div className="mb-4 lg:w-96">
                <Image alt={award.title} src={award.image} />
              </div>
              <div className="leading-looser">
                <h4 className="text-xl text-white">
                  <Link
                    href={award.link}
                    target="_blank"
                    className="underline underline-offset-4 hover:text-[#02FA9B] hover:no-underline">
                    {award.title}
                  </Link>
                </h4>
                <p className="text-md text-white">{award.date}</p>
                <p className="text-md text-[#949494]">{award.win}</p>
                <p className="text-md text-[#949494]">
                  <Link
                    href={award.project}
                    target="_blank"
                    className="underline underline-offset-4 hover:text-[#02FA9B] hover:no-underline">
                    {award.projectTitle}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
