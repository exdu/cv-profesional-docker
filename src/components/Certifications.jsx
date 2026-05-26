function Certifications() {

  const certs = [

    {
      title: "Docker Fundamentals",
      org: "Tech Learning Academy",
    },

    {
      title: "Linux Server Administration",
      org: "Virtual Labs",
    },

    {
      title: "Cybersecurity Essentials",
      org: "Cisco Networking Academy",
    },

    {
      title: "Frontend Web Development",
      org: "Developer Training",
    },

    {
      title: "Networking Basics",
      org: "Cisco",
    },

    {
      title: "React Fundamentals",
      org: "Frontend Academy",
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
        Certificaciones
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
        }}
      >

        {certs.map((cert, index) => (

          <div
            key={index}
            className="cyber-card"
            style={{
              padding: "40px",
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
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(0,255,255,.08)",
              }}
            />

            <p
              className="neon-text"
              style={{
                fontFamily: "Orbitron",
                marginBottom: "18px",
                letterSpacing: "3px",
              }}
            >
              CERTIFICATE
            </p>

            <h3
              style={{
                fontSize: "32px",
                marginBottom: "22px",
                lineHeight: "42px",
              }}
            >
              {cert.title}
            </h3>

            <p
              style={{
                color: "#b5b5b5",
                fontSize: "20px",
              }}
            >
              {cert.org}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;