import React from "react";
import ReportsRow from "./ReportsRow.jsx";

import { Table } from "react-bootstrap";
import { useFetchSales } from "../../hooks/useFetchSales";

export default function ReportsTable() {
  let { data, isPending, error } = useFetchSales();

  return (
    <Table striped bordered hover className="mt-3">
      <thead className="thead-dark">
        <tr>
          <th>Fecha</th>
          <th>Cantidad de Productos</th>
          <th>Vendedor</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <ReportsRow data={data} isPending={isPending} error={error} />
    </Table>
  );
}
