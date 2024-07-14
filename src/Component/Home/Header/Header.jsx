

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, CloseButton } from "react-bootstrap";
import "./Header.css";
import Aos from "aos";
import HomePage from "../HomePage/HomePage";
import Logo from "../../Logo/Logo";
import BallAnimation from "../../BallAnimation/BallAnimation"; 
import { FaClosedCaptioning } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbWaveSawTool } from "react-icons/tb";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      <Navbar
        expand="lg"
        className={`navbar-bg fixed-top  ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/" className="text-white ">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-1 border-white navbar-dark"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-lg-flex">
              <Nav.Link href="/about" className="header-list text-white mx-3">
                About us
              </Nav.Link>
              <Nav.Link href="/gallery" className="header-list text-white mx-3">
                Gallery
              </Nav.Link>
              <Nav.Link href="/hoarding" className="header-list text-white mx-3">
                Hoarding
              </Nav.Link>
              <Nav.Link href="/contact" className="header-list text-white mx-3">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
  
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ width: "250px" }}
        className="canvas"
      >
        <Offcanvas.Header >
          <Offcanvas.Title >
            <span className="logos  "><Logo  /></span>
          </Offcanvas.Title>
          <CgCloseR className="custom-close-button fs-3 mt-1 ms-5 " onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
         
            <Nav.Link href="/about" onClick={handleClose} className="allwin-font nav-text-canva shadow">
              About us<IoIosArrowRoundForward className="text-danger ms-1 "/>

            </Nav.Link>
            <Nav.Link href="/gallery" onClick={handleClose} className="nav-text-canva allwin-font shadow">
              Gallery<IoIosArrowRoundForward className="text-danger ms-1 "/>
            </Nav.Link>
            <Nav.Link href="/hoarding" onClick={handleClose} className="nav-text-canva allwin-font shadow">
              Hoarding<IoIosArrowRoundForward className="text-danger ms-1 "/>
            </Nav.Link>
            <Nav.Link href="/contact" onClick={handleClose} className="nav-text-canva allwin-font shadow">
              Contact us<IoIosArrowRoundForward className="text-danger ms-1 "/>
            </Nav.Link>
            <Nav.Link href="/about" onClick={handleClose} className=" text-center ">
      <TbWaveSawTool className="text-danger fs-3  " />

            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
      <HomePage />
    </div>
  );
}
