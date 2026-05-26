function Experience() {

  const experiences = [
    {
      year: "2024",
      title: "Desarrollo Web",
      desc: "Creación de interfaces web modernas utilizando HTML, CSS, JavaScript y React."
    },

    {
      year: "2025",
      title: "Administración de Servidores",
      desc: "Configuración de Ubuntu Server, usuarios, permisos, almacenamiento y redes."
    },

    {
      year: "2025",
      title: "Docker & Virtualización",
      desc: "Despliegue de aplicaciones web mediante Docker, Nginx y entornos virtualizados."
    },

    {
      year: "2026",
      title: "Ciberseguridad",
      desc: "Estudio de autenticación segura, certificados digitales y seguridad informática."
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
        Experiencia & Trayectoria
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          position: "relative",
        }}
      >

        {/* LINEA */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "4px",
            height: "100%",
            background: "#00ffff",
            transform: "translateX(-50%)",
            boxShadow: "0 0 20px #00ffff",
          }}
        />

        {experiences.map((exp, index) => (

          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                index % 2 === 0 ? "flex-start" : "flex-end",
              marginBottom: "70px",
            }}
          >

            <div
              className="cyber-card"
              style={{
                width: "45%",
                padding: "35px",
                position: "relative",
              }}
            >

              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  width: "20px",
                  height: "20px",
                  background: "#00ffff",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px #00ffff",
                  right: index % 2 === 0 ? "-50px" : "auto",
                  left: index % 2 !== 0 ? "-50px" : "auto",
                }}
              />

              <p
                className="neon-text"
                style={{
                  marginBottom: "15px",
                  fontFamily: "Orbitron",
                }}
              >
                {exp.year}
              </p>

              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                {exp.title}
              </h3>

              <p
                style={{
                  color: "#b5b5b5",
                  lineHeight: "32px",
                  fontSize: "18px",
                }}
              >
                {exp.desc}
              </p>

            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Experience;