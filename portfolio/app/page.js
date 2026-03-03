import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AwardsBar from "@/components/AwardsBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AwardsBar />
      <About />
      <Projects />
      <Footer />
    </>
  );
}