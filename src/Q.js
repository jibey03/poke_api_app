import React, { Component } from "react";

// class Question extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemon: null,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchRandomPokemon();
//   }

//   fetchRandomPokemon = () => {
//     const { pokeIds } = this.props;
//     if (!pokeIds || pokeIds.length === 0) {
//       this.setState({ error: new Error("No Pokémon IDs provided") });
//       return;
//     }

//     const randomId = Math.floor(Math.random() * pokeIds.length);

//     fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => this.setState({ pokemon: data }))
//       .catch((error) => this.setState({ error }));
//   };

//   render() {
//     const { pokemon, error } = this.state;

//     return (
//       <div class="pokemon">
//         {error && <p>Error: {error.message}</p>}
//         {pokemon ? (
//           <div>
//             <img src={pokemon.sprites.front_default} alt={pokemon.id} />
//             <h2>{pokemon.name}</h2>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
// }


class Question extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/lugia";
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div class="pokemon">
        <h2>Quelle est l'évolution de ce Pokémon ?</h2>
          <div class="poke-info">
          <img src={data.sprites?.front_default}></img>
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Types</th>
            </thead>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.weight}</td>
            <td>
              {data.types &&
                data.types.map((typeInfo, index) => (
                  <span key={index}>
                    {typeInfo.type.name}
                    {index < data.types.length - 1 ? ", " : ""}
                  </span>
                ))}
            </td>
          </table>
        </div>
      </div>
    );
  }
}

export default Question;