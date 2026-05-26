import cvData from "../data/cvData";

function Skills() {

  const skills = cvData.skills;

  return (
    <section
    className="fadeIn"
      id="skills"
      style={{
        padding: "120px 30px",
        background: "transparent",
        color: "white",
      }}
    >
      <h2 className="section-title">
        Skills Tecnológicos
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "35px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="cyber-card"
            style={{
              padding: "45px 30px",
              textAlign: "center",
            }}
          >

            <h3
              className="neon-text"
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                fontFamily: "Orbitron",
              }}
            >
              {skill.nombre}
            </h3>

            <p
              style={{
                color: "#00ffff",
                marginBottom: "18px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {skill.nivel}
            </p>

            <p
              style={{
                color: "#b5b5b5",
                lineHeight: "32px",
                fontSize: "18px",
              }}
            >
              Experiencia aplicada en proyectos universitarios,
              desarrollo web y tecnologías modernas.
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;