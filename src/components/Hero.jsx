import { useContext, useRef, useState } from "react";

import { CVContext } from "../context/CVContext";

import TypingText from "./TypingText";

function Hero() {

  const { data, setData } = useContext(CVContext);

  const fileInputRef = useRef(null);

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  const updatePersonal = (field, value) => {

    const updatedData = {
      ...data,
      personal: {
        ...data.personal,
        [field]: value,
      },
    };

    setData(updatedData);

    localStorage.setItem(
      "cvData",
      JSON.stringify(updatedData)
    );

  };

  const updatePerfil = (value) => {

    const updatedData = {
      ...data,
      perfil: value,
    };

    setData(updatedData);

    localStorage.setItem(
      "cvData",
      JSON.stringify(updatedData)
    );

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      const img = new Image();

      img.onload = () => {

        const canvas = document.createElement("canvas");

        const maxSize = 500;

        let width = img.width;
        let height = img.height;

        if (width > height) {

          height = (height * maxSize) / width;

          width = maxSize;

        } else {

          width = (width * maxSize) / height;

          height = maxSize;

        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          img,
          0,
          0,
          width,
          height
        );

        const compressedImage =
          canvas.toDataURL(
            "image/jpeg",
            0.8
          );

        setImage(compressedImage);

        localStorage.setItem(
          "profileImage",
          compressedImage
        );

      };

      img.src = reader.result;

    };

    reader.readAsDataURL(file);

  };

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
          top: 0,
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
          maxWidth: "1100px",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* FOTO */}

        <div
          onClick={() =>
            fileInputRef.current.click()
          }
          className="float pulseGlow"
          style={{
            width: "190px",
            height: "190px",
            margin: "0 auto 40px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #00ffff",
            background: "rgba(0,255,255,.08)",
            boxShadow:
              "0 0 40px rgba(0,255,255,.4)",
            cursor: "pointer",
          }}
        >

          {image ? (

            <img
              src={image}
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

          ) : (

            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Orbitron",
                fontSize: "60px",
                fontWeight: "bold",
                color: "#00ffff",
              }}
            >
              CB
            </div>

          )}

        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />

        {/* TAG */}

        <p
          contentEditable
          suppressContentEditableWarning
          style={{
            letterSpacing: "6px",
            fontSize: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#00ffff",
            textShadow: "0 0 18px #00ffff",
            outline: "none",
            cursor: "text",
          }}
        >
          CYBERSECURITY • WEB • DOCKER
        </p>

        {/* NOMBRE */}

        <h1
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => {

            const value =
              e.target.innerText;

            updatePersonal(
              "nombre",
              value
            );

          }}
          dangerouslySetInnerHTML={{
            __html: data.personal.nombre,
          }}
          style={{
            fontFamily: "Orbitron",
            fontSize: "92px",
            lineHeight: "102px",
            marginBottom: "15px",
            fontWeight: "900",
            textShadow:
              "0 0 35px rgba(0,255,255,.35)",
            outline: "none",
            cursor: "text",
          }}
        />

        {/* TYPING */}

        <TypingText />

        {/* PERFIL */}

        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => {

            const value =
              e.target.innerText;

            updatePerfil(value);

          }}
          dangerouslySetInnerHTML={{
            __html: data.perfil,
          }}
          style={{
            color: "#c7d2fe",
            fontSize: "24px",
            lineHeight: "42px",
            maxWidth: "900px",
            margin: "35px auto 0",
            outline: "none",
            cursor: "text",
          }}
        />

        {/* BOTONES */}

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
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
            gap: "30px",
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

            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updatePersonal(
                  "universidad",
                  e.target.innerText
                )
              }
              dangerouslySetInnerHTML={{
                __html:
                  data.personal.universidad,
              }}
              style={infoText}
            />

          </div>

          <div
            className="cyber-card"
            style={infoCard}
          >

            <h3 className="neon-text">
              Carrera
            </h3>

            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updatePersonal(
                  "carrera",
                  e.target.innerText
                )
              }
              dangerouslySetInnerHTML={{
                __html:
                  data.personal.carrera,
              }}
              style={infoText}
            />

          </div>

          <div
            className="cyber-card"
            style={infoCard}
          >

            <h3 className="neon-text">
              Ciclo
            </h3>

            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updatePersonal(
                  "ciclo",
                  e.target.innerText
                )
              }
              dangerouslySetInnerHTML={{
                __html:
                  data.personal.ciclo,
              }}
              style={infoText}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

const infoCard = {
  padding: "28px 35px",
  minWidth: "250px",
  textAlign: "center",
};

const infoText = {
  color: "#c7d2fe",
  marginTop: "15px",
  fontSize: "20px",
  outline: "none",
  cursor: "text",
};

export default Hero;