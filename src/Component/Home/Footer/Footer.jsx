import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-bg text-white pt-5 pb-5 footer-list mt-auto">
      <div className="container d-flex justify-content-around align-items-center">
        <div className="row mt-4">
          <div className="col-md-3 text-start">
            <h4 className="mb-3">LOCATION</h4>
            <p>
              Allwin Digital, Vadapalani
              <br />
              Old No:16, New No, 21 South Sivan Kovil street, 100 Feet Rd,
              Chennai-600026
            </p>
          </div>
          <div className="col-md-3 text-start">
            <h4 className="mb-3">SERVICES</h4>
        
          <span>Digital Printing</span><br/>
          <span>Flex Printing</span><br/>
          <span>Led Sign Board
         </span>
      
          </div>

          <div className="col-md-3 mb-4 text-start">
            <h4 className="mb-3">AROUND THE WEB</h4>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-whatsapp fs-4 border p-2 text-black bg-white rounded-circle"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram fs-4 border p-2 text-black bg-white rounded-circle"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fas fa-envelope fs-4 border p-2 text-black bg-white rounded-circle"></i>
            </a>
          </div>
          <div className="col-md-3 text-start">
            <h4 className="mb-3">CONTACT US</h4>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:allwin@yourwebsite.com" className="text-white">
                  allwin@yourwebsite.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918681000087"
                  className="text-white text-decoration-none"
                >
                  +91 8681000087 / 8681000086
                </a>
              </li>
              <li>
                <a
                  href="tel:+918681000097"
                  className="text-white text-decoration-none"
                >
                  +91 8681000097
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
