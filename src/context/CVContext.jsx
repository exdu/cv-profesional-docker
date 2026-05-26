import { createContext, useEffect, useState } from "react";
import cvData from "../data/cvData";

export const CVContext = createContext();

function CVProvider({ children }) {

  const [data, setData] = useState(() => {

    const saved = localStorage.getItem("cvData");

    return saved ? JSON.parse(saved) : cvData;

  });

  useEffect(() => {

    localStorage.setItem(
      "cvData",
      JSON.stringify(data)
    );

  }, [data]);

  return (
    <CVContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export default CVProvider;