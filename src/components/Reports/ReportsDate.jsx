import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ReportsDate({ startDate, handleChange, handleDelete }) {
  return (
    <div className="reports__date">
      <label className="reports__date-label">Filtrar por fecha:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChange(date)}
        dateFormat="dd/MM/yyyy"
        className="datepicker"
        maxDate={new Date()}
        todayButton="Hoy"
      />
      <button
        className="btn btn-primary btn-sm reports__date-button"
        onClick={handleDelete}
      >
        Reset
      </button>
    </div>
  );
}
