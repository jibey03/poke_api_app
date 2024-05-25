import React, { Component } from "react";
import Question from "./Q.js";
import Reponse from "./R.js";
import AnswerSummary from "./AnswerSummary.js";
import { randomGenPoke } from "./utils.js";

class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      questionsAnswered: 0,
      gameStarted: false,
      selectedAnswer: null,
      currentPokeIds: this.generatePokeIds(),
      userAnswers: [],
      correctAnswers: [],
      numberOfQuestions : 5,
    };
  }

  startGame = () => {
    this.setState({
      score: 0,
      questionsAnswered: 0,
      gameStarted: true,
      selectedAnswer: null,
      currentPokeIds: this.generatePokeIds(),
    });
  };

  generatePokeIds = () => {
    return Array.from({ length: 4 }, () => randomGenPoke());
  };

  updateScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }));
  };

  nextQuestion = () => {
    this.setState(prevState => ({
      questionsAnswered: prevState.questionsAnswered + 1,
      selectedAnswer: null,
      currentPokeIds: this.generatePokeIds(),
    }), () => {
      if (this.state.questionsAnswered >= 10) {
        this.endGame();
      }
    });
  };

  endGame = () => {
    this.setState({ gameStarted: false });
  };
  
  selectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  };

  handleAnswer = (answer, correctAnswer) => {
    const { userAnswers, questionsAnswered } = this.state;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionsAnswered] = { answer, correctAnswer };
    this.setState({
      userAnswers: updatedUserAnswers
    });
  };

  render() {
    const { gameStarted, questionsAnswered, score, numberOfQuestions, selectedAnswer, currentPokeIds, userAnswers, correctAnswers } = this.state
    return (
      <div>
        <h1>Quizz</h1>
        {!gameStarted && questionsAnswered === 0 && (
          <button onClick={this.startGame}>Commencer une partie</button>
        )}
        {gameStarted && questionsAnswered < numberOfQuestions && (
          <>
          <p>Question {questionsAnswered + 1} sur {numberOfQuestions}</p>
            <Question pokeIds={currentPokeIds} updateScore={this.updateScore} nextQuestion={this.nextQuestion} handleAnswer={this.handleAnswer} selectedAnswer={selectedAnswer}/>
            <Reponse pokeIds={currentPokeIds} selectAnswer={this.selectAnswer}/>
          </>
        )}
        {questionsAnswered === numberOfQuestions && (
          <>
            <p>Fin de la partie.</p>
            <p>Votre score: {score} / {numberOfQuestions}</p>
            <button onClick={this.startGame}>Relancer une partie</button>
            <AnswerSummary userAnswers={userAnswers} correctAnswers={correctAnswers} />
          </>
        )}
      </div>
    );
  }
}

export default Quizz;
