import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { formatCurrency, confirmDeletion } from "../../libs/helpers";

import { getProducts, deleteProduct } from "../../services/products";

export default function InventoryList({ isAdmin }) {
  const [products, setProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  let isRendered = useRef(true);
  useEffect(() => {
    try {
      getProducts().then((data) => {
        if (isRendered) {
          setProducts(data.data);
        }
        return null;
      });
    } catch (error) {
      console.error("error", error);
    }
    return () => {
      isRendered = false;
    };
  }, [isDeleted]);

  const handleDelete = async (id) => {
    const confirmation = await confirmDeletion();

    if (confirmation) {
      await deleteProduct(id);
      isDeleted ? setIsDeleted(false) : setIsDeleted(true);
    }
  };

  return (
    <tbody>
      {products === undefined || products.length === 0 ? (
        <tr>
          <td colSpan="4">No hay Datos</td>
        </tr>
      ) : (
        products.map((product) => (
          <tr key={product._id}>
            <td>{product.product}</td>
            <td>{product.quantity}</td>
            <td>{formatCurrency(product.price)}</td>
            {isAdmin && (
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
            )}
          </tr>
        ))
      )}
    </tbody>
  );
}
