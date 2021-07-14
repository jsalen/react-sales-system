import React from "react";
import { formatCurrency } from "../../libs/helpers";

export default function ReportsFooter({ data }) {
  const getTotalAmount = (data) => {
    let totalAmount = data.reduce((sum, { totalPrice }) => sum + totalPrice, 0);

    return totalAmount;
  };

  return (
    <div className="reports__footer">
      <h4 className="text-right">
        Facturación total del día:{" "}
        <span>{formatCurrency(getTotalAmount(data))}</span>
      </h4>
    </div>
  );
}
