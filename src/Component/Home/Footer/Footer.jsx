import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { PiPaperPlaneRightDuotone } from "react-icons/pi";

const Footer = () => {
  const phoneNumber = "918681000087";
  const message = "How To Order";


  return (
    <>
    <footer className="footer-bg text-white pt-5 pb-5 footer-list mt-auto">
      <div className="container  align-items-center">
        
        <div className="d-flex mt-4  justify-content-around ">
          <div className=" text-start">
          <h3 className="header-list"><a href="/gallery" >Service</a> <FaLongArrowAltRight /></h3>
            <li><PiPaperPlaneRightDuotone className="mx-2" />
            LED Sign Boards
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Neon Signs
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Metal Sign 
              
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Flange Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Wooden Signage
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Unipole Hoarding
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Digital art
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Visiting card 
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Id card pvc
            </li>
          </div>
          <div className=" text-start">
            <li className="text-black mt-3">Service</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />ACP Glazing
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Vehicle Branding sticker 
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Wall Graphics sticker 
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Promotional Umbrella</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Promotional Table
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Promotional Tent
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Photo Frame </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Letter head 

            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Gift Vouchers</li>
          </div>
          <div className=" text-start">
          <li className="text-black mt-3">Service</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Promotional Arch
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Roll Up Banner Stand
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Clip On Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Acrylic 2 board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Flex Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Backlight Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Pencil art</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Bamblet
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Art paper</li>
          </div>
          <div className=" text-start">
          <li className="text-black mt-3">Service</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Promotional Arch
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Roll Up Banner Stand
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Clip On Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Acrylic 2 board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Flex Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Backlight Board
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Invitation+ cover</li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Bill Book 
            </li>
            <li><PiPaperPlaneRightDuotone className="mx-2" />Menu card
            </li>
          </div>


          <div className=" text-start">
          
            <div className="list-unstyled  ">
            <h3 className=" header-list ">Contact Us</h3>
         <div className="d-flex">
         <li>
                <a href="mailto:allwin@yourwebsite.com" className="text-white">
                {/* <i className="fas fa-envelope fs-4 border p-2 text-black bg-white "></i> */}
                <MdEmail className="fs-2" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+918681000087"
                  className="text-white text-decoration-none"
                >
             <FaPhoneAlt className="fs-4 mt-1" />
             {/* <i className="fab fa-whatsapp fs-4 border p-2 text-black bg-white rounded-circle"></i> */}
                </a>
              </li>
              {/* <li>
      <a
        href="https://wa.me/918681000087"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineWhatsapp  className="fs-2 " />
      </a>
    </li> */}
                 <li>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        className="text-white text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
      >
              <MdOutlineWhatsapp  className="fs-2 " />
      </a>
    </li>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
 <div className="last-div-copywrite ">
  <span></span>
 </div>

    </>
  );
};

export default Footer;
