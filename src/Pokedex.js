import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";

class Pokedex extends Component {
  state = {
    dataToPass: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.fetchPokemonData();
  }

  fetchPokemonData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1025"
      );
      const pokemonList = response.data.results;

      const detailedDataPromises = pokemonList.map((pokemon) =>
        axios.get(pokemon.url)
      );

      const detailedDataResponses = await Promise.all(detailedDataPromises);

      const pokemonData = detailedDataResponses.map((response) => {
        const { id, name, types } = response.data;
        return {
          numero: String(id).padStart(4, "0"),
          nom: name.charAt(0).toUpperCase() + name.slice(1),
          type: types.map((typeInfo) => typeInfo.type.name).join(", "),
        };
      });

      this.setState({ dataToPass: pokemonData });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données Pokémon :",
        error
      );
    }
  };

  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((_, i) => i !== index),
    });
  };

  searchFunction = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredData = () => {
    const { dataToPass, searchQuery } = this.state;
    if (!searchQuery) {
      return dataToPass;
    }

    return dataToPass.filter((pokemon) => {
      const query = searchQuery.toUpperCase();
      return (
        pokemon.numero.toUpperCase().includes(query) ||
        pokemon.nom.toUpperCase().includes(query) ||
        pokemon.type.toUpperCase().includes(query)
      );
    });
  };

  render() {
    const filteredData = this.getFilteredData();
    const tableTitle1 = "Numéro";
    const tableTitle2 = "NUM POKE";
    return (
      <div>
        <div className="pokedex-top">
          <h1>Pokedex</h1>
          <div className="search-bar">
            <input
              id="mySearch"
              type="text"
              onKeyUp={this.searchFunction}
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>
        <div className="pokedex-list">
          <Table
            tableName={tableTitle1}
            tableContent={filteredData}
            removeRow={this.removeRow}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;
