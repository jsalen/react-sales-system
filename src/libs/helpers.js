import swal from "sweetalert";
import dateFormat from "dateformat";

export const formatCurrency = (money) => {
  const formatedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
  return formatedCurrency;
};

export const formatDate = (date) => {
  return dateFormat(date, "dd/mm/yyyy - HH:MM:ss");
};

export const getTotalAmount = (amount) => {
  let totalAmount = amount.reduce(
    (sum, { price, qtyInCart }) => sum + price * qtyInCart,
    0
  );

  return totalAmount;
};
