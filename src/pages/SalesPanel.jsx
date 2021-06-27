import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import SalesCart from "../components/ShoppingCar/SalesCart";
import ProductList from "../components/ShoppingCar/ProductList";

import "./styles/ShoppingCar.css";
import formatCurrency from "../libs/formatCurrency";
import { getTotalAmmount } from "../libs/getTotalAmmount";

export default function SalesPanel() {
  const [cart, setCart] = useState([]);

  const deleteCart = () => {
    setCart([]);
  };

  const totalAmmount = () => {
    let totalAmmount = getTotalAmmount(cart);

    return formatCurrency(totalAmmount);
  };

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
          {cart.length > 0 && <h3>Su total es de: {totalAmmount()}</h3>}
        </Col>
        <Col sm={5} className="d-flex justify-content-around">
          <Button variant="danger" onClick={() => deleteCart()}>
            Cancelar
          </Button>
          <Button variant="outline-success">Aceptar</Button>
        </Col>
      </Row>
    </Container>
  );
}
