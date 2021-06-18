import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
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
      await axios.delete("http://localhost:4000/api/products/" + id);
    }
    this.getProducts();
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
                href={"/editProduct/" + product._id}
              >
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
