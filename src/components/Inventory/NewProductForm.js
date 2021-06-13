import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NewProductForm.css";

export default class NewProductForm extends Component {
  state = {
    form: {
      product: "",
      quantity: "",
      price: "",
    },
  };

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
    const { product, quantity, price } = this.state.form;
    const newProduct = {
      product,
      quantity,
      price,
    };

    await axios.post("http://localhost:4000/api/products/", newProduct);
    this.props.history.push("/inventory");
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="product">Nombre de Producto</label>
            <input
              className="form-control"
              id="product"
              type="text"
              name="product"
              required
              onChange={this.handleChange}
              value={this.state.form.product}
            />
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label htmlFor="quantity">Cantidad</label>
              <input
                className="form-control"
                type="number"
                id="quantity"
                name="quantity"
                required
                onChange={this.handleChange}
                value={this.state.form.quantity}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="price">Precio (USD)</label>
              <input
                className="form-control"
                type="number"
                id="price"
                name="price"
                required
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around mt-2">
            <Link to="/inventory" className="btn btn-danger">
              Atrás
            </Link>
            <button className="btn btn-primary float-end">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
