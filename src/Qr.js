import React, { Component } from "react";
import Q from "./Q.js";
import R from "./R.js";
import PokeApi from "./PokeApi.js";

class Qr extends Component {
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
    ],
  };

  removeRow = (index) => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { dataToPass } = this.state;
    const tableTitle1 = "Numéro";
    const tableTitle2 = "NUM POKE";
    return (
      <div>
        <h1></h1>

        <Q
          tableName={tableTitle1}
          tableContent={dataToPass}
          removeRow={this.removeRow}
        />
        <h1></h1>
        {/* <Q
          tableName={tableTitle2}
          tableContent={dataToPass}
          removeRow={this.removeRow}
        /> */}

        <h1></h1>

        <PokeApi />

        <h1></h1>

        <R />
      </div>
    );
  }
}

export default Qr;
