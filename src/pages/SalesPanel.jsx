import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import SalesCart from "../components/ShoppingCar/SalesCart";
import ProductList from "../components/ShoppingCar/ProductList";

import "./styles/SalesPanel.css";
import { getTotalAmount, formatCurrency } from "../libs/helpers";

export default function SalesPanel() {
  const [cart, setCart] = useState([]);

  const deleteCart = () => {
    setCart([]);
  };

  const totalAmount = () => formatCurrency(getTotalAmount(cart));

  return (
    <Container className="mt-4">
      <Row className="sales">
        <Col sm={7} className="sales__list">
          <SalesCart cart={cart} setCart={setCart} />
        </Col>

        <Col sm={5} className="sales__list">
          <ProductList cart={cart} setCart={setCart} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={7} className="text-right">
          {cart.length > 0 && <h3>Su total es de: {totalAmount()}</h3>}
        </Col>

        <Col sm={5} className="d-flex justify-content-around">
          <Button
            className="btn-lg"
            variant="danger"
            onClick={() => deleteCart()}
          >
            Cancelar
          </Button>
          <Button className="btn-lg" variant="outline-success">
            Aceptar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
