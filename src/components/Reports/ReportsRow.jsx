import React from "react";
import { formatDate, formatCurrency } from "../../libs/helpers";

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
            <td>{formatCurrency(sale.totalPrice)}</td>
            <td>Admin</td>
            <td>
              <button className="btn btn-primary">Detalles</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
