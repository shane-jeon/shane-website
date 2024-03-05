import Image from "next/image";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Other from "@/components/Other";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-black">
      <NavBar />
      <div className="px-10 lg:px-0">
        <About />
        <Experience />
        <div className="lg:ml-4">
          <Project />
          <Other />
        </div>
        <Footer />
      </div>
    </main>
  );
}
