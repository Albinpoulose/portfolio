import "./src/styles/globals.css";

import Navbar from "./src/components/Navbar.jsx";
import Footer from "./src/components/Footer.jsx";
import LiveTerminal from "./src/components/LiveTerminal.jsx";

import Hero from "./src/pages/Hero.jsx";
import Skills from "./src/pages/Skills.jsx";
import Projects from "./src/pages/Projects.jsx";
import Timeline from "./src/pages/Timeline.jsx";
import Contact from "./src/pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <LiveTerminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
