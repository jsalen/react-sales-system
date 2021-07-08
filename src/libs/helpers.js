import swal from "sweetalert";

export const formatCurrency = (money) => {
  const formatedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
  return formatedCurrency;
};

export const getTotalAmount = (amount) => {
  let totalAmount = amount.reduce(
    (sum, { price, qtyInCart }) => sum + price * qtyInCart,
    0
  );

  return totalAmount;
};

export const confirmDeletion = async () => {
  const confirmDeletion = await swal({
    text: "¿Estás seguro que deseas borrar este elemento?",
    buttons: {
      cancel: "Cerrar",
      confirm: "Eliminar",
    },
    icon: "warning",
  });

  return confirmDeletion;
};

export const confirmSale = async (amount) => {
  const confirm = await swal({
    title: "¿Está lista la venta?",
    text: `Confirmar monto total: ${formatCurrency(amount)}`,
    buttons: {
      cancel: "Cancelar",
      confirm: "Aceptar",
    },
    icon: "warning",
  });

  return confirm;
};

export const saleMade = () => {
  swal({
    text: "Gracias por su compra!",
    buttons: {
      confirm: "Ok",
    },
    icon: "success",
  });
};

export const notEnoughInventory = async (product, quantity) => {
  await swal({
    text: `No hay suficientes ${product}. ${
      quantity > 1
        ? `Quedan ${quantity} disponibles.`
        : `Queda ${quantity} disponible`
    }`,
    buttons: {
      confirm: "Ok",
    },
    icon: "error",
  });
};
