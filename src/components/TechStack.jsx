function TechStack() {

  const techs = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Docker",
    "Linux",
    "GitHub",
    "Node.js",
    "Ubuntu",
    "VirtualBox",
    "Nginx",
    "Cybersecurity",
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
        Tech Stack
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >

        {techs.map((tech, index) => (

          <div
            key={index}
            className="pulseGlow"
            style={{
              padding: "18px 30px",
              border: "1px solid rgba(0,255,255,.35)",
              borderRadius: "40px",
              background: "rgba(0,255,255,.05)",
              backdropFilter: "blur(10px)",
              color: "#00ffff",
              fontSize: "22px",
              fontWeight: "bold",
              boxShadow: "0 0 20px rgba(0,255,255,.15)",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            {tech}
          </div>

        ))}

      </div>

    </section>
  );
}

export default TechStack;