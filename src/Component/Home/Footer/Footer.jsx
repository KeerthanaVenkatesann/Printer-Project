import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import { FaInstagramSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { PiDotDuotone } from "react-icons/pi";



const Footer = () => {
  const phoneNumber = "918681000087";
  const message =
    "Excited to get started? Let's discuss how you can place your order today!";

  return (
    <>
      <footer className="footer-bg text-white pt-5 pb-5 footer-list-foot mt-auto">
        <div className="container  align-items-center">
          <h3 className="header-list">
            <a href="/gallery">Service</a>
          </h3>
          <div className="footer-flex mt-2 justify-content-between ">
            <div className=" text-start foot">
              <li className="footer-list">
                <PiDotDuotone className="mx-2 " />
                LED Sign Boards
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Neon Signs
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Metal Sign
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Flange Board
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Wooden Signage
              </li>
              <li className="footer-list">
                {" "}
                <PiDotDuotone className="mx-2" />
                Backlight Board
              </li>
            </div>

            <div className=" text-start foot">
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Unipole Hoarding
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Digital art
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Visiting card
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Id card pvc
              </li>

              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Art paper
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Invitation+ cover
              </li>
            </div>

            <div className=" text-start">
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                ACP Glazing
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Vehicle Branding sticker
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Wall Graphics sticker
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Promotional Umbrella
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Promotional Table
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Bill Book
              </li>
            </div>
            <div className=" text-start">
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Promotional Tent
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Photo Frame{" "}
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Letter head
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Gift Vouchers
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Pencil art
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Menu card
              </li>
            </div>

            <div className=" text-start">
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Promotional Arch
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Roll Up Banner Stand
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Clip On Board
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Acrylic 2 board
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Flex Board
              </li>
              <li className="footer-list">
                <PiDotDuotone className="mx-2" />
                Bamblet
              </li>
            </div>
        
       
            <div className="list-unstyled footer-last-divs text-start mt-5    ">
              <div className="">
                {" "}
                <h3 className=" header-list contact-karo fs-4">
                  Contact Us
                </h3>
                <span className="d-flex">
                  <li>
                    <a
                      href="mailto:allwin@yourwebsite.com"
                      className="text-white"
                    >
                      <MdEmail className="fs-4 icon-hov" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+918681000087"
                      className="text-white text-decoration-none"
                    >
                      <FaPhoneSquareAlt className="fs-4 icon-hov " />
                    </a>
                  </li>

                  <li>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`}
                      className="text-white text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineWhatsapp className="fs-4  icon-hov " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/allwindigital2024?igshid=OW9xNzR0MjA0cTdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      <FaInstagramSquare className="fs-4  icon-hov" />
                    </a>
                  </li>
                </span>
              </div>
              <div className="pt-lg-3">
                <h3 className=" header-list fs-4 ">Timing</h3>
                <li>9.00am to 9.00pm</li>
              </div>
              <div className=" pt-lg-3">
                <h3 className=" header-list fs-4">Location</h3>
                <li className="footer-list"> <PiDotDuotone className="mx-2" />21 South Sivan Kovil street,</li>
                <li className="footer-list"> <PiDotDuotone className="mx-2" />Near sri sticker Vadapalni,</li>
                <li className="footer-list"> <PiDotDuotone className="mx-2" />100 Feet Rd,</li>
                <li className="footer-list"> <PiDotDuotone className="mx-2" />Chennai-600026.</li>
              </div>  </div>
            </div>
          </div>
      
      </footer>

      <div className="last-div-copywrite p-2 print shadow-sm">
        <div className="text-light text-center ">
          © 2024 Allwin Digital – All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
