import axios from "axios";
const URI = "http://localhost:4000/api/products/";

export const getProducts = async () => {
  try {
    const res = await axios.get(URI);
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(URI + id);
  } catch (error) {
    console.log("error", error);
  }
};
