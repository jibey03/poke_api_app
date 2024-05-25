import React from "react";

const AnswerSummary = ({ userAnswers, correctAnswers }) => {
  return (
    <div class="recap-reponses">
        <h3>Récapitulatif des réponses</h3>
        <div class="recap-questions">
            <ul>
                {userAnswers.map((answer, index) => (
                <li key={index}>
                    <h4>Question {index + 1}: {answer.answer.id === answer.correctAnswer.id ? "Correcte" : "Incorrecte"}</h4>
                    <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${answer.correctAnswer.id}.png`} 
                    alt={answer.correctAnswer.name} 
                    />
                    <br/>
                    Votre réponse: {answer.answer.name.charAt(0).toUpperCase() + answer.answer.name.slice(1)}
                    <br />
                    Réponse correcte: {answer.correctAnswer.name.charAt(0).toUpperCase() + answer.correctAnswer.name.slice(1)}
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default AnswerSummary;