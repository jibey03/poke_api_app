import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nom</th>
        <th>Qualité</th>
        <th>Prix</th>
      </tr>
    </thead>
  );
};

class Test extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <tbody>
          <tr>
            <th>Merguez</th>
            <th>Epicee</th>
            <th>20</th>
          </tr>
          <tr>
            <th>Knacki</th>
            <th>Nul</th>
            <th>30</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Test;
