import React from "react";
import ReportsDetails from "./ReportsDetails";

import { formatDate, formatCurrency } from "../../libs/helpers";

export default function ReportsRow({ data, isPending, error }) {
  return (
    <tbody>
      {isPending && (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      )}
      {error && (
        <tr>
          <td colSpan="5">Hubo un error</td>
        </tr>
      )}
      {data === undefined || data.length === 0 ? (
        <tr>
          <td colSpan="5">No hay ventas que mostrar.</td>
        </tr>
      ) : (
        data.map((sale, i) => (
          <tr key={i}>
            <td>{formatDate(sale.date)}</td>
            <td>{sale.products.length}</td>
            <td>{formatCurrency(sale.totalPrice)}</td>
            <td>Admin</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => ReportsDetails(sale)}
              >
                Detalles
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
