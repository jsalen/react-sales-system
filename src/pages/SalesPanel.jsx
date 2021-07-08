import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import SalesCart from "../components/ShoppingCar/SalesCart";
import ProductList from "../components/ShoppingCar/ProductList";

import "./styles/SalesPanel.css";
import {
  getTotalAmount,
  formatCurrency,
  notEnoughInventory,
  confirmSale,
  saleMade,
} from "../libs/helpers";
import { createSale } from "../services/sales";

export default function SalesPanel() {
  const [cart, setCart] = useState([]);

  const deleteCart = () => setCart([]);

  const totalAmount = () => getTotalAmount(cart);

  const handleSubmit = async () => {
    if (cart.length > 0) {
      const confirm = await confirmSale();

      if (confirm) {
        for (let item in cart) {
          if (cart[item].qtyInCart > cart[item].quantity) {
            await notEnoughInventory(cart[item].product, cart[item].quantity);
            return;
          }
        }
        createSale(cart, totalAmount());
        setCart([]);
        saleMade();
      }
    }
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
          {cart.length > 0 && (
            <h3>Su total es de: {formatCurrency(totalAmount())}</h3>
          )}
        </Col>

        <Col sm={5} className="d-flex justify-content-around">
          <Button
            className="btn-lg"
            variant="danger"
            onClick={() => deleteCart()}
          >
            Cancelar
          </Button>
          <Button
            className="btn-lg"
            variant="outline-success"
            onClick={handleSubmit}
          >
            Aceptar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
