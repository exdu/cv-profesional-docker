import { useContext } from "react";

import { CVContext } from "../context/CVContext";

import TypingText from "./TypingText";

function Hero() {

  const { data } = useContext(CVContext);

  return (
    <section
      id="inicio"
      className="cyber-bg fadeIn"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "140px 25px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* ORBS */}

      <div
        className="glow-orb"
        style={{
          width: "320px",
          height: "320px",
          background: "#00ffff",
          top: "0%",
          left: "-140px",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "260px",
          height: "260px",
          background: "#8b5cf6",
          bottom: "10%",
          right: "-100px",
        }}
      />

      {/* CONTENIDO */}

      <div
        style={{
          maxWidth: "1200px",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* LOGO */}

        <div
          className="float pulseGlow"
          style={{
            width: "190px",
            height: "190px",
            margin: "0 auto 45px",
            borderRadius: "50%",
            border: "2px solid #00ffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Orbitron",
            fontSize: "64px",
            fontWeight: "bold",
            color: "#00ffff",
            background: "rgba(0,255,255,.08)",
            boxShadow: "0 0 45px rgba(0,255,255,.45)",
            backdropFilter: "blur(12px)",
          }}
        >
          CB
        </div>

        {/* TAG */}

        <p
          className="neon-text"
          style={{
            letterSpacing: "7px",
            fontSize: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          CYBERSECURITY • WEB • DOCKER
        </p>

        {/* NOMBRE */}

        <h1
          style={{
            fontFamily: "Orbitron",
            fontSize: "92px",
            lineHeight: "102px",
            marginBottom: "15px",
            fontWeight: "900",
            textShadow: "0 0 35px rgba(0,255,255,.35)",
          }}
        >
          {data.personal.nombre}
        </h1>

        {/* TYPING */}

        <TypingText />

        {/* PERFIL */}

        <p
          style={{
            color: "#c7d2fe",
            fontSize: "24px",
            lineHeight: "42px",
            maxWidth: "950px",
            margin: "35px auto 0",
          }}
        >
          {data.perfil}
        </p>

        {/* BOTONES */}

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

          <a
            href="#proyectos"
            className="cyber-button"
          >
            Explorar Proyectos
          </a>

          <a
            href="#contacto"
            className="cyber-button"
          >
            Contactar
          </a>

        </div>

        {/* INFO */}

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "wrap",
          }}
        >

          <div
            className="cyber-card"
            style={infoCard}
          >

            <h3 className="neon-text">
              Universidad
            </h3>

            <p style={infoText}>
              {data.personal.universidad}
            </p>

          </div>

          <div
            className="cyber-card"
            style={infoCard}
          >

            <h3 className="neon-text">
              Carrera
            </h3>

            <p style={infoText}>
              {data.personal.carrera}
            </p>

          </div>

          <div
            className="cyber-card"
            style={infoCard}
          >

            <h3 className="neon-text">
              Ciclo
            </h3>

            <p style={infoText}>
              {data.personal.ciclo}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

const infoCard = {
  padding: "28px 35px",
  minWidth: "260px",
  textAlign: "center",
};

const infoText = {
  color: "#c7d2fe",
  marginTop: "15px",
  fontSize: "20px",
};

export default Hero;