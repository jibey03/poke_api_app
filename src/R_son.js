import React, { Component } from "react";

class Reponse_son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
      isSelected: false,
    };
  }

  componentDidMount() {
    this.fetchPokemon(this.props.pokeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokeId !== this.props.pokeId) {
      this.fetchPokemon(this.props.pokeId);
      this.resetSelection();
    }
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

  handleClick = () => {
    const { selectAnswer } = this.props;
    selectAnswer(this.state.pokemon);
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  resetSelection = () => {
    this.setState({ isSelected: false });
  };

  render() {
    const { pokemon, error, isSelected } = this.state;

    return (
      <div>
        {error && <p>Error: {error.message}</p>}
        {pokemon ? (
          <button class={`reponse ${isSelected ? "reponse-selectionnee" : ""}`} onClick={this.handleClick}>
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
