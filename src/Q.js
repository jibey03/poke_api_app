import React, { Component } from "react";
import { pokeIds } from "./R";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchRamdomPokemon();
  }

  fetchRamdomPokemon = () => {
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

  render() {
    const { pokemon, error } = this.state;
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
