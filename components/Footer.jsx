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
      className="mt-20 flex h-56 flex-col rounded-t-3xl bg-[#02FA9B] text-black lg:mx-96 lg:h-64">
      <div className="pl-6 pt-10 leading-loose lg:pl-20 lg:pt-20">
        <p className="pb-6 text-2xl underline underline-offset-4 hover:no-underline lg:pb-10 lg:text-3xl">
          <Link href="mailto:shanexjeonx@gmail.com">shanexjeonx@gmail.com</Link>
        </p>
        <div className="justify-right flex gap-4 text-lg lg:gap-3">
          {Object.keys(links).map((key, index) => (
            <div
              key={index}
              className="lg:no-italic italic underline-offset-4 hover:underline">
              <Link href={links[key]}>{key}</Link>
            </div>
          ))}
        </div>
      </div>
      <p className="pr-8 pt-8 text-right text-lg italic lg:pr-14 lg:pt-4">
        &#42; Designed by{" "}
        <Link
          href="https://boyaye-portfolio.webflow.io/"
          className="font-semibold underline underline-offset-4 hover:no-underline">
          Boya Le
        </Link>
      </p>
    </div>
  );
}
