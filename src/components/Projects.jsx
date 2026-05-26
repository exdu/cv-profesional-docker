import cvData from "../data/cvData";

function Projects() {

  const projects = cvData.proyectos;

  return (
    <section
    className="fadeIn"
      id="proyectos"
      style={{
        padding: "120px 30px",
        background: "transparent",
      }}
    >
      <h2 className="section-title">
        Proyectos Destacados
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "35px",
        }}
      >

        {projects.map((p, i) => (

          <div
            key={i}
            className="cyber-card"
            style={{
              padding: "40px",
              position: "relative",
              overflow: "hidden",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "120px",
                height: "120px",
                background: "rgba(0,255,255,.08)",
                borderRadius: "50%",
              }}
            />

            <p
              className="neon-text"
              style={{
                fontFamily: "Orbitron",
                marginBottom: "18px",
                fontSize: "15px",
                letterSpacing: "3px",
              }}
            >
              PROYECTO 0{i + 1}
            </p>

            <h3
              style={{
                fontSize: "34px",
                marginBottom: "22px",
                lineHeight: "45px",
              }}
            >
              {p.titulo}
            </h3>

            <p
              style={{
                color: "#b5b5b5",
                fontSize: "19px",
                lineHeight: "34px",
              }}
            >
              {p.descripcion}
            </p>

          </div>

        ))}
      </div>
    </section>
  );
}

export default Projects;