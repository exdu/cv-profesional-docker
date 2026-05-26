import { useEffect, useState } from "react";

import Loader from "./components/Loader";

/* EFECTOS */
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";

/* NAVBAR */
import Navbar from "./components/Navbar";

/* SECCIONES */
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";

/* PERFIL */
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

/* EXPERIENCIA */
import Services from "./components/Services";
import Experience from "./components/Experience";

/* PROYECTOS */
import Projects from "./components/Projects";

/* CERTIFICACIONES */
import Certifications from "./components/Certifications";

/* CONTACTO */
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* SOLO PC */
import Testimonials from "./components/Testimonials";
import Terminal from "./components/Terminal";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Documentation from "./components/Documentation";

function App() {

  const [loading, setLoading] = useState(true);

  const isMobile =
    window.innerWidth <= 768;

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundColor: "#050816",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >

      {/* EFECTOS SOLO PC */}

      {!isMobile && <Background />}

      {!isMobile && <CursorGlow />}

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

          <Experience />

          <Projects />

          <Certifications />

          <Contact />

          {/* SOLO PC */}

          {!isMobile && <Testimonials />}

          {!isMobile && <Terminal />}

          {!isMobile && <ProfessionalJourney />}

          {!isMobile && <Documentation />}

          <Footer />

        </main>

      </div>

    </div>
  );
}

export default App;
