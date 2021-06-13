import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import "./styles/Landing.css";
import adminIcon from "./images/admin.svg";
import cashierIcon from "./images/cashier.svg";
import MenuBtn from "../components/Buttoms/MenuBtn";

export default function Landing() {
  return (
    <Container
      fluid
      className="landing d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col>
          <MenuBtn
            icon={adminIcon}
            description="Admin Icon"
            text="Administración"
            Path="/admin"
          />
        </Col>

        <Col>
          <MenuBtn
            icon={cashierIcon}
            description="Vender Icon"
            text="Vender"
            Path="/shopping-car"
          />
        </Col>
      </Row>
    </Container>
  );
}
