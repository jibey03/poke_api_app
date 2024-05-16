import React, { Component } from "react";

// const TableHeader = () => {
//   return <div></div>;
// };

class R_son extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/gengar";
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
      <button class="reponse">
        <img src={data.sprites?.front_default}></img>
        <p class="nom-pokemon">{data.name}</p>
      </button>
    );
  }
}

export default R_son;
