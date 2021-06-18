import React from "react";
import { Link } from "react-router-dom";
import "./MenuBtn.css";

export default function MenuBtn(props) {
  const { icon, description, text, Path } = props;

  return (
    <Link
      to={Path}
      className="btn btn-secondary button d-flex flex-column align-items-center p-3"
    >
      <img src={icon} alt={description} className="icon" />
      <span className="mt-2">{text}</span>
    </Link>
  );
}
