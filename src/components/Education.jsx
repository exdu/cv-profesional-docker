import cvData from "../data/cvData";

function Education() {

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
        Educación Académica
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <div
          className="cyber-card"
          style={{
            padding: "50px",
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
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(0,255,255,.08)",
            }}
          />

          <p
            className="neon-text"
            style={{
              fontFamily: "Orbitron",
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            2023 - ACTUALIDAD
          </p>

          <h3
            style={{
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
            {cvData.personal.carrera}
          </h3>

          <p
            style={{
              color: "#00ffff",
              fontSize: "24px",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            {cvData.personal.universidad}
          </p>

          <p
            style={{
              color: "#b5b5b5",
              lineHeight: "38px",
              fontSize: "21px",
            }}
          >
            Formación enfocada en desarrollo de software,
            ciberseguridad, administración de servidores,
            redes, virtualización y tecnologías modernas
            orientadas a soluciones digitales escalables.
          </p>

          {/* TAGS */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >

            <div style={tag}>
              React
            </div>

            <div style={tag}>
              Docker
            </div>

            <div style={tag}>
              Linux
            </div>

            <div style={tag}>
              Redes
            </div>

            <div style={tag}>
              Ciberseguridad
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

const tag = {
  padding: "12px 22px",
  border: "1px solid #00ffff",
  borderRadius: "30px",
  color: "#00ffff",
  fontSize: "18px",
  boxShadow: "0 0 15px rgba(0,255,255,.25)",
};

export default Education;