import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReportsFooter from "../components/Reports/ReportsFooter";
import ReportsTable from "../components/Reports/ReportsTable";

export default function Reports() {
  return (
    <Container className="mt-4 text-center inventory-container">
      <h1>Reportes de Ventas</h1>
      <ReportsTable />
      <ReportsFooter />
    </Container>
  );
}
