export const formatCurrency = (money) => {
  const formatedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
  return formatedCurrency;
};

export const getTotalAmmount = (ammount) => {
  let totalAmmount = ammount.reduce((sum, { price }) => sum + price, 0);

  return totalAmmount;
};
