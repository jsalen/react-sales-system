import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import InventoryList from "../components/Inventory/InventoryList";
import SearchBar from "../components/SearchBar/SearchBar";

import { confirmDeletion } from "../libs/inventory";
import { search } from "../libs/search";
import { getProducts, deleteProduct } from "../services/products";

import { Container, Col, Table } from "react-bootstrap";

import "./styles/Inventory.css";

export default function Inventory() {
  const [isAdmin] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  let isRendered = useRef(true);
  useEffect(() => {
    try {
      getProducts().then((data) => {
        if (isRendered) {
          setProducts(data.data);
        }
        return null;
      });
    } catch (error) {
      console.error("error", error);
    }
    return () => {
      isRendered = false;
    };
  }, [isDeleted]);

  const handleDelete = async (id) => {
    const confirmation = await confirmDeletion();

    if (confirmation) {
      await deleteProduct(id);
      isDeleted ? setIsDeleted(false) : setIsDeleted(true);
    }
  };

  return (
    <Container className="mt-4 text-center inventory-container">
      <h1>{isAdmin ? "Administración" : "Consulta"} de inventario</h1>
      <Col className="col-md-6 offset-md-3">
        <SearchBar value={query} setQuery={setQuery} />
      </Col>
      <div className="inventory__table">
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              {isAdmin && <th>Acciones</th>}
            </tr>
          </thead>
          <InventoryList
            isAdmin={isAdmin}
            products={search(products, query)}
            handleDelete={handleDelete}
          />
        </Table>
      </div>
      <div className="inventory__footer">
        <Link to="/admin" className="btn btn-danger">
          Regresar
        </Link>
        <Link to="/addProduct" className="btn btn-primary">
          Nuevo Producto
        </Link>
      </div>
    </Container>
  );
}
