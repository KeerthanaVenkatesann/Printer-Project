import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg text-white pt-5 pb-5 footer-list mt-auto">
      <div className="container d-flex justify-content-around align-items-center">
        <div className="d-flex mt-4 ">
          <div className=" text-start">
          
            <li>LED Sign Boards
            </li>
            <li>Neon Signs
            </li>
            <li>Metal Sign Boards
            </li>
            <li>Flange Board
            </li>
            <li>Wooden Signage
            </li>
            <li>Unipole Hoarding
            </li>
          </div>
          <div className=" text-start">
            <li>ACP Glazing
            </li>
            <li>Vehicle Branding sticker 
            </li>
            <li>Wall Graphics sticker 
            </li>
            <li>Promotional Umbrella</li>
            <li>Promotional Table
            </li>
            <li>Promotional Tent
            </li>
          </div>
          <div className=" text-start">
            <li>Promotional Arch
            </li>
            <li>Roll Up Banner Stand
            </li>
            <li>Clip On Board
            </li>
            <li>Sandwich Board
            </li>
            <li>Flex Board
            </li>
            <li>Backlight Board
            </li>
          </div>
          <div className=" text-start">
            <li>Promotional Arch
            </li>
            <li>Roll Up Banner Stand
            </li>
            <li>Clip On Board
            </li>
            <li>Sandwich Board
            </li>
            <li>Flex Board
            </li>
            <li>Backlight Board
            </li>
          </div>


          <div className=" mb-4 text-start">
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
          <div className=" text-start">
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
