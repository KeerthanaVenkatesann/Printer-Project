import React from "react";
import "./Contact.css";
import { PiPhoneCallDuotone, PiWhatsappLogoDuotone } from "react-icons/pi";
import { AiTwotoneMail } from "react-icons/ai";

import CarouselTwo from "../Home/HomePage/Carousel/CarouselTwo";
import Footer from "../Home/Footer/Footer";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="text-center mb-5 ">
        <h1 className="header-list">Get In Touch With Us</h1>
        <div className="d-flex justify-content-around align-items-center  mt-5 mx-auto ">
          <div className="map ">
            {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.858015654034!2d80.21097107484266!3d13.04470828727745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267af4ed6df25%3A0xbf06d102c10708f1!2sAllwin%20Digital!5e0!3m2!1sen!2sin!4v1720109529423!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="iframe-map"
          ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.8291311565144!2d80.20981967507775!3d13.04654588727578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzQ3LjYiTiA4MMKwMTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1720437145993!5m2!1sen!2sin"
              // width="600"
              // height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
                 className="iframe-map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-start shadow rounded allwin-name p-5  mt-md-5 border-anime ">
            <h3 className="content-font header-list mb-4   ">
              Allwin Digital - Vadapalani 
            </h3>
            <p className="listed "> 21 South sivan koil street</p>
            <p className="listed">100 Feet Rd</p>
            <p className="listed ">Chennai</p>
            <p className="listed">Tamil Nadu</p>
            <p className="listed ">600026</p>
            <p className="listed">8681000087</p>
           
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <div className="mt-5">
          {/* <CarouselTwo /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
