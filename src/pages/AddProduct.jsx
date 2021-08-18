import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import { Container, Row } from "react-bootstrap";
import { getProduct, updateProduct, createProduct } from "../services/products";

import NewProductForm from "../components/Inventory/NewProductForm";

import swal from "sweetalert";

function AddProduct({ history, match }) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ product: "", quantity: "", price: "" });

  useEffect(() => {
    if (match.params.id) {
      const getData = async () => {
        const res = await getProduct(match.params.id);
        setForm(res.data);
        setEditing(true);
      };
      getData();
    }
    return () => {
      match.params.id = null;
    };
  }, [match.params.id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, product, quantity, price } = form;
    const newProduct = {
      _id,
      product,
      quantity,
      price,
    };

    if (editing) {
      await updateProduct(_id, newProduct);
      swal("Producto Actualizado");
    } else {
      await createProduct(newProduct);
      swal("Producto Añadido");
    }

    history.push("/inventory");
  };

  if (!currentUser.roles.includes("ROLE_ADMIN")) {
    return <Redirect to="/" />;
  }

  return (
    <Container className="landing d-flex flex-column align-items-center">
      <Row className="landing__title">
        <h1>{editing ? "Editar " : "Agregar nuevo "} producto</h1>
      </Row>
      <Row className="align-items-center">
        <NewProductForm
          history={history}
          editValues={form}
          editing={editing}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Row>
    </Container>
  );
}

export default AddProduct;
