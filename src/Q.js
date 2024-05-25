import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchRandomPokemon();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokeIds !== this.props.pokeIds) {
      this.fetchRandomPokemon();
    }
  }

  fetchRandomPokemon = () => {
    const { pokeIds } = this.props;
    if (!pokeIds || pokeIds.length === 0) {
      this.setState({ error: new Error("No Pokémon IDs provided") });
      return;
    }
    const randomIndex = Math.floor(Math.random() * pokeIds.length);
    const randomPokeId = pokeIds[randomIndex];

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((data) => this.setState({ pokemon: data }))
      .catch((error) => this.setState({ error }));
  };

  handleAnswer = () => {
    const { pokemon } = this.state;
    const { selectedAnswer, updateScore, nextQuestion, handleAnswer } = this.props;
  
    if (selectedAnswer && selectedAnswer.id === pokemon.id) {
      updateScore();
    }
    handleAnswer(selectedAnswer, pokemon);
    nextQuestion();
  };
  
  render() {
    const { pokemon, error } = this.state;
    const { selectedAnswer } = this.props;
    return (
      <div className="pokemon">
        <h2>Trouve ce Pokémon :</h2>
        {pokemon ? (
          <>
            <div className="poke-info">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td>
                      {pokemon.types &&
                        pokemon.types.map((typeInfo, index) => (
                          <span key={index}>
                            {typeInfo.type.name}
                            {index < pokemon.types.length - 1 ? ", " : ""}
                          </span>
                        ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button onClick={this.handleAnswer} disabled={!selectedAnswer}>Valider la réponse</button>
            </div>
          </>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Question;
