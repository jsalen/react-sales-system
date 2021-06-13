import React, { Component } from "react";
import NewProductForm from "../components/Inventory/NewProductForm";
import { Container, Row } from "react-bootstrap";

export default class AddProduct extends Component {
  render() {
    return (
      <Container className="landing d-flex flex-column align-items-center">
        <Row className="landing__title">
          <h1>Agregar nuevo producto</h1>
        </Row>
        <Row className="align-items-center">
          <NewProductForm history={this.props.history} />
        </Row>
      </Container>
    );
  }
}
