import React, { Component } from "react";
import R_son from "./R_son.js";

const TableHeader = () => {
  return (
    <h1>Retrouvez :</h1>
    // appel Api
  );
};

class R extends Component {
  render() {
    return (
      <div>
        <TableHeader />
        <R_son />
      </div>
    );
  }
}

<R_son />;

export default R;
