import React from "react";
import { Container } from "react-bootstrap";

import ReportsDate from "../components/Reports/ReportsDate";
import ReportsFooter from "../components/Reports/ReportsFooter";
import ReportsTable from "../components/Reports/ReportsTable";

import "./styles/Reports.css";

export default function Reports() {
  return (
    <Container className="mt-4 text-center inventory-container">
      <h1>Reportes de Ventas</h1>
      <ReportsDate />
      <ReportsTable />
      <ReportsFooter />
    </Container>
  );
}
