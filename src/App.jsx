import { useEffect, useState } from "react";

import Loader from "./components/Loader";

/* EFECTOS */
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";

/* NAVBAR */
import Navbar from "./components/Navbar";

/* HERO */
import Hero from "./components/Hero";

/* PRESENTACIÓN */
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

/* SECCIONES PESADAS */
import Testimonials from "./components/Testimonials";
import Terminal from "./components/Terminal";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Documentation from "./components/Documentation";

function App() {

  const [loading, setLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 768
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      clearTimeout(timer);

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        background: "#050816",
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

          {/* HERO */}
          <Hero />

          {/* PRESENTACIÓN */}
          <About />

          <Education />

          {/* PERFIL */}
          <Stats />

          <Skills />

          <TechStack />

          {/* SERVICIOS */}
          <Services />

          {/* EXPERIENCIA */}
          <Experience />

          {/* PROYECTOS */}
          <Projects />

          {/* CERTIFICACIONES */}
          <Certifications />

          {/* CONTACTO */}
          <Contact />

          {/* SOLO PC */}

          {!isMobile && (
            <>
              <Testimonials />

              <Terminal />

              <ProfessionalJourney />

              <Documentation />
            </>
          )}

          {/* FOOTER */}
          <Footer />

        </main>

      </div>

    </div>
  );
}

export default App;