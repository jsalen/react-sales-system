import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Container, Row, Col, Button } from "react-bootstrap";

import SalesCart from "../components/ShoppingCar/SalesCart";
import ProductList from "../components/ShoppingCar/ProductList";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

import { getTotalAmount, formatCurrency } from "../libs/helpers";
import { notEnoughInventory, confirmSale, saleMade } from "../libs/sales";
import { search } from "../libs/search";
import { createSale } from "../services/sales";
import { useFetch } from "../hooks/useFetch";

import "./styles/SalesPanel.css";

export default function SalesPanel() {
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const { data, isPending, error } = useFetch();
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  const deleteCart = () => setCart([]);

  const totalAmount = () => getTotalAmount(cart);

  const handleSubmit = async () => {
    if (cart.length > 0) {
      const confirm = await confirmSale(totalAmount());

      if (confirm) {
        for (let item in cart) {
          
          const dataQuantity = data
            .filter(ob => ob._id === cart[item]._id)
            .map(check => check.quantity)
          if (cart[item].qtyInCart > dataQuantity) {
            await notEnoughInventory(cart[item].product, cart[item].quantity);
            return;
          }
        }
        createSale(cart, totalAmount(), currentUser.name);
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
          <SearchBar query={query} setQuery={setQuery} />
          <ProductList
            cart={cart}
            setCart={setCart}
            data={search(data, query)}
            isPending={isPending}
            error={error}
          />
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
