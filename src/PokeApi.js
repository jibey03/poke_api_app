import React, { Component } from "react";

class PokeApi extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/snorlax";
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

export default PokeApi;
