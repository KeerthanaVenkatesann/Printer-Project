import React from "react";
import "./GetStarted.css";
import Whatsapp from "../../Whatsapp/Whatsapp";

import CarouselTwo from "../HomePage/Carousel/CarouselTwo";

export default function GetStarted() {
  return (
    <>
      <div className="top-container w-100 p-5">
        <div className=" d-flex justify-content-center   align-items-center mt-3  content-font ">
          <div className="w-75 d-flex justify-content-around bg-given rounded p-3">
            <div className="text-start ">
              <h5 className="colors-get">Get In</h5>
              <h1>Touch With Us</h1>
            </div>
            <div className="whatsapp-button  d-flex justify-content-center   align-items-center  ">
              {/* WhatsApp button implementation can go here */}
              <Whatsapp />
            </div>
          </div>
        </div>
      </div>
  <CarouselTwo />
    </>
  );
}
