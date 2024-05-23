import React, { Component } from "react";
import Reponse_son from "./R_son.js";
import { randomGenPoke } from "./utils.js";

export const pokeIds = Array.from({ length: 4 }, () => randomGenPoke());

class Reponse extends Component {
  render() {
    return (
      <div class="section-reponses">
        {pokeIds.map((id, index) => (
          <Reponse_son key={index} pokeId={id} />
        ))}
      </div>
    );
  }
}

export default Reponse;
