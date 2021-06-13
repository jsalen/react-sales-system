import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import format from "../../libs/formatCurrency";
import swal from "@sweetalert/with-react";
const URL = "http://localhost:4000/api/products/";

export default class InventoryList extends Component {
  state = {
    products: [],
    selectedProduct: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await axios.get(URL);
    this.setState({
      products: res.data,
    });
  };

  getProduct = async (id) => {
    const res = await axios.get(URL + id);
    this.setState({
      selectedProduct: res.data,
    });
  };

  handleDelete = async (id) => {
    const alert = await swal({
      text: "¿Estás seguro que deseas borrar este elemento?",
      buttons: {
        cancel: "Cerrar",
        confirm: "Eliminar",
      },
    });

    if (alert) {
      axios.delete("http://localhost:4000/api/products/" + id);
    }
  };

  handleAdd = async (id) => {
    const product = await this.getProduct(id);
    console.log(product);
  };

  render() {
    return (
      <tbody>
        {this.state.products.map((product) => (
          <tr key={product._id}>
            <td>{product.product}</td>
            <td>{product.quantity}</td>
            <td>{format(product.price)}</td>
            <td className="d-flex justify-content-around">
              <Button
                variant="primary"
                size="sm"
                onClick={() => this.handleAdd(product._id)}
              >
                Añadir
              </Button>
              <Button variant="success" size="sm">
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => this.handleDelete(product._id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
