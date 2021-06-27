export const getTotalAmmount = (ammount) => {
  let totalAmmount = ammount.reduce((sum, { price }) => sum + price, 0);

  return totalAmmount;
};
