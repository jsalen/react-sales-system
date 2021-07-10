import React from "react";
import { formatDate } from "../../libs/helpers";

export default function ReportsRow({ data, isPending, error }) {
  return (
    <tbody>
      {isPending && (
        <tr>
          <td>Loading...</td>
        </tr>
      )}
      {error && (
        <tr>
          <td>Hubo un error</td>
        </tr>
      )}
      {data === undefined || data.length === 0 ? (
        <tr>
          <td>No hay datos</td>
        </tr>
      ) : (
        data.map((sale, i) => (
          <tr key={i}>
            <td>{formatDate(sale.date)}</td>
            <td>{sale.products.length}</td>
            <td>{sale.totalPrice}</td>
            <td>Boton</td>
          </tr>
        ))
      )}
    </tbody>
  );
}
