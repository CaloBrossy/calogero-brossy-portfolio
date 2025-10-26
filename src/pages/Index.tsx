import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;