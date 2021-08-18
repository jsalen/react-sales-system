import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { logout } from "../../redux/actions/auth";

export default function Navigation() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Navbar variant="dark" bg="dark" expand="sm" collapseOnSelect>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavDropdown title="Menú" menuvariant="dark" className="mr-3">
              <NavDropdown.Item href="/shopping-car">Vender</NavDropdown.Item>
              <NavDropdown.Item href="/reports">Reportes</NavDropdown.Item>
              <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
              {currentUser && (
                <NavDropdown.Item href="/login" onClick={logOut}>
                  Cerrar Sesión
                </NavDropdown.Item>
              )}
            </NavDropdown>
            {currentUser && (
              <Nav.Item>
                <Navbar.Text>Bienvenido, {currentUser.name}</Navbar.Text>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">La Tiendita de Bárbara</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
