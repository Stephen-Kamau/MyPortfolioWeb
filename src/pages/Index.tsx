
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white  mx-auto">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Volunteer />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
