import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ReportsDate from "../components/Reports/ReportsDate";
import ReportsFooter from "../components/Reports/ReportsFooter";
import ReportsTable from "../components/Reports/ReportsTable";

import "./styles/Reports.css";

export default function Reports() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container className="mt-4 text-center reports-container">
      <h1>Reportes de Ventas</h1>
      <ReportsDate startDate={startDate} setStartDate={setStartDate} />
      <ReportsTable />
      <ReportsFooter />
    </Container>
  );
}
