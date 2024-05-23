import React, { Component } from "react";
import { randomGenPoke } from "./utils.js";
import { randomToFind } from "./utils.js";

class Reponse_son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchPokemon(this.props.pokeId);
  }

  fetchPokemon = (pokeId) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => this.setState({ pokemon: data }))
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { pokemon, error } = this.state;

    return (
      <div>
        {error && <p>Error: {error.message}</p>}
        {pokemon ? (
          <button class="reponse">
            <img src={pokemon.sprites.front_default} alt={pokemon.id} />
          </button>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Reponse_son;
