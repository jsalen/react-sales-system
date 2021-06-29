import React from "react";
import { ListGroup, Button, Col, Row } from "react-bootstrap";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../libs/helpers";

export default function SalesCart({ cart, setCart }) {
  const deleteProduct = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <React.Fragment>
      <h2 className="text-center sales-cart__title">Lista de Compras</h2>
      {cart.length === 0 && <EmptyCart />}
      <ListGroup variant="flush">
        {cart.map((product, i) => (
          <ListGroup.Item className="product" key={i}>
            <Row className="d-flex align-items-center">
              <Col sm={8}>{product.product}</Col>
              <Col sm={2}>{formatCurrency(product.price)}</Col>
              <Col sm={2}>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteProduct(product)}
                >
                  <i className="fas fa-trash-alt"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
}
