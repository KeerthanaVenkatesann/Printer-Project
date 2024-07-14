// import React from "react";
// import "./Contact.css";
// import { PiPhoneCallDuotone, PiWhatsappLogoDuotone } from "react-icons/pi";
// import { AiTwotoneMail } from "react-icons/ai";

// import CarouselTwo from "../Home/HomePage/Carousel/CarouselTwo";
// import Footer from "../Home/Footer/Footer";
// import { FaLocationCrosshairs } from "react-icons/fa6";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaWhatsapp } from "react-icons/fa";
// import Clients from "../ClientsLogo/Clients";
// import GetStarted from "../Home/GetStarted/GetStarted";

// export default function Contact() {
//   return (
//     <>
// <div className="text-center mt-4">
//     <h1 className="header-list  fs-1">Contact us For Queries</h1></div>
//          <GetStarted />
//       <div className="text-center ">
//         {/* <h1 className="header-list">Get In Touch With Us</h1> */}
//         {/* <div className="print fs-3 ">We're thrilled to begin a new project with you!</div> */}
//         <div className="map-container    ">
//        <div className="map col-lg-6 ">
//             {/* <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.858015654034!2d80.21097107484266!3d13.04470828727745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267af4ed6df25%3A0xbf06d102c10708f1!2sAllwin%20Digital!5e0!3m2!1sen!2sin!4v1720109529423!5m2!1sen!2sin"
//             style={{ border: 0 }}
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//             className="iframe-map"
//           ></iframe> */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.8291311565144!2d80.20981967507775!3d13.04654588727578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzQ3LjYiTiA4MMKwMTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1720437145993!5m2!1sen!2sin"

//               style={{ border: 0 }}
//               allowfullscreen=""
//               loading="lazy"
//                  className="iframe-map "
//               referrerpolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className="text-start  allwin-name p-4  mt-md-2 col-lg-4 ms-lg-3 text-content2">
//             <div className="p-3">
//             <h5 className='curse'>Get To Touch</h5>
//             <h1 className="content-font  mb-4   ">
//             Contact Us If You Have More Questions.
//             </h1>
//             <h2 className='cursive-font-two'>Allwin Digital</h2>
//             <div className="card-body">
//             <p className="listed print "><IoIosArrowRoundForward className="text-danger" /> 21 South sivan koil street,</p>
//             <p className="listed  print"><IoIosArrowRoundForward className="text-danger" />100 Feet Rd,</p>
//             <p className="listed  print"><IoIosArrowRoundForward className="text-danger" />Chennai,</p>
//             <p className="listed  print"><IoIosArrowRoundForward  className="text-danger"/>Tamil Nadu,</p>
//             <p className="listed print "><IoIosArrowRoundForward className="text-danger" />600026,</p></div>
//             <p className="listed  print "><IoIosArrowRoundForward  className="text-danger"/>8681000087.</p>
//             <div class="border-container">
//             </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="mt--lg-5 pt-lg-5">
//         <div className="mt-lg-5">
//        {/* <div><FaWhatsapp className="fs-2" /></div>
//        <div><FaWhatsapp className="fs-2" /></div> */}

//         </div>
//       </div>
//      <Clients />
//       <Footer />
//     </>
//   );
// }

import React, { useEffect } from "react";
import "./Contact.css";
import { PiPhoneCallDuotone, PiWhatsappLogoDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";

import CarouselTwo from "../Home/HomePage/Carousel/CarouselTwo";
import Footer from "../Home/Footer/Footer";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Clients from "../ClientsLogo/Clients";
import GetStarted from "../Home/GetStarted/GetStarted";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbWaveSawTool } from "react-icons/tb";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="text-center mt-4" data-aos="fade-up">
        <h1 className="header-list fs-1">Contact us For Queries</h1>
        <div><TbWaveSawTool className="text-danger fs-3 mb-2" /></div>
        <p className="print"><i>"Nothing beats a personal touch. Visit us directly and experience our commitment firsthand"</i></p>
        
      </div>
      <GetStarted />
      <div className="text-center">
        <div className="map-container">
          <div className="map col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.8291311565144!2d80.20981967507775!3d13.04654588727578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzQ3LjYiTiA4MMKwMTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1720437145993!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              className="iframe-map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="text-start allwin-name p-4 mt-md-2 col-lg-4 ms-lg-3 text-content2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="p-3">
              <h5 className="curse">Get To Touch</h5>
              <h1 className="content-font mb-4">
                Contact Us If You Have More Questions.
              </h1>
              <h2 className="cursive-font-two">Allwin Digital</h2>
              <div className="card-body">
                <p className="listed print">
                  <IoIosArrowRoundForward className="text-danger" /> 21 South
                  sivan koil street,
                </p>
                <p className="listed print">
                  <IoIosArrowRoundForward className="text-danger" />
                  100 Feet Rd,
                </p>
                <p className="listed print">
                  <IoIosArrowRoundForward className="text-danger" />
                  Chennai,
                </p>
                <p className="listed print">
                  <IoIosArrowRoundForward className="text-danger" />
                  Tamil Nadu,
                </p>
                <p className="listed print">
                  <IoIosArrowRoundForward className="text-danger" />
                  600026,
                </p>
              </div>
              <p className="listed print">
                <IoIosArrowRoundForward className="text-danger" />
                8681000087.
              </p>
              <div className="border-container"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt--lg-5 pt-lg-5">
        <div className="mt-lg-5"></div>
      </div>
      <Clients />
      <Footer />
    </>
  );
}
