import { useEffect, useState } from "react";

import Loader from "./components/Loader";

/* EFECTOS */
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";

/* NAVBAR */
import Navbar from "./components/Navbar";

/* SECCIONES PRINCIPALES */
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";

/* PERFIL PROFESIONAL */
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

/* SERVICIOS Y EXPERIENCIA */
import Services from "./components/Services";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";

/* PROYECTOS */
import Projects from "./components/Projects";

/* TECNOLOGÍAS */
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

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
      }}
    >

      {/* EFECTOS */}
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
          <Testimonials />

          {/* PROYECTOS */}
          <Projects />

          {/* TERMINAL / DOCKER */}
          <Terminal />

          {/* DOCUMENTACIÓN */}
          <ProfessionalJourney />
          <Documentation />

          {/* CERTIFICACIONES */}
          <Certifications />

          {/* CONTACTO */}
          <Contact />

          {/* FOOTER */}
          <Footer />

        </main>

      </div>

    </div>
  );
}

export default App;
