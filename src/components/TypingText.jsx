import { useEffect, useState } from "react";

function TypingText() {

  const texts = [
    "Cybersecurity Specialist",
    "Frontend Developer",
    "Docker Enthusiast",
    "Linux Administrator",
    "React Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (charIndex < texts[index].length) {

      const timeout = setTimeout(() => {

        setText((prev) => prev + texts[index][charIndex]);

        setCharIndex((prev) => prev + 1);

      }, 90);

      return () => clearTimeout(timeout);

    } else {

      const timeout = setTimeout(() => {

        setText("");
        setCharIndex(0);

        setIndex((prev) =>
          prev === texts.length - 1 ? 0 : prev + 1
        );

      }, 1800);

      return () => clearTimeout(timeout);

    }

  }, [charIndex, index]);

  return (
    <h2
      className="neon-text"
      style={{
        fontFamily: "Orbitron",
        fontSize: "32px",
        marginTop: "25px",
        minHeight: "45px",
      }}
    >
      {text}
      <span className="typingCursor">|</span>
    </h2>
  );
}

export default TypingText;