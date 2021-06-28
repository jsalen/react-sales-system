import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import format from "../../libs/formatCurrency";
import { getProducts, deleteProduct } from "../../services/products";

export default function InventoryList() {
  const [products, setProducts] = useState([]);

  let isRendered = useRef(true);
  useEffect(() => {
    console.log("mounted");
    try {
      getProducts().then((data) => {
        if (isRendered) {
          setProducts(data);
        }
        return null;
      });
    } catch (error) {
      console.error("error", error);
    }
    return () => {
      isRendered = false;
    };
  }, [products]);

  const handleDelete = async (id) => {
    const alert = await swal({
      text: "¿Estás seguro que deseas borrar este elemento?",
      buttons: {
        cancel: "Cerrar",
        confirm: "Eliminar",
      },
      icon: "warning",
    });

    if (alert) {
      await deleteProduct(id);
    }
  };

  return (
    <tbody>
      {products.map((product) => (
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
              onClick={() => handleDelete(product._id)}
            >
              Eliminar
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
