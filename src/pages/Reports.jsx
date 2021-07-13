import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ReportsDate from "../components/Reports/ReportsDate";
import ReportsFooter from "../components/Reports/ReportsFooter";
import ReportsTable from "../components/Reports/ReportsTable";
import { getSalesByDate } from "../services/sales";

import "./styles/Reports.css";

export default function Reports() {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getSalesByDate(startDate);
      const data = res.data;
      setData(data);
    };
    getData();
  }, [isChanged]);

  const handleChange = (date) => {
    setStartDate(date);
    isChanged ? setIsChanged(false) : setIsChanged(true);
  };

  const handleDelete = () => {
    setStartDate(new Date());
    isChanged ? setIsChanged(false) : setIsChanged(true);
  };

  return (
    <Container className="mt-4 text-center reports-container">
      <h1>Reportes de Ventas</h1>
      <ReportsDate
        startDate={startDate}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <ReportsTable data={data} />
      <ReportsFooter />
    </Container>
  );
}
