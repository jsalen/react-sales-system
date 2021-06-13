import React from "react";

export default function ProductList(props) {
  const { handleClick } = props;
  const itemName = document.getElementsByTagName("h2");
  const itemPrice = document.getElementsByTagName("p");
  const text = "hola";

  return (
    <React.Fragment>
      <article onDoubleClick={handleClick}>
        <h2>Articulo</h2>
        <p>Precio</p>
      </article>
    </React.Fragment>
  );
}
