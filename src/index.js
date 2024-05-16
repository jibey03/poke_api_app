import React from "react";
import ReactDOM from "react-dom";
import Qr from "./Qr.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header>
      <h1>Bienvenue sur Poke API</h1>
    </header>
    <main>
    <Qr />
    </main>
  </React.StrictMode>
);
