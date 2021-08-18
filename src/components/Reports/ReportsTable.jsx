import React from "react";
import ReportsRow from "./ReportsRow.jsx";

import { Table } from "react-bootstrap";

export default function ReportsTable({ data }) {
  return (
    <div className="reports__table">
      <Table striped bordered hover>
        <thead className="thead-dark sticky-top">
          <tr>
            <th>Fecha</th>
            <th>Monto Total (USD)</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <ReportsRow data={data} />
      </Table>
    </div>
  );
}
