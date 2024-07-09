// // Header.jsx

// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "./Header.css";
// import Aos from "aos";
// import HomePage from "../HomePage/HomePage";
// import Logo from "../../Logo/Logo";
// import BallAnimation from "../../BallAnimation/BallAnimation"; // Import BallAnimation component

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
//       <Navbar
//         expand="lg"
//         className={`navbar-bg fixed-top  ${scrolled ? "scrolled" : ""}`}
//       >
//         <Container className="">
//           <Navbar.Brand href="/" className="text-white ">
//             <Logo />
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             className="border border-1 border-white navbar-dark"
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 href="about"
//                 className="header-list text-white mx-3"
//                 activeStyle={{ color: "rgb(182, 35, 35)" }}
//               >
//                 About us
//               </Nav.Link>
//               <Nav.Link
//                 href="/gallery"
//                 className="header-list text-white mx-3"
//                 activeStyle={{ color: "rgb(182, 35, 35)" }}
//               >
//                Gallery
//               </Nav.Link>

//               <Nav.Link
//                 href="/hoarding"
//                 className="header-list text-white mx-3"
//                 activeStyle={{ color: "rgb(182, 35, 35)" }}
//               >
//                 Hoarding
//               </Nav.Link>
//               <Nav.Link
//                 href="/contact"
//                 className="header-list text-white mx-3"
//                 activeStyle={{ color: "rgb(182, 35, 35)" }}
//               >
//                 Contact us
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
     
//       </Navbar>
   
//       <HomePage />
   
//     </div>
//   );
// }


// Header.jsx

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, CloseButton } from "react-bootstrap";
import "./Header.css";
import Aos from "aos";
import HomePage from "../HomePage/HomePage";
import Logo from "../../Logo/Logo";
import BallAnimation from "../../BallAnimation/BallAnimation"; // Import BallAnimation component

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
              <Nav.Link
                href="/about"
                className="header-list text-white mx-3"
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="/gallery"
                className="header-list text-white mx-3"
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="/hoarding"
                className="header-list text-white mx-3"
              >
                Hoarding
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="header-list text-white mx-3"
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* Render BallAnimation component here */}
        {/* <BallAnimation /> */}
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start"  style={{ width: "250px" }} className="bg-black" >
        
        <Offcanvas.Header closeButton>

          <Offcanvas.Title>  <Logo /></Offcanvas.Title>        <CloseButton variant="white" className="custom-close-button" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/about" onClick={handleClose} className="allwin-font nav-text-canva">
              About us
            </Nav.Link>
            <Nav.Link href="/gallery" onClick={handleClose} className=" nav-text-canva allwin-font">
              Gallery
            </Nav.Link>
            <Nav.Link href="/hoarding" onClick={handleClose} className=" nav-text-canva allwin-font">
              Hoarding
            </Nav.Link>
            <Nav.Link href="/contact" onClick={handleClose} className=" nav-text-canva allwin-font">
              Contact us
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
      <HomePage />
    </div>
  );
}
