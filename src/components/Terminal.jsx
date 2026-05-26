function Terminal() {

  const lines = [
    "> Initializing portfolio...",
    "> Loading React modules...",
    "> Docker container deployed...",
    "> Ubuntu server configured...",
    "> Cybersecurity protocols enabled...",
    "> Access granted.",
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
        System Console
      </h2>

      <div
        className="cyber-card"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "40px",
          background: "rgba(0,0,0,.55)",
          border: "1px solid rgba(0,255,255,.25)",
        }}
      >

        {/* TOP BAR */}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
          }}
        >

          <div style={dotRed}></div>

          <div style={dotYellow}></div>

          <div style={dotGreen}></div>

        </div>

        {/* TERMINAL */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          {lines.map((line, index) => (

            <p
              key={index}
              className="terminal-line"
              style={{
                color: "#00ffff",
                fontFamily: "Orbitron",
                fontSize: "20px",
                letterSpacing: "1px",
              }}
            >
              {line}
            </p>

          ))}

        </div>

      </div>

    </section>
  );
}

const dotRed = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "#ef4444",
};

const dotYellow = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "#facc15",
};

const dotGreen = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "#22c55e",
};

export default Terminal;