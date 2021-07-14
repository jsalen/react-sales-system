import React from "react";
import { Form } from "react-bootstrap";
import "./SearchBar.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <React.Fragment>
      <Form.Control
        className="search-bar"
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </React.Fragment>
  );
}
