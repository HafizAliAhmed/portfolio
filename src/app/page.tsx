import Hero from "./component/main/Hero";
import About from "./component/main/About";
import Services from "./component/main/Services";
import Projects from "./component/main/Projects";
import Skills from "./component/main/Skills";
import Blogs from "./component/main/Blogs";
import FAQ from "./component/main/FAQ";
import Contact from "./component/main/Contact";

export default function Home() {
  return (
    <main className="w-full bg-bg text-text-primary">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Blogs />
      <FAQ />
      <Contact />
    </main>
  );
}
