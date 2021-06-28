import React from "react";
import { Form } from "react-bootstrap";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <React.Fragment>
      <Form.Control
        className="search-bar"
        type="text"
        placeholder="Buscar..."
      />
    </React.Fragment>
  );
}
