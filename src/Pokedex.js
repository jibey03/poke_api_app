import React, { Component } from "react";
import Table from "./Table.js";

// FAIRE UN POKEDEX FAISANT APPEL À L'API

class Pokedex extends Component {
  state = {
    dataToPass: [
      { numero: "0001", nom: "Bulbizarre", type: "Plante, Poison" },
      { numero: "0002", nom: "Herbizarre", type: "Plante, Poison" },
      { numero: "0003", nom: "Florizarre", type: "Plante, Poison" },
      { numero: "0004", nom: "Salamèche", type: "Feu" },
      { numero: "0005", nom: "Reptincel", type: "Feu" },
      { numero: "0006", nom: "Dracaufeu", type: "Feu, Vol" },
      { numero: "0007", nom: "Carapuce", type: "Eau" },
      { numero: "0008", nom: "Carabaffe", type: "Eau" },
      { numero: "0009", nom: "Tortank", type: "Eau" },
      { numero: "0001", nom: "Bulbizarre", type: "Plante, Poison" },
      { numero: "0002", nom: "Herbizarre", type: "Plante, Poison" },
      { numero: "0003", nom: "Florizarre", type: "Plante, Poison" },
      { numero: "0004", nom: "Salamèche", type: "Feu" },
      { numero: "0005", nom: "Reptincel", type: "Feu" },
      { numero: "0006", nom: "Dracaufeu", type: "Feu, Vol" },
      { numero: "0007", nom: "Carapuce", type: "Eau" },
      { numero: "0008", nom: "Carabaffe", type: "Eau" },
      { numero: "0009", nom: "Tortank", type: "Eau" },
      { numero: "0001", nom: "Bulbizarre", type: "Plante, Poison" },
      { numero: "0002", nom: "Herbizarre", type: "Plante, Poison" },
      { numero: "0003", nom: "Florizarre", type: "Plante, Poison" },
      { numero: "0004", nom: "Salamèche", type: "Feu" },
      { numero: "0005", nom: "Reptincel", type: "Feu" },
      { numero: "0006", nom: "Dracaufeu", type: "Feu, Vol" },
      { numero: "0007", nom: "Carapuce", type: "Eau" },
      { numero: "0008", nom: "Carabaffe", type: "Eau" },
      { numero: "0009", nom: "Tortank", type: "Eau" },
      { numero: "0001", nom: "Bulbizarre", type: "Plante, Poison" },
      { numero: "0002", nom: "Herbizarre", type: "Plante, Poison" },
      { numero: "0003", nom: "Florizarre", type: "Plante, Poison" },
      { numero: "0004", nom: "Salamèche", type: "Feu" },
      { numero: "0005", nom: "Reptincel", type: "Feu" },
      { numero: "0006", nom: "Dracaufeu", type: "Feu, Vol" },
      { numero: "0007", nom: "Carapuce", type: "Eau" },
      { numero: "0008", nom: "Carabaffe", type: "Eau" },
      { numero: "0009", nom: "Tortank", type: "Eau" },
    ],
    searchQuery:"",
  };

  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
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
        <div class="pokedex-top">
          <h1>Pokedex</h1>
          <div class="search-bar">
            <input 
            id="mySearch"
            type="text"
            onKeyUp={this.searchFunction}
            placeholder="Search..."
            autocomplete="off"
            />
          </div>
        </div>
        <div class="pokedex-list">
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
