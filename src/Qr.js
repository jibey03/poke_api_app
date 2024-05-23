import React, { Component } from "react";
import Question from "./Q.js";
import Reponse, { pokeIds } from "./R.js";

class Quizz extends Component {
  render() {
    return (
      <div>
        <h1>Quizz</h1>
        <Question pokeIds={pokeIds} />
        <Reponse />
      </div>
    );
  }
}

export default Quizz;
