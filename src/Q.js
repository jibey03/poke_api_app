import React, { Component } from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <th>{props.tableName}</th>
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

  // return (
  //   <tbody>
  //     <tr>
  //       <td>dfdsfsfs</td>
  //       <td>klsndlksndlA</td>
  //       <td>sdklsdlAA</td>
  //     </tr>
  //     <tr>
  //       <td>sadsd2</td>
  //       <td>sadsadB</td>
  //       <td>sfqfBB</td>
  //     </tr>
  //     <tr>
  //       <td>sdqd3</td>
  //       <td>azdddsC</td>
  //       <td>sqdqsdCC</td>
  //     </tr>
  //   </tbody>
  // );
};

class Q extends Component {
  render() {
    const { tableContent, removeRow } = this.props;
    const { tableName } = this.props;
    return (
      // <div>
      //   <h2>Retrouvez le Pokemon</h2>
      //   {/* appeler API */}
      // </div>
      <table>
        <TableHeader tableName={tableName} />
        <TableBody tableContent={tableContent} removeRow={removeRow} />
      </table>
    );
  }
}

export default Q;
