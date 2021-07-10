import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ReportsDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <React.Fragment>
      <label className="reports__date-label">Filtrar por fecha:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </React.Fragment>
  );
}
