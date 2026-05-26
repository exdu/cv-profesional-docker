function Testimonials() {

  const testimonials = [

    {
      name: "Proyecto Universitario",
      text:
        "Participación en proyectos colaborativos enfocados en desarrollo web y soluciones tecnológicas modernas.",
    },

    {
      name: "Administración Linux",
      text:
        "Configuración de servidores Ubuntu, permisos, redes y despliegue de aplicaciones virtualizadas.",
    },

    {
      name: "Cybersecurity",
      text:
        "Investigación y aplicación de autenticación segura, MFA y protección de accesos digitales.",
    },

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
        Experiencias Tecnológicas
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
        }}
      >

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="cyber-card"
            style={{
              padding: "40px",
            }}
          >

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "21px",
                lineHeight: "36px",
                marginBottom: "30px",
              }}
            >
              "{item.text}"
            </p>

            <h3
              className="neon-text"
              style={{
                fontFamily: "Orbitron",
                fontSize: "22px",
              }}
            >
              {item.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;