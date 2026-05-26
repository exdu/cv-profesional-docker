function Background() {

  const particles = Array.from({ length: 55 });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >

      {/* PARTICULAS */}

      {particles.map((_, i) => (

        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 100}px`,
            animationDuration: `${Math.random() * 12 + 8}s`,
            animationDelay: `${Math.random() * 8}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />

      ))}

      {/* ORB 1 */}

      <div
        className="glow-orb"
        style={{
          width: "420px",
          height: "420px",
          background: "#00ffff",
          top: "-150px",
          left: "-150px",
        }}
      />

      {/* ORB 2 */}

      <div
        className="glow-orb"
        style={{
          width: "350px",
          height: "350px",
          background: "#8b5cf6",
          bottom: "-120px",
          right: "-120px",
        }}
      />

      {/* ORB 3 */}

      <div
        className="glow-orb"
        style={{
          width: "260px",
          height: "260px",
          background: "#06b6d4",
          top: "45%",
          right: "15%",
        }}
      />

    </div>
  );
}

export default Background;