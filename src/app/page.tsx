import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import AgentSimulator from "@/components/AgentSimulator";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";
import FlutedGlass from "@/components/FlutedGlass";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-hot/30 selection:text-white">
      <FlutedGlass />
      <Navbar />
      <Hero />
      <ArchitectureDiagram />
      <AgentSimulator />
      <Experience />
      <Projects />
      <SkillsGrid />
      <Footer />
    </main>
  );
}
