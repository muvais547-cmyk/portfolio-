import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ExperienceSkills from "@/components/ExperienceSkills";
import BackgroundGlows from "@/components/BackgroundGlows";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <BackgroundGlows />
      <Hero />
      <About />
      <Services />
      <ExperienceSkills />
      <Contact />
    </main>
  );
}
