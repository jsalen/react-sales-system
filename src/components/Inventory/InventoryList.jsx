import React from "react";
import { Button } from "react-bootstrap";
import { formatCurrency } from "../../libs/helpers";

export default function InventoryList({ isAdmin, products, handleDelete }) {
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
