import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import Aos from "aos";
import HomePage from "../HomePage/HomePage";
import Logo from "../../Logo/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      <Navbar
        expand="lg"
        className={`navbar-bg fixed-top p-5 ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/" className="text-white">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-1 border-white  navbar-dark"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="header-list text-white mx-3"
                activeStyle={{ color: "rgb(182, 35, 35)" }}
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="/gallery"
                className="header-list text-white mx-3"
                activeStyle={{ color: "rgb(182, 35, 35)" }}
              >
                Our Products
              </Nav.Link>
              <Nav.Link
                href="#customized-prints"
                className="header-list text-white mx-3"
                activeStyle={{ color: "rgb(182, 35, 35)" }}
              >
                Hoarding
              </Nav.Link>
              <Nav.Link
                href="#about-us"
                className="header-list text-white mx-3"
                activeStyle={{ color: "rgb(182, 35, 35)" }}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomePage />
    </div>
  );
}
