import Link from "next/link";

export default function Footer() {
  const links = [
    {
      name: "Github",
      url: "https://github.com/shane-jeon",
      imgSrc: "/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shane-jeon-7b2663160/",
      imgSrc: "/linkedin.png",
    },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/4050666",
      imgSrc: "/goodreads.png",
    },
  ];

  return (
    <div
      id="contact"
      className="mt-20 flex h-56 flex-col rounded-t-3xl bg-[#02FA9B] text-black lg:mx-96 lg:h-64">
      <div className="pl-6 pt-10 leading-loose lg:pl-20 lg:pt-20">
        <p className="pb-6 text-2xl underline underline-offset-8 hover:no-underline lg:pb-10 lg:text-3xl">
          <Link href="mailto:shanexjeonx@gmail.com">
            <span>shanexjeonx@gmail.com</span>
          </Link>
        </p>
        <div className="flex gap-4 lg:gap-6">
          {links.map((link) => (
            <Link key={link.name} href={link.url}>
              <img
                src={link.imgSrc}
                alt={link.name}
                className="h-8 w-8 hover:opacity-75 lg:h-10 lg:w-10"
              />
            </Link>
          ))}
        </div>
      </div>
      <p className="pr-8 pt-8 text-right text-lg italic lg:pr-14 lg:pt-4">
        &#42; Designed by{" "}
        <Link href="https://boyaye-portfolio.webflow.io/">
          <span className="font-semibold underline underline-offset-4 hover:no-underline">
            Boya Ye
          </span>
        </Link>
      </p>
    </div>
  );
}
