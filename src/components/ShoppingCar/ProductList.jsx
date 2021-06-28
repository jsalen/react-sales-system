import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { formatCurrency } from "../../libs/helpers";
import { useFetch } from "../hooks/useFetch";

export default function ProductList({ setCart, cart }) {
  let { data, isPending, error } = useFetch();

  const addToCart = (product) => {
    let newCart = [...cart, { ...product }];
    setCart(newCart);
  };

  return (
    <React.Fragment>
      <SearchBar />
      <ListGroup className="mt-2" variant="flush">
        {isPending && <h3>Loading...</h3>}
        {error && <h3>Hubo un problema...</h3>}
        {data.map((product) => (
          <ListGroup.Item
            className="product"
            key={product._id}
            onClick={() => addToCart(product)}
          >
            <Row>
              <Col sm={8}>{product.product}</Col>
              <Col sm={4} className="text-right">
                {formatCurrency(product.price)}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
}
