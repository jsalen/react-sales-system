import React, { Component } from "react";
import NewProductForm from "../components/Inventory/NewProductForm";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
const URL = "http://localhost:4000/api/products/";

export default class AddProduct extends Component {
  state = {
    editing: false,
    product: {},
    form: {
      product: "",
      quantity: "",
      price: "",
    },
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      const res = await axios.get(URL + this.props.match.params.id);
      this.setState({
        form: res.data,
        editing: true,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, product, quantity, price } = this.state.form;
    const newProduct = {
      _id,
      product,
      quantity,
      price,
    };

    if (this.state.editing) {
      await axios.put(URL + this.state.form._id, newProduct);
      swal("Producto Actualizado");
    } else {
      await axios.post(URL, newProduct);
      swal("Producto Añadido");
    }

    this.props.history.push("/inventory");
  };

  render() {
    return (
      <Container className="landing d-flex flex-column align-items-center">
        <Row className="landing__title">
          <h1>{this.state.editing ? "Editar " : "Agregar nuevo "} producto</h1>
        </Row>
        <Row className="align-items-center">
          <NewProductForm
            history={this.props.history}
            editValues={this.state.form}
            editing={this.state.editing}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Row>
      </Container>
    );
  }
}
