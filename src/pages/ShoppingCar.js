import "./styles/ShoppingCar.css";
import React, { Component } from "react";
import axios from "axios";
import { Container, Col, Row, Button, ListGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import format from "../libs/formatCurrency";

const URL = "http://localhost:4000/api/products/";

export default class ShoppingCar extends Component {
  state = {
    products: [],
    selectedProducts: {},
  };

  orderList = [];
  total = "";

  getOrderList() {
    console.log(this.orderList);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await axios.get(URL);
    this.setState({
      products: res.data,
    });
  };

  async addProduct(product) {
    this.orderList.push(product);
    this.setState({
      selectedProducts: product,
    });
  }

  deleteProduct(index) {
    this.orderList.splice(index, 1);
    this.setState({
      selectedProducts: index,
    });
  }

  renderTotal() {
    if (this.orderList.length >= 1) {
      let newAmmount = this.orderList.map((item) => item.price);
      this.total = newAmmount.reduce(function (a, b) {
        return a + b;
      }, 0);

      return <h3>Su valor total es de: {format(this.total)}</h3>;
    }
  }

  render() {
    return (
      <Container className="mt-4">
        <Row className="sales">
          <Col sm={7} className="sales__list">
            <h2 className="text-center">Lista a vender</h2>
            <ListGroup variant="flush">
              {this.orderList.map((product, i) => (
                <ListGroup.Item key={i}>
                  <Row className="d-flex align-items-center">
                    <Col sm={8}>{product.product}</Col>
                    <Col sm={2}>{format(product.price)}</Col>
                    <Col sm={2}>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => this.deleteProduct(i)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={5} className="sales__list">
            <SearchBar />
            <ListGroup className="mt-2" variant="flush">
              {this.state.products.map((product) => (
                <ListGroup.Item
                  key={product._id}
                  onClick={() => this.addProduct(product)}
                >
                  <Row>
                    <Col sm={8}>{product.product}</Col>
                    <Col sm={4} className="text-right">
                      {format(product.price)}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={7}>{this.renderTotal()}</Col>
          <Col sm={5} className="d-flex justify-content-around">
            <Button variant="danger">Cancelar</Button>
            <Button variant="outline-success">Aceptar</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
