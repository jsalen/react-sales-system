import axios from "axios";
const URI = "http://localhost:4000/api/sales/";

export const createSale = async (sale, total) => {
  console.log(sale);
  const newSale = {
    products: sale,
    totalPrice: total,
  };

  try {
    await axios.post(URI, newSale);
  } catch (error) {
    console.log(error);
  }
};
