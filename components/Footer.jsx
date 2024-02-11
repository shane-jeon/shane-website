import Link from "next/link";

export default function Footer() {
  const links = {
    Github: "https://github.com/shane-jeon",
    LinkedIn: "https://www.linkedin.com/in/shane-jeon-7b2663160/",
    Goodreads: "https://www.goodreads.com/user/show/4050666-shane-jeon",
  };
  return (
    <div
      id="contact"
      className="mx-96 mt-20 flex h-56 flex-col rounded-t-3xl bg-[#02FA9B] text-black">
      <div className="pl-20 pt-16">
        <p className="pb-10 text-3xl underline hover:no-underline">
          <Link href="mailto:shanexjeonx@gmail.com">shanexjeonx@gmail.com</Link>
        </p>
        <div className="flex gap-3">
          {Object.keys(links).map((key, index) => (
            <div key={index} className="hover:underline">
              <Link href={links[key]}>{key}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
