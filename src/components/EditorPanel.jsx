import { useContext } from "react";
import { CVContext } from "../context/CVContext";

function EditorPanel() {

  const { data, setData } = useContext(CVContext);

  const updateField = (field, value) => {

    setData({
      ...data,
      personal: {
        ...data.personal,
        [field]: value,
      },
    });

  };

  return (
    <section
      style={{
        padding: "120px 30px",
        color: "white",
      }}
    >

      <h2 className="section-title">
        Editar CV
      </h2>

      <div
        className="cyber-card"
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "45px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >

        <input
          style={inputStyle}
          value={data.personal.nombre}
          onChange={(e) =>
            updateField("nombre", e.target.value)
          }
          placeholder="Nombre"
        />

        <input
          style={inputStyle}
          value={data.personal.correo}
          onChange={(e) =>
            updateField("correo", e.target.value)
          }
          placeholder="Correo"
        />

        <input
          style={inputStyle}
          value={data.personal.telefono}
          onChange={(e) =>
            updateField("telefono", e.target.value)
          }
          placeholder="Teléfono"
        />

        <input
          style={inputStyle}
          value={data.personal.ciudad}
          onChange={(e) =>
            updateField("ciudad", e.target.value)
          }
          placeholder="Ciudad"
        />

      </div>

    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid rgba(0,255,255,.25)",
  background: "rgba(255,255,255,.04)",
  color: "white",
  fontSize: "18px",
  outline: "none",
};

export default EditorPanel;