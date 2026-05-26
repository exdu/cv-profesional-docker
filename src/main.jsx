import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";

import CVProvider from "./context/CVContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <CVProvider>
      <App />
    </CVProvider>

  </React.StrictMode>
);