export default function (money) {
  const formatedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money); // '$100.00'
  return formatedCurrency;
}
