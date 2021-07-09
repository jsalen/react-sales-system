import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import InventoryList from "../components/Inventory/InventoryList";
import SearchBar from "../components/SearchBar/SearchBar";

import { Container, Button, Table } from "react-bootstrap";

export default function Inventory() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Container className="mt-4 text-center inventory-container">
      <h1>{isAdmin ? "Administración" : "Consulta"} de inventario</h1>
      <Button variant="primary" className="mb-4">
        <Link to="/addProduct" className="button">
          Nuevo Producto
        </Link>
      </Button>
      <Col className="col-md-6 offset-md-3">
        <SearchBar />
      </Col>
      <Table striped bordered hover className="inventory-table mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            {isAdmin && <th>Acciones</th>}
          </tr>
        </thead>
        <InventoryList isAdmin={isAdmin} />
      </Table>
    </Container>
  );
}
