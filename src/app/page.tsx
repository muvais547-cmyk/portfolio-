import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ExperienceSkills from "@/components/ExperienceSkills";
import BackgroundGlows from "@/components/BackgroundGlows";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <BackgroundGlows />
      <Hero />
      <SectionDivider label="SEC_01 // BIOGRAPHY_START" />
      <About />
      <SectionDivider label="SEC_02 // SERVICES_START" />
      <Services />
      <SectionDivider label="SEC_03 // EXPERIENCE_START" />
      <ExperienceSkills />
      <SectionDivider label="SEC_04 // CONNECT_START" />
      <Contact />
    </main>
  );
}
