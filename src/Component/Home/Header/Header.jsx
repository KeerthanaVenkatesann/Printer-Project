import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Header.css";
import Logo from "../../Logo/Logo";

export default function Header() {
  return (
    <div>
      <Navbar  expand="lg" className="navbar-bg ">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
          <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className="border border-1 border-white  navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="header-list text-white mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#service" className="header-list text-white    mx-3">
                Service
              </Nav.Link>
              <Nav.Link
                href="#customized-prints"
                className="header-list text-white  mx-3"
              >
                Customized Printers
              </Nav.Link>
              <Nav.Link href="#about-us" className="header-list text-white  mx-3">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="header-list text-white  mx-3">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
