import React, { Component } from "react";
import axios from "axios";
import { Col, Row, ListGroup } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import format from "../../libs/formatCurrency";
const URL = "http://localhost:4000/api/products/";

export default class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await axios.get(URL);
    this.setState({
      products: res.data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ListGroup className="mt-2">
          {this.state.products.map((product) => (
            <ListGroup.Item key={product._id} onClick={this.props.onClick}>
              <Row>
                <Col sm={8}>{product.product}</Col>
                <Col sm={4} className="text-right">
                  {format(product.price)}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </React.Fragment>
    );
  }
}
