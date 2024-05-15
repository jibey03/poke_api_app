import React from "react";
import ReactDOM from "react-dom";
import Qr from "./Qr.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Bienvenue sur Poke API</h1>
    <Qr />
  </React.StrictMode>
);
