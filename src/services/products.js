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

export const getProduct = async (id) => {
  try {
    const res = await axios.get(URI + id);
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

export const updateProduct = async (id, product) => {
  try {
    await axios.put(URI + id, product);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product) => {
  try {
    await axios.post(URI, product);
  } catch (error) {
    console.log(error);
  }
};
