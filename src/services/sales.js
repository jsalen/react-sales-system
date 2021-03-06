import axios from "axios";
const URI_SALES = "http://localhost:4000/api/sales/";
const URI_PRODUCTS = "http://localhost:4000/api/products/";

export const getSales = async () => {
  try {
    const res = await axios.get(URI_SALES);
    return res;
  } catch (error) {
    return error;
  }
};

export const getSalesByDate = async (date) => {
  try {
    const res = await axios.get(URI_SALES + date);
    return res;
  } catch (error) {
    return error;
  }
};

export const createSale = async (sale, total, soldBy) => {
  const newSale = {
    products: sale,
    totalPrice: total,
    soldBy,
  };

  try {
    await axios.post(URI_SALES, newSale);
    await updateInventoryFromSale(sale);
  } catch (error) {
    console.log(error);
  }
};

async function updateInventoryFromSale(products) {
  for (let product in products) {
    const newQuantity =
      products[product].quantity - products[product].qtyInCart;
    const updatedProduct = {
      ...products[product],
      quantity: newQuantity,
    };
    const id = products[product]._id;

    delete updatedProduct.qtyInCart;

    try {
      await axios.put(URI_PRODUCTS + id, updatedProduct);
    } catch (error) {
      console.log(error);
    }
  }
}
