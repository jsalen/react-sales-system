import swal from "sweetalert";
import { formatCurrency } from "../helpers";

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
    text: "Venta realizada con éxito!",
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
