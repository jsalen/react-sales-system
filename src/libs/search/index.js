export const search = (products, query) => {
  return products.filter(
    (product) => product.product.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
};
