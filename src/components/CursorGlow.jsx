import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - 120,
        top: position.y - 120,
        width: "240px",
        height: "240px",
        borderRadius: "50%",
        background: "rgba(0,255,255,.10)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 1,
        transition: "0.08s linear",
      }}
    />
  );
}

export default CursorGlow;