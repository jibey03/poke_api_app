import React, { Component } from "react";
import R_son from "./R_son.js";

class R extends Component {
  render() {
    return (
      <div>
        <h3>Réponses possibles :</h3>
        <div class="section-reponses">
          <R_son />
          <R_son />
          <R_son />
          <R_son />
        </div>
      </div>
    );
  }
}

export default R;
