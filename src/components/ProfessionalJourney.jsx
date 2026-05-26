function ProfessionalJourney() {

  const sections = [

    "Desarrollo Web Moderno",
    "Administración de Servidores",
    "Docker y Virtualización",
    "Ciberseguridad",
    "Infraestructura Linux",
    "Tecnologías Frontend",
    "Diseño Responsive",
    "Buenas Prácticas",
    "Git y GitHub",
    "Arquitectura Web",
    "React y Componentes",
    "Sistemas Distribuidos",
    "Experiencia Académica",
    "Proyectos Tecnológicos",
    "Networking",
    "Innovación Digital",
    "Análisis de Sistemas",
    "Seguridad Informática",
    "Metodologías Ágiles",
    "Cloud y Deployment",

  ];

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
        Professional Journey
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
        }}
      >

        {sections.map((title, index) => (

          <div
            key={index}
            className="cyber-card"
            style={{
              padding: "45px",
            }}
          >

            <h3
              className="neon-text"
              style={{
                fontSize: "36px",
                marginBottom: "30px",
                fontFamily: "Orbitron",
              }}
            >
              {title}
            </h3>

            <p style={paragraph}>
              Desarrollo de conocimientos técnicos orientados a la creación
              de soluciones digitales modernas utilizando herramientas actuales
              del ecosistema tecnológico y metodologías enfocadas en rendimiento,
              seguridad y experiencia de usuario.
            </p>

            <p style={paragraph}>
              Implementación de proyectos académicos relacionados con
              desarrollo web, administración de servidores Linux,
              despliegue mediante Docker, configuración de redes,
              diseño responsive y estructuras escalables.
            </p>

            <p style={paragraph}>
              Participación en procesos de aprendizaje continuo sobre
              tecnologías frontend, virtualización, ciberseguridad,
              documentación técnica y optimización de entornos
              de producción modernos.
            </p>

            <p style={paragraph}>
              Integración de herramientas como React, GitHub,
              Node.js, Ubuntu Server, Docker y Nginx
              para la construcción de aplicaciones profesionales
              orientadas a entornos reales.
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

export default ProfessionalJourney;