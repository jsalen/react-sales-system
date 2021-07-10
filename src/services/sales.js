import axios from "axios";
const URI_SALES = "http://localhost:4000/api/sales/";
const URI_PRODUCTS = "http://localhost:4000/api/products/";

export const createSale = async (sale, total) => {
  const newSale = {
    products: sale,
    totalPrice: total,
  };

  try {
    await axios.post(URI_SALES, newSale);
  } catch (error) {
    console.log(error);
  }
  updateInventoryFromSale(sale);
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
