import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import WhyImportant from "@/components/sections/WhyImportant";
import Services from "@/components/sections/Services";
import SchoolPrograms from "@/components/sections/SchoolPrograms";
import Process from "@/components/sections/Process";
import Advantages from "@/components/sections/Advantages";
import Audience from "@/components/sections/Audience";
import OurTeam from "@/components/sections/OurTeam";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { LayananToggleProvider } from "@/context/LayananToggleContext";

export default function Home() {
  return (
    <LayananToggleProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <WhyImportant />
        <Services />
        <SchoolPrograms />
        <Process />
        <Advantages />
        <Audience />
        <OurTeam />
        <FinalCta />
      </main>
      <Footer />
    </LayananToggleProvider>
  );
}
