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
import Testimonials from "./components/Testimonials";

/* PROYECTOS */
import Projects from "./components/Projects";

/* TERMINAL */
import Terminal from "./components/Terminal";

/* DOCUMENTACIÓN */
import ProfessionalJourney from "./components/ProfessionalJourney";
import Documentation from "./components/Documentation";

/* CERTIFICACIONES */
import Certifications from "./components/Certifications";

/* CONTACTO */
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  const isMobile =
    window.innerWidth <= 768;

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

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

      {/* EFECTOS SOLO EN PC */}

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

          <Testimonials />

          <Projects />

          <Terminal />

          <ProfessionalJourney />

          <Documentation />

          <Certifications />

          <Contact />

          <Footer />

        </main>

      </div>

    </div>
  );
}

export default App;
