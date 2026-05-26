function About() {
  return (
    <section
    className="fadeIn"
      style={{
        padding: "120px 30px",
        background: "transparent",
        color: "white",
      }}
    >
      <h2 className="section-title">
        Sobre mí
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >

        {/* CARD 1 */}
        <div
          className="cyber-card"
          style={{
            padding: "45px",
          }}
        >
          <h3
            className="neon-text"
            style={{
              fontSize: "32px",
              marginBottom: "25px",
            }}
          >
            Perfil Profesional
          </h3>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
            Estudiante de Ingeniería de Sistemas con interés
            en desarrollo web, ciberseguridad y administración
            de servidores. Enfocado en la construcción de
            soluciones modernas utilizando tecnologías
            frontend, Docker y herramientas Linux.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="cyber-card"
          style={{
            padding: "45px",
          }}
        >
          <h3
            className="neon-text"
            style={{
              fontSize: "32px",
              marginBottom: "25px",
            }}
          >
            Objetivos
          </h3>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
            Especializarme en tecnologías orientadas al
            desarrollo de plataformas seguras, escalables
            y modernas, aplicando conocimientos en
            ciberseguridad, virtualización y sistemas web.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;