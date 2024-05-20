import React, { Component } from "react";
import Reponse_son from "./R_son.js";
import { randomGenPoke } from "./utils.js";


class Reponse extends Component {
  render() {
    const pokeIds = Array.from({ length: 4 }, () => randomGenPoke());
    return (
      <div class="section-reponses">
        <h3>Votre choix :</h3>
        {pokeIds.map((id, index) => (
          <Reponse_son key={index} pokeId={id} />
        ))}
      </div>
    );
  }
}


export default Reponse;
