import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Control type="text" placeholder="Buscar..." />
      </React.Fragment>
    );
  }
}
