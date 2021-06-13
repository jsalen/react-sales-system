import React from "react";
import MenuBtn from "../Buttoms/MenuBtn";
import { Container, Row, Col } from "react-bootstrap";
import inventoryIcon from "../../pages/images/inventory.svg";

export default function AdminContainer() {
  return (
    <Container
      fluid
      className="landing d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col>
          <MenuBtn
            icon={inventoryIcon}
            description="Inventory Icon"
            text="Administrar Inventario"
            Path="/inventory"
          />
        </Col>
      </Row>
    </Container>
  );
}
