function Contact() {

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
        Contacto Profesional
      </h2>

      <div
        className="cyber-card"
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "50px",
        }}
      >

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >

          <input
            type="text"
            placeholder="Nombre"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            style={inputStyle}
          />

          <textarea
            placeholder="Mensaje"
            rows="6"
            style={inputStyle}
          />

          <button
            className="cyber-button"
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          >
            Enviar Mensaje
          </button>

        </div>

      </div>

    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "20px",
  borderRadius: "14px",
  border: "1px solid rgba(0,255,255,.25)",
  background: "rgba(255,255,255,.03)",
  color: "white",
  fontSize: "18px",
  outline: "none",
  backdropFilter: "blur(8px)",
};

export default Contact;