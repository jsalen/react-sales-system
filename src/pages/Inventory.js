import React from "react";
import { Link } from "react-router-dom";
import InventoryList from "../components/Inventory/InventoryList";
import { Container, Button, Table } from "react-bootstrap";

export default function Inventory() {
  return (
    <Container className="mt-4 text-center">
      <h1>Administración de inventario</h1>
      <Button variant="primary" className="mb-4">
        <Link to="/addProduct" className="button">
          Nuevo Producto
        </Link>
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <InventoryList />
      </Table>
    </Container>
  );
}
