import React from "react";
import emptyCart from "../../pages/images/empty-cart.png";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <h2>El carro está vacio</h2>
      <img
        src={emptyCart}
        alt="El carro está vacio"
        className="empty-cart__icon"
      />
    </div>
  );
}
