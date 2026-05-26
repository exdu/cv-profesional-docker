import cvData from "../data/cvData";

function Footer() {

  const { redes, personal } = cvData;

  return (
    <footer
    className="fadeIn"
      id="contacto"
      style={{
        padding: "120px 30px 60px",
        background: "transparent",
        color: "white",
        borderTop: "1px solid rgba(0,255,255,.2)",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          textAlign: "center",
        }}
      >

        <h2 className="section-title">
          Contacto & Redes
        </h2>

        <p
          style={{
            color: "#b5b5b5",
            fontSize: "22px",
            maxWidth: "800px",
            margin: "0 auto 50px",
            lineHeight: "38px",
          }}
        >
          Disponible para proyectos tecnológicos, desarrollo web,
          soluciones digitales y colaboraciones orientadas a innovación.
        </p>

        {/* BOTONES REDES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >

          <a
            href={redes.facebook}
            target="_blank"
            style={socialButton}
          >
            Facebook
          </a>

          <a
            href={redes.instagram}
            target="_blank"
            style={socialButton}
          >
            Instagram
          </a>

          <a
            href={redes.whatsapp}
            target="_blank"
            style={socialButton}
          >
            WhatsApp
          </a>


        </div>

        {/* INFO */}
        <div
          className="cyber-card"
          style={{
            padding: "40px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >

          <h3
            className="neon-text"
            style={{
              fontSize: "32px",
              marginBottom: "25px",
              fontFamily: "Orbitron",
            }}
          >
            Información Profesional
          </h3>

          <p style={infoText}>
            📍 {personal.ciudad}
          </p>

          <p style={infoText}>
            🎓 {personal.universidad}
          </p>

          <p style={infoText}>
            💻 {personal.carrera}
          </p>

          <p style={infoText}>
            📧 {personal.correo}
          </p>

          <p style={infoText}>
            📱 {personal.telefono}
          </p>

        </div>

        {/* COPYRIGHT */}
        <div
          style={{
            marginTop: "70px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: "30px",
          }}
        >

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
            }}
          >
            © 2026 Carlos Eduardo Bravo Picon — Cyber Portfolio
          </p>

        </div>

      </div>
    </footer>
  );
}

const socialButton = {
  padding: "18px 35px",
  borderRadius: "14px",
  border: "1px solid #00ffff",
  color: "#00ffff",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.3s",
  boxShadow: "0 0 20px rgba(0,255,255,.2)",
};

const infoText = {
  color: "#b5b5b5",
  fontSize: "21px",
  marginBottom: "18px",
};

export default Footer;