import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { formatCurrency } from "../../libs/helpers";
import { useFetch } from "../../hooks/useFetch";
import NoInventory from "./NoInventory";

export default function ProductList({ setCart, cart }) {
  let { data, isPending, error } = useFetch();

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product._id === item._id);

    if (itemInCart) {
      itemInCart.qtyInCart++;
    } else {
      itemInCart = {
        ...product,
        qtyInCart: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <React.Fragment>
      <SearchBar />
      <ListGroup className="mt-2" variant="flush">
        {isPending && <h4 className="loading">Loading...</h4>}
        {error && <h3>Hubo un problema...</h3>}
        {data === undefined || data.length === 0 ? (
          <NoInventory />
        ) : (
          data.map((product) => (
            <ListGroup.Item
              className="product-list__item"
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
          ))
        )}
      </ListGroup>
    </React.Fragment>
  );
}
