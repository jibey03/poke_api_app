import React, { Component } from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <th>{props.tableName}</th>
      <th>Image</th>
      <th>Nom</th>
      <th>Types</th>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.numero}</td>
        <td>{row.image}</td>
        <td>{row.nom}</td>
        <td>{row.type}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>
            Supprimer ligne
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { tableContent, removeRow } = this.props;
    const { tableName } = this.props;
    return (
      <table id="pokedex-table">
        <TableHeader tableName={tableName} />
        <TableBody tableContent={tableContent} removeRow={removeRow} />
      </table>
    );
  }
}

export default Table;