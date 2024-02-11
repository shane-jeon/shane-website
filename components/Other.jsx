import Image from "next/image";
import Link from "next/link";
import group from "../public/group_pic.jpg";
import banner from "../public/banner2.jpg";
import twilio from "../public/twilio.jpg";

export default function Other() {
  return (
    <div className="grid grid-cols-5">
      <h1 className="col-start-2 text-6xl text-white">Other</h1>
      <div className="col-start-2 col-end-5 mt-20 flex justify-between gap-10">
        <div className="col-start-4">
          <h2 className="mb-12 text-3xl text-white">Community Engagement</h2>
          <div id="twilio">
            <h4 className="text-xl text-white">
              <Link
                href="https://www.twilio.com/en-us/blog/ai-hackathon-google"
                className="underline">
                Twilio Hackathon
              </Link>
              - Participant
            </h4>
            <p className="text-md text-white">May 2023</p>
            <p className="text-[#949494]">adlsfjk;adls</p>
            <p className="text-[#949494]"></p>
            <Image src={twilio} className="w-96" />
          </div>
          <div id="reactathon">
            <h4 className="mt-10 text-xl text-white">
              <Link href="https://www.reactathon.com/" className="underline">
                Reactathon
              </Link>{" "}
              - Volunteer
            </h4>

            <p className="text-md text-white">May 2023</p>
            <p className="text-[#949494]">dsfadsfasd</p>
            <div>
              <Image src={banner} className="w-96" />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="mb-12 text-3xl text-white">Awards</h2>
          <div id="hackathon" className="">
            <div className="w-96">
              <Image src={group} />
            </div>
            <h4 className="text-xl text-white">
              <Link
                href="https://girlsintech2023.devpost.com/project-gallery"
                className="underline">
                Girls in Tech SF Hacking for Humanity
              </Link>
            </h4>
            <p className="text-md text-white">November 2023</p>
            <p className="text-[#949494]">2nd Place Winners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
