import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { TrustBadges } from "./components/TrustBadges";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { FloatingContact } from "./components/FloatingContact";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <TrustBadges />
      <Projects />
      <Process />
      <Contact />
      <FloatingContact />
    </div>
  );
}
