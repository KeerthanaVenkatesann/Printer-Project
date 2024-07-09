import React from "react";
import "./GetStarted.css";
import Whatsapp from "../../Whatsapp/Whatsapp";

import CarouselTwo from "../HomePage/Carousel/CarouselTwo";

export default function GetStarted() {
  return (
    <>
      <div className="top-container w-100 p-5">
        <div className=" d-flex justify-content-center   align-items-center mt-3  content-font ">
          <div className="w-100  bg-given rounded p-3">
            <div className="bg-black p-3 w-75 mx-auto d-flex justify-content-around rounded ">
              <div className="text-start ">
                <h4 className=" text-col ">Get In</h4>
                <h1 className="text-light">Touch With Us</h1>
              </div>
              <div className="whatsapp-button  d-flex justify-content-center  text-light  align-items-center  ">
                {/* WhatsApp button implementation can go here */}
                {/* <Whatsapp /> */}
               <span className="fs-2 number-font"> +91 - 86810 00087</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CarouselTwo /> */}
    </>
  );
}
