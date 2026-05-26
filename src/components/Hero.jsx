function Hero() {

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >

      <div>

        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "2px solid #00ffff",
            margin: "0 auto 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            color: "#00ffff",
          }}
        >
          CB
        </div>

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Carlos Eduardo
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#c7d2fe",
            maxWidth: "700px",
          }}
        >
          Portfolio profesional desarrollado
          con React, Docker y diseño responsive.
        </p>

      </div>

    </section>
  );
}

export default Hero;