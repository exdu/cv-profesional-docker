function Documentation() {

  const docs = Array.from({ length: 18 }, (_, i) => i + 1);

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
        Technical Documentation
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >

        {docs.map((doc) => (

          <div
            key={doc}
            className="cyber-card"
            style={{
              padding: "45px",
            }}
          >

            <h3
              className="neon-text"
              style={{
                fontSize: "34px",
                marginBottom: "30px",
                fontFamily: "Orbitron",
              }}
            >
              Documentation Module {doc}
            </h3>

            <p style={paragraph}>
              Desarrollo de documentación técnica relacionada
              con implementación de aplicaciones web modernas,
              administración de servidores Linux y despliegue
              mediante tecnologías basadas en contenedores Docker.
            </p>

            <p style={paragraph}>
              Aplicación de metodologías orientadas a rendimiento,
              seguridad informática, escalabilidad y experiencia
              de usuario utilizando React, Node.js y herramientas
              modernas del ecosistema frontend.
            </p>

            <p style={paragraph}>
              Configuración de entornos virtualizados utilizando
              Ubuntu Server, permisos, almacenamiento, redes,
              autenticación segura y estructuras de despliegue
              basadas en Nginx y Docker.
            </p>

            <p style={paragraph}>
              Diseño de interfaces responsive enfocadas en
              accesibilidad, interacción moderna, animaciones,
              componentes reutilizables y optimización visual
              orientada a experiencias premium.
            </p>

            <p style={paragraph}>
              Integración de GitHub para control de versiones,
              mantenimiento del código fuente, actualización
              continua y despliegue en servicios de hosting
              gratuitos orientados a aplicaciones modernas.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

const paragraph = {
  color: "#cbd5e1",
  fontSize: "21px",
  lineHeight: "38px",
  marginBottom: "25px",
};

export default Documentation;