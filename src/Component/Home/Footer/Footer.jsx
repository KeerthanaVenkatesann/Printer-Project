import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <h4 className="mb-3">LOCATION</h4>
            <p>
              Allwin Digital, Vadapalani
              <br />
              Old No:16, New No, 21 South Sivan Kovil street, 100 Feet Rd,
              Chennai-600026
            </p>
          </div>

          <div className="col-md-4 mb-4 text-center">
            <h4 className="mb-3">AROUND THE WEB</h4>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-whatsapp fs-2 border p-2 text-dark bg-white rounded-circle"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram fs-2 border p-2 text-dark bg-white rounded-circle"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fas fa-envelope fs-2 border p-2 text-dark bg-white rounded-circle"></i>
            </a>
          </div>
          <div className="col-md-4 text-center">
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
