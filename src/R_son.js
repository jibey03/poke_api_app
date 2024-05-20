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
          <button class = "reponse">
            <img src={pokemon.sprites.front_default} alt={pokemon.id} />
            <p class="nom-pokemon">{pokemon.name}</p>
          </button>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}




// const TableHeader = () => {
//   return <div></div>;
// };


// class R_son extends Component {
//   state = {
//     data: [],
//   };
//   componentDidMount() {
//     let url = "https://pokeapi.co/api/v2/pokemon/gengar";
//     fetch(url)
//       .then((result) => result.json())
//       .then((result) => {
//         this.setState({
//           data: result,
//         });
//       });
//   }
//   render() {
//     const { data } = this.state;
//     return (
//       <button class="reponse">
//         <img src={data.sprites?.front_default}></img>
//         <p class="nom-pokemon">{data.name}</p>
//       </button>
//     );
//   }
// }

export default Reponse_son;
