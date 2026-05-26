function Stats() {

  const stats = [
    {
      number: "15+",
      title: "Proyectos",
    },

    {
      number: "6",
      title: "Tecnologías",
    },

    {
      number: "100%",
      title: "Responsive",
    },

    {
      number: "24/7",
      title: "Aprendizaje",
    },
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
        Estadísticas Tecnológicas
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "35px",
        }}
      >

        {stats.map((stat, index) => (

          <div
            key={index}
            className="cyber-card pulseGlow"
            style={{
              padding: "50px 30px",
              textAlign: "center",
            }}
          >

            <h3
              className="neon-text"
              style={{
                fontSize: "70px",
                fontFamily: "Orbitron",
                marginBottom: "20px",
              }}
            >
              {stat.number}
            </h3>

            <p
              style={{
                color: "#b5b5b5",
                fontSize: "22px",
                letterSpacing: "2px",
              }}
            >
              {stat.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;