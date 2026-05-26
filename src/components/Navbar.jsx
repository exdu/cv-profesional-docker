import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        background: "rgba(5, 8, 22, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,255,255,0.2)",
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "22px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        {/* LOGO */}
        <h1
          className="neon-text"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Orbitron",
            letterSpacing: "2px",
          }}
        >
          CARLOS.EXE
        </h1>

        {/* MENU DESKTOP */}
        <div className="desktop-menu">

          <a href="#inicio" style={linkStyle}>
            Inicio
          </a>

          <a href="#skills" style={linkStyle}>
            Skills
          </a>

          <a href="#proyectos" style={linkStyle}>
            Proyectos
          </a>

          <a href="#contacto" style={linkStyle}>
            Contacto
          </a>

        </div>

        {/* BOTON MENU MOVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-button"
          style={{
            background: "transparent",
            border: "none",
            color: "#00ffff",
            fontSize: "34px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

      </div>

      {/* MENU MOVIL */}
      {open && (

        <div
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "25px 30px",
            gap: "25px",
            background: "#020617",
            borderTop: "1px solid rgba(0,255,255,.15)",
          }}
        >

          <a href="#inicio" style={mobileLink}>
            Inicio
          </a>

          <a href="#skills" style={mobileLink}>
            Skills
          </a>

          <a href="#proyectos" style={mobileLink}>
            Proyectos
          </a>

          <a href="#contacto" style={mobileLink}>
            Contacto
          </a>

        </div>

      )}

    </nav>
  );
}

const linkStyle = {
  color: "white",
  fontSize: "18px",
  marginLeft: "30px",
  transition: "0.3s",
};

const mobileLink = {
  color: "white",
  fontSize: "22px",
};

export default Navbar;