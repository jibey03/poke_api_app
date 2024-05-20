import React, { Component } from "react";
import Question from "./Q.js";
import Reponse from "./R.js";

class Quizz extends Component {
  render() {
    return (
      <div>
        <h1>Quizz</h1>
        <Question />
        <Reponse />
      </div>
    );
  }
}

export default Quizz;
