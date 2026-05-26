import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Terminal from "./components/Terminal";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Documentation from "./components/Documentation";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  /* LOADER */

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundColor: "#050816",
        minHeight: "100vh",
        position: "relative",
      }}
    >

      {/* EFECTOS DE FONDO */}

      <Background />

      <CursorGlow />

      {/* CONTENIDO */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >

        <Navbar />

        <main>

          <Hero />

          <About />

          <Education />

          <Stats />

          <Skills />

          <TechStack />

          <Services />

          <Terminal />

          <Testimonials />

          <ProfessionalJourney />

          <Documentation />

          <Projects />

          <Certifications />

          <Experience />

          <Contact />

          <Footer />

        </main>

      </div>

    </div>
  );
}

export default App;
