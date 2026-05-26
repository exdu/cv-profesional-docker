function Loader() {

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99999,
      }}
    >

      {/* CIRCULO */}
      <div
        className="loader-circle"
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "5px solid rgba(0,255,255,.15)",
          borderTop: "5px solid #00ffff",
          animation: "spin 1.2s linear infinite",
          boxShadow: "0 0 35px rgba(0,255,255,.5)",
        }}
      />

      {/* TEXTO */}
      <h1
        className="neon-text"
        style={{
          marginTop: "35px",
          fontFamily: "Orbitron",
          letterSpacing: "5px",
          fontSize: "30px",
        }}
      >
        CARLOS.EXE
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "15px",
          fontSize: "18px",
        }}
      >
        Initializing cyber portfolio...
      </p>

    </div>
  );
}

export default Loader;