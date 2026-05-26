function Services() {

  const services = [

    {
      title: "Desarrollo Web",
      desc:
        "Creación de interfaces modernas, responsive y optimizadas utilizando React y tecnologías frontend.",
    },

    {
      title: "Docker & Deployment",
      desc:
        "Despliegue de aplicaciones web mediante Docker, Nginx y entornos Linux virtualizados.",
    },

    {
      title: "Ciberseguridad",
      desc:
        "Implementación de autenticación segura, validación de accesos y buenas prácticas de seguridad.",
    },

    {
      title: "Administración Linux",
      desc:
        "Configuración de usuarios, permisos, almacenamiento y redes en Ubuntu Server.",
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
        Servicios Tecnológicos
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
        }}
      >

        {services.map((service, index) => (

          <div
            key={index}
            className="cyber-card"
            style={{
              padding: "45px",
              position: "relative",
              overflow: "hidden",
            }}
          >

            {/* EFECTO */}

            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(0,255,255,.08)",
              }}
            />

            <h3
              className="neon-text"
              style={{
                fontSize: "34px",
                marginBottom: "25px",
                fontFamily: "Orbitron",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#b5b5b5",
                lineHeight: "34px",
                fontSize: "20px",
              }}
            >
              {service.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;