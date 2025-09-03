import BackgroundSection from "@/components/sections/BackgroundSection";
import ContactSection from "@/components/sections/ContactSection";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    // only enable snap scroll on md+ screens
    <div className="h-auto w-full min-h-screen min-w-screen overflow-y-scroll md:h-screen md:w-screen md:snap-y md:snap-mandatory">
      <IntroSection />
      <BackgroundSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
 
