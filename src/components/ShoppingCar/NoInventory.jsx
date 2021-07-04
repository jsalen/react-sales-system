import React from "react";
import { Link } from "react-router-dom";
import "./NoInventory.css";

const NoInventory = () => {
  return (
    <div className="no-inventory">
      <h3>No hay inventario</h3>
      <Link to="/addProduct" className="btn btn-primary">
        Añade productos
      </Link>
    </div>
  );
};

export default NoInventory;
