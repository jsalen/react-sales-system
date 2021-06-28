import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { getProducts } from "../../services/products";
import { formatCurrency } from "../../libs/helpers";

export default function ProductList({ setCart, cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      getProducts().then((data) => setProducts(data));
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart, { ...product }];
    setCart(newCart);
  };

  return (
    <React.Fragment>
      <SearchBar />
      <ListGroup className="mt-2" variant="flush">
        {loading && <h3>Loading...</h3>}
        {products.map((product) => (
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
