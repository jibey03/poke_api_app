import React, { Component } from "react";
import R_son from "./R_son.js";

const TableHeader = () => {
  return (
    <div>
      <h1>Retrouvez :</h1>
    </div>
  );
};

class R extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
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
        <TableHeader />
        {error && <p>Error: {error.message}</p>}
        {pokemon ? (
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base experience: {pokemon.base_experience}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <R_son />
      </div>
    );
  }
}

export default R;
