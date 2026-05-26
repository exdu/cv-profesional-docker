import { useEffect, useRef, useState } from "react";

function Hero() {

  /* FOTO */

  const [profileImage, setProfileImage] =
    useState(
      localStorage.getItem("profileImage")
      ||
      "https://i.imgur.com/2DhmtJ4.png"
    );

  const fileInputRef = useRef(null);

  const changePhoto = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      const image = reader.result;

      setProfileImage(image);

      localStorage.setItem(
        "profileImage",
        image
      );

    };

    reader.readAsDataURL(file);

  };

  /* TEXTOS EDITABLES */

  const [name, setName] =
    useState(
      localStorage.getItem("heroName")
      ||
      "Carlos Eduardo Bravo Picon"
    );

  const [description, setDescription] =
    useState(
      localStorage.getItem("heroDescription")
      ||
      "Estudiante de Ingeniería de Sistemas orientado al desarrollo web, Docker, Linux y tecnologías modernas con enfoque profesional y responsive."
    );

  useEffect(() => {

    localStorage.setItem(
      "heroName",
      name
    );

    localStorage.setItem(
      "heroDescription",
      description
    );

  }, [name, description]);

  return (
    <section
      id="inicio"
      className="cyber-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 25px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* ORB */}

      <div
        className="glow-orb"
        style={{
          width: "240px",
          height: "240px",
          background: "#00ffff",
          top: 0,
          left: "-100px",
        }}
      />

      {/* CONTENIDO */}

      <div
        style={{
          maxWidth: "1100px",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* FOTO */}

        <div
          className="float"
          onClick={() =>
            fileInputRef.current.click()
          }
          style={{
            width: "180px",
            height: "180px",
            margin: "0 auto 35px",
            borderRadius: "50%",
            border: "2px solid #00ffff",
            overflow: "hidden",
            background: "rgba(0,255,255,.08)",
            cursor: "pointer",
            boxShadow:
              "0 0 35px rgba(0,255,255,.35)",
          }}
        >

          <img
            src={profileImage}
            alt="profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={changePhoto}
          style={{
            display: "none",
          }}
        />

        {/* TAG */}

        <p
          className="neon-text"
          contentEditable
          suppressContentEditableWarning
          style={{
            marginBottom: "20px",
            letterSpacing: "5px",
            fontWeight: "bold",
            fontSize: "18px",
            outline: "none",
          }}
        >
          CYBERSECURITY • WEB • DOCKER
        </p>

        {/* NOMBRE */}

        <h1
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            setName(
              e.target.innerText
            )
          }
          style={{
            fontFamily: "Orbitron",
            fontSize:
              "clamp(50px,8vw,92px)",
            lineHeight: "1.1",
            marginBottom: "25px",
            outline: "none",
          }}
        >
          {name}
        </h1>

        {/* DESCRIPCIÓN */}

        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            setDescription(
              e.target.innerText
            )
          }
          style={{
            color: "#c7d2fe",
            fontSize:
              "clamp(18px,2vw,24px)",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "auto",
            outline: "none",
          }}
        >
          {description}
        </p>

        {/* BOTONES */}

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

          <a
            href="#proyectos"
            className="cyber-button"
          >
            Ver Proyectos
          </a>

          <a
            href="#contacto"
            className="cyber-button"
          >
            Contacto
          </a>

        </div>

        {/* CARDS */}

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "25px",
          }}
        >

          <div
            className="cyber-card"
            style={cardStyle}
          >

            <h3 className="neon-text">
              Universidad
            </h3>

            <p
              contentEditable
              suppressContentEditableWarning
              style={textStyle}
            >
              Universidad de Huánuco
            </p>

          </div>

          <div
            className="cyber-card"
            style={cardStyle}
          >

            <h3 className="neon-text">
              Carrera
            </h3>

            <p
              contentEditable
              suppressContentEditableWarning
              style={textStyle}
            >
              Ingeniería de Sistemas
            </p>

          </div>

          <div
            className="cyber-card"
            style={cardStyle}
          >

            <h3 className="neon-text">
              Tecnologías
            </h3>

            <p
              contentEditable
              suppressContentEditableWarning
              style={textStyle}
            >
              React • Docker • Linux
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

const cardStyle = {
  padding: "30px",
  textAlign: "center",
};

const textStyle = {
  color: "#c7d2fe",
  marginTop: "12px",
  fontSize: "18px",
  lineHeight: "30px",
  outline: "none",
};

export default Hero;