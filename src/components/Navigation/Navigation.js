import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavDropdown title="Menú" menuvariant="dark">
              <NavDropdown.Item href="/shopping-car">Vender</NavDropdown.Item>
              <NavDropdown.Item href="/reports">Reportes</NavDropdown.Item>
              <NavDropdown.Item href="/close-cashier">
                Cierre de Caja
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">La Tiendita de Bárbara</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
