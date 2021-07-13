import { useState, useEffect } from "react";

import { getProducts } from "../services/products";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await getProducts();
        if (res.status !== 200) {
          throw {
            error: true,
            status: res.status,
            statusText: res.message ? res.message : "Ocurrió un error",
          };
        }
        const filteredProductsByStock = res.data.filter(
          (product) => product.quantity > 0
        );
        setIsPending(false);
        setData(filteredProductsByStock);
      } catch (error) {
        setError(error);
        console.error(error.status, error.statusText);
        throw error;
      }
    };
    getData();
  }, []);
  return { data, isPending, error };
};
