import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="bg-body-dark py-5"
      collapseOnSelect
    >
      <Container>
        <Link to="/" className="navbar-brand">
          React-Bootstrap
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleCartClick}>Cart</Nav.Link>
            <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
