import React, { Component } from "react";
import R_son from "./R_son.js";

class R extends Component {
  render() {
    const dataToPass = [];
    const tableTitle = "pokemon api";
    return (
      <div>
        <h3>Réponses possibles :</h3>
        {/* appeler API */}
        <R_son kk={dataToPass} title={tableTitle} />
      </div>
    );
  }
}

export default R;
