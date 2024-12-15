// Header.js
import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Link aus react-router-dom verwenden
import { logout } from "../actions/userAction";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        className="bg-body-dark py-5"
        collapseOnSelect
      >
        <Container>
          {/* Ersetze LinkContainer durch Link und füge Bootstrap-Klassen hinzu */}
          <Link to="/" className="navbar-brand">
            React-Bootstrap
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleCartClick}>Cart</Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
