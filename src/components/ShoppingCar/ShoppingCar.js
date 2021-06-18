import React, { Component } from "react";

import PurchaseList from "./PurchaseList";
import ProductList from "./ProductList";
import { Row, Col } from "react-bootstrap";

export default class ShoppingCar extends Component {
  state = {
    items: [],
  };

  addToList = (e) => {
    console.log(e);
    this.setState({
      items: [...this.state.items, e.target.value],
    });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <PurchaseList addItems={this.state.items} />
          </Col>
          <Col>
            <ProductList />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
