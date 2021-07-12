import React from "react";
import { Table } from "react-bootstrap";
import swalReact from "@sweetalert/with-react";
import { formatCurrency, formatDate } from "../../libs/helpers";

export default function ReportsDetails({ products, totalPrice, date }) {
  swalReact(
    <div>
      <h2 className="reports__details-title">Detalles de la Venta</h2>
      <Table striped bordered hover className="reports__details-table">
        <thead className="thead-dark">
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.product}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <section className="reports__details-description">
        <p>Monto Total: {formatCurrency(totalPrice)}</p>
        <p>Fecha de Venta: {formatDate(date)}</p>
      </section>
    </div>
  );
}
