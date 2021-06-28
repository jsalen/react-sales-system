import React from "react";
import { Link } from "react-router-dom";
import "./NewProductForm.css";

export default function NewProductForm(props) {
  const { onSubmit, onChange, editValues } = props;

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="product">Nombre de Producto</label>
          <input
            className="form-control"
            id="product"
            type="text"
            name="product"
            required
            onChange={onChange}
            value={editValues.product}
          />
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="quantity">Cantidad</label>
            <input
              className="form-control"
              type="number"
              id="quantity"
              name="quantity"
              required
              onChange={onChange}
              value={editValues.quantity}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="price">Precio (USD)</label>
            <input
              className="form-control"
              type="number"
              id="price"
              name="price"
              required
              onChange={onChange}
              value={editValues.price}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around mt-2">
          <Link to="/inventory" className="btn btn-danger">
            Atrás
          </Link>
          <button className="btn btn-primary float-end">Save</button>
        </div>
      </form>
    </div>
  );
}
